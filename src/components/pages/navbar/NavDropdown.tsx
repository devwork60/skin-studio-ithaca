"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { NavChild } from "@/constant/navData";
import { EASE } from "@/constant/motion";
import { isActivePath } from "@/utils/isActivePath";

const NavDropdown = ({ items }: { items: NavChild[] }) => {
  const pathname = usePathname();
  return (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    transition={{ duration: 0.2, ease: EASE }}
    className="absolute left-0 top-full z-50 mt-3 min-w-[220px] overflow-hidden rounded-xl border border-border-subtle bg-bg-glass py-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md"
  >
    {items.map((child) => {
      const active = isActivePath(pathname, child.href);
      return (
      <Link
        key={child.label}
        href={child.href}
        aria-current={active ? "page" : undefined}
        className={clsx(
          "block px-5 py-2.5 font-sans text-[13px] leading-[150%] transition-colors duration-200 hover:bg-surface-subtle hover:text-ivory",
          active ? "text-rose" : "text-body-muted"
        )}
      >
        {child.label}
      </Link>
      );
    })}
  </motion.div>
  );
};

export default NavDropdown;
