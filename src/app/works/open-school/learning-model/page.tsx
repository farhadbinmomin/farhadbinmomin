export default function LearningModelPage() {
  return (
    <article className="space-y-16 text-[#F8FAFC]">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
          Learning Model
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          How Learning Progresses
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#94A3B8]">
          Open School organizes learning around progressive competency
          development rather than examination-based class progression.
        </p>
      </section>

      {/* Learning Structure */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Learning Structure</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          A learner progresses through a structured learning path. Each stage
          contains levels, and each level contains the curriculum and
          competencies required for that level.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`Learning Path
      │
      ▼
    Stage
      │
      ▼
    Level
      │
      ├── Curriculum
      │      ├── Books
      │      ├── Lessons
      │      └── Activities
      │
      └── Competencies`}
          </pre>
        </div>
      </section>

      {/* Stage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stage</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          A Stage represents a broad phase of a learner's development. It
          provides a high-level boundary for a group of related learning levels
          and competencies.
        </p>
      </section>

      {/* Level */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Level</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          A Level represents a defined progression point within a Stage. It
          groups the curriculum and competencies that a learner is expected to
          develop before progressing further.
        </p>
      </section>

      {/* Curriculum */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Curriculum</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          The curriculum defines what the learner studies. It can contain books,
          lessons, activities, exercises, and other learning materials.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-[#334155] p-5">
            <h3 className="font-medium">Books</h3>
            <p className="mt-2 text-sm text-[#94A3B8]">
              Structured learning content.
            </p>
          </div>

          <div className="rounded-lg border border-[#334155] p-5">
            <h3 className="font-medium">Lessons</h3>
            <p className="mt-2 text-sm text-[#94A3B8]">
              Focused learning units.
            </p>
          </div>

          <div className="rounded-lg border border-[#334155] p-5">
            <h3 className="font-medium">Activities</h3>
            <p className="mt-2 text-sm text-[#94A3B8]">
              Practice and application.
            </p>
          </div>
        </div>
      </section>

      {/* Competency */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Competency</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          A competency represents something the learner should be able to
          demonstrate. It is the central unit used to describe meaningful
          learning progress.
        </p>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
            Example
          </p>

          <p className="mt-3 text-lg font-medium">
            "Can communicate effectively in a basic everyday conversation."
          </p>
        </div>
      </section>

      {/* Evaluation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Evaluation</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Evaluation is used to determine whether a learner can demonstrate a
          competency. It is not simply a final examination; evidence can be
          collected through activities, practical tasks, exercises, and other
          forms of demonstration.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`Learning
   │
   ▼
Practice / Activity
   │
   ▼
Evidence
   │
   ▼
Evaluation
   │
   ▼
Competency Progress`}
          </pre>
        </div>
      </section>

      {/* Progression */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Progression</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Progress is based on demonstrated competencies rather than simply
          completing a fixed amount of content or passing a scheduled exam.
        </p>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`Learn
  ↓
Practice
  ↓
Demonstrate
  ↓
Evaluate
  ↓
Competency achieved
  ↓
Progress to the next competency / level`}
          </pre>
        </div>
      </section>

      {/* Design Principle */}
      <section className="border-t border-[#334155] pt-8">
        <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
          Design Principle
        </p>

        <h2 className="mt-3 text-2xl font-semibold">
          Progress represents demonstrated ability.
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-[#94A3B8]">
          This principle drives the structure of the curriculum, evaluation
          system, learner progress tracking, and ultimately the system's domain
          model.
        </p>
      </section>
    </article>
  );
}
