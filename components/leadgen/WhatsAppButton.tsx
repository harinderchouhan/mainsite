"use client";

const WHATSAPP_NUMBER = "917082069620";
const DEFAULT_MESSAGE = "Hi HanuiT Solutions, I'd like a free quote for my website.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 lg:bottom-5"
    >
      <svg viewBox="0 0 32 32" className="size-7" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.68 4.523 1.86 6.37L4 29l7.82-1.81A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818c-1.93 0-3.75-.53-5.31-1.45l-.38-.22-4.64 1.07 1.1-4.53-.25-.4A9.77 9.77 0 0 1 5.18 15c0-5.968 4.856-10.818 10.824-10.818S26.82 9.032 26.82 15 21.972 24.818 16.004 24.818Zm5.98-8.15c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.518-.164-.737.164-.218.328-.846 1.066-1.037 1.285-.19.219-.382.246-.71.082-.328-.164-1.384-.51-2.637-1.626-.975-.868-1.633-1.941-1.824-2.269-.19-.328-.02-.505.144-.668.148-.148.328-.383.492-.574.164-.191.218-.328.328-.547.109-.219.055-.41-.028-.574-.082-.164-.737-1.777-1.01-2.434-.266-.64-.536-.553-.737-.563-.19-.009-.41-.011-.628-.011-.219 0-.574.082-.874.41-.3.328-1.147 1.121-1.147 2.734s1.174 3.172 1.338 3.39c.164.219 2.31 3.527 5.598 4.945.782.338 1.393.54 1.868.69.785.25 1.5.215 2.065.13.63-.094 1.94-.793 2.213-1.559.273-.766.273-1.422.191-1.559-.082-.136-.3-.218-.628-.382Z" />
      </svg>
    </a>
  );
}
