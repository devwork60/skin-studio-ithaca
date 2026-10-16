import SectionHeader from "@/components/common-components/SectionHeader";
import { TEAM_GRID, TEAM_PAGE_MEMBERS } from "@/constant/teamPageData";
import TeamMemberCard from "./TeamMemberCard";

const TeamGridSection = () => (
  <section className="bg-dark-primary py-[60px]">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
      <SectionHeader
        align="center"
        eyebrow={TEAM_GRID.eyebrow}
        title={TEAM_GRID.heading}
        description={TEAM_GRID.description}
        headingSpacing="mb-6"
        descriptionClassName="max-w-lg"
        className="mb-16 md:mb-20"
      />

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {TEAM_PAGE_MEMBERS.map((member, i) => (
          <TeamMemberCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamGridSection;
