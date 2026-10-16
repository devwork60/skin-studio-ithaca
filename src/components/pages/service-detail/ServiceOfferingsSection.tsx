import ButtonText from "@/components/button/ButtonText";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import CardDesc from "@/components/pages/typography/CardDesc";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardRole from "@/components/pages/typography/CardRole";
import type { ServicePageData } from "@/constant/servicePages/types";

type Offerings = NonNullable<ServicePageData["offerings"]>;

// Grid of sub-services (e.g. the four lash & brow options) with a booking link on each.
const ServiceOfferingsSection = ({ offerings }: { offerings: Offerings }) => (
  <section className="border-t border-border-subtle bg-dark-primary py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <SectionHeader
        align="center"
        eyebrow={offerings.eyebrow}
        title={offerings.heading}
        headingVariant="cta"
        headingSpacing=""
        className="mb-14"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {offerings.items.map((item, i) => (
          <FadeUp
            key={item.title}
            inView
            y={30}
            duration={0.7}
            delay={i * 0.1}
            margin="-60px"
            className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-dark-secondary/60 p-7 transition-all duration-300 hover:border-border-focus hover:bg-dark-secondary"
          >
            <div>
              <CardRole>{item.tagline}</CardRole>
              <CardHeading className="mt-3 text-[24px]">{item.title}</CardHeading>
              <CardDesc className="mt-4">{item.description}</CardDesc>
            </div>
            <div className="mt-8 border-t border-white/5 pt-4">
              <ButtonText variant="accent" text={item.cta.text} url={item.cta.url} />
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceOfferingsSection;
