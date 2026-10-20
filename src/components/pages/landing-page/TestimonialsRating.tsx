import FadeUp from "@/components/common-components/FadeUp";
import StarRating from "@/components/common-components/StarRating";
import { GOOGLE_REVIEWS_URL } from "@/constant/testimonialsData";

interface TestimonialsRatingProps {
  rating?: number | string; // e.g. 4.4 or "5.0"; omitted = no score shown
  reviewCount?: number; // total Google reviews; omitted = plain "Google Reviews"
}

// "★★★★★ 5.0 | 45 Google Reviews" summary line under the heading.
const TestimonialsRating: React.FC<TestimonialsRatingProps> = ({ rating, reviewCount }) => {
  const stars = rating === undefined ? 5 : Math.max(1, Math.min(5, Math.round(Number(rating))));
  return (
    <FadeUp
      inView
      y={16}
      delay={0.15}
      margin="0px"
      className="mb-12 mt-8 flex items-center justify-center gap-3 md:mb-14"
    >
      <StarRating size={16} count={stars} className="items-center gap-1" />
      {rating !== undefined && (
        <>
          <span className="font-sans text-[14px] font-semibold leading-[150%] text-ivory">{rating}</span>
          <span className="text-border-subtle" aria-hidden="true">
            |
          </span>
        </>
      )}
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans text-[13px] leading-[150%] text-body-muted transition-colors duration-300 hover:text-ivory"
      >
        {reviewCount ? `${reviewCount.toLocaleString("en-US")} Google Reviews` : "Google Reviews"}
      </a>
    </FadeUp>
  );
};

export default TestimonialsRating;
