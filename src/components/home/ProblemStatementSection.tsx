const tracks = [
  {
    track: 1,
    title: "Future of Learning",
    card: "border-[#ffd4c8] bg-linear-to-br from-[#fff0eb] via-[#ffe8f0] to-[#fff5e0] shadow-[0_14px_40px_rgba(255,140,100,0.14)]",
    orbTop: "bg-[#ffb8a8]/70",
    orbBottom: "bg-[#ffe08a]/65",
    problems: [
      "How can AI create a personalized learning experience for every student?",
      "How can education become skill-first instead of degree-first?",
      "How can rural learners access world-class education?",
      "How can learning become addictive and engaging?",
      "How can students learn 10x faster?",
      "Can AI replace one-size-fits-all education?",
    ],
  },
  {
    track: 2,
    title: "Future Careers & Employability",
    card: "border-[#a8e8d8] bg-linear-to-br from-[#e8fff8] via-[#eefcff] to-[#e8f0ff] shadow-[0_14px_40px_rgba(56,178,172,0.14)]",
    orbTop: "bg-[#7ee8d0]/65",
    orbBottom: "bg-[#8ec8ff]/60",
    problems: [
      "What will jobs look like in 2035?",
      "How can AI improve human productivity & career discovery?",
      "How can freshers prove skills without experience?",
      "How can companies identify future talent?",
      "What replaces the traditional resume?",
    ],
  },
  {
    track: 3,
    title: "AI for Human Intelligence",
    card: "border-[#c4d4ff] bg-linear-to-br from-[#eef4ff] via-[#f0ecff] to-[#e6f4ff] shadow-[0_14px_40px_rgba(99,130,246,0.14)]",
    orbTop: "bg-[#b8c8ff]/70",
    orbBottom: "bg-[#c8b8ff]/65",
    problems: [
      "AI for accessibility",
      "AI for mental wellbeing",
      "AI for public services",
      "AI for social impact",
      "How can AI improve critical thinking?",
      "How can AI reduce educational inequality?",
    ],
  },
  {
    track: 4,
    title: "Creator Economy & Personal Growth",
    card: "border-[#c4e8b8] bg-linear-to-br from-[#f0fff0] via-[#f6fff2] to-[#fff8e8] shadow-[0_14px_40px_rgba(74,160,90,0.14)]",
    orbTop: "bg-[#a8e8a0]/65",
    orbBottom: "bg-[#e8e0a8]/60",
    problems: [
      "How can people monetize knowledge?",
      "How can students build personal brands?",
      "How can creators learn faster?",
      "How can communities accelerate growth?",
    ],
  },
  {
    track: 5,
    title: "Open Innovation",
    card: "border-[#ddd0ff] bg-linear-to-br from-[#f5f0ff] via-[#fff0fa] to-[#eef6ff] shadow-[0_14px_40px_rgba(139,108,246,0.16)]",
    orbTop: "bg-[#d8c0ff]/70",
    orbBottom: "bg-[#ffc8e8]/60",
    problems: [
      "Bring any future-focused idea.",
      "What is the biggest challenge facing students and young professionals in the next decade, and how would you solve it?",
    ],
    isOpen: true,
  },
] as const;

function TrackCard({
  track,
  title,
  problems,
  card,
  orbTop,
  orbBottom,
  isOpen = false,
}: (typeof tracks)[number] & { isOpen?: boolean }) {
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
        <span className="inline-flex rounded-full border border-white/70 bg-white/60 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#6c57a6]">
          Track {track}
        </span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#271f3a]">
          {title}
        </h3>
        {isOpen ? (
          <p className="mt-3 text-sm leading-7 text-[#5f5875] md:text-base">
            Participants can bring any future-focused idea. Use the guiding
            question below, or define your own challenge.
          </p>
        ) : null}
        <ul className="mt-4 space-y-2">
          {problems.map((problem) => (
            <li
              key={problem}
              className="flex gap-2 text-sm leading-6 text-[#5f5875] md:text-[15px]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b8cff]/80" />
              <span>{problem}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ProblemStatementSection() {
  return (
    <section id="tracks" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Grand Challenge Tracks
        </h2>
        <p className="mt-2 max-w-2xl text-[#5e5a70]">
          Instead of 100 random topics, five focused Grand Challenges. Pick a
          track, choose a problem statement (or combine themes), and build your
          solution.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {tracks.map((track) => (
          <TrackCard key={track.track} {...track} />
        ))}
      </div>
    </section>
  );
}
