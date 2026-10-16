import { MapPin, Phone, type LucideIcon } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";

export const CONTACT_EYEBROW = "Get in Touch";

export const CONTACT_HEADING = (
  <>
    Let&apos;s Start Your
    <br />
    <span className="heading-serif-italic">Skin Journey.</span>
  </>
);

export const CONTACT_BOOK_URL = "/book";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  lines: string[];
  note: string;
  href: string;
  external?: boolean;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["903 Hanshaw Rd", "Suite 104"],
    note: "Ithaca, NY 14850",
    href: "https://maps.google.com/?q=903+Hanshaw+Rd+Suite+104+Ithaca+NY+14850",
    external: true,
  },
  {
    icon: Phone,
    label: "Call or Text",
    lines: [PHONE_NUMBER],
    note: "Mon – Sat · By appointment",
    href: PHONE_HREF,
  },
];

export const CONTACT_BOOK = {
  label: "Book Online",
  button: { text: "Schedule your visit", url: CONTACT_BOOK_URL },
  note: "Free consultations included",
};
