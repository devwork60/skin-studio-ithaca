import clsx from "clsx";

interface CardEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

const CardEyebrow: React.FC<CardEyebrowProps> = ({ children, className }) => (
  <span
    className={clsx(
      "block font-sans font-medium uppercase text-rose",
      "text-[12px] leading-[133%] tracking-[0.22em]",
      className
    )}
  >
    {children}
  </span>
);

export default CardEyebrow;
