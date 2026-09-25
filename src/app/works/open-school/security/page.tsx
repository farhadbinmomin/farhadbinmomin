import { Database, Lock, Network, ShieldCheck, Users, Zap } from "lucide-react";

const securityAreas = [
  {
    icon: <Lock className="h-4 w-4" />,
    title: "Authentication",
    description:
      "Users must be authenticated before accessing learner, educator, or administrative resources.",
  },
  {
    icon: <Users className="h-4 w-4" />,
    title: "Authorization",
    description:
      "Permissions should be enforced by role and resource ownership rather than relying only on the client interface.",
  },
  {
    icon: <Database className="h-4 w-4" />,
    title: "Data Isolation",
    description:
      "Learner records, evidence, evaluations, and progress must only be accessible within their authorized context.",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "Evidence Integrity",
    description:
      "Submitted evidence and evaluation records should be protected from unauthorized modification.",
  },
];

const scalabilityAreas = [
  {
    icon: <Network className="h-4 w-4" />,
    title: "Layered Architecture",
    description:
      "Separating client, application, domain, and infrastructure concerns allows individual layers to evolve independently.",
  },
  {
    icon: <Database className="h-4 w-4" />,
    title: "Database Design",
    description:
      "Normalized domain entities and indexed relationships provide a foundation for growing learner, curriculum, and evaluation data.",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    title: "Asynchronous Work",
    description:
      "Notifications, reporting, file processing, and other non-critical operations can be moved to background workers as usage grows.",
  },
  {
    icon: <Users className="h-4 w-4" />,
    title: "Independent Growth",
    description:
      "Learners, curriculum, evaluation, and content services can be scaled according to their individual workload.",
  },
];

export default function SecurityScalabilityPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
          Step 09
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-[#F8FAFC]">
          Security & Scalability
        </h1>

        <p className="max-w-3xl text-base leading-7 text-[#94A3B8]">
          Security and scalability are considered as architectural properties of
          the system. The design protects learning data while leaving room for
          the platform to grow beyond its initial scope.
        </p>
      </section>

      {/* Security */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Security
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            Protecting Learning Data
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#94A3B8]">
            The most sensitive domain data includes learner records, submitted
            evidence, evaluation results, and competency progress.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {securityAreas.map((item) => (
            <SecurityCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Security flow */}
      <section className="space-y-5">
        <h3 className="text-base font-semibold text-[#F8FAFC]">
          Authorization Boundary
        </h3>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <BoundaryNode label="Authenticated User" />

            <Arrow />

            <BoundaryNode label="Role & Permission Check" />

            <Arrow />

            <BoundaryNode label="Resource Access" />

            <Arrow />

            <BoundaryNode label="Domain Operation" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-[#94A3B8]">
            Authorization should be enforced at the application/domain boundary,
            not only by hiding or disabling UI controls.
          </p>
        </div>
      </section>

      {/* Scalability */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Scalability
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            Designing for Growth
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#94A3B8]">
            The initial system can remain relatively simple while its domain
            boundaries provide a path toward larger workloads and more features.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {scalabilityAreas.map((item) => (
            <SecurityCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Growth path */}
      <section className="space-y-5">
        <h3 className="text-base font-semibold text-[#F8FAFC]">Growth Path</h3>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <div className="grid gap-3 md:grid-cols-4">
            <GrowthStage
              title="Initial"
              items={["Modular application", "Relational database"]}
            />

            <GrowthStage
              title="Growing"
              items={["Database indexing", "Caching", "Background jobs"]}
            />

            <GrowthStage
              title="Larger"
              items={["Read replicas", "Object storage", "Queue workers"]}
            />

            <GrowthStage
              title="Advanced"
              items={[
                "Service extraction",
                "Independent scaling",
                "Observability",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Important distinction */}
      <section className="border-t border-[#334155] pt-10">
        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Design Principle
          </p>

          <h2 className="mt-3 text-lg font-semibold text-[#F8FAFC]">
            Scale the Architecture Before Scaling the Infrastructure
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#94A3B8]">
            The system should not introduce distributed infrastructure
            prematurely. Clear domain boundaries, proper data modeling,
            authorization boundaries, and traceable records provide the
            foundation. Infrastructure can then scale when actual workload
            requires it.
          </p>
        </div>
      </section>
    </div>
  );
}

function SecurityCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <div className="flex items-center gap-2 text-[#F8FAFC]">
        <span className="text-[#94A3B8]">{icon}</span>

        <h3 className="text-sm font-semibold">{title}</h3>
      </div>

      <p className="mt-3 text-sm leading-6 text-[#94A3B8]">{description}</p>
    </div>
  );
}

function BoundaryNode({ label }: { label: string }) {
  return (
    <div className="w-full rounded-md border border-[#334155] bg-[#0F172A] px-4 py-3 text-center text-sm font-medium text-[#F8FAFC] md:w-auto">
      {label}
    </div>
  );
}

function Arrow() {
  return <div className="hidden text-[#475569] md:block">→</div>;
}

function GrowthStage({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-[#334155] bg-[#0F172A] p-4">
      <h4 className="text-sm font-medium text-[#F8FAFC]">{title}</h4>

      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-xs leading-5 text-[#94A3B8]">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
