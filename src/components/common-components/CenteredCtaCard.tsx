import clsx from "clsx";
import FadeUp from "@/components/common-components/FadeUp";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import ServiceCardDesc from "@/components/pages/typography/ServiceCardDesc";
import StatHeading from "@/components/pages/typography/StatHeading";

interface CenteredCtaCardProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  actions: React.ReactNode;
  className?: string; // card surface and padding
  descriptionClassName?: string; // width, e.g. "max-w-lg"
}

// Centered call-to-action card: eyebrow, h2, short copy and a row of buttons.
const CenteredCtaCard: React.FC<CenteredCtaCardProps> = ({
  eyebrow,
  heading,
  description,
  actions,
  className,
  descriptionClassName,
}) => (
  <FadeUp
    inView
    y={30}
    duration={0.8}
    className={clsx(
      "overflow-hidden rounded-[28px] border border-border-subtle text-center shadow-2xl",
      className
    )}
  >
    <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
    <StatHeading as="h2" className="mb-6 text-ivory">
      {heading}
    </StatHeading>
    <ServiceCardDesc className={clsx("mx-auto mb-10", descriptionClassName)}>
      {description}
    </ServiceCardDesc>
    <div className="flex flex-wrap items-center justify-center gap-4">{actions}</div>
  </FadeUp>
);

export default CenteredCtaCard;
