import clsx from "clsx";

interface CaptionProps {
  children: React.ReactNode;
  className?: string;
}

const Caption: React.FC<CaptionProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-normal text-body-muted",
      "text-[13px] leading-[150%]",
      className
    )}
  >
    {children}
  </p>
);

export default Caption;
