import clsx from "clsx";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ children, className }) => (
  <h2
    className={clsx(
      "font-serif font-normal text-ivory",
      "text-[36px] leading-[110%] md:text-[48px] lg:text-[56px]",
      className
    )}
  >
    {children}
  </h2>
);

export default SubHeading;
