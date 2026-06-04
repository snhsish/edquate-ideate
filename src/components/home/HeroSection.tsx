import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-4xl border border-[#ececf0] bg-linear-to-br from-[#eaf6ff] via-[#fef5ff] to-[#fff3ec] px-6 py-10 md:px-14 md:py-16">
      <div
        className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[#d8ebff]/60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 bottom-2 h-56 w-56 rounded-full bg-[#ffe2ef]/70 blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-1" aria-hidden>
        <span className="absolute left-10 top-[38%] text-3xl opacity-35 grayscale md:text-4xl">
          🚀
        </span>
        <span className="absolute right-12 top-[40%] text-2xl opacity-30 grayscale md:text-3xl">
          💡
        </span>
        <span className="absolute left-20 top-[58%] text-2xl opacity-30 grayscale md:text-3xl">
          🧠
        </span>
        <span className="absolute right-8 top-[60%] text-3xl opacity-30 grayscale md:text-4xl">
          ✨
        </span>
      </div>
      <div
        className="absolute inset-0 z-0 bg-white/52 backdrop-blur-[2px]"
        aria-hidden
      />
      <div className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="rounded-full border border-[#eadfff] bg-white/80 px-4 py-1 text-sm font-medium text-[#6c57a6]">
            IDEATE 2026
          </span>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-[#7a7491]">
            India&apos;s Largest Future Problem Solving Championship
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
            Ideas That{" "}
            <span className="animated-gradient-ltr bg-linear-to-r from-[#ff9fc7] via-[#f5a55a] to-[#9b8cff] bg-clip-text text-transparent">
              Shape Tomorrow
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[#5e5a70] md:text-lg">
            Five Grand Challenges. Multi-round national format. E.D.G.E scoring.
            Build future-focused solutions that reach millions. Not random
            topics, but problems that matter.
          </p>
          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="https://luma.com/27bwurkj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#2563eb] px-6 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(37,99,235,0.3)] transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93c5fd] focus-visible:ring-offset-2"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full">
                  <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden />
                </span>
                Register for IDEATE 2026
              </span>
            </Link>
            <Link
              href="#tracks"
              className="relative inline-flex h-11 items-center justify-center px-2 text-sm font-medium text-[#2b2736] transition-colors duration-200 hover:text-[#1d1b21] after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#1d1b21] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              Explore Tracks
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
