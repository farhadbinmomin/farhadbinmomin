"use client";

import iconDownload from "@/assets/icons/download.png";

import { colors } from "@/assets/lib/colors";
import { usePathname } from "next/navigation";

export default function CV() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    !isHomePage && (
      <div
        className="relative max-w-min px-2 rounded-lg flex justify-center "
        style={{
          backgroundColor: colors.bgcolor2,
          color: colors.fontcolor1,
          borderColor: colors.bordercolor2,
          borderWidth: "1px",
        }}
      >
        {/* Contact button */}
        <a
          href="/Farhad_BinMomin_SystemDesigner.pdf"
          download
          className="flex items-center justify-center gap-1 p-2 text-sm font-semibold uppercase hover:opacity-70"
          style={{ color: colors.fontcolor2 }}
        >
          <p>CV</p>

          <img
            src={iconDownload.src}
            alt="CV Download"
            className="h-5 w-6 brightness-0 invert "
          />
        </a>
      </div>
    )
  );
}
