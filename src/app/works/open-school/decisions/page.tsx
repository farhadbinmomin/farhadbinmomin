import {
  ArrowRight,
  Check,
  Database,
  GitBranch,
  Layers3,
  Target,
  Workflow,
} from "lucide-react";

const decisions = [
  {
    number: "01",
    icon: <Target className="h-4 w-4" />,
    title: "Competency Is the Core Unit",
    problem:
      "Traditional systems often organize progress around courses, classes, and exams.",
    decision: "The system models competency as the primary learning outcome.",
    reason:
      "This allows progress to represent what a learner can actually demonstrate.",
  },
  {
    number: "02",
    icon: <Workflow className="h-4 w-4" />,
    title: "Evaluation Is Evidence-Based",
    problem:
      "A final examination provides only a limited snapshot of learning.",
    decision:
      "Evaluation is linked to concrete evidence produced by the learner.",
    reason:
      "Every competency result can be traced back to an actual demonstration.",
  },
  {
    number: "03",
    icon: <GitBranch className="h-4 w-4" />,
    title: "Curriculum and Competency Are Separate",
    problem:
      "Tightly coupling competencies to individual lessons makes the learning model rigid.",
    decision: "Competencies exist independently from curriculum content.",
    reason:
      "The same competency can be developed through different lessons, activities, or learning paths.",
  },
  {
    number: "04",
    icon: <Database className="h-4 w-4" />,
    title: "Progress Is Derived From Evaluation",
    problem:
      "Tracking only completed lessons does not prove that learning occurred.",
    decision:
      "Learner progress is based on evaluation results against competencies.",
    reason:
      "Content completion and demonstrated ability remain separate concepts.",
  },
  {
    number: "05",
    icon: <Layers3 className="h-4 w-4" />,
    title: "Domain Logic Is Infrastructure-Independent",
    problem:
      "Learning rules become difficult to maintain when mixed with database, API, or UI concerns.",
    decision:
      "The learning domain is separated from application and infrastructure layers.",
    reason:
      "Core learning rules can evolve without depending on a specific delivery mechanism.",
  },
];

export default function EngineeringDecisionsPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
          Step 08
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-[#F8FAFC]">
          Engineering Decisions
        </h1>

        <p className="max-w-3xl text-base leading-7 text-[#94A3B8]">
          The important engineering decisions are driven by the learning
          philosophy. The architecture and data model should preserve those
          rules rather than simply reproduce a traditional education platform.
        </p>
      </section>

      {/* Decision principles */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Decision Framework
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            From Learning Philosophy to System Design
          </h2>
        </div>

        <div className="flex flex-col gap-3 rounded-lg border border-[#334155] bg-[#1E293B] p-6 md:flex-row md:items-center md:justify-center">
          <DecisionNode label="Learning Philosophy" />
          <ArrowRight className="hidden h-4 w-4 text-[#475569] md:block" />
          <DecisionNode label="Domain Rules" />
          <ArrowRight className="hidden h-4 w-4 text-[#475569] md:block" />
          <DecisionNode label="Data Model" />
          <ArrowRight className="hidden h-4 w-4 text-[#475569] md:block" />
          <DecisionNode label="Architecture" />
        </div>
      </section>

      {/* Decisions */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Key Decisions
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            Decisions That Shape the System
          </h2>
        </div>

        <div className="space-y-4">
          {decisions.map((decision) => (
            <article
              key={decision.number}
              className="rounded-lg border border-[#334155] bg-[#1E293B] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#475569] bg-[#0F172A] text-xs font-medium text-[#94A3B8]">
                  {decision.number}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#94A3B8]">{decision.icon}</span>

                    <h3 className="text-base font-semibold text-[#F8FAFC]">
                      {decision.title}
                    </h3>
                  </div>

                  <div className="mt-5 grid gap-5 md:grid-cols-3">
                    <DecisionPart label="Problem" value={decision.problem} />

                    <DecisionPart
                      label="Decision"
                      value={decision.decision}
                      highlighted
                    />

                    <DecisionPart label="Reason" value={decision.reason} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Trade-offs */}
      <section className="space-y-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Trade-offs
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            What These Decisions Cost
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Tradeoff
            title="More Domain Complexity"
            description="Competency, evidence, evaluation, and progress require more explicit modeling than a simple course/exam system."
          />

          <Tradeoff
            title="More Data Traceability"
            description="Evaluation history and evidence must be retained so competency decisions remain explainable."
          />

          <Tradeoff
            title="Flexible Curriculum"
            description="Separating curriculum from competency requires stronger relationships between learning content and outcomes."
          />
        </div>
      </section>

      {/* Final principle */}
      <section className="border-t border-[#334155] pt-10">
        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <div className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#94A3B8]" />

            <div>
              <p className="text-sm font-medium text-[#F8FAFC]">
                Engineering principle
              </p>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#94A3B8]">
                The system should make it difficult to confuse content
                completion with learning. Curriculum enables learning, evidence
                enables demonstration, evaluation establishes competency, and
                competency determines meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DecisionNode({ label }: { label: string }) {
  return (
    <div className="rounded-md border border-[#334155] bg-[#0F172A] px-4 py-3 text-center text-sm font-medium text-[#F8FAFC]">
      {label}
    </div>
  );
}

function DecisionPart({
  label,
  value,
  highlighted = false,
}: {
  label: string;
  value: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-md border p-4 ${
        highlighted
          ? "border-[#475569] bg-[#0F172A]"
          : "border-[#334155] bg-[#0F172A]/50"
      }`}
    >
      <p className="text-[10px] font-medium uppercase tracking-widest text-[#94A3B8]">
        {label}
      </p>

      <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{value}</p>
    </div>
  );
}

function Tradeoff({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <h3 className="text-sm font-semibold text-[#F8FAFC]">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-[#94A3B8]">{description}</p>
    </div>
  );
}
