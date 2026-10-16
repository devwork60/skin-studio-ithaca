import clsx from "clsx";

interface CardRoleProps {
  children: React.ReactNode;
  size?: "sm" | "md"; // 11px or 12px
  className?: string;
}

// Small uppercase job title / subtitle in the accent color.
const CardRole: React.FC<CardRoleProps> = ({ children, size = "sm", className }) => (
  <p
    className={clsx(
      "font-sans font-semibold uppercase tracking-[0.18em] text-rose",
      size === "sm" ? "text-[11px] leading-[150%]" : "text-[12px] leading-[133%]",
      className
    )}
  >
    {children}
  </p>
);

export default CardRole;
