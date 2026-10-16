import { SQUARE_URL } from "@/constant/squareServices";

export const SERVICES_EYEBROW = "Our Treatments";

export const SERVICES_HEADING = (
  <>
    Treatments Designed
    <br />
    Around Your <span className="heading-serif-italic">Skin.</span>
  </>
);

export const SERVICES_DESCRIPTION =
  "From custom facials to advanced laser treatments, every service is tailored to your unique skin goals.";

export const SERVICES_CARD_CTA = { text: "Book This Treatment" };
export const SERVICES_PRIMARY_CTA = { text: "Explore All Treatments", url: "/services" };
export const SERVICES_SECONDARY_CTA = {
  text: "Not sure? Book a free consultation",
  url: "/book",
};

export interface Service {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  bookUrl: string; // Square deep link for this service
}

export const SERVICES: Service[] = [
  {
    number: "01",
    eyebrow: "Facials For Every Skin Type",
    title: "Facial Treatments",
    description:
      "Customized to each client's needs — from acne elimination to microdermabrasion, our signature facials combine relaxation with powerful, lasting results.",
    tags: ["Deep Cleanse", "Hydration", "Acne Care"],
    image: "/assets/services/facial-mask.webp",
    alt: "Professional facial treatment with gentle skincare application",
    bookUrl: SQUARE_URL.facial,
  },
  {
    number: "02",
    eyebrow: "Targeted Skin Renewal",
    title: "Micro-Infusion Facial",
    description:
      "A proven way to boost collagen production, tighten skin, reduce fine lines, minimize pores, and resurface skin for a radiant, youthful complexion.",
    tags: ["Collagen Boost", "Fine Lines", "Pore Refining"],
    image: "/assets/services/microfusion.webp",
    alt: "Gloved esthetician using a micro-infusion pen on a client's face",
    bookUrl: SQUARE_URL.microFusion,
  },
  {
    number: "03",
    eyebrow: "Light-Based Rejuvenation",
    title: "Photo Facial / BBL",
    description:
      "Broadband Light (BBL) therapy offers skin rejuvenation, lightens brown spots, and removes vascular redness — an ideal treatment for rosacea and sun damage.",
    tags: ["Brown Spots", "Rosacea", "Sun Damage"],
    image: "/assets/services/photofacial.webp",
    alt: "Professional BBL Photofacial treatment in progress",
    bookUrl: SQUARE_URL.photoFacial,
  },
  {
    number: "04",
    eyebrow: "Smooth, Lasting Results",
    title: "Laser Hair Removal",
    description:
      "Pain-free laser hair removal with our Versa Pro Diode technology. Effective across the widest range of skin types, delivering smooth results in fewer sessions.",
    tags: ["Pain-Free", "All Skin Types", "Fewer Sessions"],
    image: "/assets/services/laser-v2.webp",
    alt: "Professional laser hair removal treatment session",
    bookUrl: SQUARE_URL.laserConsult,
  },
  {
    number: "05",
    eyebrow: "Wake Up Ready",
    title: "Lash Services",
    description:
      "Our lash specialists offer keratin lash lifts for beautifully curled natural lashes, professional lash tints, and Party Lashes — effortless, everyday beauty.",
    tags: ["Lash Lift", "Lash Tint", "Party Lashes", "Brow Tints"],
    image: "/assets/services/lash.webp",
    alt: "Close-up of naturally curled eyelashes and lash services",
    bookUrl: SQUARE_URL.lashLift,
  },
];
