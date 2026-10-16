import clsx from "clsx";

interface MetaTextProps {
  children: React.ReactNode;
  className?: string;
}

const MetaText: React.FC<MetaTextProps> = ({ children, className }) => (
  <span
    className={clsx(
      "font-sans font-medium text-body-muted",
      "text-[13px] leading-[150%] tracking-[0.025em]",
      className
    )}
  >
    {children}
  </span>
);

export default MetaText;
