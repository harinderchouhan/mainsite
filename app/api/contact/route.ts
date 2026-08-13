import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const VALID_SERVICES = [
  "Web Design",
  "SEO",
  "Web Development",
  "Ecommerce",
  "WordPress",
  "Other",
];

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

// Basic RFC-5322-ish check — good enough for a marketing site contact form.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request body." };
  }

  const { name, phone, email, service, message } = body as Record<string, unknown>;

  if (!isNonEmptyString(name) || name.trim().length < 2) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!isNonEmptyString(phone) || phone.trim().length < 6) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (!isNonEmptyString(email) || !EMAIL_RE.test(email.trim())) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!isNonEmptyString(service) || !VALID_SERVICES.includes(service)) {
    return { ok: false, error: "Please select a service." };
  }
  if (!isNonEmptyString(message) || message.trim().length < 10) {
    return { ok: false, error: "Please add a few more details to your message." };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service: service.trim(),
      message: message.trim(),
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

  const { name, phone, email, service, message } = result.data;

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
        subject: `New quote request — ${service} (${name})`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
      });
    } catch (error) {
      console.error("Contact form: failed to send email via SMTP.", error);
      return NextResponse.json(
        {
          success: false,
          error: "We couldn't send your message right now. Please try again shortly.",
        },
        { status: 502 }
      );
    }
  } else {
    // No SMTP env vars configured (e.g. local development) — we do NOT
    // pretend to send an email. The submission is only logged server-side,
    // and the API still returns success so the UI flow can be built/tested
    // without real email delivery. Configure SMTP_HOST/SMTP_PORT/SMTP_USER/
    // SMTP_PASS/CONTACT_TO_EMAIL (see .env.example) to enable real delivery.
    console.info("Contact form submission (email delivery not configured):", {
      name,
      phone,
      email,
      service,
      message,
    });
  }

  return NextResponse.json({ success: true });
}
