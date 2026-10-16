import clsx from "clsx";

interface CardNumberProps {
  children: React.ReactNode;
  className?: string;
}

const CardNumber: React.FC<CardNumberProps> = ({ children, className }) => (
  <span
    aria-hidden="true"
    className={clsx(
      "font-serif font-normal",
      "select-none text-[44px] leading-[85%] md:text-[56px] lg:text-[64px]",
      className
    )}
  >
    {children}
  </span>
);

export default CardNumber;
