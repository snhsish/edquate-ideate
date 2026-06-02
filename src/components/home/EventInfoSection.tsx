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
            {card.label.toLowerCase() === "venue" ? (
              <div className="mt-3 space-y-3">
                <p className="font-semibold tracking-wide text-[#1f9d55]">
                  ONLINE
                </p>
                <div className="relative overflow-hidden rounded-xl border border-[#e9e8ef]">
                  <iframe
                    title="Kolkata map preview"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=88.2000%2C22.4500%2C88.5000%2C22.7000&layer=mapnik&marker=22.5726%2C88.3639"
                    className="h-44 w-full border-0 opacity-25 pointer-events-none"
                    loading="lazy"
                    aria-hidden
                    tabIndex={-1}
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-white"
                    aria-hidden
                  />
                </div>
              </div>
            ) : (
              <p className="mt-2 text-base font-semibold text-[#24212e]">
                {card.value}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
