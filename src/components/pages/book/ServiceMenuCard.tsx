"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MenuDescription from "@/components/pages/typography/MenuDescription";
import MenuTitle from "@/components/pages/typography/MenuTitle";
import { EASE } from "@/constant/motion";
import type { MenuService } from "@/constant/servicesMenuData";
import ServiceMeta from "./ServiceMeta";

interface ServiceMenuCardProps {
  service: MenuService;
  index: number;
  onSelect: (service: MenuService) => void;
}

// One selectable service. Opens the details dialog.
const ServiceMenuCard: React.FC<ServiceMenuCardProps> = ({ service, index, onSelect }) => (
  <motion.button
    type="button"
    onClick={() => onSelect(service)}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: Math.min(index, 12) * 0.04, ease: EASE }}
    className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-dark-primary p-5 text-left transition-all duration-300 hover:border-border-hover hover:bg-dark-primary/80 hover:shadow-[0_4px_20px_rgba(194,90,131,0.08)] md:p-6"
  >
    <div>
      <MenuTitle className="mb-2 transition-colors duration-300 group-hover:text-rose">
        {service.name}
      </MenuTitle>
      <ServiceMeta service={service} />
      {service.description && (
        <MenuDescription className="mb-4 mt-3 line-clamp-2">{service.description}</MenuDescription>
      )}
    </div>

    <div className="mt-2 flex items-center gap-1.5 font-sans text-[13px] font-semibold leading-[150%] text-rose transition-colors duration-300 group-hover:text-rose-hover">
      <span>Book Appointment</span>
      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
    </div>
  </motion.button>
);

export default ServiceMenuCard;
