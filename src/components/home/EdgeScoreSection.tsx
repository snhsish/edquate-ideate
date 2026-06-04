const edgeCriteria = [
  {
    letter: "E",
    name: "Execution Potential",
    points: 20,
    description: "Can it realistically be built?",
    accent: "from-[#ff9fc7] to-[#f5a55a]",
    bg: "bg-[#fff5f8]",
    border: "border-[#ffd4e8]",
  },
  {
    letter: "D",
    name: "Differentiation",
    points: 20,
    description: "Is it genuinely new?",
    accent: "from-[#f5a55a] to-[#9b8cff]",
    bg: "bg-[#fff9f0]",
    border: "border-[#ffe8c8]",
  },
  {
    letter: "G",
    name: "Growth Potential",
    points: 20,
    description: "Can it scale?",
    accent: "from-[#9b8cff] to-[#6bcb77]",
    bg: "bg-[#f5f2ff]",
    border: "border-[#e8e1fb]",
  },
  {
    letter: "E",
    name: "Expected Impact",
    points: 20,
    description: "How many lives can it improve?",
    accent: "from-[#6bcb77] to-[#4d96ff]",
    bg: "bg-[#f0fff4]",
    border: "border-[#c8f0d8]",
  },
] as const;

export default function EdgeScoreSection() {
  return (
    <section id="edge-score" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-[#e9e8ef] bg-linear-to-br from-[#faf8ff] via-white to-[#f0f7ff] p-6 md:p-10">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#e8e1fb]/50 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10">
          <div className="mb-8 max-w-2xl">
            <span className="rounded-full border border-[#eadfff] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#6c57a6]">
              Evaluation Framework
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              The{" "}
              <span className="animated-gradient-ltr bg-linear-to-r from-[#ff9fc7] via-[#f5a55a] to-[#9b8cff] bg-clip-text text-transparent">
                E.D.G.E
              </span>{" "}
              Score
            </h2>
            <p className="mt-2 text-[#5e5a70]">
              Memorable, transparent judging. 100 points total. Four core
              dimensions plus a future-readiness bonus.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {edgeCriteria.map((criterion) => (
              <article
                key={criterion.name}
                className={`rounded-2xl border p-5 ${criterion.bg} ${criterion.border}`}
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${criterion.accent} text-xl font-bold text-white shadow-sm`}
                >
                  {criterion.letter}
                </div>
                <h3 className="mt-4 font-semibold text-[#2d2840]">
                  {criterion.name}
                </h3>
                <p className="mt-1 text-2xl font-bold text-[#5f4591]">
                  {criterion.points}{" "}
                  <span className="text-sm font-medium text-[#7a7491]">
                    pts
                  </span>
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6a6480]">
                  {criterion.description}
                </p>
              </article>
            ))}
          </div>

          <article className="mt-4 rounded-2xl border border-dashed border-[#c4b8f0] bg-[#f7f2ff] p-5 md:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6c57a6]">
                  Bonus
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#2d2840]">
                  Future Readiness
                </h3>
                <p className="mt-1 text-sm text-[#6a6480]">
                  Will it matter in 5 years?
                </p>
              </div>
              <p className="text-3xl font-bold text-[#5f4591]">
                20{" "}
                <span className="text-base font-medium text-[#7a7491]">
                  bonus pts
                </span>
              </p>
            </div>
          </article>

          <p className="mt-6 text-center text-sm font-medium text-[#7a7491]">
            Total score:{" "}
            <span className="text-lg font-bold text-[#2d2840]">100 points</span>
          </p>
        </div>
      </div>
    </section>
  );
}
