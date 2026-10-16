"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonSm from "@/components/button/ButtonSm";
import CardDesc from "@/components/pages/typography/CardDesc";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardRole from "@/components/pages/typography/CardRole";
import { useScrollLockEffect } from "@/context/ScrollLockContext";
import { EASE } from "@/constant/motion";
import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";
import { MENU_CATEGORIES, type MenuService } from "@/constant/servicesMenuData";
import ServiceMeta from "./ServiceMeta";

interface ServiceModalProps {
  service: MenuService | null;
  onClose: () => void;
}

// Details dialog for the chosen service, with ways to book. Closes on Esc, backdrop click or ✕.
const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  useScrollLockEffect(Boolean(service));

  useEffect(() => {
    if (!service) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [service, onClose]);

  const category = service
    ? MENU_CATEGORIES.find((c) => c.slug === service.categorySlug)?.name
    : undefined;

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={service.name}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[24px] border border-border-subtle bg-dark-secondary p-8 shadow-2xl md:p-10"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-body-muted transition-colors duration-300 hover:border-border-hover hover:text-ivory"
            >
              <X size={16} aria-hidden="true" />
            </button>

            {category && <CardRole className="mb-3">{category}</CardRole>}
            <CardHeading size="lg" className="mb-4 pr-10">
              {service.name}
            </CardHeading>
            <ServiceMeta service={service} />
            {service.description && <CardDesc className="mt-5">{service.description}</CardDesc>}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonSm
                text="Call to Book"
                url={PHONE_HREF}
                iconStart={<Phone size={15} />}
                padding="px-7 py-3"
                textClassName="text-[14px] leading-[150%]"
              />
              <ButtonOutline text="Contact Us" url="/contact" padding="px-7 py-3" />
            </div>
            <CardDesc className="mt-4 text-body-muted/60">
              Call or text {PHONE_NUMBER} — free consultations included with all skincare services.
            </CardDesc>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
