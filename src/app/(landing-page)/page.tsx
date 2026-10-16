import AboutSection from "@/components/pages/landing-page/AboutSection";
import BeforeAfterSection from "@/components/pages/landing-page/BeforeAfterSection";
import BookingCtaSection from "@/components/pages/landing-page/BookingCtaSection";
import ContactSection from "@/components/pages/landing-page/ContactSection";
import ExperienceSection from "@/components/pages/landing-page/ExperienceSection";
import HeroSection from "@/components/pages/landing-page/HeroSection";
import ImageBreakSection from "@/components/pages/landing-page/ImageBreakSection";
import ServicesSection from "@/components/pages/landing-page/ServicesSection";
import TestimonialsSection from "@/components/pages/landing-page/TestimonialsSection";
import TeamSection from "@/components/pages/landing-page/TeamSection";
import WhyChooseSection from "@/components/pages/landing-page/WhyChooseSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ImageBreakSection />
      <WhyChooseSection />
      <TeamSection />
      <ExperienceSection />
      <TestimonialsSection />
      <BookingCtaSection />
      <ContactSection />
    </main>
  );
}
