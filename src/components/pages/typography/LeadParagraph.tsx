import clsx from "clsx";

interface LeadParagraphProps {
  children: React.ReactNode;
  className?: string;
}

// Larger, airier body copy for editorial blocks (Body/Lead).
const LeadParagraph: React.FC<LeadParagraphProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-normal text-body-muted",
      "text-[16px] leading-[185%] md:text-[17px]",
      className
    )}
  >
    {children}
  </p>
);

export default LeadParagraph;
