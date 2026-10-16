import Footer from "@/components/pages/footer/Footer";
import LandingPageClientWrapper from "@/components/wrappers/LandingPageClientWrapper";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingPageClientWrapper>{children}</LandingPageClientWrapper>
      <Footer />
    </>
  );
}
