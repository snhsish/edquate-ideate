import EventInfoSection from "@/components/home/EventInfoSection";
import FooterSection from "@/components/home/FooterSection";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import ProblemStatementSection from "../components/home/ProblemStatementSection";
import PrizeSection from "@/components/home/PrizeSection";

export default function Home() {
  const infoCards = [
    { label: "Venue", value: "Online" },
    { label: "Date", value: "10th June 2026" },
  ];

  const podiumPrizes = [
    { position: "1st Place", title: "₹3,000", rank: 1 as const },
    { position: "2nd Place", title: "₹2,000", rank: 2 as const },
    { position: "3rd Place", title: "₹1,000", rank: 3 as const },
  ];

  const stickerPrizes = [
    "Best Innovation",
    "Best UI/UX",
    "Best Pitch",
    "Community Favorite",
  ];

  return (
    <div className="flex flex-1 flex-col bg-[#f7f7f7] text-[#1d1b21]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-16 pt-24 md:px-10">
        <HeroSection />
        <EventInfoSection cards={infoCards} />
        <ProblemStatementSection />
        <PrizeSection podiumPrizes={podiumPrizes} stickerPrizes={stickerPrizes} />
      </main>
      <FooterSection />
    </div>
  );
}
