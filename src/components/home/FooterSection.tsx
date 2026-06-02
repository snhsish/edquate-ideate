import Image from "next/image";

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="mt-auto border-t border-[#e6e4eb] bg-white/90 px-6 py-10 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 text-sm text-[#5c576f] md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <Image
              src="https://edquate.com/icons/1.png"
              alt="Edquate logo"
              className="h-9 w-9 rounded-md object-contain"
              width={36}
              height={36}
            />
          </div>
          <p className="mt-2 max-w-sm">
            A launch ideathon for students and early builders to ship impactful
            ideas in a single day.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#2c2837]">Event</p>
          <ul className="mt-3 space-y-2">
            <li>Overview</li>
            <li>Schedule</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#2c2837]">Community</p>
          <ul className="mt-3 space-y-2">
            <li>Campus Partners</li>
            <li>Mentors</li>
            <li>Sponsors</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#2c2837]">Contact</p>
          <ul className="mt-3 space-y-2">
            <li>hello@edquate.com</li>
            <li>+91 90000 00000</li>
            <li>System status</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-2 border-t border-[#ece9f4] pt-6 text-xs text-[#837d97] sm:flex-row sm:items-center sm:justify-between">
        <p>Orcrys Technologies Pvt Ltd. Edquate 2026</p>
        <p>Privacy Terms Report bug</p>
      </div>
    </footer>
  );
}
