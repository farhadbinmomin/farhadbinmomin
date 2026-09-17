import Link from 'next/link';

import ContactMenu from '@/components/ContactMenu';

const colors = {
  bordercolor1: '#334155',
  fontcolor2: '#94A3B8',
};

export default function Footer() {
  return (
    <footer
      className="border-t pt-6"
      style={{ borderColor: colors.bordercolor1 }}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-70"
          style={{ color: colors.fontcolor2 }}
        >
          ← Back home
        </Link>

        <div className="w-fit">
          <ContactMenu />
        </div>
      </div>
    </footer>
  );
}
