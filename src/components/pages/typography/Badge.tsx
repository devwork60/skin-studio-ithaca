import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => (
  <span
    className={clsx(
      "inline-block rounded-full px-3 py-1 font-sans font-semibold uppercase text-ivory/90",
      "text-[10px] leading-[150%] tracking-[0.2em]",
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
