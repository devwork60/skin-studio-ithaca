import { Sparkles } from "lucide-react";
import ButtonCapsLink from "@/components/button/ButtonCapsLink";
import FadeUp from "@/components/common-components/FadeUp";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import ServiceCardDesc from "@/components/pages/typography/ServiceCardDesc";
import StatHeading from "@/components/pages/typography/StatHeading";
import { COMING_SOON } from "@/constant/servicesPageData";

const ComingSoonSection = () => (
  <section className="bg-dark-deep py-20 md:py-28">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
      <FadeUp
        inView
        y={30}
        duration={0.8}
        className="overflow-hidden rounded-[28px] border border-border-accent bg-dark-secondary p-10 text-center md:p-14 lg:p-20"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-bg-accent-soft">
          <Sparkles size={24} className="text-rose" aria-hidden="true" />
        </div>
        <Eyebrow className="mb-4">{COMING_SOON.eyebrow}</Eyebrow>
        <StatHeading as="h2" className="mb-5 text-ivory">
          {COMING_SOON.title}
        </StatHeading>
        <ServiceCardDesc className="mx-auto mb-8 max-w-md">{COMING_SOON.description}</ServiceCardDesc>
        <ButtonCapsLink variant="accent" text={COMING_SOON.link.text} url={COMING_SOON.link.url} />
      </FadeUp>
    </div>
  </section>
);

export default ComingSoonSection;
