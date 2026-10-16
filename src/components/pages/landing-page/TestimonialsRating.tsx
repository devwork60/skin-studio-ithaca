import FadeUp from "@/components/common-components/FadeUp";
import StarRating from "@/components/common-components/StarRating";
import { GOOGLE_REVIEWS_URL, TESTIMONIALS_RATING } from "@/constant/testimonialsData";

// "★★★★★ 5.0 | Google Reviews" summary line under the heading.
const TestimonialsRating = () => (
  <FadeUp
    inView
    y={16}
    delay={0.15}
    margin="0px"
    className="mt-8 flex items-center justify-center gap-3"
  >
    <StarRating size={16} className="items-center gap-1" />
    <span className="font-sans text-[14px] font-semibold leading-[150%] text-ivory">
      {TESTIMONIALS_RATING}
    </span>
    <span className="text-border-subtle" aria-hidden="true">
      |
    </span>
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="font-sans text-[13px] leading-[150%] text-body-muted transition-colors duration-300 hover:text-ivory"
    >
      Google Reviews
    </a>
  </FadeUp>
);

export default TestimonialsRating;
