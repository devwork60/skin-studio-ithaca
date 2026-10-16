import clsx from "clsx";

interface QuoteMarkProps {
  className?: string;
}

// Decorative opening quote mark (Heading/Quote Mark).
const QuoteMark: React.FC<QuoteMarkProps> = ({ className }) => (
  <span
    aria-hidden="true"
    className={clsx(
      "block font-serif font-normal text-rose/25",
      "text-[48px] leading-[110%]",
      className
    )}
  >
    &ldquo;
  </span>
);

export default QuoteMark;
