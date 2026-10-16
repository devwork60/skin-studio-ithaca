import { Clock3, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";

export const HERO_EYEBROW = "Luxury Skin Clinic · Ithaca, New York";

export const HERO_HEADING_LINE_1 = "Serious Skincare.";
export const HERO_HEADING_LINE_2_PLAIN = "Serious";
export const HERO_HEADING_LINE_2_ITALIC = "Results.";

export const HERO_DESCRIPTION =
  "Medical-grade skin solutions in a calming, boutique atmosphere. Non-surgical treatments that deliver lasting results — without the downtime.";

export const HERO_IMAGE = {
  src: "/assets/hero/hero.webp",
  alt: "Skin Studio Ithaca reception with pink marble wall and gold neon sign",
};

export const HERO_PRIMARY_CTA = { text: "Book an Appointment", url: "/book" };
export const HERO_SECONDARY_CTA = { text: "Explore Treatments", url: "#services" };

export interface HeroTrustItem {
  icon: LucideIcon;
  label: string;
}

export const HERO_TRUST_ITEMS: HeroTrustItem[] = [
  { icon: ShieldCheck, label: "Licensed Professionals" },
  { icon: Sparkles, label: "Personalized Treatments" },
  { icon: Clock3, label: "No Downtime Required" },
];
