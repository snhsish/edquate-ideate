import { LuCalendarPlus } from "react-icons/lu";

type InfoCard = {
  label: string;
  value: string;
};

type EventInfoSectionProps = {
  cards: InfoCard[];
};

export default function EventInfoSection({ cards }: EventInfoSectionProps) {
  const calendarDays = Array.from({ length: 30 }, (_, index) => index + 1);
  const calendarDescription = [
    "Ideate with Edquate: Ideathon",
    "Date: 10th June 2026",
    "Venue: Online",
    "Website: https://ideathon.edquate.com",
  ].join("\n");
  const googleCalendarLink = `https://calendar.google.com/calendar/render?${new URLSearchParams(
    {
      action: "TEMPLATE",
      text: "Ideate with Edquate: Ideathon",
      dates: "20260610/20260611",
      details: calendarDescription,
      location: "Online",
    }
  ).toString()}`;

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
            className="h-full rounded-2xl border border-[#e9e8ef] bg-white p-5 shadow-sm"
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
                    className="h-52 w-full border-0 opacity-25 pointer-events-none"
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
            ) : card.label.toLowerCase() === "date" ? (
              <div className="mt-3 space-y-3">
                <p className="text-sm font-semibold tracking-wide text-[#24212e]">
                  10th June 2026
                </p>
                <div className="h-52 rounded-xl border border-[#e9e8ef] bg-[#fcfcfd] p-3">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#7a7491]">
                    June 2026
                  </p>
                  <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[10px] font-medium uppercase text-[#9a96ab]">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <span key={day}>{day}</span>
                      )
                    )}
                  </div>
                  <div className="mt-2 grid grid-cols-7 gap-1 text-center text-xs font-medium text-[#3b3748]">
                    <span aria-hidden className="rounded-md p-1" />
                    {calendarDays.map((day) => (
                      <span
                        key={day}
                        className={
                          day === 10
                            ? "rounded-md bg-black p-1 text-white"
                            : "rounded-md p-1"
                        }
                      >
                        {day}
                      </span>
                    ))}
                  </div>
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
      <div className="mt-8 flex justify-center">
        <a
          href={googleCalendarLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24212e]"
        >
          <LuCalendarPlus className="h-4 w-4" aria-hidden />
          Add to Calendar
        </a>
      </div>
    </section>
  );
}
