import PageHero from "@/components/common-components/PageHero";
import TestimonialsSection from "@/components/pages/landing-page/TestimonialsSection";
import ServiceMenuSection from "@/components/pages/book/ServiceMenuSection";
import SubscribeSection from "@/components/pages/book/SubscribeSection";
import { BOOK_PAGE_HERO } from "@/constant/bookPageData";

export default function BookPage() {
  return (
    <main>
      <PageHero wide compact {...BOOK_PAGE_HERO} />
      <ServiceMenuSection />
      <TestimonialsSection showCTAs={false} />
      <SubscribeSection />
    </main>
  );
}
