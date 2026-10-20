// The studio's Google Business Profile (shared link).
export const GOOGLE_REVIEWS_URL = "https://share.google/R0cAzt1urLeXijtq2";

export const TESTIMONIALS_EYEBROW = "Client Stories";

export const TESTIMONIALS_HEADING = (
  <>
    Loved by Our <span className="heading-serif-italic">Clients.</span>
  </>
);

// Google rating and total review count shown above the slider.
export const TESTIMONIALS_RATING = "4.4";
export const TESTIMONIALS_REVIEW_COUNT = 45;

export const TESTIMONIALS_PRIMARY_CTA = { text: "Read All Reviews", url: GOOGLE_REVIEWS_URL };
export const TESTIMONIALS_SECONDARY_CTA = { text: "Book an Appointment", url: "/book" };

export interface Testimonial {
  quote: string;
  name: string;
  image?: string; // reviewer photo; initials are shown when omitted
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Run, don’t walk to get a facial from Natalie! It was an otherworldly experience! Of course I went for the skin care and my skin was absolutely glowing after, which others commented on also. What I wasn’t expecting was the transformative relaxation. Natalie is literally amazing with her hands! She is also incredibly knowledgeable and shares her wisdom generously! The studio itself is very clean, calming, and welcoming. I’ve had many, many facials in many different places and this was by FAR, the best! My husband offered to gift me one a month because of how relaxed I was and how much I loved it!! Cannot wait to go back!",
    name: "Jenna Ingiosi",
    image: "/assets/testimonials/jenna-ligosi.webp",
  },
  {
    quote:
      "I can’t say enough wonderful things about skin studio! I go there for regular facials, eyelash lifts, and eyebrow waxing. Everyone is kind and friendly. I always walk out of there feeling amazing! A Huge thank you to all staff members for always doing such an outstanding job.",
    name: "Cathrine Millis",
    image: "/assets/testimonials/katherine-milli.webp",
  },
  {
    quote:
      "Beyond thrilled with my experience at Skin Studio. Natalie was extremely professional and took the time to make sure I was comfortable throughout my service. The studio is very clean and well designed. I'll definitely be back.",
    name: "Christina Christmas",
    image: "/assets/testimonials/christina-chrismis.webp",
  },
  {
    quote:
      "The facial I received by Natalie easily is the best treatment I have had in my 60 years! She is extremely knowledgeable, and gives you such great service from the consultation, to the facial. I can't give enough praise for the service I received today. Thank you Natalie. I'am quite sure I will become one of your regulars. Do yourself a kind thing, and go see Natalie. You will not regret it.",
    name: "Lisa Snyder",
    image: "/assets/testimonials/lisa-snyder.webp",
  },
  {
    quote:
      "I am so happy to have found Skin Studio and Frederika! She’s so kind, warm, and knowledgeable. My skin looks healthy and radiant after getting HydroFacials every 6 weeks for the past year.",
    name: "Gabi del Rio",
    image: "/assets/testimonials/gabi-del-rio.webp",
  },
  {
    quote:
      "I trust no one else but these ladies to take care and treat my skin. If my skin needs a deep cleaning or a simple hydration facial, this is the place to go. I have always left satisfied, uplifted, and in good hands with guidance to protect and secure my skins health",
    name: "Brittney Colton",
    image: "/assets/testimonials/brittney-colton.webp",
  },
  {
    quote:
      "I love both Natalie and Frederika. They are always so nice! I've never had a bad experience at Skin Studio and will continue to be a customer as long as they are in business!",
    name: "Makayla Gagne",
    image: "/assets/testimonials/makayla-gagne.webp",
  },
  {
    quote:
      "I am at a loss of words for my experience. It was beyond amazing, and I will be back. The atmosphere was just great. Natalie provided great service for me , my birthday was truly special because of this.",
    name: "Morgan Vankirk",
  },
];
