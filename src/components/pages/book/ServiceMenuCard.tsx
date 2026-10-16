"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import MenuDescription from "@/components/pages/typography/MenuDescription";
import MenuTitle from "@/components/pages/typography/MenuTitle";
import { EASE } from "@/constant/motion";
import type { MenuService } from "@/constant/servicesMenuData";
import { getSquareServiceUrl } from "@/constant/squareServices";
import ServiceMeta from "./ServiceMeta";

interface ServiceMenuCardProps {
  service: MenuService;
  index: number;
}

// One service. The whole card links straight to that service on Square.
const ServiceMenuCard: React.FC<ServiceMenuCardProps> = ({ service, index }) => (
  <motion.a
    href={getSquareServiceUrl(service.squareId)}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: Math.min(index, 12) * 0.04, ease: EASE }}
    className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-dark-primary p-5 text-left transition-all duration-300 hover:border-border-hover hover:bg-dark-primary/80 hover:shadow-[0_4px_20px_rgba(194,90,131,0.08)] md:p-6"
  >
    <div>
      <div className="mb-2 flex items-start justify-between gap-3">
        <MenuTitle className="transition-colors duration-300 group-hover:text-rose">
          {service.name}
        </MenuTitle>
        <ExternalLink
          size={15}
          aria-hidden="true"
          className="mt-1 shrink-0 text-body-muted/40 transition-colors duration-300 group-hover:text-rose"
        />
      </div>
      <ServiceMeta service={service} />
      {service.description && (
        <MenuDescription className="mb-4 mt-3 line-clamp-2">{service.description}</MenuDescription>
      )}
    </div>

    <div className="mt-2 flex items-center gap-1.5 font-sans text-[13px] font-semibold leading-[150%] text-rose transition-colors duration-300 group-hover:text-rose-hover">
      <span>Book Appointment</span>
      <ArrowRight size={13} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
    </div>
  </motion.a>
);

export default ServiceMenuCard;
