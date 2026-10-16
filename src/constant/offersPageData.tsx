import { Sparkles, Zap, type LucideIcon } from "lucide-react";
import { SQUARE_BOOKING_URL, SQUARE_FACIAL_BOOKING_URL } from "@/constant/site";

export const OFFERS_PAGE_SEO = {
  title: "Special Offers | Skin Studio Ithaca",
  description:
    "Consultation offers for facials and laser hair removal at Skin Studio Ithaca — start your skin journey with a personalized plan.",
};

export const OFFERS_PAGE_HERO = {
  image: { src: "/assets/hero/hero.webp", alt: "Skin Studio Ithaca" },
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Offers" }],
  title: (
    <>
      Special <span className="heading-serif-italic">Offers</span>
    </>
  ),
  description:
    "Discover our consultation offers and take the first step toward healthier, more radiant skin — with a personalized plan designed just for you.",
};

export const OFFERS_INTRO = {
  eyebrow: "Current Offers",
  heading: (
    <>
      Start Your Skin <span className="heading-serif-italic">Journey.</span>
    </>
  ),
  description:
    "Book a consultation and let our licensed professionals create a personalized treatment plan for you.",
};

export const OFFERS_NOTE = "All consultations are applied toward the cost of your first treatment.";

export const OFFER_BOOK_LABEL = "Book This Consultation";

export interface Offer {
  title: string;
  price: string;
  valued: string | null;
  icon: LucideIcon;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  bookingUrl: string;
}

export const OFFERS: Offer[] = [
  {
    title: "Facial Consultation",
    price: "$25",
    valued: "Valued at $100",
    icon: Sparkles,
    description:
      "Experience personalized skin analysis tailored to your unique needs. Consultations focus on addressing concerns such as acne, signs of aging, and skin discoloration. We provide customized recommendations to help you achieve healthy, radiant skin.",
    tags: ["Skin Analysis", "Personalized Plan", "All Skin Types"],
    image: "/assets/why-choose/treatment-facial.webp",
    alt: "Professional facial consultation and treatment at Skin Studio Ithaca",
    bookingUrl: SQUARE_FACIAL_BOOKING_URL,
  },
  {
    title: "Laser Hair Consultation",
    price: "$25",
    valued: null,
    icon: Zap,
    description:
      "Laser hair removal for all skin types. Discover if laser hair removal is right for you with a comprehensive consultation. We assess your suitability for the treatment while providing transparent pricing information. Our goal is to ensure you feel informed and confident in your decision for smooth, hair-free skin.",
    tags: ["All Skin Types", "Transparent Pricing", "Versa Pro Diode"],
    image: "/assets/services/laser-treatment.webp",
    alt: "Professional Versa Pro Diode laser hair removal consultation at Skin Studio Ithaca",
    bookingUrl: SQUARE_BOOKING_URL,
  },
];

export const OFFERS_PAGE_CTA = {
  heading: (
    <>
      Ready to Get
      <br />
      <span className="heading-serif-italic">Started?</span>
    </>
  ),
  description:
    "Take advantage of our consultation offers and begin your journey to healthier, more radiant skin. Book today — your skin will thank you.",
};
