import clsx from "clsx";

interface CapsLabelSmProps {
  children: React.ReactNode;
  className?: string;
}

const CapsLabelSm: React.FC<CapsLabelSmProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-semibold uppercase text-body-muted",
      "text-[11px] leading-[150%] tracking-[0.2em]",
      className
    )}
  >
    {children}
  </p>
);

export default CapsLabelSm;
