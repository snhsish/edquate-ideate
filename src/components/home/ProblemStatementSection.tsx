const problemStatements = [
  {
    title: "Classroom Engagement",
    description:
      "Create an innovative system to improve student engagement in traditional or online classrooms.",
    card: "border-[#ffd4c8] bg-linear-to-br from-[#fff0eb] via-[#ffe8f0] to-[#fff5e0] shadow-[0_14px_40px_rgba(255,140,100,0.14)]",
    orbTop: "bg-[#ffb8a8]/70",
    orbBottom: "bg-[#ffe08a]/65",
  },
  {
    title: "Language Accessibility",
    description:
      "Build a tool that makes educational content accessible in multiple regional languages.",
    card: "border-[#a8e8d8] bg-linear-to-br from-[#e8fff8] via-[#eefcff] to-[#e8f0ff] shadow-[0_14px_40px_rgba(56,178,172,0.14)]",
    orbTop: "bg-[#7ee8d0]/65",
    orbBottom: "bg-[#8ec8ff]/60",
  },
  {
    title: "Doubt Solving System",
    description:
      "Design a platform where students can privately and instantly resolve academic doubts.",
    card: "border-[#c4d4ff] bg-linear-to-br from-[#eef4ff] via-[#f0ecff] to-[#e6f4ff] shadow-[0_14px_40px_rgba(99,130,246,0.14)]",
    orbTop: "bg-[#b8c8ff]/70",
    orbBottom: "bg-[#c8b8ff]/65",
  },
  {
    title: "Teacher Productivity",
    description:
      "Build a system to reduce teacher workload through automation of tasks like grading and planning.",
    card: "border-[#c4e8b8] bg-linear-to-br from-[#f0fff0] via-[#f6fff2] to-[#fff8e8] shadow-[0_14px_40px_rgba(74,160,90,0.14)]",
    orbTop: "bg-[#a8e8a0]/65",
    orbBottom: "bg-[#e8e0a8]/60",
  },
  {
    title: "AI Career Guidance",
    description:
      "Develop a system that provides data-driven career recommendations to students.",
    card: "border-[#ddd0ff] bg-linear-to-br from-[#f5f0ff] via-[#fff0fa] to-[#eef6ff] shadow-[0_14px_40px_rgba(139,108,246,0.16)]",
    orbTop: "bg-[#d8c0ff]/70",
    orbBottom: "bg-[#ffc8e8]/60",
  },
  {
    title: "Focus & Productivity",
    description:
      "Create a tool that helps students minimize distractions and improve study focus.",
    card: "border-[#c8d4e4] bg-linear-to-br from-[#f4f7fb] via-[#faf8ff] to-[#eef6f2] shadow-[0_14px_40px_rgba(100,116,139,0.12)]",
    orbTop: "bg-[#b8c8e0]/65",
    orbBottom: "bg-[#c0e8d8]/55",
  },
] as const;

function ProblemStatementCard({
  title,
  description,
  card,
  orbTop,
  orbBottom,
}: (typeof problemStatements)[number]) {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl border p-6 md:p-7 ${card}`}
    >
      <div
        className={`pointer-events-none absolute -left-12 -top-14 h-40 w-40 rounded-full blur-3xl ${orbTop}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -bottom-16 right-0 h-48 w-48 rounded-full blur-3xl ${orbBottom}`}
        aria-hidden
      />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold tracking-tight text-[#271f3a]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#5f5875] md:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function ProblemStatementSection() {
  return (
    <section id="problem-statement" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Problem Statements
        </h2>
        <p className="mt-2 text-[#5e5a70]">
          Pick a track that resonates with your team and build a solution that
          matters.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {problemStatements.map((statement) => (
          <ProblemStatementCard key={statement.title} {...statement} />
        ))}
      </div>
    </section>
  );
}
