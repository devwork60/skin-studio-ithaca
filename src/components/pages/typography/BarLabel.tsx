import clsx from "clsx";

interface BarLabelProps {
  children: React.ReactNode;
  className?: string;
}

// Small uppercase caption for card header bars, e.g. "Before" / "After".
const BarLabel: React.FC<BarLabelProps> = ({ children, className }) => (
  <span
    className={clsx(
      "font-sans font-medium uppercase text-body-muted",
      "text-[12px] leading-[150%] tracking-[0.16em]",
      className
    )}
  >
    {children}
  </span>
);

export default BarLabel;
