export default function OpenSchoolOverview() {
  return (
    <article className="space-y-16 text-[#F8FAFC]">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
          Open School
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Competency-Based Learning System
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#94A3B8]">
          A learning system designed around continuous learning and competency
          evaluation rather than traditional examination-based education.
        </p>
      </section>

      {/* Core Philosophy */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Core Philosophy</h2>

        <blockquote className="border-l-2 border-[#475569] pl-5 text-xl font-medium leading-8 text-[#F8FAFC]">
          Learn to demonstrate competence, not to pass an examination.
        </blockquote>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The system focuses on what a learner can understand, apply, and
          demonstrate instead of defining progress primarily through exam
          scores.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">The Problem</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Traditional learning systems commonly organize progression around
          classes, courses, examinations, and grades. This system explores a
          different model where learning progression is connected directly to
          demonstrated competencies.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
            <p className="mb-3 text-sm uppercase tracking-wider text-[#94A3B8]">
              Traditional Model
            </p>

            <p className="font-medium">Course → Class → Exam → Grade</p>
          </div>

          <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
            <p className="mb-3 text-sm uppercase tracking-wider text-[#94A3B8]">
              Open School Model
            </p>

            <p className="font-medium">
              Curriculum → Learning → Practice → Evaluation → Competency
            </p>
          </div>
        </div>
      </section>

      {/* Core Question */}
      <section className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
        <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
          Core Question
        </p>

        <h2 className="mt-3 text-2xl font-semibold">
          What can the learner demonstrate?
        </h2>
      </section>

      {/* Initial Scope */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Initial Learning Scope</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The initial system focuses on two foundational learning areas:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-[#334155] p-5">
            <h3 className="font-medium">Communication English</h3>
            <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
              Developing practical communication and language competencies.
            </p>
          </div>

          <div className="rounded-lg border border-[#334155] p-5">
            <h3 className="font-medium">Mathematical & Logical Thinking</h3>
            <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
              Developing mathematical reasoning, problem solving, and logical
              thinking.
            </p>
          </div>
        </div>
      </section>

      {/* System Perspective */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">System Perspective</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The platform connects the learner, curriculum, competencies, and
          evaluation into a single learning progression model.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`Learner
   │
   ├── Learning Path
   │      └── Stage → Level
   │
   ├── Curriculum
   │      └── Books / Lessons / Activities
   │
   ├── Competencies
   │      └── Skills to demonstrate
   │
   └── Evaluation
          └── Evidence → Assessment → Competency Progress`}
          </pre>
        </div>
      </section>

      {/* Design Direction */}
      <section className="border-t border-[#334155] pt-8">
        <p className="text-sm text-[#94A3B8]">
          The next step is to define the learning model and establish what
          Stage, Level, Curriculum, Competency, Evaluation, and Progress mean
          within the system.
        </p>
      </section>
    </article>
  );
}
