"use client";

import ButtonSm from "@/components/button/ButtonSm";
import ButtonText from "@/components/button/ButtonText";
import CarouselArrows from "@/components/common-components/CarouselArrows";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import {
  TEAM_EYEBROW,
  TEAM_HEADING,
  TEAM_MEMBERS,
  TEAM_PRIMARY_CTA,
  TEAM_SECONDARY_CTA,
} from "@/constant/teamData";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  const { trackRef, progress, atStart, atEnd, update, scrollByCard } = useCarouselScroll();

  return (
    <section id="team" className="overflow-hidden bg-dark-secondary py-28 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={TEAM_EYEBROW} title={TEAM_HEADING} headingSpacing="" />
          <FadeUp inView y={16} delay={0.2} margin="0px" className="hidden items-center gap-5 md:flex">
            <CarouselArrows
              label="team member"
              atStart={atStart}
              atEnd={atEnd}
              onPrev={() => scrollByCard(-1)}
              onNext={() => scrollByCard(1)}
            />
          </FadeUp>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={update}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Team members"
        className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto pb-2 outline-none [scrollbar-width:none] active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-rose/40 md:gap-6 [&::-webkit-scrollbar]:hidden [--edge:1.5rem] lg:[--edge:max(3rem,calc((100%-1400px)/2+3rem))]"
        style={{ paddingInline: "var(--edge)", scrollPaddingInline: "var(--edge)" }}
      >
        {TEAM_MEMBERS.map((member, i) => (
          <TeamCard key={member.id} member={member} index={i} />
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-[1400px] flex-col gap-8 px-6 md:mt-14 md:flex-row md:items-center md:justify-between lg:px-12">
        <div className="h-px w-full max-w-sm overflow-hidden bg-border-subtle" aria-hidden="true">
          <div
            className="h-full origin-left bg-rose transition-transform duration-300 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        <FadeUp inView y={16} delay={0.3} margin="0px" className="flex flex-wrap items-center gap-5">
          <ButtonSm
            text={TEAM_PRIMARY_CTA.text}
            url={TEAM_PRIMARY_CTA.url}
            padding="px-8 py-3.5"
          />
          <ButtonText variant="muted" text={TEAM_SECONDARY_CTA.text} url={TEAM_SECONDARY_CTA.url} />
        </FadeUp>
      </div>
    </section>
  );
};

export default TeamSection;
