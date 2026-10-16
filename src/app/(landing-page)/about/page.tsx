import PageHero from "@/components/common-components/PageHero";
import StatementSection from "@/components/common-components/StatementSection";
import AboutIntroSection from "@/components/pages/about/AboutIntroSection";
import BookingCtaSection from "@/components/pages/landing-page/BookingCtaSection";
import TestimonialsSection from "@/components/pages/landing-page/TestimonialsSection";
import { ABOUT_PAGE_CTA, ABOUT_PAGE_HERO, ABOUT_PHILOSOPHY } from "@/constant/aboutPageData";

export default function AboutPage() {
  return (
    <main>
      <PageHero wide {...ABOUT_PAGE_HERO} />
      <AboutIntroSection />
      <StatementSection
        eyebrow={ABOUT_PHILOSOPHY.eyebrow}
        heading={ABOUT_PHILOSOPHY.heading}
        paragraphs={ABOUT_PHILOSOPHY.paragraphs}
      />
      <TestimonialsSection showCTAs={false} />
      <BookingCtaSection heading={ABOUT_PAGE_CTA.heading} description={ABOUT_PAGE_CTA.description} />
    </main>
  );
}
