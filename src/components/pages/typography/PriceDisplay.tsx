import clsx from "clsx";

interface PriceDisplayProps {
  children: React.ReactNode;
  className?: string;
}

// Large serif price shown over a photo.
const PriceDisplay: React.FC<PriceDisplayProps> = ({ children, className }) => (
  <span
    className={clsx(
      "font-serif font-normal text-ivory drop-shadow-lg",
      "text-[48px] leading-[110%] md:text-[60px]",
      className
    )}
  >
    {children}
  </span>
);

export default PriceDisplay;
