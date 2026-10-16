import PageHero from "@/components/common-components/PageHero";
import TestimonialsSection from "@/components/pages/landing-page/TestimonialsSection";
import {
  ContactBannerSection,
  ContactCtaSection,
  ContactDetailsSection,
  ContactLocationSection,
} from "@/components/pages/contact/ContactSections";
import { CONTACT_PAGE_HERO } from "@/constant/contactPageData";

export default function ContactPage() {
  return (
    <main>
      <PageHero wide {...CONTACT_PAGE_HERO} />
      <ContactDetailsSection />
      <ContactBannerSection />
      <ContactLocationSection />
      <TestimonialsSection showCTAs={false} />
      <ContactCtaSection />
    </main>
  );
}
