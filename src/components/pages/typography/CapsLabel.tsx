import clsx from "clsx";

interface CapsLabelProps {
  children: React.ReactNode;
  as?: "span" | "h4";
  className?: string;
}

const CapsLabel: React.FC<CapsLabelProps> = ({ children, as: Tag = "span", className }) => (
  <Tag
    className={clsx(
      "font-sans font-semibold uppercase text-ivory",
      "text-[12px] leading-[133%] tracking-[0.18em]",
      className
    )}
  >
    {children}
  </Tag>
);

export default CapsLabel;
