import clsx from "clsx";

interface AccentLabelProps {
  children: React.ReactNode;
  as?: "p" | "span";
  className?: string;
}

// Small uppercase label in a muted accent (Label/Index style, uppercased).
const AccentLabel: React.FC<AccentLabelProps> = ({ children, as: Tag = "span", className }) => (
  <Tag
    className={clsx(
      "font-sans font-semibold uppercase text-rose/60",
      "text-[12px] leading-[133%] tracking-[0.2em]",
      className
    )}
  >
    {children}
  </Tag>
);

export default AccentLabel;
