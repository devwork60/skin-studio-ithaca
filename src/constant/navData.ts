export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const PHONE_NUMBER = "607-262-8566";
export const PHONE_HREF = "tel:6072628566";
export const BOOK_NOW_URL = "/book";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Facial Treatments", href: "/services/facial-treatments" },
      { label: "Micro-Infusion Facial", href: "/services/micro-infusion-facial" },
      { label: "Photo Facial", href: "/services/photo-facial" },
      { label: "Lash Services", href: "/services/lash-services" },
      { label: "Laser Hair Removal", href: "/services/laser-hair-removal" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
];
