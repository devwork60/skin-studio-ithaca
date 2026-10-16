import SectionHeader from "@/components/common-components/SectionHeader";
import {
  BEFORE_AFTER_DESCRIPTION,
  BEFORE_AFTER_EYEBROW,
  BEFORE_AFTER_HEADING,
  TRANSFORMATIONS,
} from "@/constant/beforeAfterData";
import ComparisonSlider from "./ComparisonSlider";

const BeforeAfterSection = () => (
  <section className="bg-dark-primary pb-28 pt-6 md:pb-36 md:pt-8 lg:pb-44 lg:pt-10">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
      <SectionHeader
        align="center"
        eyebrow={BEFORE_AFTER_EYEBROW}
        title={BEFORE_AFTER_HEADING}
        description={BEFORE_AFTER_DESCRIPTION}
        headingSpacing="mb-6"
        descriptionClassName="max-w-md"
        className="mb-16 lg:mb-20"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {TRANSFORMATIONS.map((item, i) => (
          <ComparisonSlider key={item.treatment} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
