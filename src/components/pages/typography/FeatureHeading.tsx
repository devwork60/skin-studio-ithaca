import clsx from "clsx";

interface FeatureHeadingProps {
  children: React.ReactNode;
  className?: string;
}

// Large card title for full-width feature cards (h3).
const FeatureHeading: React.FC<FeatureHeadingProps> = ({ children, className }) => (
  <h3
    className={clsx(
      "font-serif font-normal text-ivory",
      "text-[30px] leading-[110%] md:text-[36px] lg:text-[44px]",
      className
    )}
  >
    {children}
  </h3>
);

export default FeatureHeading;
