import clsx from "clsx";

interface AccentTaglineProps {
  children: React.ReactNode;
  className?: string;
}

// One-line italic callout in the accent color, e.g. under a person's title.
const AccentTagline: React.FC<AccentTaglineProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-semibold italic text-rose",
      "text-[15px] leading-[150%]",
      className
    )}
  >
    {children}
  </p>
);

export default AccentTagline;
