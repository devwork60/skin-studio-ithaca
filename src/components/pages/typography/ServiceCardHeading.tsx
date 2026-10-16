import clsx from "clsx";

interface ServiceCardHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const ServiceCardHeading: React.FC<ServiceCardHeadingProps> = ({ children, className }) => (
  <h3
    className={clsx(
      "font-serif font-normal text-ivory",
      "text-[30px] leading-[110%] lg:text-[40px]",
      className
    )}
  >
    {children}
  </h3>
);

export default ServiceCardHeading;
