const specialAwards = [
  "Future Innovator Award",
  "AI Pioneer Award",
  "Social Impact Award",
  "Best Student Founder Award",
  "Most Scalable Solution Award",
  "People's Choice Award",
  "Edquate Visionary Award",
] as const;

export default function AwardsSection() {
  return (
    <section id="awards" className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Special Awards</h2>
        <p className="mt-2 text-[#5e5a70]">
          More than winner and runner-up. Status categories so dozens of teams
          become ambassadors, not just podium finishers.
        </p>
      </div>

      <div className="rounded-3xl border border-dashed border-[#ddd5ef] bg-white p-6 md:p-8">
        <div className="flex flex-wrap gap-2">
          {specialAwards.map((award) => (
            <span
              key={award}
              className="rounded-full border border-[#e8e1fb] bg-[#f7f2ff] px-4 py-2.5 text-sm font-medium text-[#5f4591] transition hover:border-[#d4c8f5] hover:bg-[#f0ebff]"
            >
              {award}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-[#6a6480]">
          Grand Finale top teams compete for national recognition, while category
          winners earn dedicated badges on their Innovation Profile.
        </p>
      </div>
    </section>
  );
}
