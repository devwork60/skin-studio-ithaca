import PageHero from "@/components/common-components/PageHero";
import BookingCtaSection from "@/components/pages/landing-page/BookingCtaSection";
import ComingSoonSection from "@/components/pages/landing-page/ComingSoonSection";
import ServiceListCard from "@/components/pages/landing-page/ServiceListCard";
import { SERVICES_PAGE_CTA, SERVICES_PAGE_HERO, SERVICES_PAGE_LIST } from "@/constant/servicesPageData";

export default function ServicesPage() {
  return (
    <main>
      <PageHero {...SERVICES_PAGE_HERO} />

      <section className="bg-dark-primary py-[60px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {SERVICES_PAGE_LIST.map((service, i) => (
              <ServiceListCard key={service.number} service={service} reversed={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      <ComingSoonSection />

      <BookingCtaSection
        narrow
        eyebrow={SERVICES_PAGE_CTA.eyebrow}
        heading={SERVICES_PAGE_CTA.heading}
        description={SERVICES_PAGE_CTA.description}
        primaryCta={SERVICES_PAGE_CTA.primary}
      />
    </main>
  );
}
