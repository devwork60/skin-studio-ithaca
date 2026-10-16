export const BEFORE_AFTER_EYEBROW = "Results";

export const BEFORE_AFTER_HEADING = (
  <>
    Before &amp; <span className="heading-serif-italic">After</span>
  </>
);

export const BEFORE_AFTER_DESCRIPTION =
  "Drag the slider to reveal the transformation. Real clients, real treatments, real results.";

export interface Transformation {
  treatment: string;
  before: string;
  after: string;
}

export const TRANSFORMATIONS: Transformation[] = [
  {
    treatment: "BBL Photofacial & Pigmentation",
    before: "/assets/before-after/photofacial-pigmentation-before.webp",
    after: "/assets/before-after/photofacial-pigmentation-after.webp",
  },
  {
    treatment: "Wrinkle Reduction & Texture",
    before: "/assets/before-after/wrinkle-reduction-before.webp",
    after: "/assets/before-after/wrinkle-reduction-after.webp",
  },
  {
    treatment: "Melasma & Dark Spot Clearing",
    before: "/assets/before-after/melasma-clearing-before.webp",
    after: "/assets/before-after/melasma-clearing-after.webp",
  },
  {
    treatment: "Eye Area Rejuvenation",
    before: "/assets/before-after/eye-rejuvenation-before.webp",
    after: "/assets/before-after/eye-rejuvenation-after.webp",
  },
  {
    treatment: "Facial Tightening & Pores",
    before: "/assets/before-after/facial-tightening-before.webp",
    after: "/assets/before-after/facial-tightening-after.webp",
  },
  {
    treatment: "Under-Eye & Eyelid Lift",
    before: "/assets/before-after/eye-lift-before.webp",
    after: "/assets/before-after/eye-lift-after.webp",
  },
];
