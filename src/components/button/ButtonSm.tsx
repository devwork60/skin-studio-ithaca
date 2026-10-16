import Link from "next/link";
import clsx from "clsx";
import type { CSSProperties, ReactNode } from "react";

interface ButtonSmProps {
  text: string;
  url?: string;
  bgColor?: string; // any CSS color or var(), e.g. "var(--rose)"
  hoverBgColor?: string;
  textColor?: string;
  icon?: ReactNode; // after the text
  iconStart?: ReactNode; // before the text
  onClick?: () => void; // renders <button> instead of <Link>
  padding?: string;
  textClassName?: string; // font-size / tracking for this usage
  className?: string;
  type?: "button" | "submit" | "reset";
}

// Colors are injected as CSS vars so Tailwind sees only static class strings.
const ButtonSm: React.FC<ButtonSmProps> = ({
  text,
  url,
  bgColor = "var(--rose)",
  hoverBgColor = "var(--rose-hover)",
  textColor = "var(--ivory)",
  icon,
  iconStart,
  onClick,
  padding = "px-6 py-2.5",
  textClassName = "text-[15px] leading-[150%]",
  className,
  type = "button",
}) => {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold",
    "bg-[var(--btn-bg)] text-[var(--btn-text)] hover:bg-[var(--btn-hover)]",
    "transition-all duration-300 hover:-translate-y-0.5",
    padding,
    textClassName,
    className
  );
  const style = {
    "--btn-bg": bgColor,
    "--btn-hover": hoverBgColor,
    "--btn-text": textColor,
  } as CSSProperties;

  const content = (
    <>
      {iconStart}
      {text}
      {icon}
    </>
  );

  if (onClick || !url) {
    return (
      <button type={type} onClick={onClick} className={classes} style={style}>
        {content}
      </button>
    );
  }

  if (/^(https?:|tel:|mailto:)/.test(url)) {
    return (
      <a
        href={url}
        className={classes}
        style={style}
        {...(url.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={url} className={classes} style={style}>
      {content}
    </Link>
  );
};

export default ButtonSm;
