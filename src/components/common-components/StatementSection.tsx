import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import LeadParagraph from "@/components/pages/typography/LeadParagraph";

interface StatementSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  paragraphs: string[];
  actions?: React.ReactNode; // buttons shown under the copy
}

// Two columns: a large heading on the left, editorial paragraphs (and optional buttons) on the right.
const StatementSection: React.FC<StatementSectionProps> = ({
  eyebrow,
  heading,
  paragraphs,
  actions,
}) => (
  <section className="bg-dark-primary py-28 md:py-36 lg:py-44">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeader eyebrow={eyebrow} title={heading} headingSpacing="" />

        <FadeUp inView y={24} delay={0.15} className="flex flex-col justify-center">
          {paragraphs.map((text, i) => {
            const isLast = i === paragraphs.length - 1;
            return (
              <LeadParagraph key={text} className={isLast ? (actions ? "mb-10" : "") : "mb-6"}>
                {text}
              </LeadParagraph>
            );
          })}
          {actions && <div className="flex flex-wrap items-center gap-4">{actions}</div>}
        </FadeUp>
      </div>
    </div>
  </section>
);

export default StatementSection;
