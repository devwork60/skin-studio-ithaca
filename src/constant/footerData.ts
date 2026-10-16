import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";
import { SITE_NAME } from "@/constant/site";

export const FOOTER_TAGLINE =
  "Serious skincare. Serious results. Medical-grade skin solutions in Ithaca, New York.";

export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_SOCIAL = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;

export const FOOTER_NAV_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_TREATMENT_LINKS: FooterLink[] = [
  { label: "Facial Treatments", href: "/services/facial-treatments" },
  { label: "Micro-Infusion Facial", href: "/services/micro-infusion-facial" },
  { label: "Photo Facial / BBL", href: "/services/photo-facial" },
  { label: "Laser Hair Removal", href: "/services/laser-hair-removal" },
  { label: "Lash Services", href: "/services/lash-services" },
];

export const FOOTER_INFO_LINKS: FooterLink[] = [
  { label: "Offers", href: "/offers" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: PHONE_NUMBER, href: PHONE_HREF },
];

export const FOOTER_ADDRESS = ["903 Hanshaw Rd, Suite 104", "Ithaca, NY 14850"];

export const FOOTER_COPYRIGHT = `${SITE_NAME}. All rights reserved.`;
export const FOOTER_BOOK_LINK = { label: "Book an Appointment", href: "/book" };
