import Image from "next/image";
import FadeUp from "@/components/common-components/FadeUp";
import CardDesc from "@/components/pages/typography/CardDesc";
import CardRole from "@/components/pages/typography/CardRole";
import MiniTag from "@/components/pages/typography/MiniTag";
import TeamName from "@/components/pages/typography/TeamName";
import type { TeamPageMember } from "@/constant/teamPageData";

interface TeamMemberCardProps {
  member: TeamPageMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => (
  <FadeUp inView y={40} duration={0.8} delay={index * 0.15} margin="-60px" className="group">
    <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl">
      <Image
        src={member.image}
        alt={member.alt}
        fill
        sizes="(min-width: 1200px) 380px, (min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>

    <TeamName className="mb-1">{member.name}</TeamName>
    <CardRole size="md" className="mb-3">
      {member.role}
    </CardRole>
    {member.bio && <CardDesc className="mb-4">{member.bio}</CardDesc>}
    <div className="flex flex-wrap gap-2">
      {member.tags.map((tag) => (
        <MiniTag key={tag}>{tag}</MiniTag>
      ))}
    </div>
  </FadeUp>
);

export default TeamMemberCard;
