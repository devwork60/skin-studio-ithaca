import ButtonSm from "@/components/button/ButtonSm";
import ButtonText from "@/components/button/ButtonText";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import {
  SERVICES,
  SERVICES_DESCRIPTION,
  SERVICES_EYEBROW,
  SERVICES_HEADING,
  SERVICES_PRIMARY_CTA,
  SERVICES_SECONDARY_CTA,
} from "@/constant/servicesData";
import MobileServiceCard from "./MobileServiceCard";
import StickyServiceCard from "./StickyServiceCard";

const ServicesSection = () => (
  <section
    id="services"
    className="bg-dark-primary pb-10 pt-[60px] md:pb-12 lg:pb-14"
  >
    <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
      <SectionHeader
        eyebrow={SERVICES_EYEBROW}
        title={SERVICES_HEADING}
        description={SERVICES_DESCRIPTION}
        headingSpacing="mb-6"
        descriptionClassName="max-w-md"
        className="mb-16 max-w-2xl lg:mb-20"
      />

      {/* Desktop: sticky card stack */}
      <div className="relative hidden lg:block">
        {SERVICES.map((service, i) => (
          <StickyServiceCard key={service.number} service={service} index={i} />
        ))}
      </div>

      {/* Mobile & tablet: stacked cards */}
      <div className="space-y-6 lg:hidden">
        {SERVICES.map((service, i) => (
          <MobileServiceCard key={service.number} service={service} index={i} />
        ))}
      </div>

      <FadeUp
        inView
        margin="0px"
        className="mt-20 flex flex-col items-center gap-5 text-center md:mt-28"
      >
        <ButtonSm
          text={SERVICES_PRIMARY_CTA.text}
          url={SERVICES_PRIMARY_CTA.url}
          padding="px-8 py-3.5"
        />
        <ButtonText
          variant="subtle"
          text={SERVICES_SECONDARY_CTA.text}
          url={SERVICES_SECONDARY_CTA.url}
        />
      </FadeUp>
    </div>
  </section>
);

export default ServicesSection;
