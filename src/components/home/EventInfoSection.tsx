type InfoCard = {
  label: string;
  value: string;
};

type EventInfoSectionProps = {
  cards: InfoCard[];
};

export default function EventInfoSection({ cards }: EventInfoSectionProps) {
  return (
    <section id="info" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Event Info</h2>
        <p className="mt-2 text-[#5e5a70]">
          Everything you need before registrations open.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.label}
            className="rounded-2xl border border-[#e9e8ef] bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-[#7a7491]">{card.label}</p>
            <p className="mt-2 text-base font-semibold text-[#24212e]">
              {card.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
