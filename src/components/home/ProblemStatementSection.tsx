export default function ProblemStatementSection() {
  return (
    <section id="problem-statement" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Problem Statement</h2>
        <p className="mt-2 text-[#5e5a70]">
          A focused challenge to guide your ideathon build.
        </p>
      </div>

      <article className="relative overflow-hidden rounded-3xl border border-[#eadfff] bg-linear-to-br from-[#fef7ff] via-[#fff9f1] to-[#eef5ff] p-6 shadow-[0_14px_40px_rgba(129,102,196,0.16)] md:p-8">
        <div
          className="pointer-events-none absolute -left-12 -top-14 h-40 w-40 rounded-full bg-[#dfd4ff]/70 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-[#ffd9bd]/70 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10">
          <p className="inline-flex rounded-full border border-[#e6dcff] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#6b54ab]">
            The Statement
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#271f3a]">
            Build an AI-powered student problem solver for real campus life.
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f5875] md:text-base">
            Design and prototype a solution that helps students identify a real
            everyday challenge on campus, generate practical recommendations, and
            guide them to take measurable action using AI.
          </p>
        </div>
      </article>
    </section>
  );
}
