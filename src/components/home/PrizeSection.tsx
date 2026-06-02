import type { CSSProperties } from "react";
import { LuMedal, LuTrophy } from "react-icons/lu";

type PodiumRank = 1 | 2 | 3;

type PodiumPrize = {
  position: string;
  title: string;
  rank: PodiumRank;
};

type PrizeSectionProps = {
  podiumPrizes: PodiumPrize[];
  stickerPrizes: string[];
};

const tierStyles: Record<
  PodiumRank,
  {
    card: string;
    label: string;
    amount: string;
    icon: string;
    size: string;
  }
> = {
  1: {
    card:
      "border-[#e8c547]/80 bg-linear-to-br from-[#fff9e8] via-[#ffe08a] to-[#f5b942] shadow-[0_12px_40px_-8px_rgba(212,160,23,0.55)] ring-1 ring-[#f0d060]/60",
    size: "min-h-[9.5rem] md:min-h-[11.5rem]",
    label: "text-[#6b4e0a]",
    amount:
      "bg-linear-to-r from-[#5c3d00] via-[#8b5a00] to-[#5c3d00] bg-clip-text text-transparent prize-gold-shimmer",
    icon: "text-[#9a7209]",
  },
  2: {
    card:
      "border-[#c8cdd4]/90 bg-linear-to-br from-[#fafbfc] via-[#e2e6eb] to-[#b8bec8] shadow-[0_10px_32px_-10px_rgba(120,130,145,0.45)] ring-1 ring-white/70",
    size: "min-h-[8.5rem] md:min-h-[9.5rem]",
    label: "text-[#4a5058]",
    amount: "text-[#2a2f36]",
    icon: "text-[#6b737c]",
  },
  3: {
    card:
      "border-[#d4a574]/80 bg-linear-to-br from-[#fff4e8] via-[#e8b88a] to-[#c98652] shadow-[0_10px_32px_-10px_rgba(180,110,50,0.4)] ring-1 ring-[#e8c4a0]/50",
    size: "min-h-[8.5rem] md:min-h-[9.5rem]",
    label: "text-[#6b3f1a]",
    amount: "text-[#3d2210]",
    icon: "text-[#8b5528]",
  },
};

const shineClassByRank: Record<PodiumRank, string> = {
  1: "prize-card-shine",
  2: "prize-card-shine prize-card-shine--silver",
  3: "prize-card-shine prize-card-shine--bronze",
};

const shineDelayByRank: Record<PodiumRank, string> = {
  1: "0s",
  2: "0.6s",
  3: "1.2s",
};

const confettiPieces = [
  { left: "8%", delay: "0s", duration: "2.6s", drift: "-8px", color: "#ff6b6b" },
  { left: "18%", delay: "0.4s", duration: "3.1s", drift: "6px", color: "#ffd93d" },
  { left: "28%", delay: "0.9s", duration: "2.9s", drift: "-4px", color: "#6bcb77" },
  { left: "38%", delay: "0.2s", duration: "3.4s", drift: "10px", color: "#4d96ff" },
  { left: "48%", delay: "1.1s", duration: "2.7s", drift: "-6px", color: "#ff9ff3" },
  { left: "58%", delay: "0.6s", duration: "3.2s", drift: "8px", color: "#f5a55a" },
  { left: "68%", delay: "1.4s", duration: "2.8s", drift: "-10px", color: "#9b8cff" },
  { left: "78%", delay: "0.3s", duration: "3s", drift: "5px", color: "#ff6b6b" },
  { left: "88%", delay: "1s", duration: "2.5s", drift: "-7px", color: "#ffd93d" },
  { left: "14%", delay: "1.6s", duration: "3.3s", drift: "12px", color: "#6bcb77" },
  { left: "52%", delay: "1.8s", duration: "2.4s", drift: "-5px", color: "#4d96ff" },
  { left: "72%", delay: "0.7s", duration: "3.5s", drift: "9px", color: "#ff9ff3" },
];

function PodiumPrizeCard({ prize }: { prize: PodiumPrize }) {
  const tier = tierStyles[prize.rank];
  const isGold = prize.rank === 1;

  return (
    <article
      className={`relative flex flex-col justify-end overflow-hidden rounded-2xl border p-6 transition-transform duration-300 hover:scale-[1.02] ${tier.card} ${tier.size}`}
    >
      <div
        className={shineClassByRank[prize.rank]}
        style={
          { "--shine-delay": shineDelayByRank[prize.rank] } as CSSProperties
        }
        aria-hidden
      />
      {isGold ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/50 via-transparent to-[#fff3c4]/30"
            aria-hidden
          />
          <div className="prize-confetti pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            {confettiPieces.map((piece, index) => (
              <span
                key={index}
                className="prize-confetti-piece"
                style={
                  {
                    left: piece.left,
                    backgroundColor: piece.color,
                    "--confetti-delay": piece.delay,
                    "--confetti-duration": piece.duration,
                    "--confetti-drift": piece.drift,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </>
      ) : null}

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.1em] ${tier.label}`}
          >
            {prize.position}
          </p>
          {isGold ? (
            <LuTrophy className={`h-6 w-6 shrink-0 ${tier.icon}`} aria-hidden />
          ) : (
            <LuMedal className={`h-6 w-6 shrink-0 ${tier.icon}`} aria-hidden />
          )}
        </div>
        <p className={`mt-4 text-3xl font-bold tracking-tight ${tier.amount}`}>
          {prize.title}
        </p>
        {isGold ? (
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[#7a5c12]/90">
            Grand prize
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function PrizeSection({
  podiumPrizes,
  stickerPrizes,
}: PrizeSectionProps) {
  const sortedPodium = [...podiumPrizes].sort((a, b) => a.rank - b.rank);

  return (
    <section id="prizes" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Prize Pool</h2>
        <p className="mt-2 text-[#5e5a70]">
          Top teams and standout creators will be celebrated.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:items-end">
        {sortedPodium.map((prize) => (
          <PodiumPrizeCard key={prize.rank} prize={prize} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-[#ddd5ef] bg-white p-6">
        <h3 className="text-lg font-semibold text-[#2d2840]">
          Goodies for everyone
        </h3>
        <p className="mt-2 text-sm text-[#6a6480]">
          All participants and runner-ups receive goodies. Category standouts
          also earn special mentions below.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stickerPrizes.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#e8e1fb] bg-[#f7f2ff] px-4 py-2 text-sm font-medium text-[#5f4591]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
