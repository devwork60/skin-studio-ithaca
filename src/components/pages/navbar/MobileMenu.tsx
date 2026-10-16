"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import ButtonSm from "@/components/button/ButtonSm";
import BrandLogo from "@/components/pages/typography/BrandLogo";
import { useScrollLockEffect } from "@/context/ScrollLockContext";
import { BOOK_NOW_URL, NAV_LINKS } from "@/constant/navData";
import MobileNavItem from "./MobileNavItem";
import PhoneLink from "./PhoneLink";

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  useScrollLockEffect(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-dark-primary/98 backdrop-blur-xl"
    >
      <div className="flex h-full flex-col px-8 py-6">
        <div className="flex items-center justify-between">
          <BrandLogo>Skin Studio</BrandLogo>
          <button onClick={onClose} className="text-ivory" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-16 flex flex-1 flex-col gap-1 overflow-y-auto">
          {NAV_LINKS.map((item, i) => (
            <MobileNavItem
              key={item.label}
              item={item}
              index={i}
              expanded={expanded === item.label}
              onToggle={() => setExpanded(expanded === item.label ? null : item.label)}
              onNavigate={onClose}
            />
          ))}
        </nav>

        <div className="space-y-4 pb-8">
          <ButtonSm
            text="Book Now"
            url={BOOK_NOW_URL}
            className="w-full"
            padding="py-4"
            textClassName="text-[14px] uppercase leading-[150%] tracking-[0.12em]"
          />
          <PhoneLink
            iconSize={15}
            className="justify-center py-2 font-sans text-[14px] leading-[150%]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
