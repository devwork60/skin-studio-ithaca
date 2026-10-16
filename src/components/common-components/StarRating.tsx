import clsx from "clsx";
import { Star } from "lucide-react";

interface StarRatingProps {
  size?: number;
  count?: number;
  className?: string;
}

// Row of filled stars in the star icon color.
const StarRating: React.FC<StarRatingProps> = ({ size = 16, count = 5, className }) => (
  <div className={clsx("flex", className)} role="img" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }, (_, i) => (
      <Star key={i} size={size} aria-hidden="true" className="fill-icon-star text-icon-star" />
    ))}
  </div>
);

export default StarRating;
