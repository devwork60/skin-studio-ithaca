import { Clock, MapPin, Phone, type LucideIcon } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";
import { GOOGLE_MAPS_DIRECTIONS_URL } from "@/constant/site";

export const CONTACT_PAGE_SEO = {
  title: "Contact Us | Skin Studio Ithaca",
  description:
    "Visit Skin Studio at Community Corners Plaza, 903 Hanshaw Rd Suite 104, Ithaca NY — call or text 607-262-8566 or book your appointment online.",
};

export const CONTACT_PAGE_HERO = {
  image: { src: "/assets/hero/hero.webp", alt: "Skin Studio Ithaca" },
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Contact" }],
  title: (
    <>
      Contact <span className="heading-serif-italic">Us</span>
    </>
  ),
  description:
    "We'd love to hear from you. Visit our studio in Community Corners Plaza, or book an appointment online to begin your personalized skincare journey.",
};

export interface ContactDetail {
  icon: LucideIcon;
  label: string;
  primary: string;
  secondary: string;
  href: string;
  external?: boolean;
  action: string;
}

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: MapPin,
    label: "Visit Us",
    primary: "903 Hanshaw Rd, Suite 104",
    secondary: "Community Corners Plaza · Ithaca, NY 14850",
    href: GOOGLE_MAPS_DIRECTIONS_URL,
    external: true,
    action: "Get Directions",
  },
  {
    icon: Phone,
    label: "Call or Text",
    primary: PHONE_NUMBER,
    secondary: "Mon – Sat · By appointment",
    href: PHONE_HREF,
    action: "Call Now",
  },
  {
    icon: Clock,
    label: "Hours",
    primary: "Monday – Saturday",
    secondary: "By appointment only",
    href: "/book",
    action: "Book Online",
  },
];

export const CONTACT_BANNER = {
  eyebrow: "Appointments & Scheduling",
  heading: (
    <>
      Ready to Book Your <span className="heading-serif-italic">Visit?</span>
    </>
  ),
  description:
    "All consultations and treatment appointments are booked directly through our booking portal. Visit our booking page to browse services, view pricing, and reserve your preferred time slot on Square.",
  bookText: "Book Now",
  bookUrl: "/book",
  callText: `Call or Text ${PHONE_NUMBER}`,
  callUrl: PHONE_HREF,
};

export const CONTACT_LOCATION = {
  eyebrow: "Studio Location",
  heading: (
    <>
      Community Corners <span className="heading-serif-italic">Plaza</span>
    </>
  ),
  address: "903 Hanshaw Rd, Suite 104 · Ithaca, NY 14850 · Convenient parking right outside",
  directionsText: "Get Driving Directions",
  bookText: "Book an Appointment",
  bookUrl: "/book",
  mapTitle: "Community Corners Plaza 903 Hanshaw Road Ithaca NY 14850",
};

export const CONTACT_CTA = {
  eyebrow: "Ready to Begin?",
  heading: (
    <>
      Start Your Skin <span className="heading-serif-italic">Journey</span>
    </>
  ),
  description:
    "Visit our booking page to choose your service, view appointment times, and reserve your session.",
  bookText: "Book an Appointment",
  bookUrl: "/book",
  callText: PHONE_NUMBER,
  callUrl: PHONE_HREF,
};
