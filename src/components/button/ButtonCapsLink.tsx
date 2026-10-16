import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

interface ButtonCapsLinkProps {
  text: string;
  url: string;
  variant?: "ivory" | "accent";
  className?: string;
}

const variants = {
  // Button/Caps Link: 12px, 18% tracking, turns rose on hover
  ivory: "w-fit gap-2.5 text-[12px] leading-[133%] tracking-[0.18em] text-ivory hover:text-rose",
  // 13px, 14% tracking, rose that brightens on hover
  accent: "gap-2 text-[13px] leading-[150%] tracking-[0.14em] text-rose hover:text-ivory",
};

// Uppercase tracked link with an arrow.
const ButtonCapsLink: React.FC<ButtonCapsLinkProps> = ({
  text,
  url,
  variant = "ivory",
  className,
}) => {
  const external = url.startsWith("http");
  const Tag = external ? "a" : Link;
  return (
    <Tag
      href={url}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={clsx(
        "group inline-flex items-center font-sans font-semibold uppercase transition-colors duration-300",
        variants[variant],
        className
      )}
    >
      {text}
      <ArrowRight
        size={15}
        className={clsx(
          "transition-transform duration-300",
          variant === "ivory" && "group-hover:translate-x-1"
        )}
      />
    </Tag>
  );
};

export default ButtonCapsLink;
