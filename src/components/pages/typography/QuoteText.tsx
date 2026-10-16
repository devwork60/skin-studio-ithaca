import clsx from "clsx";

interface QuoteTextProps {
  children: React.ReactNode;
  className?: string;
}

const QuoteText: React.FC<QuoteTextProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-normal text-body-muted",
      "text-[14px] leading-[185%]",
      className
    )}
  >
    {children}
  </p>
);

export default QuoteText;
