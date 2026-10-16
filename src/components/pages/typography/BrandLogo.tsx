import clsx from "clsx";

interface BrandLogoProps {
  children: React.ReactNode;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ children, className }) => (
  <span
    className={clsx(
      "font-serif font-normal uppercase text-ivory",
      "text-[20px] leading-[133%] tracking-[0.025em] md:text-[24px]",
      className
    )}
  >
    {children}
  </span>
);

export default BrandLogo;
