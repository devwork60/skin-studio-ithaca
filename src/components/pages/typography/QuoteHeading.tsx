import clsx from "clsx";

interface QuoteHeadingProps {
  children: React.ReactNode;
  className?: string;
}

// Large serif statement used for pull-quotes and image-break captions.
const QuoteHeading: React.FC<QuoteHeadingProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-serif font-normal text-ivory",
      "text-[30px] leading-[110%] md:text-[36px] lg:text-[48px] xl:text-[60px]",
      className
    )}
  >
    {children}
  </p>
);

export default QuoteHeading;
