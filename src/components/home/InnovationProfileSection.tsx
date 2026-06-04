import { FaLinkedin } from "react-icons/fa";
import { LuBadge, LuShare2, LuUsers } from "react-icons/lu";

const profileItems = [
  { icon: LuUsers, label: "Team", description: "Your squad, visible to the community" },
  { icon: LuShare2, label: "Idea", description: "The problem you chose and your solution" },
  { icon: LuBadge, label: "Rank & badge", description: "Round progress and award recognition" },
] as const;

export default function InnovationProfileSection() {
  return (
    <section id="profile" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-[#ececf0] bg-linear-to-br from-[#eaf6ff] via-[#fef5ff] to-[#fff3ec] p-6 md:p-10">
        <div
          className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#d8ebff]/50 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10">
          <span className="rounded-full border border-[#eadfff] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#6c57a6]">
            Virality Engine
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Your Innovation Profile on Edquate
          </h2>
          <p className="mt-2 max-w-2xl text-[#5e5a70]">
            Every participant gets a shareable profile. Turn your championship
            journey into a portfolio piece the world can see.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {profileItems.map(({ icon: Icon, label, description }) => (
              <article
                key={label}
                className="rounded-2xl border border-white/80 bg-white/70 p-5 backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 text-[#6c57a6]" aria-hidden />
                <h3 className="mt-3 font-semibold text-[#2d2840]">{label}</h3>
                <p className="mt-1 text-sm leading-6 text-[#6a6480]">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-[#e9e8ef] bg-white/80 px-5 py-4">
            <p className="text-sm text-[#5e5a70]">
              Also includes your{" "}
              <span className="font-semibold text-[#2d2840]">E.D.G.E score</span>{" "}
              and championship rank, ready to share.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0a66c2]/10 px-3 py-1.5 text-sm font-medium text-[#0a66c2]">
              <FaLinkedin className="h-4 w-4" aria-hidden />
              Shareable on LinkedIn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
