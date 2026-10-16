import clsx from "clsx";
import FadeUp from "@/components/common-components/FadeUp";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import SubHeading from "@/components/pages/typography/SubHeading";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode; // ReactNode so italic words can be wrapped in <span className="heading-serif-italic">
  description?: string;
  align?: "left" | "center";
  headingVariant?: "main" | "cta"; // main = 60px h2, cta = 56px h2
  headingSpacing?: string; // space below the h2
  className?: string;
  descriptionClassName?: string; // width / spacing only, e.g. "max-w-lg"
}

// Shared section intro: eyebrow + h2 + description, each revealed on scroll.
// Not used by the hero (it has its own h1).
const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  headingVariant = "main",
  headingSpacing = "mb-8",
  className,
  descriptionClassName,
}) => {
  const Heading = headingVariant === "cta" ? SubHeading : MainHeading;
  return (
    <div className={clsx(align === "center" && "text-center", className)}>
      {eyebrow && (
        <FadeUp inView y={12} duration={0.6}>
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
        </FadeUp>
      )}
      <FadeUp inView y={24} duration={0.8}>
        <Heading className={headingSpacing}>{title}</Heading>
      </FadeUp>
      {description && (
        <FadeUp inView delay={0.15}>
          <Paragraph className={clsx(align === "center" && "mx-auto", descriptionClassName)}>
            {description}
          </Paragraph>
        </FadeUp>
      )}
    </div>
  );
};

export default SectionHeader;
