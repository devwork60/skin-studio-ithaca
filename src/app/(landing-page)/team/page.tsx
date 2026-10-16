import PageHero from "@/components/common-components/PageHero";
import BookingCtaSection from "@/components/pages/landing-page/BookingCtaSection";
import TestimonialsSection from "@/components/pages/landing-page/TestimonialsSection";
import FounderSection from "@/components/pages/team/FounderSection";
import TeamGridSection from "@/components/pages/team/TeamGridSection";
import { TEAM_PAGE_HERO } from "@/constant/teamPageData";

export default function TeamPage() {
  return (
    <main>
      <PageHero wide {...TEAM_PAGE_HERO} />
      <FounderSection />
      <TeamGridSection />
      <TestimonialsSection showCTAs={false} />
      <BookingCtaSection />
    </main>
  );
}
