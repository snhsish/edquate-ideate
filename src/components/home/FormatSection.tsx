const rounds = [
  {
    round: "Round 1",
    title: "Idea Submission",
    target: "5,000+ entries",
    description: "Submit your structured idea across all seven pillars.",
    highlight: false,
  },
  {
    round: "Round 2",
    title: "Video Pitch",
    target: "Top 500",
    description: "2-minute video pitch. Clarity, conviction, and differentiation.",
    highlight: false,
  },
  {
    round: "Round 3",
    title: "Live Mentorship",
    target: "Top 100",
    description: "Industry experts guide teams to sharpen product and story.",
    highlight: false,
  },
  {
    round: "Round 4",
    title: "National Showcase",
    target: "Top 25",
    description: "Present refined solutions on the national stage.",
    highlight: false,
  },
  {
    round: "Grand Finale",
    title: "Live Presentation",
    target: "Top 10",
    description:
      "Pitch before founders, investors, educators, and industry leaders.",
    highlight: true,
  },
] as const;

export default function FormatSection() {
  return (
    <section id="format" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Multi-Round Format
        </h2>
        <p className="mt-2 text-[#5e5a70]">
          This is where greatness happens. From thousands of ideas to the top 10
          on a national stage.
        </p>
      </div>

      <ol className="relative space-y-0">
        {rounds.map((item, index) => (
          <li key={item.round} className="relative flex gap-4 pb-8 last:pb-0">
            {index < rounds.length - 1 ? (
              <span
                className="absolute left-[15px] top-10 bottom-0 w-px bg-[#e9e8ef]"
                aria-hidden
              />
            ) : null}
            <span
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                item.highlight
                  ? "bg-[#2563eb] text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)]"
                  : "border border-[#e9e8ef] bg-white text-[#6c57a6]"
              }`}
            >
              {index + 1}
            </span>
            <article
              className={`min-w-0 flex-1 rounded-2xl border p-5 ${
                item.highlight
                  ? "border-[#bfdbfe] bg-linear-to-br from-[#eff6ff] via-white to-[#fef5ff] shadow-sm"
                  : "border-[#e9e8ef] bg-white shadow-sm"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#9b8cff]">
                    {item.round}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#2d2840]">
                    {item.title}
                  </h3>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.highlight
                      ? "bg-[#2563eb]/10 text-[#1d4ed8]"
                      : "bg-[#f7f2ff] text-[#5f4591]"
                  }`}
                >
                  {item.target}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#6a6480]">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
