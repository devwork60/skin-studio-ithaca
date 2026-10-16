import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

interface ButtonOutlineProps {
  text: string;
  url: string;
  icon?: ReactNode; // before the text
  iconEnd?: ReactNode; // after the text
  tone?: "muted" | "ivory"; // muted = quiet grey text, ivory = bright text on a solid dark fill
  padding?: string;
  textClassName?: string; // font-size for this usage
  className?: string;
}

const tones = {
  muted: "text-body-muted hover:border-border-hover hover:text-ivory",
  ivory: "bg-dark-primary text-ivory hover:border-border-focus hover:text-rose",
};

// Ghost pill button: hairline border, brightens on hover (Button/Secondary type style).
const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  text,
  url,
  icon,
  iconEnd,
  tone = "muted",
  padding = "px-8 py-3.5",
  textClassName = "text-[14px]",
  className,
}) => {
  const external = url.startsWith("http");
  const Tag = external || url.startsWith("tel:") || url.startsWith("mailto:") ? "a" : Link;
  return (
    <Tag
      href={url}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-border-subtle font-sans font-medium leading-[150%]",
        "transition-all duration-300",
        tones[tone],
        textClassName,
        padding,
        className
      )}
    >
      {icon}
      {text}
      {iconEnd}
    </Tag>
  );
};

export default ButtonOutline;
