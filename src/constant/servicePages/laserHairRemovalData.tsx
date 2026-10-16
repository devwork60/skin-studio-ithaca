import type { ServicePageData } from "./types";

export const LASER_HAIR_REMOVAL: ServicePageData = {
  slug: "laser-hair-removal",
  seo: {
    title: "Laser Hair Removal | Skin Studio Ithaca",
    description:
      "Pain-free laser hair removal with Versa Pro Diode technology in Ithaca, NY — effective on the widest range of skin types in fewer sessions.",
  },
  hero: {
    image: {
      src: "/assets/services/laser-v2.webp",
      alt: "Laser hair removal treatment at Skin Studio Ithaca",
    },
    breadcrumbLabel: "Laser Hair Removal",
    title: (
      <>
        Laser Hair <span className="heading-serif-italic">Removal</span>
      </>
    ),
    description:
      "Pain-free laser hair removal with our Versa Pro Diode technology. Effective across the widest range of skin types, delivering smooth results in fewer sessions.",
  },
  detail: {
    image: {
      src: "/assets/services/laser-treatment.webp",
      alt: "Professional laser hair removal session",
    },
    eyebrow: "Smooth, Lasting Results",
    heading: (
      <>
        Versa Pro Diode <span className="heading-serif-italic">Technology</span>
      </>
    ),
    paragraphs: [
      "Achieve optimal laser hair removal clearance on a wide range of skin types in fewer sessions with maximum patient comfort.",
      "The Versa Pro Diode laser hair removal treatment is fast, painless and effective on the widest range of skin types and colors more than any other laser hair removal treatment. It is also highly effective for pigmented lesions.",
    ],
    highlights: [
      "Pain-free laser hair removal with no downtime",
      "Effective on the widest range of skin types and colors",
      "Achieves optimal clearance in fewer sessions",
      "Maximum patient comfort with Versa Pro Diode technology",
      "Highly effective for pigmented lesions",
    ],
    tags: ["Pain-Free", "All Skin Types", "Fewer Sessions", "Versa Pro Diode", "No Downtime"],
    primaryCta: { text: "Book This Treatment", url: "/book" },
  },
  results: [
    {
      beforeSrc: "/assets/before-after/facial-tightening-before.webp",
      afterSrc: "/assets/before-after/facial-tightening-after.webp",
      beforeAlt: "Skin before treatment",
      afterAlt: "Skin after treatment",
    },
  ],
};
