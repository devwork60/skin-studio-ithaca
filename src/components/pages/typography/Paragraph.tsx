import clsx from "clsx";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-normal text-body-muted",
      "text-[16px] leading-[180%]",
      className
    )}
  >
    {children}
  </p>
);

export default Paragraph;
