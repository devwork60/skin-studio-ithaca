import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonSm from "@/components/button/ButtonSm";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import {
  TESTIMONIALS_EYEBROW,
  TESTIMONIALS_HEADING,
  TESTIMONIALS_PRIMARY_CTA,
  TESTIMONIALS_SECONDARY_CTA,
} from "@/constant/testimonialsData";
import FeaturableReviews from "./FeaturableReviews";

interface TestimonialsSectionProps {
  showCTAs?: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ showCTAs = true }) => (
  <section id="testimonials" className="bg-dark-deep py-[60px]">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="text-center">
        <SectionHeader
          align="center"
          eyebrow={TESTIMONIALS_EYEBROW}
          title={TESTIMONIALS_HEADING}
          headingSpacing=""
        />
      </div>

      <FeaturableReviews />

      {showCTAs && (
        <FadeUp
          inView
          y={16}
          delay={0.2}
          margin="0px"
          className="mt-14 flex flex-wrap items-center justify-center gap-5"
        >
          <ButtonSm
            text={TESTIMONIALS_PRIMARY_CTA.text}
            url={TESTIMONIALS_PRIMARY_CTA.url}
            padding="px-8 py-3.5"
          />
          <ButtonOutline
            text={TESTIMONIALS_SECONDARY_CTA.text}
            url={TESTIMONIALS_SECONDARY_CTA.url}
          />
        </FadeUp>
      )}
    </div>
  </section>
);

export default TestimonialsSection;
