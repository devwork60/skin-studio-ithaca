import clsx from "clsx";

interface ValueBadgeProps {
  children: React.ReactNode;
  className?: string;
}

// Solid rose pill, e.g. "Valued at $100".
const ValueBadge: React.FC<ValueBadgeProps> = ({ children, className }) => (
  <span
    className={clsx(
      "inline-block rounded-full bg-rose/90 px-3 py-1 backdrop-blur-sm",
      "font-sans font-semibold uppercase text-ivory",
      "text-[11px] leading-[150%] tracking-[0.025em]",
      className
    )}
  >
    {children}
  </span>
);

export default ValueBadge;
