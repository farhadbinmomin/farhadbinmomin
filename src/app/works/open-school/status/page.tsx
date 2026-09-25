import {
  CheckCircle2,
  Circle,
  Code2,
  Database,
  Layers3,
  Server,
} from "lucide-react";

const stack = [
  {
    category: "Frontend",
    icon: <Code2 className="h-4 w-4" />,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    purpose: "Learner, educator, and administrative interfaces.",
  },
  {
    category: "Backend",
    icon: <Server className="h-4 w-4" />,
    technologies: ["Node.js", "NestJS", "REST API"],
    purpose: "Application services, domain operations, and API layer.",
  },
  {
    category: "Database",
    icon: <Database className="h-4 w-4" />,
    technologies: ["PostgreSQL", "Prisma ORM"],
    purpose:
      "Persistent storage for learners, curriculum, evidence, evaluation, and progress.",
  },
  {
    category: "Architecture",
    icon: <Layers3 className="h-4 w-4" />,
    technologies: [
      "Layered Architecture",
      "Domain-Driven Modeling",
      "Repository Pattern",
    ],
    purpose:
      "Separation of domain rules from infrastructure and delivery concerns.",
  },
];

const completed = [
  "Problem and learning philosophy defined",
  "Learning model established",
  "Core domain model designed",
  "System architecture defined",
  "Curriculum and evaluation model designed",
  "Database / ERD designed",
  "Key domain workflows documented",
  "Core engineering decisions documented",
];

const nextSteps = [
  "Finalize database schema",
  "Define API contracts",
  "Implement authentication and authorization",
  "Build curriculum management",
  "Implement learning activities and evidence submission",
  "Implement evaluation and competency tracking",
  "Add progress and reporting",
];

export default function TechStackPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
          Step 10
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-[#F8FAFC]">
          Tech Stack & Status
        </h1>

        <p className="max-w-3xl text-base leading-7 text-[#94A3B8]">
          The technology choices support the system architecture while keeping
          the learning domain independent from the implementation details.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Technology
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            Technology Stack
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stack.map((item) => (
            <StackCard
              key={item.category}
              icon={item.icon}
              category={item.category}
              technologies={item.technologies}
              purpose={item.purpose}
            />
          ))}
        </div>
      </section>

      {/* Architecture mapping */}
      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-[#F8FAFC]">
          Stack → Architecture
        </h2>

        <div className="overflow-hidden rounded-lg border border-[#334155]">
          <div className="grid md:grid-cols-4">
            <Mapping layer="Client" technology="Next.js / React" />

            <Mapping layer="Application" technology="NestJS / REST API" />

            <Mapping layer="Domain" technology="TypeScript domain logic" />

            <Mapping layer="Infrastructure" technology="PostgreSQL / Prisma" />
          </div>
        </div>
      </section>

      {/* Current status */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Current Status
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            System Design Phase
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
            The project is currently focused on designing and validating the
            system before implementation.
          </p>
        </div>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#475569] bg-[#0F172A]">
              <CheckCircle2 className="h-4 w-4 text-[#94A3B8]" />
            </span>

            <div>
              <p className="text-sm font-semibold text-[#F8FAFC]">
                Architecture & Domain Design
              </p>

              <p className="mt-1 text-xs text-[#94A3B8]">
                Core system design is established.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {completed.map((item) => (
              <StatusItem key={item} completed>
                {item}
              </StatusItem>
            ))}
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Next
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            Implementation Roadmap
          </h2>
        </div>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <div className="space-y-3">
            {nextSteps.map((item) => (
              <StatusItem key={item}>{item}</StatusItem>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-[#334155] pt-10">
        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Project State
          </p>

          <h2 className="mt-3 text-lg font-semibold text-[#F8FAFC]">
            Designed Before Implemented
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#94A3B8]">
            The system is intentionally being designed from the domain and
            architectural level first. Implementation will follow the validated
            domain model, database design, workflows, and API boundaries.
          </p>
        </div>
      </section>
    </div>
  );
}

function StackCard({
  icon,
  category,
  technologies,
  purpose,
}: {
  icon: React.ReactNode;
  category: string;
  technologies: string[];
  purpose: string;
}) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <div className="flex items-center gap-2 text-[#F8FAFC]">
        <span className="text-[#94A3B8]">{icon}</span>

        <h3 className="text-sm font-semibold">{category}</h3>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded border border-[#334155] bg-[#0F172A] px-2.5 py-1 text-xs text-[#F8FAFC]"
          >
            {technology}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm leading-6 text-[#94A3B8]">{purpose}</p>
    </div>
  );
}

function Mapping({ layer, technology }: { layer: string; technology: string }) {
  return (
    <div className="border-b border-[#334155] bg-[#1E293B] p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <p className="text-[10px] font-medium uppercase tracking-widest text-[#94A3B8]">
        {layer}
      </p>

      <p className="mt-2 text-sm font-medium text-[#F8FAFC]">{technology}</p>
    </div>
  );
}

function StatusItem({
  children,
  completed = false,
}: {
  children: React.ReactNode;
  completed?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      {completed ? (
        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#94A3B8]" />
      ) : (
        <Circle className="h-4 w-4 shrink-0 text-[#475569]" />
      )}

      <span className="text-sm text-[#94A3B8]">{children}</span>
    </div>
  );
}
