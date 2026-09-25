export default function ProblemAndPhilosophyPage() {
  return (
    <article className="space-y-16 text-[#F8FAFC]">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
          Problem & Philosophy
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          Rethinking How Learning Is Measured
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-[#94A3B8]">
          Open School is based on the idea that education should focus on
          developing and demonstrating ability, rather than primarily preparing
          learners for examinations.
        </p>
      </section>

      {/* The Problem */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">The Problem</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Many traditional education systems use examinations as the primary
          mechanism for measuring learning. This creates a model where
          completing a syllabus and achieving a score can become more important
          than developing a demonstrable skill.
        </p>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
            Conventional focus
          </p>

          <p className="mt-3 text-xl font-medium">
            Complete the course → Take the exam → Receive a grade
          </p>
        </div>
      </section>

      {/* Core Question */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">The Core Question</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Instead of asking only whether a learner passed an examination, the
          system asks a more fundamental question:
        </p>

        <blockquote className="border-l-2 border-[#475569] pl-5 text-2xl font-medium leading-9">
          What can the learner actually demonstrate?
        </blockquote>
      </section>

      {/* Philosophy */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Learning Philosophy</h2>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
            Principle
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            Learn to demonstrate competence, not to pass an examination.
          </h3>
        </div>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Learning is treated as a continuous process. Evaluation exists to
          understand whether the learner has developed the intended competency,
          identify gaps, and determine what should be learned next.
        </p>
      </section>

      {/* From Examination to Evaluation */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">
          From Examination to Evaluation
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-[#334155] p-6">
            <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
              Examination-oriented
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#94A3B8]">
              <li>• Focus on a scheduled test</li>
              <li>• Primarily produces a score or grade</li>
              <li>• Often represents a specific point in time</li>
              <li>• Progress is commonly tied to completion</li>
            </ul>
          </div>

          <div className="rounded-lg border border-[#334155] p-6">
            <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
              Evaluation-oriented
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#94A3B8]">
              <li>• Focus on demonstrated ability</li>
              <li>• Produces evidence of competency</li>
              <li>• Can happen throughout the learning process</li>
              <li>• Progress is tied to demonstrated development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Role of Curriculum */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">The Role of Curriculum</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Curriculum is not simply a list of subjects or chapters to complete.
          It is the structured learning path through which learners develop the
          knowledge and abilities required by the defined competencies.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <pre className="text-sm leading-8 text-[#F8FAFC]">
            {`Competency
    ↑
    │
Evaluation
    ↑
    │
Learning Activities
    ↑
    │
Curriculum
    ↑
    │
Learning Goal`}
          </pre>
        </div>
      </section>

      {/* Learner Progress */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Learner Progress</h2>

        <p className="max-w-3xl leading-7 text-[#94A3B8]">
          Progress should represent what the learner has developed, not merely
          how much content has been consumed. A learner may spend different
          amounts of time on different competencies and should be able to
          revisit areas where further development is required.
        </p>
      </section>

      {/* Guiding Principles */}
      <section className="space-y-5 border-t border-[#334155] pt-10">
        <h2 className="text-2xl font-semibold">Guiding Principles</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Competency First",
              text: "Learning outcomes are expressed as abilities that can be demonstrated.",
            },
            {
              title: "Continuous Evaluation",
              text: "Evaluation is part of the learning process rather than only a final event.",
            },
            {
              title: "Evidence-Based Progress",
              text: "Progress is supported by evidence of what the learner can do.",
            },
            {
              title: "Individual Progression",
              text: "Learners can progress according to demonstrated development rather than only a fixed schedule.",
            },
          ].map((principle) => (
            <div
              key={principle.title}
              className="rounded-lg border border-[#334155] p-5"
            >
              <h3 className="font-medium">{principle.title}</h3>

              <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Principle */}
      <section className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
        <p className="text-sm uppercase tracking-wider text-[#94A3B8]">
          System Foundation
        </p>

        <h2 className="mt-3 text-2xl font-semibold">
          Learning → Demonstration → Evaluation → Competency → Progress
        </h2>
      </section>
    </article>
  );
}
