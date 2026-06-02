import Image from "next/image";
import { SiUnstop } from "react-icons/si";

const navLinkClassName =
  "relative pb-1 font-medium transition-colors duration-200 hover:text-[#1d1b21] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#1d1b21] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100";

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
          🤔
        </span>
        <span className="absolute right-12 top-[40%] text-2xl opacity-30 grayscale md:text-3xl">
          💭
        </span>
        <span className="absolute left-20 top-[58%] text-2xl opacity-30 grayscale md:text-3xl">
          🧠
        </span>
        <span className="absolute right-8 top-[60%] text-3xl opacity-30 grayscale md:text-4xl">
          🤯
        </span>
      </div>
      <div
        className="absolute inset-0 z-0 bg-white/52 backdrop-blur-[2px]"
        aria-hidden
      />
      <div className="relative z-10">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://edquate.com/icons/1.png"
              alt="Edquate logo"
              className="h-8 w-8 rounded-md object-contain"
              width={32}
              height={32}
            />
          </div>
          <nav className="hidden items-center gap-8 text-sm tracking-[-0.01em] text-[#5e5a70] md:flex">
            <a href="#info" className={navLinkClassName}>
              Info
            </a>
            <a href="#prizes" className={navLinkClassName}>
              Prizes
            </a>
            <a href="#footer" className={navLinkClassName}>
              Contact
            </a>
          </nav>
        </header>

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="rounded-full border border-[#eadfff] bg-white/80 px-4 py-1 text-sm font-medium text-[#6c57a6]">
            IDEATHON
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
            Build your next big idea at{" "}
            <span className="animated-gradient-ltr bg-linear-to-r from-[#ff9fc7] via-[#f5a55a] to-[#9b8cff] bg-clip-text text-transparent">
              Ideate with Edquate
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[#5e5a70] md:text-lg">
            A one-day launchpad for builders, dreamers, and problem-solvers. Team
            up, prototype fast, and pitch solutions that matter.
          </p>
          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#2563eb] px-6 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(37,99,235,0.3)] transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93c5fd] focus-visible:ring-offset-2"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white">
                  <SiUnstop className="h-3.5 w-3.5" aria-hidden />
                </span>
                Sign Up for Ideathon
              </span>
            </a>
            <a
              href="#info"
              className="relative inline-flex h-11 items-center justify-center px-2 text-sm font-medium text-[#2b2736] transition-colors duration-200 hover:text-[#1d1b21] after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#1d1b21] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              Event Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
