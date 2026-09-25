const colors = {
  bgcolor1: "#0F172A",
  bgcolor2: "#1E293B",
  fontcolor1: "#F8FAFC",
  fontcolor2: "#94A3B8",
  bordercolor1: "#334155",
  bordercolor2: "#475569",
};

const decisions = [
  {
    number: "01",
    title: "Mess as a First-Class Tenant",
    problem:
      "The system needs to support multiple independent Mess environments without duplicating the application or database structure.",
    decision: "Mess is modeled as the primary tenant and operational context.",
    result:
      "Mess-specific resources remain isolated while the platform uses one shared domain model.",
  },
  {
    number: "02",
    title: "MessMember as the Context Boundary",
    problem:
      "A global User alone cannot describe membership, role, or access inside a Mess.",
    decision:
      "MessMember connects a User to a Mess and carries membership-specific state and role.",
    result: "Identity remains global while authorization remains tenant-aware.",
  },
  {
    number: "03",
    title: "Membership as a Historical Record",
    problem:
      "Members may leave and later join again, while historical records must remain intact.",
    decision:
      "Membership represents a membership period rather than permanently linking a User to a Mess.",
    result: "Past memberships and their associated records can be preserved.",
  },
  {
    number: "04",
    title: "Monthly Period as a Domain Boundary",
    problem:
      "Meals, bazar, expenses, and accounting need a clear operational period.",
    decision:
      "MessMonth represents the accounting and operational period of a Mess.",
    result:
      "Monthly operations can be opened, managed, and closed independently.",
  },
  {
    number: "05",
    title: "Transaction History over Mutable Balance",
    problem:
      "A single balance field cannot explain how a member reached the current balance.",
    decision:
      "AccountTransaction stores financial changes as a historical ledger.",
    result: "Balances can be derived and audited from financial events.",
  },
  {
    number: "06",
    title: "Request and Confirm States",
    problem:
      "A submitted payment or bazar record should not immediately affect accounting.",
    decision:
      "Requests and operational records move through explicit states such as pending, successful, and rejected.",
    result: "Only confirmed operations participate in financial calculations.",
  },
];

const principles = [
  "Tenant isolation is enforced through domain relationships.",
  "Historical records should not depend on the user's current membership.",
  "Business state changes should be explicit.",
  "Financial history should remain traceable.",
  "Authorization must happen inside the active Mess context.",
];

export default function DecisionsPage() {
  return (
    <article className="space-y-16">
      <header className="max-w-3xl">
        <p
          className="text-sm font-medium uppercase tracking-widest"
          style={{ color: colors.fontcolor2 }}
        >
          07 — Engineering Decisions
        </p>

        <h1
          className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ color: colors.fontcolor1 }}
        >
          Why the System Is Designed This Way
        </h1>

        <p
          className="mt-6 text-lg leading-8"
          style={{ color: colors.fontcolor2 }}
        >
          The important part of the design is not only the entities themselves,
          but the decisions that define how those entities behave together.
        </p>
      </header>

      <section>
        <SectionLabel>Key Decisions</SectionLabel>

        <div className="mt-6 space-y-5">
          {decisions.map((item) => (
            <DecisionCard
              key={item.number}
              number={item.number}
              title={item.title}
              problem={item.problem}
              decision={item.decision}
              result={item.result}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Design Principles</SectionLabel>

        <div
          className="mt-6 rounded-lg border p-6"
          style={{
            backgroundColor: colors.bgcolor2,
            borderColor: colors.bordercolor1,
          }}
        >
          <div className="space-y-4">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                style={{ borderColor: colors.bordercolor1 }}
              >
                <span
                  className="font-mono text-sm"
                  style={{ color: colors.fontcolor2 }}
                >
                  0{index + 1}
                </span>

                <p
                  className="text-sm leading-6"
                  style={{ color: colors.fontcolor1 }}
                >
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Architecture Trade-off</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <TradeoffCard
            title="Shared Platform"
            points={[
              "One application architecture",
              "Shared database structure",
              "Tenant-aware domain model",
              "Centralized maintenance",
            ]}
          />

          <TradeoffCard
            title="Tenant Isolation"
            points={[
              "Mess-specific resource ownership",
              "Context-aware authorization",
              "Historical membership boundaries",
              "No cross-Mess resource access",
            ]}
          />
        </div>
      </section>

      <section>
        <SectionLabel>Core Design Rule</SectionLabel>

        <div
          className="mt-6 rounded-lg border p-6"
          style={{
            backgroundColor: colors.bgcolor2,
            borderColor: colors.bordercolor2,
          }}
        >
          <p
            className="text-lg font-medium leading-8"
            style={{ color: colors.fontcolor1 }}
          >
            Every Mess-specific resource must belong to a Mess or be reachable
            through a MessMember belonging to that Mess.
          </p>

          <p
            className="mt-4 max-w-3xl text-sm leading-7"
            style={{ color: colors.fontcolor2 }}
          >
            This rule provides the foundation for tenant isolation,
            authorization, historical data, and the overall domain structure.
          </p>
        </div>
      </section>

      <section
        className="border-t pt-8"
        style={{ borderColor: colors.bordercolor1 }}
      >
        <p className="text-sm" style={{ color: colors.fontcolor2 }}>
          The final section connects these design decisions to the actual
          backend implementation.
        </p>

        <a
          href="/projects/multi-mess/implementation"
          className="mt-3 inline-block text-sm font-medium hover:underline"
          style={{ color: colors.fontcolor1 }}
        >
          Continue to Implementation →
        </a>
      </section>
    </article>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-sm font-medium uppercase tracking-widest"
      style={{ color: colors.fontcolor2 }}
    >
      {children}
    </p>
  );
}

function DecisionCard({
  number,
  title,
  problem,
  decision,
  result,
}: {
  number: string;
  title: string;
  problem: string;
  decision: string;
  result: string;
}) {
  return (
    <div
      className="rounded-lg border p-6"
      style={{
        backgroundColor: colors.bgcolor2,
        borderColor: colors.bordercolor1,
      }}
    >
      <div className="flex gap-5">
        <span
          className="shrink-0 font-mono text-sm"
          style={{ color: colors.fontcolor2 }}
        >
          {number}
        </span>

        <div className="min-w-0">
          <h2
            className="text-xl font-semibold"
            style={{ color: colors.fontcolor1 }}
          >
            {title}
          </h2>

          <div className="mt-6 space-y-5">
            <DecisionPart label="Problem" text={problem} />

            <DecisionPart label="Decision" text={decision} />

            <DecisionPart label="Result" text={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionPart({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p
        className="text-xs font-medium uppercase tracking-widest"
        style={{ color: colors.fontcolor2 }}
      >
        {label}
      </p>

      <p
        className="mt-2 text-sm leading-7"
        style={{ color: colors.fontcolor1 }}
      >
        {text}
      </p>
    </div>
  );
}

function TradeoffCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div
      className="rounded-lg border p-6"
      style={{
        backgroundColor: colors.bgcolor2,
        borderColor: colors.bordercolor1,
      }}
    >
      <h3
        className="text-lg font-semibold"
        style={{ color: colors.fontcolor1 }}
      >
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {points.map((point) => (
          <div key={point} className="flex gap-3">
            <span style={{ color: colors.fontcolor2 }}>→</span>

            <p className="text-sm" style={{ color: colors.fontcolor2 }}>
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
