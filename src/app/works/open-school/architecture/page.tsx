export default function ArchitecturePage() {
  return (
    <article className="space-y-16 text-[#F8FAFC]">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
          System Architecture
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          System Architecture
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#94A3B8]">
          The architecture separates the learning domain from application,
          infrastructure, and external concerns while keeping the competency
          model at the center of the system.
        </p>
      </section>

      {/* Architecture Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Architecture Overview</h2>

        <div className="overflow-x-auto rounded-lg border border-[#334155] bg-[#1E293B] p-8">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`┌─────────────────────────────────────────────────────┐
│                    Client Layer                     │
│                                                     │
│        Web Application / Mobile Application         │
└─────────────────────────┬───────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│                   Application Layer                 │
│                                                     │
│  Authentication │ Learning │ Evaluation │ Progress │
│  Curriculum     │ Learner  │ Content    │ Reporting │
└─────────────────────────┬───────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│                     Domain Layer                    │
│                                                     │
│  Learner │ Learning Path │ Curriculum               │
│  Stage   │ Level         │ Competency               │
│  Activity│ Evidence      │ Evaluation │ Progress    │
└─────────────────────────┬───────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│                 Infrastructure Layer                │
│                                                     │
│ Database │ File Storage │ Authentication │ Messaging │
└─────────────────────────┬───────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│                  External Services                   │
│                                                     │
│ Email │ Notifications │ Media Storage │ Analytics   │
└─────────────────────────────────────────────────────┘`}
          </pre>
        </div>
      </section>

      {/* Architectural Principle */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Architectural Principle</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The system is organized so that educational rules remain independent
          from the user interface and infrastructure. This allows the learning
          model to evolve without coupling the domain directly to a specific
          client or infrastructure technology.
        </p>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
            Core dependency direction
          </p>

          <p className="mt-4 text-lg font-medium">
            Client → Application → Domain ← Infrastructure
          </p>
        </div>
      </section>

      {/* Client Layer */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">1. Client Layer</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The client layer provides the interfaces through which learners,
          educators, and administrators interact with the system.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <ArchitectureCard
            title="Learner Interface"
            text="Learning content, activities, evaluations, competency status, and progress."
          />

          <ArchitectureCard
            title="Educator Interface"
            text="Curriculum management, evaluation, evidence review, and learner monitoring."
          />

          <ArchitectureCard
            title="Administration"
            text="System configuration, users, curriculum structure, and operational management."
          />
        </div>
      </section>

      {/* Application Layer */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">2. Application Layer</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The application layer coordinates use cases. It receives requests from
          clients, applies application-level rules, invokes domain operations,
          and returns the appropriate result.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Authentication",
            "Learner Management",
            "Learning Management",
            "Curriculum Management",
            "Evaluation",
            "Progress Tracking",
            "Content Management",
            "Reporting",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#334155] p-4 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Domain Layer */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">3. Domain Layer</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The domain layer contains the core educational concepts and rules.
          This is the most important architectural layer because it represents
          how the learning system actually works.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <ArchitectureCard
            title="Learning Domain"
            text="Stage, Level, Learning Path, Curriculum, Lessons, and Activities."
          />

          <ArchitectureCard
            title="Competency Domain"
            text="Competencies, evidence, evaluations, achievement, and learner progress."
          />

          <ArchitectureCard
            title="Learner Domain"
            text="Learner participation, progression, learning state, and competency status."
          />

          <ArchitectureCard
            title="Content Domain"
            text="Books, lessons, exercises, and other learning resources."
          />
        </div>
      </section>

      {/* Infrastructure */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">4. Infrastructure Layer</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Infrastructure provides the technical capabilities required by the
          application and domain without defining the educational rules
          themselves.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Database", "File Storage", "Authentication", "Notifications"].map(
            (item) => (
              <div
                key={item}
                className="rounded-lg border border-[#334155] bg-[#1E293B] p-5"
              >
                <h3 className="font-medium">{item}</h3>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Request Flow */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Request Flow</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          A typical learner interaction flows through the application layer
          before reaching the domain and persistence mechanisms.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`Learner
   │
   ▼
Client Application
   │
   ▼
API / Application Service
   │
   ▼
Use Case
   │
   ▼
Domain Logic
   │
   ├──────────────► Evaluation / Progress
   │
   ▼
Repository
   │
   ▼
Database`}
          </pre>
        </div>
      </section>

      {/* Example Use Case */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">
          Example: Evaluating a Competency
        </h2>

        <div className="space-y-3">
          {[
            ["01", "Learner submits an activity or evidence."],
            ["02", "Application service receives the evaluation request."],
            ["03", "Evaluation rules determine how the evidence is assessed."],
            ["04", "The competency status is updated based on the evaluation."],
            ["05", "Learner progress is recalculated or recorded."],
            ["06", "The result becomes available to the learner and educator."],
          ].map(([number, text]) => (
            <div
              key={number}
              className="flex gap-4 rounded-lg border border-[#334155] p-4"
            >
              <span className="text-sm text-[#94A3B8]">{number}</span>
              <p className="text-sm leading-6">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scalability */}
      <section className="space-y-5 border-t border-[#334155] pt-10">
        <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
          Architectural Goal
        </p>

        <h2 className="text-2xl font-semibold">
          Keep the learning domain independent from delivery and infrastructure.
        </h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          This separation allows the same core learning model to support
          different client applications, infrastructure choices, and future
          platform capabilities without redefining the fundamental competency
          system.
        </p>
      </section>
    </article>
  );
}

function ArchitectureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{text}</p>
    </div>
  );
}
