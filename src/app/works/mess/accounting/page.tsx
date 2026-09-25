const colors = {
  bgcolor1: "#0F172A",
  bgcolor2: "#1E293B",
  fontcolor1: "#F8FAFC",
  fontcolor2: "#94A3B8",
  bordercolor1: "#334155",
  bordercolor2: "#475569",
};

const accountingFlow = [
  "Successful Bazar",
  "Total Meals",
  "Meal Rate",
  "Member Meal Cost",
  "Monthly Charges",
  "Previous Balance",
  "Total Due",
  "Payment",
  "Closing Balance",
];

const chargeTypes = [
  {
    title: "Meal Cost",
    description:
      "Calculated from the member's meal count and the monthly meal rate.",
  },
  {
    title: "Rent",
    description:
      "Monthly member rent allocation, which may be customized per member.",
  },
  {
    title: "Utilities",
    description:
      "Shared monthly utilities distributed according to the mess rules.",
  },
  {
    title: "Other Charges",
    description: "Additional approved monthly expenses or adjustments.",
  },
];

const accountStates = [
  {
    label: "Previous Balance",
    description: "Amount carried forward from the previous accounting period.",
  },
  {
    label: "Current Charge",
    description: "Charges generated for the current MessMonth.",
  },
  {
    label: "Total Due",
    description: "Previous balance plus the current month's charge.",
  },
  {
    label: "Payment",
    description: "Confirmed amount received from the member.",
  },
  {
    label: "Closing Balance",
    description: "Remaining balance after confirmed payments.",
  },
];

export default function AccountingPage() {
  return (
    <article className="space-y-16">
      <header className="max-w-3xl">
        <p
          className="text-sm font-medium uppercase tracking-widest"
          style={{ color: colors.fontcolor2 }}
        >
          06 — Accounting
        </p>

        <h1
          className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ color: colors.fontcolor1 }}
        >
          Monthly Accounting
        </h1>

        <p
          className="mt-6 text-lg leading-8"
          style={{ color: colors.fontcolor2 }}
        >
          The accounting system converts meals, successful expenses, monthly
          charges, and confirmed payments into a traceable member-level
          financial record.
        </p>
      </header>

      <section>
        <SectionLabel>Accounting Flow</SectionLabel>

        <div
          className="mt-6 overflow-x-auto rounded-lg border p-6"
          style={{
            backgroundColor: colors.bgcolor2,
            borderColor: colors.bordercolor1,
          }}
        >
          <div className="flex min-w-275 items-center justify-center gap-3">
            {accountingFlow.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <FlowNode text={item} />

                {index < accountingFlow.length - 1 && (
                  <span style={{ color: colors.fontcolor2 }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Meal Rate</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <InfoCard
            title="Successful Bazar"
            description="Only successful bazar records participate in the meal-rate calculation."
          />

          <InfoCard
            title="Total Meals"
            description="The system aggregates meal counts recorded during the MessMonth."
          />
        </div>

        <div
          className="mt-4 rounded-lg border p-6"
          style={{
            backgroundColor: colors.bgcolor2,
            borderColor: colors.bordercolor2,
          }}
        >
          <p
            className="text-sm uppercase tracking-widest"
            style={{ color: colors.fontcolor2 }}
          >
            Formula
          </p>

          <div
            className="mt-4 rounded-md border p-5 font-mono text-sm"
            style={{
              backgroundColor: colors.bgcolor1,
              borderColor: colors.bordercolor1,
              color: colors.fontcolor1,
            }}
          >
            Meal Rate = Successful Bazar ÷ Total Meals
          </div>

          <p
            className="mt-4 text-sm leading-7"
            style={{ color: colors.fontcolor2 }}
          >
            A member's meal cost is then derived from the meal rate and that
            member's total meal count.
          </p>
        </div>
      </section>

      <section>
        <SectionLabel>Member Charges</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {chargeTypes.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Monthly Account</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {accountStates.map((item) => (
            <InfoCard
              key={item.label}
              title={item.label}
              description={item.description}
            />
          ))}
        </div>

        <div
          className="mt-4 rounded-lg border p-6"
          style={{
            backgroundColor: colors.bgcolor2,
            borderColor: colors.bordercolor1,
          }}
        >
          <div className="space-y-4 font-mono text-sm">
            <CalculationRow label="Previous Balance" value="carried forward" />

            <CalculationRow label="+ Current Charge" value="current month" />

            <CalculationRow
              label="= Total Due"
              value="before payment"
              emphasized
            />

            <CalculationRow label="- Payment" value="confirmed payment" />

            <CalculationRow
              label="= Closing Balance"
              value="remaining balance"
              emphasized
            />
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Transaction History</SectionLabel>

        <div
          className="mt-6 rounded-lg border p-6"
          style={{
            backgroundColor: colors.bgcolor2,
            borderColor: colors.bordercolor2,
          }}
        >
          <h2
            className="text-xl font-semibold"
            style={{ color: colors.fontcolor1 }}
          >
            AccountTransaction
          </h2>

          <p
            className="mt-4 max-w-3xl text-sm leading-7"
            style={{ color: colors.fontcolor2 }}
          >
            Financial changes are recorded as transactions rather than relying
            only on a mutable balance field. This preserves the history behind
            charges, payments, and adjustments.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <TransactionType text="CHARGE" />
            <TransactionType text="PAYMENT" />
            <TransactionType text="ADJUSTMENT" />
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Payment Confirmation</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProcessCard
            number="01"
            title="Payment Request"
            description="A member submits an amount with a short note."
          />

          <ProcessCard
            number="02"
            title="Confirmation"
            description="A manager or owner confirms the payment."
          />

          <ProcessCard
            number="03"
            title="Transaction"
            description="Only the confirmed payment becomes an account transaction."
          />
        </div>
      </section>

      <section>
        <SectionLabel>Accounting Principle</SectionLabel>

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
            The balance is a result of financial history, not the source of
            truth.
          </p>

          <p
            className="mt-4 max-w-3xl text-sm leading-7"
            style={{ color: colors.fontcolor2 }}
          >
            AccountTransaction provides the authoritative financial history,
            while MonthlyMemberAccount represents the member's accounting state
            for a specific MessMonth.
          </p>
        </div>
      </section>

      <section
        className="border-t pt-8"
        style={{ borderColor: colors.bordercolor1 }}
      >
        <p className="text-sm" style={{ color: colors.fontcolor2 }}>
          The next section explains the major engineering decisions behind the
          system and why the domain was modeled this way.
        </p>

        <a
          href="/projects/multi-mess/decisions"
          className="mt-3 inline-block text-sm font-medium hover:underline"
          style={{ color: colors.fontcolor1 }}
        >
          Continue to Engineering Decisions →
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

function FlowNode({ text }: { text: string }) {
  return (
    <div
      className="whitespace-nowrap rounded-md border px-4 py-3 text-sm"
      style={{
        backgroundColor: colors.bgcolor1,
        borderColor: colors.bordercolor2,
        color: colors.fontcolor1,
      }}
    >
      {text}
    </div>
  );
}

function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-lg border p-5"
      style={{
        backgroundColor: colors.bgcolor2,
        borderColor: colors.bordercolor1,
      }}
    >
      <h3 className="font-medium" style={{ color: colors.fontcolor1 }}>
        {title}
      </h3>

      <p
        className="mt-3 text-sm leading-6"
        style={{ color: colors.fontcolor2 }}
      >
        {description}
      </p>
    </div>
  );
}

function CalculationRow({
  label,
  value,
  emphasized = false,
}: {
  label: string;
  value: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between gap-6 border-b pb-3"
      style={{
        borderColor: colors.bordercolor1,
        color: emphasized ? colors.fontcolor1 : colors.fontcolor2,
      }}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function TransactionType({ text }: { text: string }) {
  return (
    <div
      className="rounded-md border px-4 py-3 text-center font-mono text-sm"
      style={{
        backgroundColor: colors.bgcolor1,
        borderColor: colors.bordercolor1,
        color: colors.fontcolor1,
      }}
    >
      {text}
    </div>
  );
}

function ProcessCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-lg border p-5"
      style={{
        backgroundColor: colors.bgcolor2,
        borderColor: colors.bordercolor1,
      }}
    >
      <span className="font-mono text-sm" style={{ color: colors.fontcolor2 }}>
        {number}
      </span>

      <h3 className="mt-4 font-medium" style={{ color: colors.fontcolor1 }}>
        {title}
      </h3>

      <p
        className="mt-2 text-sm leading-6"
        style={{ color: colors.fontcolor2 }}
      >
        {description}
      </p>
    </div>
  );
}
