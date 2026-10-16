import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonSm from "@/components/button/ButtonSm";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import {
  TESTIMONIALS,
  TESTIMONIALS_EYEBROW,
  TESTIMONIALS_HEADING,
  TESTIMONIALS_PRIMARY_CTA,
  TESTIMONIALS_SECONDARY_CTA,
} from "@/constant/testimonialsData";
import TestimonialCard from "./TestimonialCard";
import TestimonialsRating from "./TestimonialsRating";

interface TestimonialsSectionProps {
  showCTAs?: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ showCTAs = true }) => (
  <section id="testimonials" className="bg-dark-deep py-28 md:py-36 lg:py-44">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="mb-16 text-center md:mb-20">
        <SectionHeader
          align="center"
          eyebrow={TESTIMONIALS_EYEBROW}
          title={TESTIMONIALS_HEADING}
          headingSpacing=""
        />
        <TestimonialsRating />
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {TESTIMONIALS.map((item, i) => (
          <TestimonialCard key={item.name} item={item} index={i} />
        ))}
      </div>

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
