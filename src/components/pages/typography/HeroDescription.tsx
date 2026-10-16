import clsx from "clsx";

interface HeroDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-normal text-body-muted",
      "text-[16px] leading-[180%] md:text-[18px] md:leading-[163%]",
      className
    )}
  >
    {children}
  </p>
);

export default HeroDescription;
