import Image from "next/image";
import ButtonSm from "@/components/button/ButtonSm";
import ButtonText from "@/components/button/ButtonText";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import StatsRow from "@/components/common-components/StatsRow";
import AccentTagline from "@/components/pages/typography/AccentTagline";
import Paragraph from "@/components/pages/typography/Paragraph";
import { ABOUT_NATALIE, ABOUT_PAGE_STATS } from "@/constant/aboutPageData";

// "Meet Natalie": portrait on the left, bio and buttons on the right, stats below.
const AboutIntroSection = () => (
  <section className="bg-dark-secondary py-[60px]">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <FadeUp inView y={0} scale={0.95} duration={0.9} margin="-100px" className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
            <Image
              src={ABOUT_NATALIE.image.src}
              alt={ABOUT_NATALIE.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -right-3 top-[15%] z-0 h-[70%] w-[70%] rounded-full bg-rose/[0.04] blur-3xl" />
        </FadeUp>

        <div>
          <SectionHeader
            eyebrow={ABOUT_NATALIE.eyebrow}
            title={ABOUT_NATALIE.heading}
            headingSpacing="mb-3"
          />
          <FadeUp inView y={16} duration={0.6} delay={0.1}>
            <AccentTagline className="mb-8">{ABOUT_NATALIE.tagline}</AccentTagline>
          </FadeUp>
          <FadeUp inView delay={0.15}>
            <Paragraph className="mb-6 max-w-lg">{ABOUT_NATALIE.paragraphs[0]}</Paragraph>
          </FadeUp>
          <FadeUp inView delay={0.25}>
            <Paragraph className="mb-10 max-w-lg">{ABOUT_NATALIE.paragraphs[1]}</Paragraph>
          </FadeUp>
          <FadeUp
            inView
            y={16}
            duration={0.6}
            delay={0.35}
            margin="-60px"
            className="flex flex-wrap items-center gap-4"
          >
            <ButtonSm
              text={ABOUT_NATALIE.primaryCta.text}
              url={ABOUT_NATALIE.primaryCta.url}
              padding="px-8 py-3.5"
            />
            <ButtonText
              variant="muted"
              text={ABOUT_NATALIE.secondaryCta.text}
              url={ABOUT_NATALIE.secondaryCta.url}
            />
          </FadeUp>
        </div>
      </div>

      <StatsRow items={ABOUT_PAGE_STATS} />
    </div>
  </section>
);

export default AboutIntroSection;
