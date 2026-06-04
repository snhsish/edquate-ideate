import Link from "next/link";
import { LuCalendarPlus } from "react-icons/lu";

const grandChallengeTracks = [
  "Future of Learning",
  "Future Careers & Employability",
  "AI for Human Intelligence",
  "Creator Economy & Personal Growth",
  "Open Innovation",
] as const;

export default function EventInfoSection() {
  const calendarDays = Array.from({ length: 30 }, (_, index) => index + 1);
  const calendarDescription = [
    "IDEATE 2026: India's Largest Future Problem Solving Championship",
    "Date: 10th June 2026",
    "Format: Multi-round · Online",
    "Website: https://ideathon.edquate.com",
  ].join("\n");
  const googleCalendarLink = `https://calendar.google.com/calendar/render?${new URLSearchParams(
    {
      action: "TEMPLATE",
      text: "IDEATE 2026 with Edquate",
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
          National championship scale. Online, multi-round, built for 5,000+
          future problem solvers.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#e9e8ef] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-[#7a7491]">Format</p>
            <p className="mt-2 text-base font-semibold text-[#24212e]">
              Multi-round · Online
            </p>
          </article>

          <article className="rounded-2xl border border-[#e9e8ef] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-[#7a7491]">Scale</p>
            <p className="mt-2 text-base font-semibold text-[#24212e]">
              5,000+ entries target
            </p>
          </article>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
        <article className="flex h-full flex-col rounded-2xl border border-[#e9e8ef] bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-[#7a7491]">Tracks</p>
          <p className="mt-2 text-base font-semibold text-[#24212e]">
            5 Grand Challenges
          </p>
          <ul className="mt-4 flex flex-1 flex-col gap-2">
            {grandChallengeTracks.map((track) => (
              <li key={track}>
                <Link
                  href="#tracks"
                  className="block rounded-lg border border-[#f0ebff] bg-[#faf8ff] px-3 py-2 text-sm font-medium text-[#5f4591] transition hover:border-[#e8e1fb] hover:bg-[#f7f2ff]"
                >
                  {track}
                </Link>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex h-full flex-col rounded-2xl border border-[#e9e8ef] bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-[#7a7491]">Date</p>
          <p className="mt-2 text-sm font-semibold tracking-wide text-[#24212e]">
            10th June 2026
          </p>
          <div className="mt-3 flex flex-1 flex-col rounded-xl border border-[#e9e8ef] bg-[#fcfcfd] p-3">
            <p className="text-[11px] font-medium uppercase tracking-wide text-[#7a7491]">
              June 2026
            </p>
            <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[10px] font-medium uppercase text-[#9a96ab]">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <span key={day}>{day}</span>
              ))}
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
        </article>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href={googleCalendarLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24212e]"
        >
          <LuCalendarPlus className="h-4 w-4" aria-hidden />
          Add to Calendar
        </Link>
      </div>
    </section>
  );
}
