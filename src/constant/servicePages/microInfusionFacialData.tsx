import type { ServicePageData } from "./types";
import { SQUARE_URL } from "@/constant/squareServices";

export const MICRO_INFUSION_FACIAL: ServicePageData = {
  slug: "micro-infusion-facial",
  seo: {
    title: "Micro-Infusion Facial | Skin Studio Ithaca",
    description:
      "A proven way to boost collagen, tighten skin, reduce fine lines and minimize pores. Micro-infusion facials in Ithaca, NY.",
  },
  hero: {
    image: {
      src: "/assets/services/rejuvenation-procedur.webp",
      alt: "Micro-Infusion Facial treatment at Skin Studio Ithaca",
    },
    breadcrumbLabel: "Micro-Infusion Facial",
    title: (
      <>
        Micro-Infusion <span className="heading-serif-italic">Facial</span>
      </>
    ),
    description:
      "A proven way to boost collagen production, tighten skin, reduce fine lines, minimize pores, and resurface skin for a radiant, youthful complexion.",
  },
  detail: {
    image: {
      src: "/assets/services/rejuvenation-procedur.webp",
      alt: "Micro-infusion facial treatment on a relaxed client",
    },
    eyebrow: "Targeted Skin Renewal",
    heading: (
      <>
        Rejuvenate Your <span className="heading-serif-italic">Skin</span>
      </>
    ),
    paragraphs: [
      "Micro-Infusion Facial can reduce the signs of visible aging such as wrinkles, fine lines, enlarged pores and reduce acne scars. It enhances texture, tone, and elasticity, leading to healthier looking skin.",
      "Our estheticians will assess your facial concerns and create a customized treatment plan that may include a combination of therapies to achieve optimal results. This plan will also include recommendations for pre-treatment skincare or lifestyle changes to enhance results.",
    ],
    highlights: [
      "Reduces the signs of visible aging such as wrinkles and fine lines",
      "Reduces enlarged pores and acne scars",
      "Enhances texture, tone, and elasticity for healthier looking skin",
      "Boosts collagen production and tightens skin",
      "Customized treatment plans tailored to individual concerns",
    ],
    tags: ["Collagen Boost", "Fine Lines", "Pore Refining", "Skin Resurfacing", "Anti-Aging"],
    primaryCta: { text: "Book This Treatment", url: SQUARE_URL.microFusion },
  },
  results: [
    {
      beforeSrc: "/assets/service-results/skin-rejuvenation-before.webp",
      afterSrc: "/assets/service-results/skin-rejuvenation-after.webp",
      beforeAlt: "Face before skin rejuvenation",
      afterAlt: "Face after skin rejuvenation",
      aspectRatio: "3/2",
    },
  ],
};
