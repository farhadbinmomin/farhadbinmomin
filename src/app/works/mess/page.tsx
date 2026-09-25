import project from "@/app/works/mess/data/mess.json";

export const colors = {
  bgcolor1: "#0F172A", // Primary background color
  bgcolor2: "#1E293B", // Secondary background/accent surface
  fontcolor1: "#F8FAFC", // Main headings and primary text
  fontcolor2: "#94A3B8", // Secondary text/subtitles
  bordercolor1: "#334155", // Primary borders
  bordercolor2: "#475569", // Secondary/hover borders
};

const systemFacts = [
  { label: "Architecture", value: "Multi-Tenant" },
  { label: "Core Context", value: "Mess" },
  { label: "Database", value: "Relational" },
  { label: "Primary Focus", value: "Domain Design" },
];

const corePrinciples = [
  "Users are global to the platform.",
  "Mess is the first-class tenant and operational context.",
  "Mess-specific resources belong to a Mess.",
  "Membership connects users to a Mess.",
  "Historical records remain after a member leaves.",
];

export default function MultiMessPage() {
  return (
    <article className="space-y-16 bg-[#0F172A] text-[#F8FAFC] p-6 sm:p-10 rounded-xl border border-[#334155]">
      {/* Header */}
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          System Design Project
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#94A3B8]">
          {project.description}
        </p>
      </header>

      {/* System Facts */}
      <section>
        <div className="grid grid-cols-2 border-y border-[#334155] sm:grid-cols-4 bg-[#1E293B]/40 rounded-lg overflow-hidden">
          {systemFacts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-[#334155] px-5 py-6 sm:border-b-0 sm:border-r last:border-r-0 last:border-b-0"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                {fact.label}
              </p>

              <p className="mt-2 text-base font-medium text-[#F8FAFC]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          01 — Problem
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-[#F8FAFC]">
          Managing a mess as a system
        </h2>

        <p className="mt-4 leading-7 text-[#94A3B8]">
          A mess involves members, meals, expenses, bazar, payments, monthly
          accounts, and different levels of responsibility. The system must keep
          these domains connected while maintaining historical records and
          separating data between different messes.
        </p>
      </section>

      {/* Core Concept */}
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          02 — Core Concept
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-[#F8FAFC]">
          Mess as a first-class tenant
        </h2>

        <div className="mt-6 rounded-lg border border-[#334155] bg-[#1E293B] p-6 shadow-inner">
          <p className="font-mono text-sm leading-7 text-[#F8FAFC] flex flex-wrap items-center">
            <span>User</span>
            <span className="mx-3 text-[#94A3B8]">→</span>
            <span>MessMember</span>
            <span className="mx-3 text-[#94A3B8]">→</span>
            <span className="text-[#F8FAFC] font-semibold">Mess</span>
            <span className="mx-3 text-[#94A3B8]">→</span>
            <span className="text-[#94A3B8]">Mess-specific resources</span>
          </p>
        </div>

        <p className="mt-5 leading-7 text-[#94A3B8]">
          Instead of creating a separate application or database for every mess,
          the platform uses a shared system where the active Mess determines the
          tenant and operational context.
        </p>
      </section>

      {/* Principles */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          03 — Design Principles
        </p>

        <div className="mt-6 divide-y divide-[#334155] border-y border-[#334155]">
          {corePrinciples.map((principle, index) => (
            <div
              key={principle}
              className="flex items-center gap-5 py-4 transition-colors hover:bg-[#1E293B]/50 px-2 rounded-md"
            >
              <span className="font-mono text-sm font-semibold text-[#94A3B8]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-sm font-medium text-[#F8FAFC]">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scope */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          04 — System Scope
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <ScopeCard
            title="Membership"
            description="Users, membership periods, roles, and mess context."
          />

          <ScopeCard
            title="Meal Management"
            description="Daily meals, meal counts, meal configuration, and monthly tracking."
          />

          <ScopeCard
            title="Expenses"
            description="Bazar, rent, utilities, salaries, and other mess expenses."
          />

          <ScopeCard
            title="Accounting"
            description="Monthly charges, payments, balances, and account transactions."
          />
        </div>
      </section>

      {/* Navigation hint */}
      <section className="border-t border-[#334155] pt-8">
        <p className="text-sm text-[#94A3B8]">
          Explore the system design using the sections in the project
          navigation.
        </p>
      </section>
    </article>
  );
}

function ScopeCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B]/40 p-5 transition-all duration-200 hover:border-[#475569] hover:bg-[#1E293B]">
      <h3 className="font-semibold text-[#F8FAFC]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{description}</p>
    </div>
  );
}
