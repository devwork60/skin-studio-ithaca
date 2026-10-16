export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Skin+Studio+Ithaca/";

export const TESTIMONIALS_EYEBROW = "Client Stories";

export const TESTIMONIALS_HEADING = (
  <>
    Loved by Our <span className="heading-serif-italic">Clients.</span>
  </>
);

export const TESTIMONIALS_RATING = "5.0";

export const TESTIMONIALS_PRIMARY_CTA = { text: "Read All Reviews", url: GOOGLE_REVIEWS_URL };
export const TESTIMONIALS_SECONDARY_CTA = { text: "Book an Appointment", url: "/book" };

export interface Testimonial {
  quote: string;
  name: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The atmosphere is extremely cozy and the treatment was better than I could've gotten at any local spa! Two days later, my husband said 'Your face looks different! Your cheeks and forehead look really smooth!'",
    name: "Julie Curcio",
    image: "/assets/testimonials/julie.webp",
  },
  {
    quote:
      "I got a microdermabrasion and it was above and beyond my expectations! I've had many facials before and this was the best yet. Natalie is talented, professional and knowledgeable about her work.",
    name: "Christi Pritchard",
    image: "/assets/testimonials/christi.webp",
  },
  {
    quote:
      "Thank you Natalie for always providing excellent affordable service. Ladies, she's the best. I highly recommend her if you are looking for an esthetician. She is on top of her game!",
    name: "Kimberly Noftell",
    image: "/assets/testimonials/kimberly.webp",
  },
];
