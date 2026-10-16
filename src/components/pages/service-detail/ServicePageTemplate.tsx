import PageHero from "@/components/common-components/PageHero";
import BookingCtaSection from "@/components/pages/landing-page/BookingCtaSection";
import TestimonialsSection from "@/components/pages/landing-page/TestimonialsSection";
import type { ServicePageData } from "@/constant/servicePages/types";
import ServiceDetailSection from "./ServiceDetailSection";
import ServiceOfferingsSection from "./ServiceOfferingsSection";
import ServiceResultsSection from "./ServiceResultsSection";

// Shared layout for every /services/[slug] page; each page only supplies its data.
const ServicePageTemplate = ({ data }: { data: ServicePageData }) => (
  <main>
    <PageHero
      wide
      image={data.hero.image}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: data.hero.breadcrumbLabel },
      ]}
      title={data.hero.title}
      description={data.hero.description}
    />
    <ServiceDetailSection detail={data.detail} />
    <ServiceResultsSection items={data.results} />
    {data.offerings && <ServiceOfferingsSection offerings={data.offerings} />}
    <TestimonialsSection showCTAs={false} />
    <BookingCtaSection />
  </main>
);

export default ServicePageTemplate;
