import Link from 'next/link';
import ContactMenu from '../components/ContactMenu';

// Centralized color configuration using CSS variables / Hex codes
const colors = {
  bgcolor1: '#0F172A',     // Primary background color
  bgcolor2: '#1E293B',     // Secondary background/accent surface
  fontcolor1: '#F8FAFC',   // Main headings and primary text
  fontcolor2: '#94A3B8',   // Secondary text/subtitles
  bordercolor1: '#334155', // Primary borders
  bordercolor2: '#475569', // Secondary/hover borders
};

export default function HomeScreen() {
  return (
    <main
      className="relative flex min-h-screen w-full flex-col justify-between p-8 md:p-16 select-none transition-colors duration-300"
      style={{
        backgroundColor: colors.bgcolor1,
        color: colors.fontcolor1,
      }}
    >
      {/* Top right: About (FBM) & Works */}
      <nav className="z-10 flex justify-end gap-2 text-sm font-medium uppercase tracking-wider">
        <Link
          href="/about"
          className="w-fit transition-colors duration-200 hover:opacity-80"
          style={{ color: colors.fontcolor2 }}
        >
          About
        </Link>
        <Link
          href="/works"
          className="w-fit transition-colors duration-200 hover:opacity-80"
          style={{ color: colors.fontcolor2 }}
        >
          Works
        </Link>
      </nav>

      {/* Center Screen: Main Name Display */}
      <div className="my-auto flex flex-col justify-center py-12">
        <h1
          className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight leading-none"
          style={{ color: colors.fontcolor1 }}
        >
          Farhad
        </h1>
        <h1
          className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight leading-none mt-2"
          style={{ color: colors.fontcolor2 }}
        >
          Bin Momin
        </h1>
      </div>

      {/* Bottom right Contacts */}
      <footer className="z-10 flex justify-end gap-2">
        <div
          className="w-fit"

        >
          <ContactMenu />
        </div>
      </footer>
    </main>
  );
}