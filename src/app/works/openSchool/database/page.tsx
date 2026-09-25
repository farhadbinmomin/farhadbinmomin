export default function DatabasePage() {
  return (
    <article className="space-y-16 text-[#F8FAFC]">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
          Database
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Data Model & Persistence
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#94A3B8]">
          The database translates the domain model into persistent entities and
          relationships while keeping learner progress, curriculum, competency,
          and evaluation traceable.
        </p>
      </section>

      {/* ERD */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">
            Entity Relationship Diagram
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-[#94A3B8]">
            The core data model connects learners to their learning path,
            curriculum, competencies, evidence, evaluations, and progress.
          </p>
        </div>

        {/* Replace the src with your actual ERD image */}
        <div className="overflow-hidden rounded-lg border border-[#334155] bg-[#1E293B]">
          <div className="flex min-h-105 items-center justify-center p-8">
            <div className="w-full max-w-4xl overflow-x-auto">
              <pre className="text-sm leading-7 text-[#F8FAFC]">
                {`┌──────────────┐
│    User      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Learner    │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ Learning Path     │
└────────┬─────────┘
         │
         ▼
┌──────────────┐       ┌──────────────┐
│    Stage     │──────►│    Level     │
└──────────────┘       └──────┬───────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
             ┌──────────────┐    ┌──────────────┐
             │  Curriculum  │    │ Competency   │
             └──────┬───────┘    └──────┬───────┘
                    │                   │
                    ▼                   │
             ┌──────────────┐           │
             │   Activity   │           │
             └──────┬───────┘           │
                    │                   │
                    ▼                   │
             ┌──────────────┐           │
             │   Evidence   │───────────┤
             └──────┬───────┘           │
                    │                   │
                    ▼                   ▼
             ┌────────────────────────────┐
             │        Evaluation          │
             └────────────┬───────────────┘
                          │
                          ▼
                   ┌──────────────┐
                   │    Progress  │
                   └──────────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Core Entities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Core Entities</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <EntityCard
            name="User"
            description="Identity and account information used to access the platform."
          />

          <EntityCard
            name="Learner"
            description="Represents a user's participation in the learning system."
          />

          <EntityCard
            name="Learning Path"
            description="Defines the learner's progression through stages and levels."
          />

          <EntityCard
            name="Stage"
            description="A broad phase of learning containing related levels."
          />

          <EntityCard
            name="Level"
            description="A defined progression point containing curriculum and competency requirements."
          />

          <EntityCard
            name="Curriculum"
            description="Structured learning content associated with a learning level."
          />

          <EntityCard
            name="Activity"
            description="A learning or practice activity performed by the learner."
          />

          <EntityCard
            name="Competency"
            description="A defined ability or outcome that the learner should demonstrate."
          />

          <EntityCard
            name="Evidence"
            description="A learner-produced result that can be evaluated."
          />

          <EntityCard
            name="Evaluation"
            description="An assessment of evidence against a competency's requirements."
          />

          <EntityCard
            name="Progress"
            description="The learner's current competency development state."
          />
        </div>
      </section>

      {/* Relationship Model */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Relationship Model</h2>

        <div className="space-y-3">
          <Relationship left="User" relation="has" right="Learner" />

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

          <Relationship left="Level" relation="defines" right="Curriculum" />

          <Relationship left="Level" relation="defines" right="Competencies" />

          <Relationship
            left="Curriculum"
            relation="contains"
            right="Activities"
          />

          <Relationship left="Activity" relation="produces" right="Evidence" />

          <Relationship
            left="Evidence"
            relation="is evaluated by"
            right="Evaluation"
          />

          <Relationship
            left="Evaluation"
            relation="measures"
            right="Competency"
          />

          <Relationship left="Evaluation" relation="updates" right="Progress" />
        </div>
      </section>

      {/* Important Design Decisions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Database Design Decisions</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <DecisionCard
            title="Competency Is Independent"
            text="Competency definitions are stored independently from individual learner progress so the same competency can be evaluated for many learners."
          />

          <DecisionCard
            title="Progress Is Learner-Specific"
            text="A learner's competency state is stored separately from the competency definition."
          />

          <DecisionCard
            title="Evaluation Is Traceable"
            text="Evaluation records connect evidence with the competency being assessed."
          />

          <DecisionCard
            title="Curriculum Is Structured"
            text="Learning content and activities are organized through the curriculum instead of being directly attached to individual learners."
          />
        </div>
      </section>

      {/* Data Flow */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Data Flow</h2>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="overflow-x-auto text-sm leading-8 text-[#F8FAFC]">
            {`Learner
   │
   ▼
Learning Activity
   │
   ▼
Evidence
   │
   ▼
Evaluation ───────────► Competency
   │
   ▼
Learner Progress
   │
   ▼
Learning Path Progress`}
          </pre>
        </div>
      </section>

      {/* Integrity */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Data Integrity</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The database should preserve the relationship between what was
          learned, what was demonstrated, how it was evaluated, and what
          competency state resulted from that evaluation.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <IntegrityCard
            title="Traceability"
            text="Competency progress can be traced back to evaluation and evidence."
          />

          <IntegrityCard
            title="Consistency"
            text="Learner progress should remain consistent with recorded evaluation results."
          />

          <IntegrityCard
            title="History"
            text="Evaluation records provide a historical record of demonstrated learning."
          />
        </div>
      </section>

      {/* Schema Note */}
      <section className="border-t border-[#334155] pt-10">
        <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
          Implementation
        </p>

        <h2 className="mt-3 text-2xl font-semibold">
          ERD first, schema second.
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-[#94A3B8]">
          The database schema is derived from the domain model and ERD. The
          implementation may use PostgreSQL with Prisma, while the conceptual
          relationships remain independent of the ORM.
        </p>
      </section>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

function EntityCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <h3 className="font-medium">{name}</h3>

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

function DecisionCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-[#334155] p-5">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{text}</p>
    </div>
  );
}

function IntegrityCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{text}</p>
    </div>
  );
}
