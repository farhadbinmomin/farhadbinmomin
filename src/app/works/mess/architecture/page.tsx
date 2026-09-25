import Link from "next/link";

export const colors = {
  bgcolor1: "#0F172A", // Primary background color
  bgcolor2: "#1E293B", // Secondary background/accent surface
  fontcolor1: "#F8FAFC", // Main headings and primary text
  fontcolor2: "#94A3B8", // Secondary text/subtitles
  bordercolor1: "#334155", // Primary borders
  bordercolor2: "#475569", // Secondary/hover borders
};

const architectureLayers = [
  {
    number: "01",
    title: "Client Layer",
    description:
      "Web or mobile clients interact with the platform through authenticated application requests.",
  },
  {
    number: "02",
    title: "Application Layer",
    description:
      "Handles business workflows, authorization, validation, and domain operations.",
  },
  {
    number: "03",
    title: "Domain Layer",
    description:
      "Contains the core Mess concepts: membership, meals, bazar, expenses, monthly periods, and accounting.",
  },
  {
    number: "04",
    title: "Persistence Layer",
    description:
      "Stores users, messes, memberships, operational records, and accounting history in a relational database.",
  },
];

const modules = [
  {
    title: "Identity & Membership",
    description:
      "User identity, mess membership, membership status, and roles.",
  },
  {
    title: "Mess Management",
    description:
      "Mess configuration, settings, members, and operational periods.",
  },
  {
    title: "Meal Management",
    description: "Daily meal records, meal counts, and meal configuration.",
  },
  {
    title: "Expense Management",
    description:
      "Bazar purchases, expense categories, and other mess expenses.",
  },
  {
    title: "Accounting",
    description:
      "Monthly charges, payments, balances, and account transactions.",
  },
];

export default function ArchitecturePage() {
  return (
    <article className="space-y-16 bg-[#0F172A] p-6 text-[#F8FAFC] sm:p-10">
      {/* Header */}
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          02 — Architecture
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl">
          System Architecture
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#94A3B8]">
          The architecture separates platform infrastructure, application logic,
          domain operations, and persistence while keeping Mess as the primary
          tenant context.
        </p>
      </header>

      {/* High-level architecture */}
      <section>
        <SectionLabel>High-Level Architecture</SectionLabel>

        <div className="mt-6 rounded-xl border border-[#334155] bg-[#1E293B]/60 p-6 shadow-inner">
          <div className="flex flex-col items-center gap-2">
            <ArchitectureNode title="Client" description="Web / Mobile" />
            <Connector />
            <ArchitectureNode
              title="Application"
              description="API + Business Logic"
            />
            <Connector />
            <ArchitectureNode title="Domain" description="Mess Operations" />
            <Connector />
            <ArchitectureNode
              title="Database"
              description="Relational Persistence"
            />
          </div>
        </div>
      </section>

      {/* Tenant context */}
      <section>
        <SectionLabel>Tenant Context Flow</SectionLabel>

        <div className="mt-6 rounded-xl border border-[#334155] bg-[#1E293B] p-6 shadow-md">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            <FlowNode text="Authenticated User" />
            <FlowArrow />
            <FlowNode text="Active MessMember" />
            <FlowArrow />
            <FlowNode text="Mess Context" />
            <FlowArrow />
            <FlowNode text="Resource" />
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-6 text-[#94A3B8]">
          Every mess-specific operation establishes the active membership and
          Mess context before accessing the requested resource.
        </p>
      </section>

      {/* Architecture layers */}
      <section>
        <SectionLabel>Architecture Layers</SectionLabel>

        <div className="mt-6 space-y-3">
          {architectureLayers.map((layer) => (
            <div
              key={layer.number}
              className="grid gap-4 rounded-xl border border-[#334155] bg-[#1E293B] p-5 transition-all duration-200 hover:border-[#475569] hover:bg-[#1E293B]/80 sm:grid-cols-[60px_200px_1fr]"
            >
              <span className="font-mono text-sm font-semibold text-[#94A3B8]">
                {layer.number}
              </span>

              <h3 className="font-semibold text-[#F8FAFC]">{layer.title}</h3>

              <p className="text-sm leading-6 text-[#94A3B8]">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section>
        <SectionLabel>Domain Modules</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-xl border border-[#334155] bg-[#1E293B] p-5 transition-all duration-200 hover:border-[#475569] hover:bg-[#1E293B]/80"
            >
              <h3 className="font-semibold text-[#F8FAFC]">{module.title}</h3>

              <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Request flow */}
      <section>
        <SectionLabel>Request Flow</SectionLabel>

        <div className="mt-6 overflow-x-auto rounded-xl border border-[#334155] bg-[#1E293B]/60 p-6 shadow-inner">
          <div className="flex min-w-175 items-center justify-center gap-3 font-mono text-sm">
            <FlowNode text="Request" />
            <FlowArrow />
            <FlowNode text="Authentication" />
            <FlowArrow />
            <FlowNode text="Mess Context" />
            <FlowArrow />
            <FlowNode text="Authorization" />
            <FlowArrow />
            <FlowNode text="Domain Operation" />
            <FlowArrow />
            <FlowNode text="Persistence" />
          </div>
        </div>
      </section>

      {/* Architecture principle */}
      <section className="max-w-3xl">
        <SectionLabel>Core Architecture Principle</SectionLabel>

        <div className="mt-6 rounded-xl border border-[#475569] bg-[#1E293B] p-6 shadow-md">
          <p className="text-lg font-semibold leading-8 text-[#F8FAFC]">
            A resource ID alone is never sufficient to establish access to a
            mess-specific resource.
          </p>

          <p className="mt-3 text-sm leading-6 text-[#94A3B8]">
            The system first establishes the authenticated user, their active
            MessMember, and the corresponding Mess context before performing the
            operation.
          </p>
        </div>
      </section>

      {/* Next */}
      <section className="border-t border-[#334155] pt-8">
        <p className="text-sm text-[#94A3B8]">
          The next section translates this architecture into the relational data
          model.
        </p>

        <Link
          href="/projects/multi-mess/database"
          className="mt-3 inline-flex items-center text-sm font-semibold text-[#F8FAFC] transition-colors hover:text-[#94A3B8]"
        >
          Continue to Database →
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

function ArchitectureNode({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full max-w-sm rounded-lg border border-[#475569] bg-[#0F172A] px-5 py-3.5 text-center shadow-sm">
      <p className="font-semibold text-[#F8FAFC]">{title}</p>
      <p className="mt-0.5 text-xs text-[#94A3B8]">{description}</p>
    </div>
  );
}

function Connector() {
  return <span className="text-base text-[#94A3B8]">↓</span>;
}

function FlowNode({ text }: { text: string }) {
  return (
    <div className="whitespace-nowrap rounded-lg border border-[#334155] bg-[#0F172A] px-4 py-2.5 text-sm font-medium text-[#F8FAFC] shadow-sm">
      {text}
    </div>
  );
}

function FlowArrow() {
  return <span className="text-[#94A3B8]">→</span>;
}
