"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import type { NavItem } from "@/constant/navData";
import { EASE } from "@/constant/motion";
import { isActivePath } from "@/utils/isActivePath";

interface MobileNavItemProps {
  item: NavItem;
  index: number;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  item,
  index,
  expanded,
  onToggle,
  onNavigate,
}) => {
  const pathname = usePathname();
  const active = isActivePath(pathname, item.href);
  return (
  <div>
    <div className="flex items-center border-b border-border-subtle">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 + index * 0.06, duration: 0.5, ease: EASE }}
      >
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={active ? "page" : undefined}
          className={clsx(
            "block py-5 font-serif text-[30px] leading-[120%] transition-colors duration-300 hover:text-rose",
            active ? "text-rose" : "text-ivory"
          )}
        >
          {item.label}
        </Link>
      </motion.div>
      {item.children && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.06, duration: 0.4 }}
          onClick={onToggle}
          className="px-3 py-5 text-body-muted transition-colors duration-300 hover:text-ivory"
          aria-label={`Expand ${item.label}`}
          aria-expanded={expanded}
        >
          <ChevronDown
            size={20}
            className={clsx("transition-transform duration-300", expanded && "rotate-180")}
          />
        </motion.button>
      )}
    </div>
    <AnimatePresence>
      {item.children && expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="overflow-hidden"
        >
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onNavigate}
              className="block border-b border-border-subtle/40 py-3.5 pl-6 font-sans text-[16px] text-body-muted transition-colors duration-300 hover:text-ivory"
            >
              {child.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
};

export default MobileNavItem;
