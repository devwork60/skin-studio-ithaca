import clsx from "clsx";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, className }) => (
  <span
    className={clsx(
      "inline-block rounded-full border border-border-subtle px-4 py-1.5",
      "font-sans font-medium uppercase text-body-muted/80",
      "text-[11px] leading-[150%] tracking-[0.16em]",
      className
    )}
  >
    {children}
  </span>
);

export default Label;
