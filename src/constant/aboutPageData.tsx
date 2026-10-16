import { Award, Heart, Zap } from "lucide-react";
import type { StatItem } from "@/components/common-components/StatsRow";

export const ABOUT_PAGE_HERO = {
  image: {
    src: "/assets/about/treatment.webp",
    alt: "Skin Studio Ithaca treatment room",
  },
  breadcrumb: [{ label: "Home", href: "/" }, { label: "About Us" }],
  title: (
    <>
      About <span className="heading-serif-italic">Us</span>
    </>
  ),
  description:
    "Serious skincare. Serious results. Meet the expertise and passion behind Skin Studio Ithaca.",
};

export const ABOUT_NATALIE = {
  image: {
    src: "/assets/about/natalie.webp",
    alt: "Natalie Sweeney, Owner and Lead Esthetician at Skin Studio Ithaca",
  },
  eyebrow: "Meet Natalie",
  heading: (
    <>
      Owner &amp; <span className="heading-serif-italic">Esthetician</span>
    </>
  ),
  tagline: "Natalie is ready to take your skincare to the next level!",
  paragraphs: [
    "Natalie brings 23 years of aesthetics experience to Skin Studio. She has an array of experience — from high-end resort spas, such as the Four Seasons, to various physicians' offices, including plastic surgeons, to medical spa business consultation. She has been certified in laser technology for 10 years.",
    "Natalie loves solving people's skin issues — she suffered with acne for years, so she knows her clients' pain and frustration firsthand. Helping boost someone's confidence and letting their inner beauty shine rather than hiding behind makeup is a passion of hers. She takes skincare very seriously — her motto is “serious skincare, serious results” and she stands by her word.",
  ],
  primaryCta: { text: "Book a Consultation", url: "/book" },
  secondaryCta: { text: "Meet the Full Team", url: "/#team" },
};

export const ABOUT_PAGE_STATS: StatItem[] = [
  { icon: Award, value: "23+", label: "Years of Experience" },
  { icon: Heart, value: "1000+", label: "Happy Clients" },
  { icon: Zap, value: "10+", label: "Years Laser Certified" },
];

export const ABOUT_PHILOSOPHY = {
  eyebrow: "Our Philosophy",
  heading: (
    <>
      Serious Skincare.
      <br />
      Serious <span className="heading-serif-italic">Results.</span>
    </>
  ),
  paragraphs: [
    "At Skin Studio, every visit is designed to be restorative — a space where advanced skincare meets genuine comfort. Our signature facials are a hybrid of relaxing treatment with powerful, lasting results.",
    "Whether you're addressing acne, aging, skin texture, or simply seeking a moment of calm — our team takes skincare seriously so you can leave feeling confident, renewed, and truly cared for.",
  ],
};

export const ABOUT_PAGE_CTA = {
  heading: (
    <>
      Ready to Experience
      <br />
      the <span className="heading-serif-italic">Difference?</span>
    </>
  ),
  description:
    "Book your consultation today and discover the treatment plan designed for your unique skin. Free consultations included with all skincare services.",
};

export const ABOUT_PAGE_SEO = {
  title: "About Us | Skin Studio Ithaca",
  description:
    "Meet Natalie Sweeney, owner and lead esthetician at Skin Studio Ithaca — 23 years of aesthetics experience and a serious-skincare philosophy.",
};
