import clsx from "clsx";

interface CardHeadingProps {
  children: React.ReactNode;
  size?: "md" | "lg"; // md = 24px, lg = 24px growing to 28px from tablet up
  className?: string;
}

const CardHeading: React.FC<CardHeadingProps> = ({ children, size = "md", className }) => (
  <h3
    className={clsx(
      "font-serif font-normal text-ivory",
      "text-[24px] leading-[110%]",
      size === "lg" && "md:text-[28px]",
      className
    )}
  >
    {children}
  </h3>
);

export default CardHeading;
