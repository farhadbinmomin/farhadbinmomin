'use client';

import { useState } from 'react';
const colors = {
  fontcolor1: '#F8FAFC',
  fontcolor2: '#94A3B8',
  bordercolor1: '#334155',
};

function Icon({ type }: { type: 'linkedin' | 'mail' | 'phone' | 'message' | 'close' }) {
  const content = {
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4" /><rect x="2" y="8" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.07 4.18 2 2 0 0 1 5.05 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />,
    message: <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" />,
    close: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  };
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{content[type]}</svg>;
}

const CONTACT = {
  linkedin: 'https://www.linkedin.com/in/farhadbinmomin/',
  email: 'farhad.codes@gmail.com',
  whatsapp: '+8801741589749',
  phone: '+8801741589749',
};

export default function ContactMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCall = async () => {
    // Mobile / tablet: open phone dialer
    if (
      /Android|iPhone|iPad|iPod|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      window.location.href = `tel:${CONTACT.phone} `;
      return;
    }

    // Desktop: copy number
    try {
      await navigator.clipboard.writeText(CONTACT.phone);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Fallback for browsers where clipboard API is unavailable
      const textarea = document.createElement('textarea');

      textarea.value = CONTACT.phone;
      document.body.appendChild(textarea);
      textarea.select();

      document.execCommand('copy');
      textarea.remove();

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };
  const handleEmail = () => {
    const email = 'farhad.codes@gmail.com';

    const isMobile =
      /Android|iPhone|iPad|iPod|Windows Phone/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.href = `googlegmail://co?to=${encodeURIComponent(email)}`;

      setTimeout(() => {
        window.location.href =
          `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
      }, 1000);
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
        '_blank'
      );
    }
  };

  return (
    <div className="relative">
      {/* Contact button */}
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex items-center content-bottom gap-2 p-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-70"
        style={{ color: colors.fontcolor2 }}
        aria-expanded={open}
        aria-label="Open contact options"
      >
        <div className='text-md'>

        {open ? 'X': 'Contacts'}
        </div>
      </button>

      {/* Expanded contacts */}
      {open && (
        <div
          className="
            absolute bottom-full right-6 top-3
            flex items-center gap-2
          "
          style={{ color: colors.fontcolor1 }}
        >
          {/* LinkedIn */}
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group relative grid h-10 w-10 place-items-center transition-opacity hover:opacity-70"
            style={{ color: colors.fontcolor1 }}
          >
            <Icon type="linkedin" />

            <span
              className="
                pointer-events-none absolute
                bottom-full left-1/2 mb-2
                -translate-x-1/2
                whitespace-nowrap
                text-[10px] uppercase tracking-wider
                opacity-0 transition-opacity
                group-hover:opacity-100
              "
              style={{ color: colors.fontcolor2 }}
            >
              LinkedIn
            </span>
          </a>

          {/* Gmail */}
          <button
            type="button"
            onClick={handleEmail}
            aria-label="Email"
            className="group relative grid h-10 w-10 place-items-center transition-opacity hover:opacity-70"
            style={{ color: colors.fontcolor1 }}
          >
            {/* Your mail SVG icon here */}
            <Icon type="mail" />

            <span
              className="pointer-events-none absolute bottom-full left-1/2 mb-2
               -translate-x-1/2 whitespace-nowrap text-[10px]
               uppercase tracking-wider opacity-0 transition-opacity
               group-hover:opacity-100"
              style={{ color: colors.fontcolor2 }}
            >
              Email
            </span>
          </button>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group relative grid h-10 w-10 place-items-center transition-opacity hover:opacity-70"
            style={{ color: colors.fontcolor1 }}
          >
            <Icon type="message" />

            <span
              className="
                pointer-events-none absolute
                bottom-full left-1/2 mb-2
                -translate-x-1/2
                whitespace-nowrap
                text-[10px] uppercase tracking-wider
                opacity-0 transition-opacity
                group-hover:opacity-100
              "
              style={{ color: colors.fontcolor2 }}
            >
              WhatsApp
            </span>
          </a>

          {/* Call */}
          <button
            onClick={handleCall}
            aria-label="Call"
            className="group relative grid h-10 w-10 place-items-center transition-opacity hover:opacity-70"
            style={{ color: colors.fontcolor1 }}
          >
            <Icon type="phone" />

            <span
              className="
                pointer-events-none absolute
                bottom-full left-1/2 mb-2
                -translate-x-1/2
                whitespace-nowrap
                text-[10px] uppercase tracking-wider
                opacity-0 transition-opacity
              "
              style={{ color: colors.fontcolor2 }}
            >
              {copied ? 'Copied' : 'Call'}
            </span>
          </button>
        </div>
      )}

      {/* Desktop copied notification */}
      {
        copied && (
          <div
            className="
            absolute bottom-full right-0 mb-14
            whitespace-nowrap
            text-[10px] uppercase tracking-widest
          "
            style={{ color: colors.fontcolor2 }}
          >
            {CONTACT.phone} copied
          </div>
        )
      }
    </div>
  );
}