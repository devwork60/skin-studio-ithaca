import clsx from "clsx";

interface BodyTitleProps {
  children: React.ReactNode;
  className?: string;
}

// Semibold title used in list rows (h3).
const BodyTitle: React.FC<BodyTitleProps> = ({ children, className }) => (
  <h3
    className={clsx(
      "font-sans font-semibold text-ivory",
      "text-[16px] leading-[150%] tracking-[0.025em]",
      className
    )}
  >
    {children}
  </h3>
);

export default BodyTitle;
