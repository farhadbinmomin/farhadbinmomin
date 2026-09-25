const colors = {
  bgcolor1: "#0F172A",
  bgcolor2: "#1E293B",
  fontcolor1: "#F8FAFC",
  fontcolor2: "#94A3B8",
  bordercolor1: "#334155",
  bordercolor2: "#475569",
};

const workflows = [
  {
    number: "01",
    title: "Create a Mess",
    description: "A user creates a new Mess and becomes its initial MessOwner.",
    steps: [
      "Authenticated User",
      "Create Mess",
      "Create MessMember",
      "Assign MESS_OWNER",
      "Activate Mess",
    ],
  },
  {
    number: "02",
    title: "Join a Mess",
    description:
      "A user becomes a member of an existing Mess through the membership workflow.",
    steps: [
      "Authenticated User",
      "Select Mess",
      "Join / Request Access",
      "Create MessMember",
      "Activate Membership",
    ],
  },
  {
    number: "03",
    title: "Manage Meals",
    description:
      "Members record their daily breakfast, lunch, and dinner participation.",
    steps: [
      "Select MessMonth",
      "Select Date",
      "Select Meal Type",
      "Set Meal Count",
      "Store DailyMeal",
    ],
  },
  {
    number: "04",
    title: "Record Bazar",
    description:
      "Bazar purchases are recorded and confirmed before contributing to meal-rate calculations.",
    steps: [
      "Create Bazar",
      "Add Bazar Items",
      "Review",
      "Confirm",
      "Include in Meal Cost",
    ],
  },
  {
    number: "05",
    title: "Monthly Billing",
    description:
      "The system calculates a member's monthly charge from meals and other applicable expenses.",
    steps: [
      "Calculate Meal Rate",
      "Calculate Meal Cost",
      "Add Rent / Utilities",
      "Apply Previous Balance",
      "Create Monthly Account",
    ],
  },
  {
    number: "06",
    title: "Payment",
    description:
      "A member submits a payment request which is confirmed by an authorized manager.",
    steps: [
      "Member Submits Request",
      "Pending",
      "Manager Reviews",
      "Confirm Payment",
      "Create Payment Record",
      "Update Account",
    ],
  },
  {
    number: "07",
    title: "Leave a Mess",
    description:
      "Leaving a Mess ends the active membership without deleting historical records.",
    steps: [
      "Active MessMember",
      "Leave Mess",
      "Deactivate Membership",
      "Preserve History",
      "User Can Join Another Mess",
    ],
  },
];

export default function WorkflowsPage() {
  return (
    <article className="space-y-16">
      {/* Header */}
      <header className="max-w-3xl">
        <p
          className="text-sm font-medium uppercase tracking-widest"
          style={{ color: colors.fontcolor2 }}
        >
          04 — Workflows
        </p>

        <h1
          className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ color: colors.fontcolor1 }}
        >
          System Workflows
        </h1>

        <p
          className="mt-6 text-lg leading-8"
          style={{ color: colors.fontcolor2 }}
        >
          The workflows describe how users move through the system and how
          domain operations change system state.
        </p>
      </header>

      {/* Workflow list */}
      <section className="space-y-5">
        {workflows.map((workflow) => (
          <WorkflowCard key={workflow.number} workflow={workflow} />
        ))}
      </section>

      {/* Cross-domain flow */}
      <section>
        <SectionLabel>Monthly Operational Flow</SectionLabel>

        <div
          className="mt-6 overflow-x-auto rounded-lg border p-6"
          style={{
            backgroundColor: colors.bgcolor2,
            borderColor: colors.bordercolor1,
          }}
        >
          <div className="flex min-w-225 items-center justify-center gap-3">
            <FlowNode text="MessMonth" />

            <Arrow />

            <FlowNode text="Daily Meals" />

            <Arrow />

            <FlowNode text="Bazar" />

            <Arrow />

            <FlowNode text="Meal Rate" />

            <Arrow />

            <FlowNode text="Monthly Charges" />

            <Arrow />

            <FlowNode text="Payment" />
          </div>
        </div>

        <p
          className="mt-4 max-w-3xl text-sm leading-6"
          style={{ color: colors.fontcolor2 }}
        >
          The monthly period connects operational activity with the accounting
          process.
        </p>
      </section>

      {/* State-based principle */}
      <section>
        <SectionLabel>State-Based Operations</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StateCard
            title="Pending"
            description="The operation exists but has not yet been confirmed."
          />

          <StateCard
            title="Successful"
            description="The operation is confirmed and can affect downstream calculations."
          />

          <StateCard
            title="Rejected"
            description="The operation is retained as history but does not contribute to calculations."
          />
        </div>
      </section>

      {/* Workflow principle */}
      <section className="max-w-3xl">
        <SectionLabel>Workflow Principle</SectionLabel>

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
            Operational records and confirmed records are kept separate where
            confirmation changes their effect on the system.
          </p>

          <p
            className="mt-4 text-sm leading-7"
            style={{ color: colors.fontcolor2 }}
          >
            For example, a payment request is not treated as a payment until it
            has been successfully confirmed. Similarly, only successful bazar
            records contribute to the meal-rate calculation.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section
        className="border-t pt-8"
        style={{ borderColor: colors.bordercolor1 }}
      >
        <p className="text-sm" style={{ color: colors.fontcolor2 }}>
          The next section defines how access to these workflows is controlled.
        </p>

        <a
          href="/projects/multi-mess/authorization"
          className="mt-3 inline-block text-sm font-medium hover:underline"
          style={{ color: colors.fontcolor1 }}
        >
          Continue to Authorization →
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

function WorkflowCard({
  workflow,
}: {
  workflow: {
    number: string;
    title: string;
    description: string;
    steps: string[];
  };
}) {
  return (
    <div
      className="rounded-lg border p-6"
      style={{
        backgroundColor: colors.bgcolor2,
        borderColor: colors.bordercolor1,
      }}
    >
      <div className="grid gap-6 lg:grid-cols-[60px_220px_1fr]">
        {/* Number */}
        <span
          className="font-mono text-sm"
          style={{ color: colors.fontcolor2 }}
        >
          {workflow.number}
        </span>

        {/* Title */}
        <div>
          <h2 className="font-semibold" style={{ color: colors.fontcolor1 }}>
            {workflow.title}
          </h2>

          <p
            className="mt-2 text-sm leading-6"
            style={{ color: colors.fontcolor2 }}
          >
            {workflow.description}
          </p>
        </div>

        {/* Steps */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max items-center gap-2">
            {workflow.steps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="rounded-md border px-3 py-2 text-xs"
                  style={{
                    backgroundColor: colors.bgcolor1,
                    borderColor: colors.bordercolor2,
                    color: colors.fontcolor1,
                  }}
                >
                  {step}
                </div>

                {index < workflow.steps.length - 1 && (
                  <span
                    style={{
                      color: colors.fontcolor2,
                    }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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

function Arrow() {
  return <span style={{ color: colors.fontcolor2 }}>→</span>;
}

function StateCard({
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
        className="mt-2 text-sm leading-6"
        style={{ color: colors.fontcolor2 }}
      >
        {description}
      </p>
    </div>
  );
}
