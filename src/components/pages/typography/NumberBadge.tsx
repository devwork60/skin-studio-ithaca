import clsx from "clsx";

interface NumberBadgeProps {
  children: React.ReactNode;
  className?: string;
}

// Frosted pill showing a card number, e.g. "01", placed over photos.
const NumberBadge: React.FC<NumberBadgeProps> = ({ children, className }) => (
  <span
    className={clsx(
      "inline-block rounded-full border border-white/15 bg-dark-primary/50 px-3 py-1 backdrop-blur-md",
      "font-sans font-semibold text-ivory/90",
      "text-[11px] leading-[150%] tracking-[0.18em]",
      className
    )}
  >
    {children}
  </span>
);

export default NumberBadge;
