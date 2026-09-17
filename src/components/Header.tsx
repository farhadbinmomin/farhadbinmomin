'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import iconHome from '@/assets/icons/home.png';

const colors = {
  fontcolor1: '#F8FAFC',
  fontcolor2: '#94A3B8',
};

export default function Header({ isHome = false }: { isHome?: boolean }) {
  const pathname = usePathname();

  const isAbout = pathname === '/about';
  const isWorks = pathname === '/works';

  return (
    <header
      className="
        fixed top-0 left-0 z-50
        flex w-full items-center justify-between
        px-8 py-8
        md:px-16 md:py-8
      "
    >
      {/* Home */}
      {!isHome ? (
        <Link
          href="/"
          aria-label="Home"
          className="transition-opacity hover:opacity-70"
        >
          <img
            src={iconHome.src}
            alt="Home"
            className="h-6 w-6 brightness-0 invert"
          />
        </Link>
      ) : (
        <div />
      )}

      {/* Navigation */}
      <nav className="flex gap-4 text-sm uppercase tracking-wider">
        <Link
          href="/about"
          className={`transition - opacity hover: opacity - 70 ${isAbout ? 'font-bold' : 'font-medium'
            } `}
          style={{
            color: isAbout
              ? colors.fontcolor1
              : colors.fontcolor2,
          }}
        >
          FBM
        </Link>

        <Link
          href="/works"
          className={`transition - opacity hover: opacity - 70 ${isWorks ? 'font-bold' : 'font-medium'
            } `}
          style={{
            color: isWorks
              ? colors.fontcolor1
              : colors.fontcolor2,
          }}
        >
          Works
        </Link>
      </nav>
    </header>
  );
}