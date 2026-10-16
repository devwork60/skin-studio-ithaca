import clsx from "clsx";

interface OverlayNumberProps {
  children: React.ReactNode;
  className?: string;
}

// Large faint numeral placed over a photo.
const OverlayNumber: React.FC<OverlayNumberProps> = ({ children, className }) => (
  <span
    aria-hidden="true"
    className={clsx(
      "block select-none font-serif font-normal text-ivory/[0.12]",
      "text-[56px] leading-[85%] md:text-[72px] lg:text-[88px]",
      className
    )}
  >
    {children}
  </span>
);

export default OverlayNumber;
