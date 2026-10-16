import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselArrowsProps {
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
  label: string; // e.g. "team member"
}

const arrowClass =
  "flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle text-ivory transition-all duration-300 hover:border-rose hover:bg-rose disabled:pointer-events-none disabled:opacity-30";

const CarouselArrows: React.FC<CarouselArrowsProps> = ({
  atStart,
  atEnd,
  onPrev,
  onNext,
  label,
}) => (
  <div className="flex gap-2.5">
    <button
      type="button"
      aria-label={`Previous ${label}`}
      onClick={onPrev}
      disabled={atStart}
      className={arrowClass}
    >
      <ArrowLeft size={18} aria-hidden="true" />
    </button>
    <button
      type="button"
      aria-label={`Next ${label}`}
      onClick={onNext}
      disabled={atEnd}
      className={arrowClass}
    >
      <ArrowRight size={18} aria-hidden="true" />
    </button>
  </div>
);

export default CarouselArrows;
