import clsx from "clsx";

interface IndexLabelProps {
  children: React.ReactNode;
  className?: string;
}

// Small numeric/step index, e.g. "01".
const IndexLabel: React.FC<IndexLabelProps> = ({ children, className }) => (
  <span
    className={clsx(
      "font-sans font-semibold text-rose/50",
      "text-[12px] leading-[133%] tracking-[0.2em]",
      className
    )}
  >
    {children}
  </span>
);

export default IndexLabel;
