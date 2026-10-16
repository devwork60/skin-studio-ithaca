import clsx from "clsx";

interface ServiceCardDescProps {
  children: React.ReactNode;
  className?: string;
}

const ServiceCardDesc: React.FC<ServiceCardDescProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-normal text-body-muted",
      "text-[15px] leading-[175%]",
      className
    )}
  >
    {children}
  </p>
);

export default ServiceCardDesc;
