import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";

export const BOOK_PAGE_SEO = {
  title: "Book an Appointment | Skin Studio Ithaca",
  description:
    "Browse every Skin Studio Ithaca service, pick your treatment and book your appointment — or call or text 607-262-8566.",
};

export const BOOK_PAGE_HERO = {
  image: {
    src: "/assets/about/treatment.webp",
    alt: "Skin Studio Ithaca treatment room",
  },
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Book" }],
  title: (
    <>
      Book an <span className="heading-serif-italic">Appointment</span>
    </>
  ),
  description:
    "Browse our services, choose your provider and time, and request your appointment — all right here.",
};

export const BOOK_SIDEBAR = {
  call: {
    title: "Call or Text Us",
    description:
      "Prefer to book by phone? Call or text us and we'll help you find the right treatment and time.",
    phoneText: PHONE_NUMBER,
    phoneUrl: PHONE_HREF,
  },
  policy: {
    title: "Cancellation Policy",
    note: "Please review before booking",
    url: "/cancellation-policy",
  },
};

export const SUBSCRIBE = {
  eyebrow: "Stay Connected",
  heading: (
    <>
      Get Our Special <span className="heading-serif-italic">Offers</span>
    </>
  ),
  placeholder: "Your e-mail address",
  button: "Subscribe",
};
