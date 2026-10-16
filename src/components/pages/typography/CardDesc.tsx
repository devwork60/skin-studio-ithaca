import clsx from "clsx";

interface CardDescProps {
  children: React.ReactNode;
  className?: string;
}

const CardDesc: React.FC<CardDescProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-normal text-body-muted",
      "text-[14px] leading-[175%]",
      className
    )}
  >
    {children}
  </p>
);

export default CardDesc;
