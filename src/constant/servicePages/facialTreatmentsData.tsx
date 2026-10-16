import { SQUARE_FACIAL_BOOKING_URL } from "@/constant/site";
import type { ServicePageData } from "./types";

export const FACIAL_TREATMENTS: ServicePageData = {
  slug: "facial-treatments",
  seo: {
    title: "Facial Treatments | Skin Studio Ithaca",
    description:
      "Custom facials, acne treatments, chemical peels and fusion facials in Ithaca, NY — customized to each client's needs for lasting results.",
  },
  hero: {
    image: {
      src: "/assets/services/facial-mask.webp",
      alt: "Professional facial treatment at Skin Studio Ithaca",
    },
    breadcrumbLabel: "Facial Treatments",
    title: (
      <>
        Facial <span className="heading-serif-italic">Treatments</span>
      </>
    ),
    description:
      "Customized to each client's needs — from acne elimination to microdermabrasion, our signature facials combine relaxation with powerful, lasting results.",
  },
  detail: {
    image: {
      src: "/assets/services/facial-mask.webp",
      alt: "Facial treatment with a clay mask at Skin Studio Ithaca",
    },
    eyebrow: "Facials For Every Skin Type",
    heading: (
      <>
        Results-Driven <span className="heading-serif-italic">Skincare</span>
      </>
    ),
    paragraphs: [
      "We offer facials to suit all skin types, acne treatments, low to deep grade chemical peels, skin tightening facials, and our signature fusion facials — the possibilities are endless.",
      "Skin Studio takes skincare to the next level with a variety of skin services that are results driven.",
    ],
    highlights: [
      "Medical grade skin services in a relaxing atmosphere",
      "Signature facials — a hybrid of relaxing treatment with powerful, lasting results",
      "Free facial consultations with all skincare services",
    ],
    tags: ["Deep Cleanse", "Hydration", "Acne Care", "Chemical Peels", "Anti-Aging", "Fusion Facials"],
    primaryCta: { text: "Book a Facial", url: SQUARE_FACIAL_BOOKING_URL, external: true },
  },
  results: [
    {
      beforeSrc: "/assets/service-results/eye-wrinkle-before.webp",
      afterSrc: "/assets/service-results/eye-wrinkle-after.webp",
      beforeAlt: "Eye area before a skin rejuvenation facial",
      afterAlt: "Eye area after a skin rejuvenation facial",
    },
  ],
};
