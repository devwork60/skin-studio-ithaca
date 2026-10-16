import type { ServicePageData } from "./types";
import { SQUARE_URL } from "@/constant/squareServices";

export const PHOTO_FACIAL: ServicePageData = {
  slug: "photo-facial",
  seo: {
    title: "Photo Facial / BBL | Skin Studio Ithaca",
    description:
      "BBL Photofacials in Ithaca, NY — skin rejuvenation, brown spot and sun damage removal, and treatment for rosacea and vascular redness.",
  },
  hero: {
    image: {
      src: "/assets/services/photofacial.webp",
      alt: "Professional BBL Photo Facial treatment at Skin Studio Ithaca",
    },
    breadcrumbLabel: "Photo Facial / BBL",
    title: (
      <>
        Photo <span className="heading-serif-italic">Facial</span>
      </>
    ),
    description:
      "Broadband Light (BBL) therapy offers skin rejuvenation, lightens brown spots, and removes vascular redness — an ideal treatment for rosacea and sun damage.",
  },
  detail: {
    image: {
      src: "/assets/services/photofacial.webp",
      alt: "Professional BBL Photofacial treatment in progress",
    },
    eyebrow: "Light-Based Rejuvenation",
    heading: (
      <>
        BBL <span className="heading-serif-italic">Photofacial</span>
      </>
    ),
    paragraphs: [
      "BBL Photofacials, also known as Broadband Light Therapy, involves a handheld device that emits targeted pulses of broad-spectrum light through direct contact with the skin. It acts on deeper layers of the skin, making it ideal for treating broken capillaries, sun damage, and other impurities.",
      "Skin rejuvenation, brown spot removal, and facial veins all disappear with BBL Photofacial.",
    ],
    highlights: [
      "Skin rejuvenation and improved complexion",
      "Brown spot and sun damage removal",
      "Facial vein and broken capillary treatment",
      "Ideal for rosacea and vascular redness",
      "Acts on deeper layers of the skin for lasting results",
    ],
    tags: ["Brown Spots", "Rosacea", "Sun Damage", "Skin Rejuvenation", "Broken Capillaries"],
    primaryCta: { text: "Book This Treatment", url: SQUARE_URL.photoFacial },
  },
  results: [
    {
      beforeSrc: "/assets/before-after/photofacial-pigmentation-before.webp",
      afterSrc: "/assets/before-after/photofacial-pigmentation-after.webp",
      beforeAlt: "Skin before BBL Photofacial treatment",
      afterAlt: "Skin after BBL Photofacial treatment",
    },
  ],
};
