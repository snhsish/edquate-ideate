import AwardsSection from "@/components/home/AwardsSection";
import EdgeScoreSection from "@/components/home/EdgeScoreSection";
import EventInfoSection from "@/components/home/EventInfoSection";
import FooterSection from "@/components/home/FooterSection";
import FormatSection from "@/components/home/FormatSection";
import HeroSection from "@/components/home/HeroSection";
import InnovationProfileSection from "@/components/home/InnovationProfileSection";
import Navbar from "@/components/home/Navbar";
import ProblemStatementSection from "@/components/home/ProblemStatementSection";
import SubmissionSection from "@/components/home/SubmissionSection";

export default function Home() {
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
        <AwardsSection />
        <InnovationProfileSection />
      </main>
      <FooterSection />
    </div>
  );
}
