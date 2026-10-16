import {
  CalendarClock,
  Clock,
  CreditCard,
  DollarSign,
  FileCheck,
  LifeBuoy,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export const FRONT_DESK = { label: "Front Desk", number: "607-319-4592", href: "tel:6073194592" };
export const TEXT_LINE = { label: "Text Us", number: "607-262-8566", href: "sms:6072628566" };

export const CANCELLATION_SEO = {
  title: "Cancellation Policy | Skin Studio Ithaca",
  description:
    "Skin Studio Ithaca's cancellation, rescheduling, and no-show policy. Please provide at least 48 hours' notice to change your appointment.",
};

export const CANCELLATION_HERO = {
  image: { src: "/assets/about/treatment.webp", alt: "Skin Studio Ithaca treatment room" },
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Cancellation Policy" }],
  eyebrow: "Client Policies",
  title: (
    <>
      Cancellation <span className="heading-serif-italic">Policy</span>
    </>
  ),
  description:
    "Every appointment is time reserved especially for you. Please review our policy before booking so we can keep openings available for every client.",
};

export const POLICY_HIGHLIGHTS = [
  { value: "48", unit: "hrs", label: "Notice to cancel or reschedule" },
  { value: "$75", unit: "", label: "Late cancellation fee" },
  { value: "100", unit: "%", label: "Of treatment cost for no-shows" },
];

export interface Policy {
  id: string;
  title: string;
  icon: LucideIcon;
  points: string[];
  callout?: string;
}

export const POLICIES: Policy[] = [
  {
    id: "notice",
    title: "Cancellation Notice",
    icon: Clock,
    points: [
      "Clients must provide at least 48 hours’ notice for cancellations or rescheduling of appointments.",
      "Cancellations made with less than 48 hours’ notice may incur a cancellation fee.",
    ],
  },
  {
    id: "fees",
    title: "Cancellation Fees",
    icon: DollarSign,
    points: [
      "A fee of $75 may be charged for late cancellations.",
      "No-shows (failure to attend a scheduled appointment without prior notice) may result in a fee equal to the full cost of the scheduled treatment.",
    ],
  },
  {
    id: "rescheduling",
    title: "Rescheduling Appointments",
    icon: CalendarClock,
    points: [
      "Clients wishing to reschedule an appointment must do so at least 48 hours in advance to avoid cancellation fees.",
      "Rescheduling is subject to availability.",
    ],
  },
  {
    id: "payment",
    title: "Payment Information",
    icon: CreditCard,
    points: [
      "A valid credit card is required to secure your appointment. The card will only be charged in the event of a late cancellation or no-show.",
    ],
    callout:
      "Your card is only held to secure your time — it is never charged when you keep or properly reschedule your appointment.",
  },
  {
    id: "exceptions",
    title: "Exceptions",
    icon: LifeBuoy,
    points: [
      "Exceptions to the cancellation policy may be made for emergencies or unforeseen circumstances. Clients should contact Skin Studio Ithaca as soon as possible to discuss their situation.",
    ],
  },
  {
    id: "acknowledgment",
    title: "Acknowledgment of Policy",
    icon: FileCheck,
    points: [
      "Clients will be required to acknowledge and agree to the cancellation policy at the time of booking.",
    ],
  },
  {
    id: "changes",
    title: "Policy Changes",
    icon: RefreshCw,
    points: [
      "Skin Studio Ithaca reserves the right to modify the cancellation policy at any time. Clients will be notified of any changes.",
    ],
  },
];

export const POLICY_SIDEBAR = {
  heading: "On This Page",
  helpTitle: "Need to reschedule?",
  helpText: "Reach out at least 48 hours ahead.",
};

export const POLICY_QUESTIONS = {
  eyebrow: "Questions?",
  heading: (
    <>
      We’re Happy to <span className="heading-serif-italic">Help.</span>
    </>
  ),
  description:
    "For any questions regarding the cancellation policy, call our front desk or send us a text. By booking an appointment, you acknowledge and agree to this policy.",
  bookText: "Book Your Appointment",
  bookUrl: "/book",
};
