import ContactMenu from '@/src/components/ContactMenu';
import Link from 'next/link';

const colors = {
  bgcolor1: '#0F172A',
  bgcolor2: '#1E293B',
  fontcolor1: '#F8FAFC',
  fontcolor2: '#94A3B8',
  bordercolor1: '#334155',
  bordercolor2: '#475569',
};

export default function AboutPage() {
  return (
    <main
      className="min-h-screen w-full px-8 py-8 md:px-16 md:py-12"
      style={{
        backgroundColor: colors.bgcolor1,
        color: colors.fontcolor1,
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-wider transition-opacity hover:opacity-70"
          style={{ color: colors.fontcolor2 }}
        >
          FBM
        </Link>

        <nav className="flex gap-4 text-sm font-medium uppercase tracking-wider">
          <Link
            href="/about"
            className="transition-opacity hover:opacity-70"
            style={{ color: colors.fontcolor1 }}
          >
            About
          </Link>

          <Link
            href="/works"
            className="transition-opacity hover:opacity-70"
            style={{ color: colors.fontcolor2 }}
          >
            Works
          </Link>


        </nav>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-5xl py-20 md:py-32">
        <p
          className="mb-6 text-xs font-semibold uppercase tracking-[0.25em]"
          style={{ color: colors.fontcolor2 }}
        >
          About me
        </p>

        <h1
          className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
          style={{ color: colors.fontcolor1 }}
        >
          I build software
          <br />
          <span style={{ color: colors.fontcolor2 }}>
            with purpose.
          </span>
        </h1>

        <div
          className="mt-16 grid gap-12 border-t pt-10 md:grid-cols-[1fr_1.5fr]"
          style={{ borderColor: colors.bordercolor1 }}
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: colors.fontcolor2 }}
            >
              Who I am
            </p>
          </div>

          <div
            className="space-y-6 text-base leading-8 md:text-lg"
            style={{ color: colors.fontcolor2 }}
          >
            <p>
              I&apos;m Farhad Bin Momin, a Computer Science Engineering
              student interested in building practical software and
              understanding how systems work from the ground up.
            </p>

            <p>
              My current focus is full-stack web development, especially
              TypeScript, React, Next.js, NestJS, Prisma and PostgreSQL.
              I enjoy working on projects where architecture, data
              modeling and real-world business requirements come together.
            </p>

            <p>
              Rather than only building small demonstrations, I&apos;m
              interested in developing systems that can grow — from the
              database model and backend architecture to the final user
              experience.
            </p>
          </div>
        </div>

        {/* Education */}
        <div
          className="mt-20 grid gap-12 border-t pt-10 md:grid-cols-[1fr_1.5fr]"
          style={{ borderColor: colors.bordercolor1 }}
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: colors.fontcolor2 }}
            >
              Education
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Computer Science Engineering
            </h2>

            <p
              className="mt-2"
              style={{ color: colors.fontcolor2 }}
            >
              Undergraduate Student
            </p>

            <p
              className="mt-1 text-sm"
              style={{ color: colors.fontcolor2 }}
            >
              Bangladesh
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div
          className="mt-20 grid gap-12 border-t pt-10 md:grid-cols-[1fr_1.5fr]"
          style={{ borderColor: colors.bordercolor1 }}
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: colors.fontcolor2 }}
            >
              Technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              'TypeScript',
              'JavaScript',
              'React',
              'Next.js',
              'Expo',
              'NestJS',
              'Prisma',
              'PostgreSQL',
              'Redux',
              'Zustand',
              'Git',
              'Docker',
            ].map((technology) => (
              <span
                key={technology}
                className="text-sm md:text-base"
                style={{ color: colors.fontcolor2 }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
          <div
            className="w-fit "
           
          >
            <ContactMenu />
          </div>
        </div>
      </footer>
    </main>
  );
}
