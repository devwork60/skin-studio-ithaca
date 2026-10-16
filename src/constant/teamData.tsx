export const TEAM_EYEBROW = "Meet the Team";

export const TEAM_HEADING = (
  <>
    Experts Behind
    <br />
    Your <span className="heading-serif-italic">Glow.</span>
  </>
);

export const TEAM_PRIMARY_CTA = { text: "Meet the Full Team", url: "/team" };
export const TEAM_SECONDARY_CTA = { text: "Learn More About Us", url: "/team" };

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Natalie Sweeney",
    role: "Lead Esthetician & Co-Founder",
    bio: "With over 26 years of experience in medical aesthetics, Natalie specializes in advanced laser treatments and skin rejuvenation. Her passion for science-backed skincare drives every consultation.",
    image: "/assets/about/natalie.webp",
    alt: "Natalie Sweeney, Lead Esthetician and Co-Founder at Skin Studio Ithaca",
  },
  {
    id: 2,
    name: "Christie",
    role: "Massage Therapist",
    bio: "",
    image: "/assets/team/christie.webp",
    alt: "Christie, Massage Therapist at Skin Studio Ithaca",
  },
  {
    id: 3,
    name: "Linda Roman",
    role: "Licensed Aesthetician & Lash Specialist",
    bio: "Linda is our resident lash and skincare expert, bringing meticulous care and a warm touch to every appointment. Her attention to detail ensures beautiful, natural-looking results.",
    image: "/assets/team/linda-v2.webp",
    alt: "Linda Roman, Licensed Aesthetician and Lash Specialist at Skin Studio Ithaca",
  },
  {
    id: 4,
    name: "Nana Lafleur",
    role: "Licensed Aesthetician",
    bio: "Nana brings warmth and expertise to every treatment. Specializing in customized facials and acne protocols, she has helped hundreds of clients achieve clear, glowing skin.",
    image: "/assets/team/nana.webp",
    alt: "Nana Lafleur, Licensed Aesthetician at Skin Studio Ithaca",
  },
];
