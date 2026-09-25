const colors = {
  bgcolor1: "#0F172A",
  bgcolor2: "#1E293B",
  fontcolor1: "#F8FAFC",
  fontcolor2: "#94A3B8",
  bordercolor1: "#334155",
  bordercolor2: "#475569",
};

const roles = [
  {
    role: "MEMBER",
    description:
      "Normal mess member with access to their own permitted operations.",
  },
  {
    role: "MEAL_MANAGER",
    description: "Manages meal-related operations within the active mess.",
  },
  {
    role: "MESS_MANAGER",
    description:
      "Manages operational and administrative activities within the mess.",
  },
  {
    role: "MESS_OWNER",
    description:
      "Owns the mess context and controls management-level permissions.",
  },
];

const permissionAreas = [
  {
    area: "Membership",
    member: "Own",
    mealManager: "Manage",
    messManager: "Manage",
    owner: "Full",
  },
  {
    area: "Meals",
    member: "Own",
    mealManager: "Manage",
    messManager: "Manage",
    owner: "Full",
  },
  {
    area: "Bazar",
    member: "Request",
    mealManager: "Manage",
    messManager: "Manage",
    owner: "Full",
  },
  {
    area: "Expenses",
    member: "View",
    mealManager: "View",
    messManager: "Manage",
    owner: "Full",
  },
  {
    area: "Accounting",
    member: "Own",
    mealManager: "View",
    messManager: "Manage",
    owner: "Full",
  },
];

export default function AuthorizationPage() {
  return (
    <article className="space-y-16">
      {/* Header */}
      <header className="max-w-3xl">
        <p
          className="text-sm font-medium uppercase tracking-widest"
          style={{ color: colors.fontcolor2 }}
        >
          05 — Authorization
        </p>

        <h1
          className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ color: colors.fontcolor1 }}
        >
          Tenant-Aware Authorization
        </h1>

        <p
          className="mt-6 text-lg leading-8"
          style={{ color: colors.fontcolor2 }}
        >
          Authorization is evaluated inside the active Mess context. A user's
          global identity alone does not grant access to mess-specific
          resources.
        </p>
      </header>

      {/* Authorization chain */}
      <section>
        <SectionLabel>Authorization Chain</SectionLabel>

        <div
          className="mt-6 overflow-x-auto rounded-lg border p-6"
          style={{
            backgroundColor: colors.bgcolor2,
            borderColor: colors.bordercolor1,
          }}
        >
          <div className="flex min-w-212.5 items-center justify-center gap-3">
            <AuthNode text="User" />
            <Arrow />

            <AuthNode text="Active MessMember" />
            <Arrow />

            <AuthNode text="Mess Context" />
            <Arrow />

            <AuthNode text="Role" />
            <Arrow />

            <AuthNode text="Permission" />
            <Arrow />

            <AuthNode text="Resource" />
          </div>
        </div>
      </section>

      {/* Tenant isolation */}
      <section className="max-w-3xl">
        <SectionLabel>Tenant Isolation</SectionLabel>

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
            Resource access is context-dependent
          </h2>

          <p
            className="mt-4 text-sm leading-7"
            style={{ color: colors.fontcolor2 }}
          >
            The system does not authorize a request simply because the
            authenticated user exists or because a resource ID is valid.
          </p>

          <div
            className="mt-5 rounded-md border p-4 font-mono text-sm"
            style={{
              backgroundColor: colors.bgcolor1,
              borderColor: colors.bordercolor1,
              color: colors.fontcolor1,
            }}
          >
            User → Active Membership → Mess → Resource
          </div>
        </div>
      </section>

      {/* Roles */}
      <section>
        <SectionLabel>Mess Roles</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {roles.map((item) => (
            <RoleCard
              key={item.role}
              role={item.role}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Permission matrix */}
      <section>
        <SectionLabel>Permission Model</SectionLabel>

        <div
          className="mt-6 overflow-x-auto rounded-lg border"
          style={{
            backgroundColor: colors.bgcolor2,
            borderColor: colors.bordercolor1,
          }}
        >
          <table className="w-full min-w-190 border-collapse text-sm">
            <thead>
              <tr
                style={{
                  borderBottom: `1px solid ${colors.bordercolor1}`,
                }}
              >
                <th
                  className="px-5 py-4 text-left font-medium"
                  style={{ color: colors.fontcolor2 }}
                >
                  Area
                </th>

                <th
                  className="px-5 py-4 text-left font-medium"
                  style={{ color: colors.fontcolor2 }}
                >
                  Member
                </th>

                <th
                  className="px-5 py-4 text-left font-medium"
                  style={{ color: colors.fontcolor2 }}
                >
                  Meal Manager
                </th>

                <th
                  className="px-5 py-4 text-left font-medium"
                  style={{ color: colors.fontcolor2 }}
                >
                  Mess Manager
                </th>

                <th
                  className="px-5 py-4 text-left font-medium"
                  style={{ color: colors.fontcolor2 }}
                >
                  Owner
                </th>
              </tr>
            </thead>

            <tbody>
              {permissionAreas.map((item) => (
                <tr
                  key={item.area}
                  style={{
                    borderBottom: `1px solid ${colors.bordercolor1}`,
                  }}
                >
                  <td
                    className="px-5 py-4 font-medium"
                    style={{ color: colors.fontcolor1 }}
                  >
                    {item.area}
                  </td>

                  <PermissionCell value={item.member} />
                  <PermissionCell value={item.mealManager} />
                  <PermissionCell value={item.messManager} />
                  <PermissionCell value={item.owner} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Role assignment */}
      <section>
        <SectionLabel>Role Assignment</SectionLabel>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProcessCard
            number="01"
            title="Owner creates Mess"
            description="The creating user becomes the initial MessOwner."
          />

          <ProcessCard
            number="02"
            title="Owner grants roles"
            description="Management roles are assigned within the MessMember context."
          />

          <ProcessCard
            number="03"
            title="Permissions follow context"
            description="The assigned role controls operations inside that Mess."
          />
        </div>
      </section>

      {/* Security rule */}
      <section>
        <SectionLabel>Security Rule</SectionLabel>

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
            Never authorize a mess-specific resource by ID alone.
          </p>

          <p
            className="mt-4 max-w-3xl text-sm leading-7"
            style={{ color: colors.fontcolor2 }}
          >
            Every protected operation must establish the authenticated user,
            active membership, Mess context, and required permission before
            accessing the resource.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section
        className="border-t pt-8"
        style={{ borderColor: colors.bordercolor1 }}
      >
        <p className="text-sm" style={{ color: colors.fontcolor2 }}>
          The next section explains how meals, expenses, charges, payments, and
          balances become an accounting system.
        </p>

        <a
          href="/projects/multi-mess/accounting"
          className="mt-3 inline-block text-sm font-medium hover:underline"
          style={{ color: colors.fontcolor1 }}
        >
          Continue to Accounting →
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

function AuthNode({ text }: { text: string }) {
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

function RoleCard({
  role,
  description,
}: {
  role: string;
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
      <h3
        className="font-mono text-sm font-semibold"
        style={{ color: colors.fontcolor1 }}
      >
        {role}
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

function PermissionCell({ value }: { value: string }) {
  return (
    <td className="px-5 py-4" style={{ color: colors.fontcolor2 }}>
      {value}
    </td>
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
