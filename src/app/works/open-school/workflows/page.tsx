import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  RefreshCw,
  Target,
  User,
} from "lucide-react";

export default function KeyWorkflowsPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
          Step 07
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-[#F8FAFC]">
          Key Workflows
        </h1>

        <p className="max-w-3xl text-base leading-7 text-[#94A3B8]">
          The system is organized around learning, demonstration, evaluation,
          and competency progression. These workflows describe the most
          important domain-level interactions.
        </p>
      </section>

      {/* Workflow 01 */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Workflow 01
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            Learner Progression
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
            The primary learning workflow moves a learner from curriculum
            participation toward demonstrated competency.
          </p>
        </div>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <FlowCard
              icon={<User className="h-4 w-4" />}
              title="Learner"
              description="Enters learning path"
            />

            <Arrow />

            <FlowCard
              icon={<BookOpen className="h-4 w-4" />}
              title="Curriculum"
              description="Studies lessons"
            />

            <Arrow />

            <FlowCard
              icon={<Target className="h-4 w-4" />}
              title="Practice"
              description="Builds competency"
            />

            <Arrow />

            <FlowCard
              icon={<FileText className="h-4 w-4" />}
              title="Evidence"
              description="Demonstrates ability"
            />

            <Arrow />

            <FlowCard
              icon={<CheckCircle2 className="h-4 w-4" />}
              title="Progress"
              description="Competency updated"
            />
          </div>
        </div>
      </section>

      {/* Workflow 02 */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Workflow 02
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            Evidence & Evaluation
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
            Evaluation is based on something the learner actually produces,
            rather than simply completing a lesson.
          </p>
        </div>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <WorkflowRow
            number="01"
            title="Complete Activity"
            description="Learner performs a learning or practice activity."
          />

          <WorkflowConnector />

          <WorkflowRow
            number="02"
            title="Submit Evidence"
            description="The resulting work, response, or performance becomes evidence."
          />

          <WorkflowConnector />

          <WorkflowRow
            number="03"
            title="Evaluate Evidence"
            description="Evaluator checks the evidence against defined competency criteria."
          />

          <WorkflowConnector />

          <WorkflowRow
            number="04"
            title="Record Result"
            description="The system stores the evaluation result and its relationship to the evidence."
          />

          <WorkflowConnector />

          <WorkflowRow
            number="05"
            title="Update Competency Progress"
            description="Learner progress is updated according to the demonstrated result."
          />
        </div>
      </section>

      {/* Workflow 03 */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Workflow 03
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            Curriculum → Competency
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
            Curriculum is designed backward from the abilities learners are
            expected to demonstrate.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <ConceptCard
            icon={<GraduationCap className="h-4 w-4" />}
            title="Learning Goal"
            description="Defines what the learner should develop."
          />

          <ConceptCard
            icon={<Target className="h-4 w-4" />}
            title="Competency"
            description="Defines the observable ability."
          />

          <ConceptCard
            icon={<BookOpen className="h-4 w-4" />}
            title="Curriculum"
            description="Organizes lessons and activities."
          />

          <ConceptCard
            icon={<ClipboardCheck className="h-4 w-4" />}
            title="Evaluation"
            description="Defines how the ability is demonstrated."
          />
        </div>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
          <p className="text-sm font-medium text-[#F8FAFC]">
            Design relationship
          </p>

          <p className="mt-3 text-sm leading-7 text-[#94A3B8]">
            Learning Goal → Competency → Curriculum → Activities → Evidence →
            Evaluation
          </p>
        </div>
      </section>

      {/* Workflow 04 */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Workflow 04
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#F8FAFC]">
            Re-learning & Re-evaluation
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
            An unsuccessful evaluation does not represent examination failure.
            It identifies an area that requires further learning and practice.
          </p>
        </div>

        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <FlowCard
              icon={<ClipboardCheck className="h-4 w-4" />}
              title="Evaluation"
              description="Evidence reviewed"
            />

            <Arrow />

            <FlowCard
              icon={<RefreshCw className="h-4 w-4" />}
              title="Needs More Learning"
              description="Competency not yet demonstrated"
            />

            <Arrow />

            <FlowCard
              icon={<BookOpen className="h-4 w-4" />}
              title="Practice"
              description="Learner continues learning"
            />

            <Arrow />

            <FlowCard
              icon={<FileText className="h-4 w-4" />}
              title="New Evidence"
              description="Another demonstration"
            />

            <Arrow />

            <FlowCard
              icon={<CheckCircle2 className="h-4 w-4" />}
              title="Re-evaluate"
              description="Competency can be demonstrated later"
            />
          </div>
        </div>
      </section>

      {/* Core workflow */}
      <section className="border-t border-[#334155] pt-10">
        <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Core System Workflow
          </p>

          <h2 className="mt-3 text-lg font-semibold text-[#F8FAFC]">
            Learning → Demonstration → Evaluation → Competency → Progress
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#94A3B8]">
            This workflow represents the central business process of the Open
            School system. Content is only a means of learning; demonstrated
            competency is what ultimately determines progression.
          </p>
        </div>
      </section>
    </div>
  );
}

function FlowCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full rounded-md border border-[#334155] bg-[#0F172A] p-4 md:w-40">
      <div className="flex items-center gap-2 text-[#F8FAFC]">
        {icon}
        <span className="text-sm font-medium">{title}</span>
      </div>

      <p className="mt-2 text-xs leading-5 text-[#94A3B8]">{description}</p>
    </div>
  );
}

function Arrow() {
  return (
    <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#475569] md:block" />
  );
}

function WorkflowRow({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-[#475569] bg-[#0F172A] text-xs font-medium text-[#94A3B8]">
        {number}
      </div>

      <div>
        <h3 className="text-sm font-medium text-[#F8FAFC]">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#94A3B8]">{description}</p>
      </div>
    </div>
  );
}

function WorkflowConnector() {
  return <div className="ml-3.5 h-7 border-l border-[#334155]" />;
}

function ConceptCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
      <div className="flex items-center gap-2 text-[#F8FAFC]">
        {icon}
        <h3 className="text-sm font-medium">{title}</h3>
      </div>

      <p className="mt-3 text-sm leading-6 text-[#94A3B8]">{description}</p>
    </div>
  );
}
