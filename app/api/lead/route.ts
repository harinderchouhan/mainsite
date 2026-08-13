import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type LeadPayload = {
  name: string;
  email: string;
  source: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validate(body: unknown): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request body." };
  }

  const { name, email, source } = body as Record<string, unknown>;

  if (!isNonEmptyString(name) || name.trim().length < 2) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!isNonEmptyString(email) || !EMAIL_RE.test(email.trim())) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      source: isNonEmptyString(source) ? source.trim() : "unknown",
    },
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json(
      { success: false, error: result.error },
      { status: 400 }
    );
  }

  const { name, email, source } = result.data;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
    process.env;
  const emailIsConfigured = Boolean(
    SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_TO_EMAIL
  );

  if (emailIsConfigured) {
    // SMTP env vars are present, so we attempt real delivery via nodemailer.
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      await transporter.sendMail({
        from: SMTP_USER,
        to: CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `New lead — ${source} (${name})`,
        text: `Name: ${name}\nEmail: ${email}\nSource: ${source}`,
      });
    } catch (error) {
      console.error("Lead capture: failed to send email via SMTP.", error);
      return NextResponse.json(
        {
          success: false,
          error: "Something went wrong. Please try again shortly.",
        },
        { status: 502 }
      );
    }
  } else {
    // No SMTP env vars configured — log only, same pattern as /api/contact.
    // Configure SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS/CONTACT_TO_EMAIL
    // (see .env.example) to enable real delivery.
    console.info("Lead capture (email delivery not configured):", {
      name,
      email,
      source,
    });
  }

  return NextResponse.json({ success: true });
}
