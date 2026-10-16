import clsx from "clsx";

interface StatHeadingProps {
  children: React.ReactNode;
  as?: "p" | "h2" | "h3";
  className?: string;
}

const StatHeading: React.FC<StatHeadingProps> = ({ children, as: Tag = "p", className }) => (
  <Tag
    className={clsx(
      "font-serif font-normal",
      "text-[30px] leading-[110%] md:text-[36px] lg:text-[48px]",
      className
    )}
  >
    {children}
  </Tag>
);

export default StatHeading;
