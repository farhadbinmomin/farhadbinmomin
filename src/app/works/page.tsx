import { colors } from "@/assets/lib/colors";

const projects = [
  {
    number: '01',
    title: 'MultiShopEngine',
    description:
      'A multi-tenant e-commerce engine designed to power multiple customer shops from a shared backend architecture.',
    technologies: [
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
    ],
    status: 'Building',
  },
  {
    number: '02',
    title: 'Multi-Mess Management Platform',
    description:
      'A tenant-oriented management platform for managing members, meals, expenses, deposits and monthly accounting.',
    technologies: [
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
    ],
    status: 'Designing',
  },
  {
    number: '03',
    title: 'Talk with AI',
    description:
      'A mobile AI conversation and learning application focused on practice, history and progress tracking.',
    technologies: [
      'Expo',
      'React Native',
      'TypeScript',
      'AI',
    ],
    status: 'Exploring',
  },
];

export default function WorksPage() {
  return (
    <main
      className="min-h-screen w-full px-8 py-8 md:px-16 md:py-12"
      style={{
        backgroundColor: colors.bgcolor1,
        color: colors.fontcolor1,
      }}
    >
    

      {/* Projects */}
      <section className="mx-auto max-w-5xl py-20 md:py-32">
        <p
          className="mb-6 text-xs font-semibold uppercase tracking-[0.25em]"
          style={{ color: colors.fontcolor2 }}
        >
          Selected works
        </p>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
          Things I&apos;m
          <br />
          <span style={{ color: colors.fontcolor2 }}>
            building.
          </span>
        </h1>

        <div className="mt-20">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid gap-6 border-t py-10 md:grid-cols-[80px_1fr_auto]"
              style={{ borderColor: colors.bordercolor1 }}
            >
              <span
                className="font-mono text-sm"
                style={{ color: colors.fontcolor2 }}
              >
                {project.number}
              </span>

              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  {project.title}
                </h2>

                <p
                  className="mt-4 max-w-2xl text-sm leading-7 md:text-base"
                  style={{ color: colors.fontcolor2 }}
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs uppercase tracking-wider"
                      style={{ color: colors.fontcolor2 }}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <span
                className="text-xs uppercase tracking-widest md:pt-1"
                style={{ color: colors.fontcolor2 }}
              >
                {project.status}
              </span>
            </article>
          ))}


        </div>
      </section>

     

    </main>
  );
}