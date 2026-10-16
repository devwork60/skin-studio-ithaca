import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";

export const EXPERIENCE_HEADING = (
  <>
    More Than
    <br />a Treatment.
    <br />
    <span className="heading-serif-italic">A Moment to Exhale.</span>
  </>
);

export const EXPERIENCE_PARAGRAPH_1 =
  "At Skin Studio, every visit is designed to be restorative — a space where advanced skincare meets genuine comfort. Our signature facials are a hybrid of relaxing treatment with powerful, lasting results.";

export const EXPERIENCE_PARAGRAPH_2 =
  "Whether you're addressing acne, aging, skin texture, or simply seeking a moment of calm — our team takes skincare seriously so you can leave feeling confident, renewed, and truly cared for.";

export const EXPERIENCE_PRIMARY_CTA = { text: "Book Your Experience", url: "/book" };
export const EXPERIENCE_SECONDARY_CTA = {
  text: `Or Call ${PHONE_NUMBER}`,
  url: PHONE_HREF,
};
