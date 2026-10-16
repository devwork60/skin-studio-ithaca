import clsx from "clsx";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

const Eyebrow: React.FC<EyebrowProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-medium uppercase text-rose",
      "text-[12px] leading-[133%] tracking-[0.22em]",
      className
    )}
  >
    {children}
  </p>
);

export default Eyebrow;
