import Link from "next/link";

export const colors = {
  bgcolor1: "#0F172A", // Primary background color
  bgcolor2: "#1E293B", // Secondary background/accent surface
  fontcolor1: "#F8FAFC", // Main headings and primary text
  fontcolor2: "#94A3B8", // Secondary text/subtitles
  bordercolor1: "#334155", // Primary borders
  bordercolor2: "#475569", // Secondary/hover borders
};

const coreTables = [
  {
    name: "User",
    group: "Identity",
    description: "Global platform identity.",
  },
  {
    name: "Mess",
    group: "Tenant",
    description: "The primary tenant and operational context.",
  },
  {
    name: "MessMember",
    group: "Membership",
    description:
      "Connects a user to a mess and stores membership state and role.",
  },
  {
    name: "MessMonth",
    group: "Period",
    description: "Defines an operational and accounting month for a mess.",
  },
  {
    name: "DailyMeal",
    group: "Meals",
    description: "Stores member meal participation.",
  },
  {
    name: "Bazar",
    group: "Expenses",
    description: "Stores grocery purchases contributing to meal cost.",
  },
  {
    name: "MessExpense",
    group: "Expenses",
    description:
      "Stores rent, utilities, salary, gas, electricity, and other expenses.",
  },
  {
    name: "Payment",
    group: "Accounting",
    description: "Stores confirmed member payments.",
  },
  {
    name: "MonthlyMemberAccount",
    group: "Accounting",
    description: "Represents a member's monthly financial position.",
  },
  {
    name: "AccountTransaction",
    group: "Accounting",
    description: "Provides the financial transaction history.",
  },
];

const relationships = [
  ["User", "1 : N", "MessMember"],
  ["Mess", "1 : N", "MessMember"],
  ["Mess", "1 : N", "MessMonth"],
  ["MessMember", "1 : N", "DailyMeal"],
  ["MessMonth", "1 : N", "DailyMeal"],
  ["MessMonth", "1 : N", "Bazar"],
  ["MessMonth", "1 : N", "MessExpense"],
  ["MessMember", "1 : N", "MonthlyMemberAccount"],
  ["MonthlyMemberAccount", "1 : N", "AccountTransaction"],
  ["MonthlyMemberAccount", "1 : N", "Payment"],
];

export default function DatabasePage() {
  return (
    <article className="space-y-16 bg-[#0F172A] p-6 text-[#F8FAFC] sm:p-10">
      {/* Header */}
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          03 — Database
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl">
          Relational Database Design
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#94A3B8]">
          The database is designed around tenant isolation, membership history,
          monthly operational periods, and traceable financial transactions.
        </p>
      </header>

      {/* ERD */}
      <section>
        <SectionLabel>Entity Relationship Model</SectionLabel>

        <div className="mt-6 rounded-xl border border-[#334155] bg-[#1E293B]/60 p-6 shadow-inner">
          <div className="overflow-x-auto">
            <div className="mx-auto flex min-w-190 flex-col items-center gap-3">
              <DatabaseNode name="User" description="Global identity" />

              <VerticalArrow />

              <DatabaseNode name="MessMember" description="Membership + role" />

              <VerticalArrow />

              <DatabaseNode name="Mess" description="Tenant / context" />

              <VerticalArrow />

              <div className="grid w-full grid-cols-3 gap-4">
                <DatabaseNode
                  name="MessMonth"
                  description="Operational period"
                />

                <DatabaseNode
                  name="Mess Settings"
                  description="Mess configuration"
                />

                <DatabaseNode name="AuditLog" description="System history" />
              </div>

              <div className="mt-2 grid w-full grid-cols-3 gap-4">
                <DatabaseNode name="DailyMeal" description="Meal records" />

                <DatabaseNode name="Bazar" description="Grocery expenses" />

                <DatabaseNode name="MessExpense" description="Other expenses" />
              </div>

              <VerticalArrow />

              <DatabaseNode
                name="MonthlyMemberAccount"
                description="Monthly financial position"
              />

              <VerticalArrow />

              <DatabaseNode
                name="AccountTransaction"
                description="Financial history"
              />
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#94A3B8]">
          This is the conceptual ERD. The implementation schema further
          separates supporting entities such as payment requests, bazar items,
          expense categories, and meal configuration.
        </p>
      </section>

      {/* Core tables */}
      <section>
        <SectionLabel>Core Tables</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {coreTables.map((table) => (
            <div
              key={table.name}
              className="rounded-xl border border-[#334155] bg-[#1E293B] p-5 transition-all duration-200 hover:border-[#475569] hover:bg-[#1E293B]/80"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-[#F8FAFC]">{table.name}</h3>

                <span className="rounded border border-[#334155] bg-[#0F172A] px-2 py-0.5 text-[11px] font-medium text-[#94A3B8]">
                  {table.group}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
                {table.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Relationships */}
      <section>
        <SectionLabel>Key Relationships</SectionLabel>

        <div className="mt-6 divide-y divide-[#334155] overflow-hidden rounded-xl border border-[#334155] bg-[#1E293B]">
          {relationships.map(([from, cardinality, to]) => (
            <div
              key={`${from}-${to}`}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-4 text-sm transition-colors hover:bg-[#334155]/30"
            >
              <span className="font-medium text-[#F8FAFC]">{from}</span>

              <span className="font-mono text-xs font-semibold text-[#94A3B8]">
                {cardinality}
              </span>

              <span className="text-right font-medium text-[#F8FAFC]">
                {to}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tenant isolation */}
      <section>
        <SectionLabel>Tenant Isolation</SectionLabel>

        <div className="mt-6 rounded-xl border border-[#475569] bg-[#1E293B] p-6 shadow-md">
          <h2 className="text-xl font-semibold text-[#F8FAFC]">
            Mess is the data boundary
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#94A3B8]">
            Mess-specific records must be directly connected to their Mess or
            reachable through a MessMember belonging to that Mess. This prevents
            a resource from being accessed only by knowing its identifier.
          </p>

          <div className="mt-5 rounded-lg border border-[#334155] bg-[#0F172A] p-4 font-mono text-sm font-medium text-[#F8FAFC] shadow-inner">
            User → Active MessMember → Mess → Resource
          </div>
        </div>
      </section>

      {/* Historical data */}
      <section>
        <SectionLabel>Historical Data</SectionLabel>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <DesignCard
            title="Membership History"
            description="Leaving a mess does not delete the membership record or its historical relationships."
          />

          <DesignCard
            title="Financial History"
            description="AccountTransaction preserves the financial trail instead of relying on a mutable balance field."
          />

          <DesignCard
            title="Monthly Periods"
            description="MessMonth keeps operational and accounting records organized by a defined period."
          />

          <DesignCard
            title="Auditability"
            description="Important system actions can be retained through the audit log."
          />
        </div>
      </section>

      {/* Design decisions */}
      <section>
        <SectionLabel>Database Design Decisions</SectionLabel>

        <div className="mt-6 space-y-3">
          <Decision
            number="01"
            title="Shared database, tenant-aware records"
            description="Multiple messes use the same database structure while their data remains associated with a Mess context."
          />

          <Decision
            number="02"
            title="Membership as a domain entity"
            description="MessMember is more than a junction table because membership carries role, status, and lifecycle information."
          />

          <Decision
            number="03"
            title="Transaction history over mutable balance"
            description="AccountTransaction provides the authoritative financial history while monthly accounts provide a useful monthly view."
          />
        </div>
      </section>

      {/* Next */}
      <section className="border-t border-[#334155] pt-8">
        <p className="text-sm text-[#94A3B8]">
          The next section demonstrates how the system behaves through its major
          business workflows.
        </p>

        <Link
          href="/projects/multi-mess/workflows"
          className="mt-3 inline-flex items-center text-sm font-semibold text-[#F8FAFC] transition-colors hover:text-[#94A3B8]"
        >
          Continue to Workflows →
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

function DatabaseNode({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="w-full rounded-lg border border-[#475569] bg-[#0F172A] px-4 py-3.5 text-center shadow-sm">
      <p className="font-mono text-sm font-semibold text-[#F8FAFC]">{name}</p>
      <p className="mt-0.5 text-xs text-[#94A3B8]">{description}</p>
    </div>
  );
}

function VerticalArrow() {
  return <span className="text-base text-[#94A3B8]">↓</span>;
}

function DesignCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#334155] bg-[#1E293B] p-5 transition-all duration-200 hover:border-[#475569] hover:bg-[#1E293B]/80">
      <h3 className="font-semibold text-[#F8FAFC]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{description}</p>
    </div>
  );
}

function Decision({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-4 rounded-xl border border-[#334155] bg-[#1E293B] p-5 transition-all duration-200 hover:border-[#475569] hover:bg-[#1E293B]/80 sm:grid-cols-[50px_250px_1fr]">
      <span className="font-mono text-sm font-semibold text-[#94A3B8]">
        {number}
      </span>

      <h3 className="font-semibold text-[#F8FAFC]">{title}</h3>

      <p className="text-sm leading-6 text-[#94A3B8]">{description}</p>
    </div>
  );
}
