import clsx from "clsx";

interface MiniTagProps {
  children: React.ReactNode;
  className?: string;
}

// Compact outlined tag for card footers.
const MiniTag: React.FC<MiniTagProps> = ({ children, className }) => (
  <span
    className={clsx(
      "inline-block rounded-full border border-border-subtle px-3 py-1",
      "font-sans font-medium uppercase text-body-muted/70",
      "text-[10px] leading-[150%] tracking-[0.14em]",
      className
    )}
  >
    {children}
  </span>
);

export default MiniTag;
