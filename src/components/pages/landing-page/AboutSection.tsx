import ButtonSm from "@/components/button/ButtonSm";
import ButtonText from "@/components/button/ButtonText";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import Paragraph from "@/components/pages/typography/Paragraph";
import {
  ABOUT_EYEBROW,
  ABOUT_HEADING,
  ABOUT_PARAGRAPH_1,
  ABOUT_PARAGRAPH_2,
  ABOUT_PRIMARY_CTA,
  ABOUT_SECONDARY_CTA,
  ABOUT_STATS,
} from "@/constant/aboutData";
import AboutImages from "./AboutImages";
import StatsRow from "@/components/common-components/StatsRow";

const AboutSection = () => (
  <section id="about" className="bg-dark-secondary py-28 md:py-36 lg:py-44">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeader
            eyebrow={ABOUT_EYEBROW}
            title={ABOUT_HEADING}
            description={ABOUT_PARAGRAPH_1}
            descriptionClassName="max-w-lg"
          />

          <FadeUp inView delay={0.25}>
            <Paragraph className="mb-10 mt-6 max-w-lg">{ABOUT_PARAGRAPH_2}</Paragraph>
          </FadeUp>

          <FadeUp
            inView
            y={16}
            delay={0.35}
            duration={0.6}
            margin="-60px"
            className="flex flex-wrap items-center gap-4"
          >
            <ButtonSm
              text={ABOUT_PRIMARY_CTA.text}
              url={ABOUT_PRIMARY_CTA.url}
              padding="px-8 py-3.5"
            />
            <ButtonText
              variant="muted"
              text={ABOUT_SECONDARY_CTA.text}
              url={ABOUT_SECONDARY_CTA.url}
            />
          </FadeUp>
        </div>

        <AboutImages />
      </div>

      <StatsRow items={ABOUT_STATS} />
    </div>
  </section>
);

export default AboutSection;
