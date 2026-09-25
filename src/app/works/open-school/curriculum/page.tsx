export default function CurriculumPage() {
  return (
    <article className="space-y-16 text-[#F8FAFC]">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
          Curriculum & Evaluation
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          From Learning Content to Demonstrated Competency
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#94A3B8]">
          The curriculum defines the learning journey, while evaluation
          determines whether the learner has developed and can demonstrate the
          intended competencies.
        </p>
      </section>

      {/* Core Relationship */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Core Relationship</h2>

        <div className="overflow-x-auto rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`Learning Goal
      │
      ▼
Competency
      │
      ▼
Curriculum
      │
      ├── Book
      ├── Lesson
      ├── Activity
      └── Practice
             │
             ▼
          Evidence
             │
             ▼
         Evaluation
             │
             ▼
     Competency Status
             │
             ▼
       Learner Progress`}
          </pre>
        </div>
      </section>

      {/* Curriculum */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Curriculum</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Curriculum is the structured definition of what a learner needs to
          study and practice. It connects learning resources and activities to
          the competencies they are intended to develop.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <CurriculumCard
            title="Learning Goals"
            text="Define the broader abilities and outcomes expected from a learning area."
          />

          <CurriculumCard
            title="Competencies"
            text="Define the specific abilities that a learner should eventually demonstrate."
          />

          <CurriculumCard
            title="Learning Content"
            text="Books, lessons, explanations, examples, and other structured learning resources."
          />

          <CurriculumCard
            title="Activities"
            text="Exercises and practical tasks through which learners practice and apply what they learn."
          />
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Curriculum Structure</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The curriculum is organized so that learning resources support
          specific competencies rather than existing as an unrelated collection
          of content.
        </p>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`Stage
 │
 └── Level
      │
      ├── Learning Area
      │      │
      │      ├── Competency A
      │      │      ├── Lesson
      │      │      ├── Practice
      │      │      └── Activity
      │      │
      │      └── Competency B
      │             ├── Lesson
      │             ├── Practice
      │             └── Activity
      │
      └── Evaluation Requirements`}
          </pre>
        </div>
      </section>

      {/* Evaluation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Evaluation</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Evaluation is the mechanism used to determine whether the learner can
          demonstrate a defined competency. It is part of the learning process
          rather than only a final examination.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <EvaluationCard
            title="Evidence"
            text="Something produced or demonstrated by the learner that can be evaluated."
          />

          <EvaluationCard
            title="Assessment"
            text="A structured process for reviewing the evidence against defined criteria."
          />

          <EvaluationCard
            title="Competency Result"
            text="The resulting state describing the learner's demonstrated competency."
          />
        </div>
      </section>

      {/* Evidence */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Evidence-Based Evaluation</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Evidence provides the connection between learning activities and
          competency decisions. Different competencies may require different
          types of evidence.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Written response",
            "Problem solving",
            "Practical task",
            "Communication / Speaking",
          ].map((type) => (
            <div key={type} className="rounded-lg border border-[#334155] p-5">
              <p className="text-sm font-medium">{type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Evaluation Flow */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Evaluation Flow</h2>

        <div className="overflow-x-auto rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`Learner
   │
   ▼
Complete Activity
   │
   ▼
Submit Evidence
   │
   ▼
Evaluation
   │
   ├── Criteria
   ├── Evidence
   └── Assessment
   │
   ▼
Competency Result
   │
   ▼
Progress Updated`}
          </pre>
        </div>
      </section>

      {/* Competency State */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Competency Progress</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          A learner's progress is maintained against individual competencies.
          The system can therefore identify which competencies have been
          demonstrated and which still require development.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <StatusCard
            title="Not Started"
            text="The learner has not yet begun work toward the competency."
          />

          <StatusCard
            title="In Progress"
            text="The learner is developing the competency but has not yet demonstrated it sufficiently."
          />

          <StatusCard
            title="Demonstrated"
            text="Available evaluation evidence indicates that the learner has demonstrated the competency."
          />
        </div>
      </section>

      {/* Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Example: Communication Competency
        </h2>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
            Competency
          </p>

          <h3 className="mt-3 text-xl font-medium">
            Communicate effectively in a basic everyday conversation.
          </h3>

          <div className="mt-6 space-y-3 text-sm">
            <FlowRow number="01" text="Study relevant communication lessons." />
            <FlowRow number="02" text="Practice through guided activities." />
            <FlowRow number="03" text="Complete a practical speaking task." />
            <FlowRow
              number="04"
              text="Submit or perform the required evidence."
            />
            <FlowRow
              number="05"
              text="Evaluator reviews the evidence against criteria."
            />
            <FlowRow number="06" text="Competency status is updated." />
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="space-y-6 border-t border-[#334155] pt-10">
        <h2 className="text-2xl font-semibold">Design Principles</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Principle
            title="Curriculum Supports Competency"
            text="Learning content exists to help learners develop defined abilities."
          />

          <Principle
            title="Evaluation Measures Demonstration"
            text="Evaluation focuses on what the learner can demonstrate, not only what content was completed."
          />

          <Principle
            title="Evidence Is Traceable"
            text="Competency decisions should be supported by identifiable learner evidence."
          />

          <Principle
            title="Progress Is Competency-Based"
            text="Learner progress reflects competency development rather than simply course completion."
          />
        </div>
      </section>

      {/* Closing */}
      <section className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
        <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
          Core Model
        </p>

        <h2 className="mt-3 text-2xl font-semibold">
          Curriculum enables learning. Evaluation establishes demonstrated
          competency.
        </h2>
      </section>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

function CurriculumCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{text}</p>
    </div>
  );
}

function EvaluationCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-[#334155] p-5">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{text}</p>
    </div>
  );
}

function StatusCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{text}</p>
    </div>
  );
}

function FlowRow({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex gap-4 rounded-md border border-[#334155] p-3">
      <span className="text-[#94A3B8]">{number}</span>
      <span>{text}</span>
    </div>
  );
}

function Principle({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-[#334155] p-5">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{text}</p>
    </div>
  );
}
