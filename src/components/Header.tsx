"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import iconHome from "@/assets/icons/home.png";
import iconDownload from "@/assets/icons/download.png";
import { colors } from "@/assets/lib/colors";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isAbout = pathname === "/about";
  const isWorks = pathname === "/works";

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between backdrop-blur-md py-4">
      {/* Home */}
      {!isHomePage ? (
        <Link
          href="/"
          aria-label="Home"
          className="transition-opacity hover:opacity-70"
        >
          <Image
            src={iconHome}
            alt="Home"
            width={24}
            height={24}
            className="brightness-0 invert"
          />
        </Link>
      ) : (
        <div />
      )}

      {/* Navigation */}
      <nav className="flex gap-4 text-sm uppercase tracking-wider items-center">

        <Link
          href="/about"
          className={`transition-opacity hover:opacity-70 ${
            isAbout ? "font-bold" : "font-medium"
          }`}
          style={{
            color: isAbout ? colors.fontcolor1 : colors.fontcolor2,
          }}
        >
          FBM
        </Link>

        <Link
          href="/works"
          className={`transition-opacity hover:opacity-70 ${
            isWorks ? "font-bold" : "font-medium"
          }`}
          style={{
            color: isWorks ? colors.fontcolor1 : colors.fontcolor2,
          }}
        >
          Works
        </Link>
      </nav>
    </header>
  );
}
