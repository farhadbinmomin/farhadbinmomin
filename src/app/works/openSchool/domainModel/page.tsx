export default function DomainModelPage() {
  return (
    <article className="space-y-16 text-[#F8FAFC]">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
          Domain Model
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Modeling the Learning System
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#94A3B8]">
          The domain model translates the learning philosophy into the core
          concepts, relationships, and rules that define how the platform
          operates.
        </p>
      </section>

      {/* Core Domain */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Core Domain</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The central domain is the relationship between a learner, the
          curriculum they follow, the competencies they need to develop, and the
          evidence used to evaluate their progress.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`                         ┌──────────────┐
                         │    Learner   │
                         └──────┬───────┘
                                │
                         Learning Path
                                │
                                ▼
                         ┌──────────────┐
                         │    Stage     │
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │    Level     │
                         └──────┬───────┘
                                │
                  ┌─────────────┴─────────────┐
                  ▼                           ▼
           ┌──────────────┐           ┌──────────────┐
           │  Curriculum  │           │ Competency   │
           └──────┬───────┘           └──────┬───────┘
                  │                          │
                  ▼                          │
           Learning Activity                 │
                  │                          │
                  ▼                          │
               Evidence ────────► Evaluation
                                             │
                                             ▼
                                      Progress / Status`}
          </pre>
        </div>
      </section>

      {/* Learner */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Learner</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          A learner is the primary participant in the system. The learner
          follows a learning path, studies curriculum content, performs
          activities, receives evaluations, and accumulates competency progress.
        </p>
      </section>

      {/* Learning Structure */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Learning Structure</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <DomainCard
            title="Stage"
            description="A broad phase of learning that groups related levels and competencies."
          />

          <DomainCard
            title="Level"
            description="A defined progression point within a stage with its own curriculum and competency requirements."
          />

          <DomainCard
            title="Curriculum"
            description="The structured learning content required to develop the intended competencies."
          />

          <DomainCard
            title="Learning Activity"
            description="A specific learning or practice activity through which a learner develops and applies knowledge."
          />
        </div>
      </section>

      {/* Competency Domain */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Competency Domain</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Competency is the central concept of the system. Curriculum and
          activities exist to help the learner develop competencies, while
          evaluation determines whether those competencies can be demonstrated.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <DomainCard
            title="Competency"
            description="An ability or learning outcome that a learner should be able to demonstrate."
          />

          <DomainCard
            title="Evidence"
            description="A demonstrated result produced through a learning activity or evaluation."
          />

          <DomainCard
            title="Evaluation"
            description="The process of determining whether available evidence demonstrates the required competency."
          />
        </div>
      </section>

      {/* Progress */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Progress</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Progress represents the learner's current development against the
          competencies defined by the learning model. It should be derived from
          evaluation and evidence rather than simply from content completion.
        </p>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
            Progress model
          </p>

          <p className="mt-4 text-lg font-medium">
            Learning → Evidence → Evaluation → Competency Progress
          </p>
        </div>
      </section>

      {/* Relationships */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Core Relationships</h2>

        <div className="space-y-3">
          <Relationship
            left="Learner"
            relation="follows"
            right="Learning Path"
          />

          <Relationship
            left="Learning Path"
            relation="contains"
            right="Stages"
          />

          <Relationship left="Stage" relation="contains" right="Levels" />

          <Relationship
            left="Level"
            relation="defines"
            right="Curriculum & Competencies"
          />

          <Relationship
            left="Curriculum"
            relation="contains"
            right="Learning Activities"
          />

          <Relationship
            left="Learning Activity"
            relation="produces"
            right="Evidence"
          />

          <Relationship
            left="Evidence"
            relation="supports"
            right="Evaluation"
          />

          <Relationship
            left="Evaluation"
            relation="measures"
            right="Competency"
          />

          <Relationship
            left="Evaluation"
            relation="updates"
            right="Learner Progress"
          />
        </div>
      </section>

      {/* Domain Rules */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Core Domain Rules</h2>

        <div className="space-y-3">
          <Rule number="01">
            A learner progresses through demonstrated competency, not simply
            through content completion.
          </Rule>

          <Rule number="02">
            Competencies must be defined independently from individual learner
            progress.
          </Rule>

          <Rule number="03">Evaluation should be traceable to evidence.</Rule>

          <Rule number="04">
            Curriculum provides the learning path for developing competencies.
          </Rule>

          <Rule number="05">
            Learner progress is derived from evaluations against defined
            competencies.
          </Rule>
        </div>
      </section>

      {/* Domain Boundary */}
      <section className="space-y-5 border-t border-[#334155] pt-10">
        <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
          Domain Boundary
        </p>

        <h2 className="text-2xl font-semibold">
          The domain is centered on learning and competency development.
        </h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          User accounts, authentication, notifications, administration, and
          other supporting concerns exist around this core domain but do not
          define the fundamental learning model.
        </p>
      </section>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

function DomainCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{description}</p>
    </div>
  );
}

function Relationship({
  left,
  relation,
  right,
}: {
  left: string;
  relation: string;
  right: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-[#334155] p-4 text-sm">
      <span className="font-medium">{left}</span>

      <span className="text-[#94A3B8]">→ {relation} →</span>

      <span className="font-medium">{right}</span>
    </div>
  );
}

function Rule({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-lg border border-[#334155] p-4">
      <span className="shrink-0 text-sm text-[#94A3B8]">{number}</span>

      <p className="text-sm leading-6 text-[#F8FAFC]">{children}</p>
    </div>
  );
}
