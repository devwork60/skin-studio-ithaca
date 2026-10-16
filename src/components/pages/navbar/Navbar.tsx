"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import clsx from "clsx";
import ButtonSm from "@/components/button/ButtonSm";
import { BOOK_NOW_URL, NAV_LINKS } from "@/constant/navData";
import { EASE } from "@/constant/motion";
import DesktopNavItem from "./DesktopNavItem";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import PhoneLink from "./PhoneLink";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className={clsx(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg-glass shadow-[0_1px_0_var(--border-divider)] backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <PhoneLink className="hidden font-sans text-[13px] font-medium leading-[150%] md:flex lg:hidden" />
            <ButtonSm
              text="Book Now"
              url={BOOK_NOW_URL}
              className="hidden md:inline-flex"
              textClassName="text-[13px] uppercase leading-[150%] tracking-[0.1em]"
            />
            <button
              onClick={() => setMobileOpen(true)}
              className="text-ivory lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
