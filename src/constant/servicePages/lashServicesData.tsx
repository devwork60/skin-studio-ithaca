import { SQUARE_URL } from "@/constant/squareServices";
import type { ServicePageData } from "./types";

const BOOK_TEXT = "Book This Service";
// Party Lashes has no Square service yet, so it opens the general booking page.
const bookService = (url: string) => ({ text: BOOK_TEXT, url });

export const LASH_SERVICES: ServicePageData = {
  slug: "lash-services",
  seo: {
    title: "Lash Services | Skin Studio Ithaca",
    description:
      "Keratin lash lifts, lash tints, brow tints and Party Lashes in Ithaca, NY — effortless, everyday beauty that lasts up to 6–8 weeks.",
  },
  hero: {
    image: {
      src: "/assets/services/lash.webp",
      alt: "Lash services at Skin Studio Ithaca",
    },
    breadcrumbLabel: "Lash Services",
    title: (
      <>
        Lash <span className="heading-serif-italic">Services</span>
      </>
    ),
    description:
      "Keratin lash lifts, professional tints, Brow Tints, and Party Lashes — effortless, everyday beauty that enhances your natural look.",
  },
  detail: {
    image: {
      src: "/assets/services/lash-treatment.webp",
      alt: "Professional lash and brow treatment session at Skin Studio Ithaca",
    },
    eyebrow: "Wake Up Ready",
    heading: (
      <>
        Effortless <span className="heading-serif-italic">Beauty</span>
      </>
    ),
    paragraphs: [
      "Our lash and brow specialists specialize in Keratin lash lifts, professional lash tints, Brow Tints, and Party Lashes. Whether you want a natural curl or defined brows for everyday elegance or a special occasion, our technicians are true artists whose work speaks for itself.",
      "Keratin lash lifts are a great option for those looking to curl their natural lashes and for clients interested in a low maintenance look. Lash lifts can last up to 6–8 weeks and give your eyes that extra pop factor.",
    ],
    highlights: [
      "Keratin lash lifts for beautifully curled natural lashes",
      "Professional lash tints for defined, low-maintenance lashes",
      "Custom Brow Tints for beautifully sculpted, full-looking brows",
      "Party Lashes for an instant, glamorous look for special events",
      "Results that last up to 6–8 weeks",
      "Technicians who are true artists — their work speaks for itself",
    ],
    tags: ["Lash Lift", "Lash Tint", "Brow Tints", "Party Lashes", "Keratin", "Natural Brows"],
    primaryCta: { text: "Book Lash Services", url: SQUARE_URL.lashLift },
  },
  results: [
    {
      beforeSrc: "/assets/before-after/eye-lift-before.webp",
      afterSrc: "/assets/before-after/eye-lift-after.webp",
      beforeAlt: "Eye area before treatment",
      afterAlt: "Eye area after treatment",
    },
  ],
  offerings: {
    eyebrow: "Our Offerings",
    heading: (
      <>
        Lash &amp; Brow <span className="heading-serif-italic">Treatments</span>
      </>
    ),
    items: [
      {
        tagline: "Natural Curl & Lift",
        title: "Keratin Lash Lift",
        description:
          "Curls and lifts your natural lashes from root to tip using a nourishing keratin formula for a wide-awake, mascara-free look lasting 6–8 weeks.",
        cta: bookService(SQUARE_URL.lashLift),
      },
      {
        tagline: "Deep Definition",
        title: "Lash Tint",
        description:
          "A rich, semi-permanent tint applied to your natural eyelashes for bold, smudge-proof definition without the daily hassle of mascara.",
        cta: bookService(SQUARE_URL.lashTint),
      },
      {
        tagline: "Shape & Definition",
        title: "Brow Tints",
        description:
          "Custom color-matched tinting designed to darken, sculpt, and fill in sparse eyebrow hairs, giving your face a polished, natural frame.",
        cta: bookService(SQUARE_URL.browTint),
      },
      {
        tagline: "Instant Glamour",
        title: "Party Lashes",
        description:
          "Customizable, lightweight cluster lash applications tailored for instant volume, drama, and length — ideal for weekends, events, and photos.",
        cta: bookService("/book"),
      },
    ],
  },
};
