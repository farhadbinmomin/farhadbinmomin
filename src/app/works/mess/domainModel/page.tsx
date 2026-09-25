import Link from "next/link";

export const colors = {
  bgcolor1: "#0F172A", // Primary background color
  bgcolor2: "#1E293B", // Secondary background/accent surface
  fontcolor1: "#F8FAFC", // Main headings and primary text
  fontcolor2: "#94A3B8", // Secondary text/subtitles
  bordercolor1: "#334155", // Primary borders
  bordercolor2: "#475569", // Secondary/hover borders
};

const entities = [
  {
    name: "User",
    type: "Global Entity",
    description:
      "Represents a platform user. A user exists independently from any specific mess.",
  },
  {
    name: "Mess",
    type: "Tenant / Context",
    description:
      "Represents an independent mess and acts as the primary tenant boundary.",
  },
  {
    name: "MessMember",
    type: "Membership",
    description:
      "Connects a User to a Mess and defines the user's membership, status, and role within that mess.",
  },
  {
    name: "MessMonth",
    type: "Period",
    description:
      "Represents a monthly operational period used to organize meals, expenses, and accounting.",
  },
  {
    name: "DailyMeal",
    type: "Meal Domain",
    description:
      "Stores a member's meal participation for a particular day and meal type.",
  },
  {
    name: "Bazar",
    type: "Expense Domain",
    description:
      "Represents mess grocery purchases that contribute to the monthly meal calculation.",
  },
  {
    name: "MessExpense",
    type: "Expense Domain",
    description:
      "Represents rent, utilities, salary, gas, electricity, and other mess expenses.",
  },
  {
    name: "Payment",
    type: "Accounting",
    description:
      "Represents a confirmed payment made toward a member's account.",
  },
  {
    name: "MonthlyMemberAccount",
    type: "Accounting",
    description:
      "Represents a member's financial position for a particular mess month.",
  },
];

const relationships = [
  ["User", "can have", "MessMember"],
  ["Mess", "contains", "MessMember"],
  ["Mess", "has", "MessMonth"],
  ["MessMonth", "contains", "DailyMeal"],
  ["MessMonth", "contains", "Bazar"],
  ["MessMonth", "contains", "MessExpense"],
  ["MessMember", "has", "MonthlyMemberAccount"],
  ["MonthlyMemberAccount", "records", "Payment"],
];

export default function DomainModelPage() {
  return (
    <article className="space-y-16 bg-[#0F172A] text-[#F8FAFC] p-6 sm:p-10">
      {/* Header */}
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          01 — Domain Model
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl">
          Modeling the Mess domain
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#94A3B8]">
          The domain model defines the business concepts and their relationships
          before they are translated into database tables or application
          modules.
        </p>
      </header>

      {/* Core relationship */}
      <section>
        <SectionLabel>Core Domain Relationship</SectionLabel>

        <div className="mt-6 overflow-x-auto rounded-xl border border-[#334155] bg-[#1E293B]/60 p-6 shadow-inner">
          <div className="flex min-w-162.5 items-center justify-center gap-3 font-mono text-sm">
            <DomainNode label="User" />
            <Arrow />
            <DomainNode label="MessMember" />
            <Arrow />
            <DomainNode label="Mess" />
            <Arrow />
            <DomainNode label="MessMonth" />
            <Arrow />
            <DomainNode label="Operations" />
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#94A3B8]">
          The membership relationship provides the connection between a global
          user and a specific mess context.
        </p>
      </section>

      {/* Tenant rule */}
      <section className="max-w-3xl">
        <SectionLabel>Tenant Boundary</SectionLabel>

        <h2 className="mt-3 text-2xl font-semibold text-[#F8FAFC]">
          Mess is the first-class tenant
        </h2>

        <div className="mt-6 rounded-xl border border-[#334155] bg-[#1E293B] p-6 shadow-md">
          <p className="font-mono text-sm leading-7 text-[#F8FAFC]">
            Every mess-specific resource
          </p>

          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
            must be directly associated with a Mess or reachable through a
            MessMember belonging to that Mess.
          </p>
        </div>
      </section>

      {/* Entities */}
      <section>
        <SectionLabel>Core Entities</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {entities.map((entity) => (
            <EntityCard
              key={entity.name}
              name={entity.name}
              type={entity.type}
              description={entity.description}
            />
          ))}
        </div>
      </section>

      {/* Relationships */}
      <section>
        <SectionLabel>Domain Relationships</SectionLabel>

        <div className="mt-6 divide-y divide-[#334155] overflow-hidden rounded-xl border border-[#334155] bg-[#1E293B]">
          {relationships.map(([from, relation, to]) => (
            <div
              key={`${from}-${relation}-${to}`}
              className="grid grid-cols-[1fr_auto_1fr] gap-4 px-5 py-4 text-sm transition-colors hover:bg-[#334155]/30"
            >
              <span className="font-medium text-[#F8FAFC]">{from}</span>
              <span className="text-[#94A3B8]">{relation}</span>
              <span className="text-right font-medium text-[#F8FAFC]">
                {to}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Lifecycle */}
      <section>
        <SectionLabel>Membership Lifecycle</SectionLabel>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <LifecycleNode text="User" />
          <LifecycleArrow />
          <LifecycleNode text="Join Mess" />
          <LifecycleArrow />
          <LifecycleNode text="Active Membership" />
          <LifecycleArrow />
          <LifecycleNode text="Leave Mess" />
          <LifecycleArrow />
          <LifecycleNode text="Historical Record" />
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-6 text-[#94A3B8]">
          Leaving a mess does not remove the historical membership or the
          financial and operational records associated with that membership
          period.
        </p>
      </section>

      {/* Next */}
      <section className="border-t border-[#334155] pt-8">
        <p className="text-sm text-[#94A3B8]">
          The next section translates this domain model into the system
          architecture.
        </p>

        <Link
          href="/projects/multi-mess/architecture"
          className="mt-3 inline-flex items-center text-sm font-semibold text-[#F8FAFC] transition-colors hover:text-[#94A3B8]"
        >
          Continue to Architecture →
        </Link>
      </section>
    </article>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
      {children}
    </p>
  );
}

function DomainNode({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-[#475569] bg-[#0F172A] px-4 py-2.5 font-medium text-[#F8FAFC] shadow-sm">
      {label}
    </div>
  );
}

function Arrow() {
  return <span className="text-[#94A3B8]">→</span>;
}

function EntityCard({
  name,
  type,
  description,
}: {
  name: string;
  type: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#334155] bg-[#1E293B] p-5 transition-all duration-200 hover:border-[#475569] hover:bg-[#1E293B]/80">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-[#F8FAFC]">{name}</h3>

        <span className="rounded bg-[#0F172A] px-2 py-0.5 text-[11px] font-medium text-[#94A3B8] border border-[#334155]">
          {type}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-[#94A3B8]">{description}</p>
    </div>
  );
}

function LifecycleNode({ text }: { text: string }) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] px-4 py-2.5 text-sm font-medium text-[#F8FAFC]">
      {text}
    </div>
  );
}

function LifecycleArrow() {
  return <span className="text-[#94A3B8]">→</span>;
}
