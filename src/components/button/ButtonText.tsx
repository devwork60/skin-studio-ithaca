import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonTextProps {
  text: string;
  url: string;
  variant?: "ivory" | "muted" | "subtle" | "accent";
  className?: string;
}

const variants = {
  // Bright link that turns rose on hover (hero)
  ivory: {
    link: "gap-2 px-2 py-3.5 text-[14px] font-medium text-ivory hover:text-rose",
    Icon: ArrowRight,
    iconSize: 16,
    iconMove: "group-hover:translate-x-1",
  },
  // Quiet link that brightens on hover (secondary actions)
  muted: {
    link: "gap-2 text-[14px] font-medium text-body-muted hover:text-ivory",
    Icon: ArrowRight,
    iconSize: 15,
    iconMove: "group-hover:translate-x-1",
  },
  // Smaller helper link with a diagonal arrow
  subtle: {
    link: "gap-2 text-[13px] font-medium text-body-muted hover:text-ivory",
    Icon: ArrowUpRight,
    iconSize: 14,
    iconMove: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
  },
  // Rose card link that brightens on hover
  accent: {
    link: "gap-1.5 text-[13px] font-semibold text-rose hover:text-ivory",
    Icon: ArrowRight,
    iconSize: 14,
    iconMove: "",
  },
};

// Ghost text link with an animated arrow (Button/Secondary type style).
const ButtonText: React.FC<ButtonTextProps> = ({ text, url, variant = "ivory", className }) => {
  const { link, Icon, iconSize, iconMove } = variants[variant];
  const Tag = url.startsWith("tel:") || url.startsWith("mailto:") ? "a" : Link;
  return (
    <Tag
      href={url}
      className={clsx(
        "group inline-flex items-center font-sans leading-[150%] transition-colors duration-300",
        link,
        className
      )}
    >
      {text}
      <Icon size={iconSize} className={clsx("transition-transform duration-300", iconMove)} />
    </Tag>
  );
};

export default ButtonText;
