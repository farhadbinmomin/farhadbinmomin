import ContactMenu from '@/components/ContactMenu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
      <Header />

      {/* Content */}
      <section className="mx-auto max-w-5xl py-20 md:py-32">


        <h1
          className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
          style={{ color: colors.fontcolor1 }}
        >
          I Design System
          <br />
          <span style={{ color: colors.fontcolor2 }}>
            with purpose
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
              I am a passionate designer with a focus on creating meaningful user experiences.
            </p>

            <p>
              I enjoy working on projects where architecture, data modeling, and real-world business requirements come together.
            </p>

            <p>
              I am always eager to learn new technologies and improve my skills. I believe in the power of collaboration and strive to create solutions that make a positive impact.
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
              Jagannath University, Dhaka
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

              'Next.js',
              'React-Native',
              'NestJS',
              'PostgreSQL',
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
      <Footer />
    </main>
  );
}
