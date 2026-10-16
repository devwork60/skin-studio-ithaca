import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";

export const BOOKING_CTA_IMAGE = {
  src: "/assets/booking/cta-booking.webp",
  alt: "Radiant, healthy skin — the result of expert skincare",
};

export const BOOKING_CTA_EYEBROW = "Begin Your Journey";

export const BOOKING_CTA_HEADING = (
  <>
    Your Skin Journey
    <br />
    <span className="heading-serif-italic">Starts Here.</span>
  </>
);

export const BOOKING_CTA_DESCRIPTION =
  "Ready to experience personalized, medical-grade skincare? Book your consultation today and discover the treatment plan designed for your unique skin.";

export const BOOKING_CTA_PRIMARY = { text: "Book Now", url: "/book" };
export const BOOKING_CTA_PHONE = { text: PHONE_NUMBER, url: PHONE_HREF };
