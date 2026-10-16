import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";

export const WHY_CHOOSE_EYEBROW = "The Skin Studio Difference";

export const WHY_CHOOSE_HEADING = (
  <>
    Care That Feels <span className="heading-serif-italic">Personal.</span>
  </>
);

export const WHY_CHOOSE_PRIMARY_CTA = { text: "Book Your Visit", url: "/book" };
export const WHY_CHOOSE_SECONDARY_CTA = {
  text: `Or Call ${PHONE_NUMBER}`,
  url: PHONE_HREF,
};

export const WHY_CHOOSE_VALUES = [
  {
    number: "01",
    title: "Personalized Care",
    description:
      "Every treatment plan is built around your unique skin concerns and goals. Free consultations with all skincare services.",
  },
  {
    number: "02",
    title: "Advanced Technology",
    description:
      "From our Versa Pro Diode laser to BBL (Broadband Light) photofacials, we invest in proven, medical-grade technology for safe, effective results.",
  },
  {
    number: "03",
    title: "Relaxing Experience",
    description:
      "Medical-grade results delivered in a calming, boutique spa atmosphere — treatment sessions that feel as restorative as they are effective.",
  },
  {
    number: "04",
    title: "Expert Guidance",
    description:
      "Our team brings decades of combined aesthetics experience, from high-end resort spas to physician's offices.",
  },
];

export const WHY_CHOOSE_IMAGES = [
  {
    src: "/assets/why-choose/treatment-facial.webp",
    alt: "Natalie performing a facial treatment with magnifying light",
    className: "",
    imageClassName: "object-cover",
  },
  {
    src: "/assets/about/natalie.webp",
    alt: "Natalie Sweeney, Owner of Skin Studio Ithaca",
    className: "",
    imageClassName: "object-cover object-top",
  },
  {
    src: "/assets/services/microfusion.webp",
    alt: "Gloved esthetician using a micro-infusion pen on a client's face",
    className: "col-span-2",
    imageClassName: "object-cover",
  },
];
