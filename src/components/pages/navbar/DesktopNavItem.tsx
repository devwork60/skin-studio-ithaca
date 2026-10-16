"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import type { NavItem } from "@/constant/navData";
import NavDropdown from "./NavDropdown";

const linkClasses =
  "group relative font-sans text-[13px] font-medium uppercase leading-[150%] tracking-[0.14em] text-body-muted transition-colors duration-300 hover:text-ivory";

const Underline = () => (
  <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose transition-all duration-300 group-hover:w-full" />
);

const DesktopNavItem = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  if (!item.children) {
    return (
      <Link href={item.href} className={linkClasses}>
        {item.label}
        <Underline />
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
      <Link href={item.href} className={clsx(linkClasses, "inline-flex items-center gap-1")}>
        {item.label}
        <ChevronDown
          size={11}
          className={clsx("transition-transform duration-300", open && "rotate-180")}
        />
        <Underline />
      </Link>
      <AnimatePresence>{open && <NavDropdown items={item.children} />}</AnimatePresence>
    </div>
  );
};

export default DesktopNavItem;
