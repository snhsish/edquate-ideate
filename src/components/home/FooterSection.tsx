import Image from "next/image";
import Link from "next/link";

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
            Your personal learning platform with tutor, roadmap, practice, and
            career guidance in one place
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#2c2837]">Product</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="https://edquate.com" className="hover:text-[#2c2837]">
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="https://edquate.com/register"
                className="hover:text-[#2c2837]"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="https://edquate.com/#features"
                className="hover:text-[#2c2837]"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#2c2837]">Community</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                href="https://edquate.com/campus"
                className="hover:text-[#2c2837]"
              >
                Campus Partners
              </Link>
            </li>
            <li>
              <Link
                href="https://edquate.com/redeeem"
                className="hover:text-[#2c2837]"
              >
                Redeem
              </Link>
            </li>
            <li>
              <Link
                href="https://edquate.com/campus/application"
                className="hover:text-[#2c2837]"
              >
                Partner Application
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#2c2837]">Contact</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                href="mailto:support@edquate.com"
                className="hover:text-[#2c2837]"
              >
                support@edquate.com
              </Link>
            </li>
            <li>
              <Link href="tel:+919330304037" className="hover:text-[#2c2837]">
                +91 93303 04037
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-2 border-t border-[#ece9f4] pt-6 text-xs text-[#837d97] sm:flex-row sm:items-center sm:justify-between">
        <p>
          <Link href="https://orcrys.com" className="hover:text-[#2c2837]">
            Orcrys Technologies Pvt Ltd.
          </Link>
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Link
            href="https://edquate.com/legal/privacy"
            className="hover:text-[#2c2837]"
          >
            Privacy
          </Link>
          <Link
            href="https://edquate.com/legal/terms"
            className="hover:text-[#2c2837]"
          >
            Terms
          </Link>
          <Link href="mailto:bug@edquate.com" className="hover:text-[#2c2837]">
            Report Bug
          </Link>
        </p>
      </div>
    </footer>
  );
}
