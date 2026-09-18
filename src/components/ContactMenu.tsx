"use client";

import { useState } from "react";

import iconLinkedin from "@/assets/icons/linkedin.png";
import iconGmail from "@/assets/icons/gmail.png";
import iconWhatsapp from "@/assets/icons/whatsapp.png";
import iconCall from "@/assets/icons/call.png";
import iconContact from "@/assets/icons/contact.png";
import iconCross from "@/assets/icons/cross.png";

import { colors } from "@/assets/lib/colors";

const CONTACT = {
  linkedin: "https://www.linkedin.com/in/farhadbinmomin/",
  email: "farhad.codes@gmail.com",
  whatsapp: "+8801741589749",
  phone: "+8801741589749",
};

export default function ContactMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCall = async () => {
    if (/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)) {
      window.location.href = `tel:${CONTACT.phone} `;
      return;
    }

    try {
      await navigator.clipboard.writeText(CONTACT.phone);
    } catch {
      const textarea = document.createElement("textarea");

      textarea.value = CONTACT.phone;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleEmail = () => {
    const email = CONTACT.email;

    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(
      navigator.userAgent,
    );

    if (isMobile) {
      window.location.href = `googlegmail://co?to=${encodeURIComponent(email)}`;

      setTimeout(() => {
        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
      }, 1000);
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
        "_blank",
      );
    }
  };

  const contacts = [
    {
      label: "LinkedIn",
      icon: iconLinkedin,
      action: () => window.open(CONTACT.linkedin, "_blank"),
    },
    {
      label: "Email",
      icon: iconGmail,
      action: handleEmail,
    },
    {
      label: "WhatsApp",
      icon: iconWhatsapp,
      href: `https://wa.me/${CONTACT.whatsapp}`,
    },
    {
      label: copied ? "Copied" : "Call",
      icon: iconCall,
      action: handleCall,
    },
  ];

  return (
    <div
      className="relative flex items-center justify-center rounded-lg "
      style={{
        backgroundColor: colors.bgcolor2,
        color: colors.fontcolor1,
        borderColor: colors.bordercolor2,
        borderWidth: open ? "0px" : "1px",
      }}
    >
      {/* Contact button */}
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex items-center justify-center gap-2 p-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-70"
        style={{ color: colors.fontcolor2 }}
        aria-expanded={open}
        aria-label="Open contact options"
      >
        <div className="text-md">
          {open ? (
            <img
              src={iconCross.src}
              alt="Close"
              className="h-6 w-6 p-1 brightness-0 invert"
            />
          ) : (
            <div className="flex gap-2 items-center">
              <p>Contact</p>

              <img
                src={iconContact.src}
                alt="Contacts"
                className="h-6 w-6 brightness-0 invert"
              />
            </div>
          )}
        </div>
      </button>

      {/* Expanded contacts */}
      {open && (
        <div
          className=" absolute right-full top-1/2 mr-2 -translate-y-1/2 flex items-center gap-2 rounded-lg"
          style={{
            color: colors.fontcolor1,
            backgroundColor: colors.bgcolor2,
            // borderColor: colors.bordercolor2,
            // borderWidth: "1px",
          }}
        >
          {contacts.map((item) => {
            const content = (
              <>
                <img src={item.icon.src} alt={item.label} className="h-6 w-6" />

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
                  {item.label}
                </span>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group relative grid h-10 w-10 place-items-center transition-opacity hover:opacity-70"
                >
                  {content}
                </a>
              );
            }

            return (
              <button
                key={item.label}
                type="button"
                onClick={item.action}
                aria-label={item.label}
                className="group relative grid h-10 w-10 place-items-center transition-opacity hover:opacity-70"
              >
                {content}
              </button>
            );
          })}
        </div>
      )}

      {/* Desktop copied notification */}
      {copied && (
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
      )}
    </div>
  );
}
