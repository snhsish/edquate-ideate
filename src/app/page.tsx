import AwardsSection from "@/components/home/AwardsSection";
import EdgeScoreSection from "@/components/home/EdgeScoreSection";
import EventInfoSection from "@/components/home/EventInfoSection";
import FooterSection from "@/components/home/FooterSection";
import FormatSection from "@/components/home/FormatSection";
import HeroSection from "@/components/home/HeroSection";
import InnovationProfileSection from "@/components/home/InnovationProfileSection";
import Navbar from "@/components/home/Navbar";
import ProblemStatementSection from "@/components/home/ProblemStatementSection";
import PrizeSection from "@/components/home/PrizeSection";
import SubmissionSection from "@/components/home/SubmissionSection";

export default function Home() {
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
        <EventInfoSection />
        <ProblemStatementSection />
        <SubmissionSection />
        <EdgeScoreSection />
        <FormatSection />
        <PrizeSection podiumPrizes={podiumPrizes} stickerPrizes={stickerPrizes} />
        <AwardsSection />
        <InnovationProfileSection />
      </main>
      <FooterSection />
    </div>
  );
}
