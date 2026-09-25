"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import iconHome from "@/assets/icons/home.png";
import { colors } from "@/assets/lib/colors";

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isAbout = pathname === "/about";
  const isWorks = pathname === "/works";

  const navList = [
    { name: "FBM", href: "/about" },
    { name: "Works", href: "/works" },
  ];

  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center justify-between pt-4"
      style={{
        backgroundColor: colors.bgcolor1,
      }}
    >
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
      <nav className="flex gap-2 text-sm uppercase tracking-wider items-center">
        {navList.map((item) => {
          const isActive = pathname === item.href;
          return (
            <div
              className="relative max-w-min px-2 py-1 rounded-lg flex justify-center "
              style={{
                backgroundColor: isActive ? colors.bgcolor2 : colors.bgcolor1,
                borderColor: isActive
                  ? colors.bordercolor2
                  : colors.bordercolor1,
                borderWidth: isActive ? "2px" : "1px",
              }}
            >
              <Link
                href={item.href}
                className={`transition-opacity  ${
                  isActive ? "font-bold" : "font-bold"
                }`}
                style={{
                  color: isActive ? colors.fontcolor1 : colors.fontcolor2,
                }}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </nav>
    </header>
  );
}
