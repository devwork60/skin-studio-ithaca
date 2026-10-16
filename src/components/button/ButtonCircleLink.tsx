import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

interface ButtonCircleLinkProps {
  url: string;
  label: string; // accessible name, since the button is icon-only
  className?: string;
}

// 72px round icon link with a diagonal arrow.
const ButtonCircleLink: React.FC<ButtonCircleLinkProps> = ({ url, label, className }) => (
  <Link
    href={url}
    aria-label={label}
    className={clsx(
      "group flex h-[72px] w-[72px] items-center justify-center rounded-full border border-border-subtle",
      "transition-all duration-500 hover:border-border-focus hover:bg-bg-accent-soft",
      className
    )}
  >
    <ArrowUpRight
      size={28}
      className="text-ivory transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </Link>
);

export default ButtonCircleLink;
