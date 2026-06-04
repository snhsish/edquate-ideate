import Image from "next/image";
import Link from "next/link";

const navLinkClassName =
  "relative pb-1 font-medium transition-colors duration-200 hover:text-[#1d1b21] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#1d1b21] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100";

const navLinks = [
  { href: "#tracks", label: "Tracks" },
  { href: "#submission", label: "Submit" },
  { href: "#edge-score", label: "E.D.G.E" },
  { href: "#format", label: "Format" },
  { href: "#awards", label: "Awards" },
] as const;

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ececf0]/80 bg-[#f7f7f7]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://edquate.com/icons/1.png"
            alt="Edquate logo"
            className="h-8 w-8 rounded-md object-contain"
            width={32}
            height={32}
          />
          <span className="hidden text-sm font-semibold tracking-tight text-[#2d2840] sm:inline">
            IDEATE 2026
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm tracking-[-0.01em] text-[#5e5a70] lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClassName}>
              {link.label}
            </Link>
          ))}
          <Link href="#footer" className={navLinkClassName}>
            Contact
          </Link>
        </nav>
        <Link
          href="#tracks"
          className="text-sm font-medium text-[#5e5a70] transition hover:text-[#1d1b21] lg:hidden"
        >
          Menu
        </Link>
      </div>
    </header>
  );
}
