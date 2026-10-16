"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Plus } from "lucide-react";
import FadeUp from "@/components/common-components/FadeUp";
import CardDesc from "@/components/pages/typography/CardDesc";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardRole from "@/components/pages/typography/CardRole";
import NumberBadge from "@/components/pages/typography/NumberBadge";
import type { TeamMember } from "@/constant/teamData";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const hoverCapable = () => window.matchMedia("(hover: hover)").matches;

// Portrait card. The bio opens on hover (pointer devices) or via the + button.
const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const [open, setOpen] = useState(false);
  const hasBio = Boolean(member.bio);

  return (
    <FadeUp
      inView
      y={30}
      duration={0.8}
      delay={index * 0.1}
      className="w-[80vw] max-w-[340px] shrink-0 snap-start md:w-[46vw] md:max-w-[400px] lg:w-[400px]"
    >
      <article
        className="group relative"
        onMouseEnter={() => hasBio && hoverCapable() && setOpen(true)}
        onMouseLeave={() => hasBio && hoverCapable() && setOpen(false)}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-dark-primary">
          <Image
            src={member.image}
            alt={member.alt}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 46vw, 80vw"
            draggable={false}
            className="select-none object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-primary/70 via-transparent to-transparent" />
          <NumberBadge className="absolute left-4 top-4">
            {String(index + 1).padStart(2, "0")}
          </NumberBadge>

          <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-dark-primary/75 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <CardHeading>{member.name}</CardHeading>
                <CardRole className="mt-1.5">{member.role}</CardRole>
              </div>
              {hasBio && (
                <button
                  type="button"
                  aria-expanded={open}
                  aria-label={`Read ${member.name}'s bio`}
                  onClick={() => setOpen((v) => !v)}
                  className={clsx(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                    open
                      ? "rotate-45 border-rose bg-rose text-ivory"
                      : "border-white/20 text-ivory/80 hover:border-rose/60 hover:text-ivory"
                  )}
                >
                  <Plus size={16} aria-hidden="true" />
                </button>
              )}
            </div>
            {hasBio && (
              <div
                className={clsx(
                  "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <CardDesc className="pt-4">{member.bio}</CardDesc>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </FadeUp>
  );
};

export default TeamCard;
