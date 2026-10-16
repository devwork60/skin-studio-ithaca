import PageHero from "@/components/common-components/PageHero";
import BookingCtaSection from "@/components/pages/landing-page/BookingCtaSection";
import TestimonialsSection from "@/components/pages/landing-page/TestimonialsSection";
import OffersSection from "@/components/pages/offers/OffersSection";
import { OFFERS_PAGE_CTA, OFFERS_PAGE_HERO } from "@/constant/offersPageData";

export default function OffersPage() {
  return (
    <main>
      <PageHero wide {...OFFERS_PAGE_HERO} />
      <OffersSection />
      <TestimonialsSection showCTAs={false} />
      <BookingCtaSection
        narrow
        heading={OFFERS_PAGE_CTA.heading}
        description={OFFERS_PAGE_CTA.description}
      />
    </main>
  );
}
