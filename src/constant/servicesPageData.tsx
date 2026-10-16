import { SQUARE_BOOKING_URL, SQUARE_FACIAL_BOOKING_URL } from "@/constant/site";

export const SERVICES_PAGE_HERO = {
  image: {
    src: "/assets/about/treatment.webp",
    alt: "Skin Studio Ithaca treatment room",
  },
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Services" }],
  title: (
    <>
      Our <span className="heading-serif-italic">Treatments</span>
    </>
  ),
  description:
    "From custom facials to advanced laser treatments, every service is tailored to your unique skin goals. Discover what we can do for you.",
};

export interface ServiceListItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  href: string;
  bookUrl: string;
}

export const SERVICES_PAGE_LIST: ServiceListItem[] = [
  {
    number: "01",
    title: "Facial Treatments",
    description:
      "All facial treatments are customized to each client's needs from the Acne Eliminator to Microdermabrasion to everything in between we offer an array of services to hydrate, calm and clarify your skin.",
    tags: ["Deep Cleanse", "Hydration", "Acne Care", "Microdermabrasion"],
    image: "/assets/services/facial-mask.webp",
    alt: "Professional facial treatment with gentle skincare application",
    href: "/services/facial-treatments",
    bookUrl: SQUARE_FACIAL_BOOKING_URL,
  },
  {
    number: "02",
    title: "Micro-Infusion Facial",
    description:
      "More than just a passing trend, Micro-Infusion Facial is a proven way to boost your collagen production, tighten skin, reduce fine lines, reduce large pores and resurface skin.",
    tags: ["Collagen Boost", "Fine Lines", "Pore Refining", "Skin Resurfacing"],
    image: "/assets/services/microfusion.webp",
    alt: "Micro-Infusion Facial before and after results",
    href: "/services/micro-infusion-facial",
    bookUrl: SQUARE_BOOKING_URL,
  },
  {
    number: "03",
    title: "Photo Facial / BBL",
    description:
      "Broadband Light (BBL) is an advanced cosmetic skin treatment that offers skin rejuvenation, lightens brown spots and removes vascular redness from the skin making it a great treatment for rosacea skin.",
    tags: ["Brown Spots", "Rosacea", "Sun Damage", "Rejuvenation"],
    image: "/assets/services/photofacial.webp",
    alt: "Professional BBL Photofacial treatment in progress",
    href: "/services/photo-facial",
    bookUrl: SQUARE_BOOKING_URL,
  },
  {
    number: "04",
    title: "Laser Hair Removal",
    description:
      "If you're not happy with shaving and tweezing to remove unwanted hair, we offer laser hair removal to suit every skin type. Pain-free treatments with our Versa Pro Diode technology deliver smooth results in fewer sessions.",
    tags: ["Pain-Free", "All Skin Types", "Versa Pro Diode", "Fewer Sessions"],
    image: "/assets/services/laser-treatment.webp",
    alt: "Professional laser hair removal treatment session",
    href: "/services/laser-hair-removal",
    bookUrl: SQUARE_BOOKING_URL,
  },
  {
    number: "05",
    title: "Lash Services",
    description:
      "Our lash specialists offer Keratin Lash Lifts, professional lash tints, and Party Lashes. Our technicians are true artists whose work speaks for itself — effortless, everyday beauty that lasts up to 6–8 weeks.",
    tags: ["Lash Lift", "Lash Tint", "Party Lashes", "Keratin"],
    image: "/assets/services/lash.webp",
    alt: "Professional lash services including lash lift, tint, and party lashes",
    href: "/services/lash-services",
    bookUrl: SQUARE_BOOKING_URL,
  },
];

export const SERVICE_BOOK_LABEL = "Book This Treatment";
export const SERVICE_CARD_EYEBROW = "Treatment";

export const COMING_SOON = {
  eyebrow: "Coming Soon",
  title: "Laser Focus Course",
  description:
    "We're developing an advanced training course for skincare professionals. Stay tuned for enrollment details.",
  link: { text: "Learn More on Our Website", url: "https://skinstudioithaca.com/services/" },
};

export const SERVICES_PAGE_CTA = {
  eyebrow: "Ready to Begin?",
  heading: (
    <>
      Not Sure Which
      <br />
      Treatment Is <span className="heading-serif-italic">Right?</span>
    </>
  ),
  description:
    "Book a free consultation and let our licensed professionals create a personalized treatment plan designed around your unique skin goals.",
  primary: { text: "Book a Consultation", url: "/book" },
};
