const submissionFields = [
  {
    title: "Problem",
    description: "What exact problem exists?",
  },
  {
    title: "Evidence",
    description: "Why does this problem matter?",
  },
  {
    title: "Solution",
    description: "What are you proposing?",
  },
  {
    title: "Innovation",
    description: "What makes it unique?",
  },
  {
    title: "Execution",
    description: "How can it be built?",
  },
  {
    title: "Impact",
    description: "Who benefits?",
  },
  {
    title: "Scalability",
    description: "Can it reach millions?",
  },
] as const;

export default function SubmissionSection() {
  return (
    <section id="submission" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          What Every Team Submits
        </h2>
        <p className="mt-2 text-[#5e5a70]">
          Structure your idea submission around these seven pillars. Judges and
          mentors evaluate clarity across the full stack.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {submissionFields.map((field, index) => (
          <article
            key={field.title}
            className="rounded-2xl border border-[#e9e8ef] bg-white p-5 shadow-sm transition hover:border-[#ddd5ef] hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[#9b8cff]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-[#2d2840]">
              {field.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#6a6480]">
              {field.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
