export const TEAM_PAGE_SEO = {
  title: "Meet the Team | Skin Studio Ithaca",
  description:
    "Meet the licensed estheticians, lash specialists and massage therapist behind Skin Studio Ithaca — expertise combined with genuine care.",
};

export const TEAM_PAGE_HERO = {
  image: {
    src: "/assets/about/treatment.webp",
    alt: "Skin Studio Ithaca treatment room",
  },
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Our Team" }],
  title: (
    <>
      Meet the <span className="heading-serif-italic">Team</span>
    </>
  ),
  description:
    "The professionals behind your skin journey. Every treatment is delivered by licensed specialists who combine expertise with genuine care.",
};

export const TEAM_FOUNDER = {
  image: {
    src: "/assets/about/natalie.webp",
    alt: "Natalie Sweeney, Owner and Lead Esthetician at Skin Studio Ithaca",
  },
  imageLabel: "Founder",
  eyebrow: "Owner & Lead Esthetician",
  heading: (
    <>
      Natalie <span className="heading-serif-italic">Sweeney</span>
    </>
  ),
  role: "Lead Esthetician & Co-Founder",
  paragraphs: [
    "With over 26 years of aesthetics experience, Natalie brings a depth of knowledge that spans high-end resort spas like the Four Seasons, physicians' offices including plastic surgeons, and medical spa consultation.",
    "Certified in laser technology for over a decade, Natalie specializes in advanced laser treatments and skin rejuvenation. Her passion for science-backed skincare drives every consultation.",
    "Having dealt with acne herself for years, Natalie understands her clients' frustration firsthand. Helping boost someone's confidence and letting their inner beauty shine is what drives her every day.",
  ],
  quote: { text: "Serious skincare, serious results.", attribution: "Natalie's motto" },
  tags: [
    "Medical Aesthetics",
    "Laser Treatments",
    "Skin Rejuvenation",
    "Acne Solutions",
    "10+ Years Laser Certified",
  ],
  primaryCta: { text: "Book with Natalie", url: "/book" },
};

export const TEAM_GRID = {
  eyebrow: "The Team",
  heading: (
    <>
      Experts Behind
      <br />
      Your <span className="heading-serif-italic">Glow</span>
    </>
  ),
  description:
    "Each member of our team is dedicated to delivering exceptional care and helping you achieve your skin goals.",
};

export interface TeamPageMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  tags: string[];
}

export const TEAM_PAGE_MEMBERS: TeamPageMember[] = [
  {
    name: "Nana Lafleur",
    role: "Licensed Aesthetician",
    bio: "Nana brings warmth and expertise to every treatment. Specializing in customized facials and acne protocols, she has helped hundreds of clients achieve clear, glowing skin.",
    image: "/assets/team/nana.webp",
    alt: "Nana Lafleur, Licensed Aesthetician at Skin Studio Ithaca",
    tags: ["Custom Facials", "Acne Care", "Skin Analysis"],
  },
  {
    name: "Christie",
    role: "Massage Therapist",
    bio: "",
    image: "/assets/team/christie.webp",
    alt: "Christie, Massage Therapist at Skin Studio Ithaca",
    tags: ["Massage Therapy", "Relaxation", "Wellness"],
  },
  {
    name: "Linda Roman",
    role: "Licensed Aesthetician & Lash Specialist",
    bio: "Linda is our resident lash and skincare expert, bringing meticulous care and a warm touch to every appointment. Her attention to detail ensures beautiful, natural-looking results.",
    image: "/assets/team/linda-v2.webp",
    alt: "Linda Roman, Licensed Aesthetician and Lash Specialist at Skin Studio Ithaca",
    tags: ["Lash Services", "Skincare", "Detail-Oriented"],
  },
];
