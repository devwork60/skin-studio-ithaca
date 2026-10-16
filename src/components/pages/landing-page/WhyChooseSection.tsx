import ButtonSm from "@/components/button/ButtonSm";
import ButtonText from "@/components/button/ButtonText";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import {
  WHY_CHOOSE_EYEBROW,
  WHY_CHOOSE_HEADING,
  WHY_CHOOSE_PRIMARY_CTA,
  WHY_CHOOSE_SECONDARY_CTA,
} from "@/constant/whyChooseData";
import WhyChooseImages from "./WhyChooseImages";
import WhyChooseValueList from "./WhyChooseValueList";

const WhyChooseSection = () => (
  <section className="bg-dark-deep py-[60px]">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeader
            eyebrow={WHY_CHOOSE_EYEBROW}
            title={WHY_CHOOSE_HEADING}
            headingSpacing="mb-14"
          />
          <WhyChooseValueList />

          <FadeUp
            inView
            y={16}
            duration={0.6}
            delay={0.4}
            margin="-60px"
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <ButtonSm
              text={WHY_CHOOSE_PRIMARY_CTA.text}
              url={WHY_CHOOSE_PRIMARY_CTA.url}
              padding="px-8 py-3.5"
            />
            <ButtonText
              variant="muted"
              text={WHY_CHOOSE_SECONDARY_CTA.text}
              url={WHY_CHOOSE_SECONDARY_CTA.url}
            />
          </FadeUp>
        </div>

        <WhyChooseImages />
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
