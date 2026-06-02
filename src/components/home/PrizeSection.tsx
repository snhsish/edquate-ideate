type PodiumPrize = {
  position: string;
  title: string;
};

type PrizeSectionProps = {
  podiumPrizes: PodiumPrize[];
  stickerPrizes: string[];
};

export default function PrizeSection({
  podiumPrizes,
  stickerPrizes,
}: PrizeSectionProps) {
  return (
    <section id="prizes" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Prize Pool</h2>
        <p className="mt-2 text-[#5e5a70]">
          Top teams and standout creators will be celebrated.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {podiumPrizes.map((prize) => (
          <article
            key={prize.position}
            className="rounded-2xl border border-[#ebe7f4] bg-linear-to-b from-white to-[#f7f3ff] p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7c5ab8]">
              {prize.position}
            </p>
            <p className="mt-3 text-xl font-semibold text-[#241f31]">
              {prize.title}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-[#ddd5ef] bg-white p-6">
        <h3 className="text-lg font-semibold text-[#2d2840]">
          Sticker Rewards and Special Mentions
        </h3>
        <p className="mt-2 text-sm text-[#6a6480]">
          More surprise rewards will be announced for category winners.
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
