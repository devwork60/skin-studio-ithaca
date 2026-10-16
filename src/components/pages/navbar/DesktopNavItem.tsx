"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import type { NavItem } from "@/constant/navData";
import { isActivePath } from "@/utils/isActivePath";
import NavDropdown from "./NavDropdown";

const linkClasses =
  "group relative font-sans text-[13px] font-medium uppercase leading-[150%] tracking-[0.14em] text-body-muted transition-colors duration-300 hover:text-ivory";

// Line under the link: full width on hover and while the link's page is open.
const Underline = ({ active }: { active: boolean }) => (
  <span
    className={clsx(
      "absolute -bottom-1 left-0 h-px bg-rose transition-all duration-300 group-hover:w-full",
      active ? "w-full" : "w-0"
    )}
  />
);

const DesktopNavItem = ({ item }: { item: NavItem }) => {
  const pathname = usePathname();
  const active = isActivePath(pathname, item.href);
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={clsx(linkClasses, active && "text-ivory")}
      >
        {item.label}
        <Underline active={active} />
      </Link>
    );
  }

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={clsx(linkClasses, "inline-flex items-center gap-1", active && "text-ivory")}
      >
        {item.label}
        <ChevronDown
          size={11}
          className={clsx("transition-transform duration-300", open && "rotate-180")}
        />
        <Underline active={active} />
      </Link>
      <AnimatePresence>{open && <NavDropdown items={item.children} />}</AnimatePresence>
    </div>
  );
};

export default DesktopNavItem;
