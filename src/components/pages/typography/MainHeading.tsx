import clsx from "clsx";

interface MainHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const MainHeading: React.FC<MainHeadingProps> = ({ children, className }) => (
  <h2
    className={clsx(
      "font-serif font-normal text-ivory",
      "text-[36px] leading-[110%] md:text-[48px] lg:text-[60px]",
      className
    )}
  >
    {children}
  </h2>
);

export default MainHeading;
