"use client";

import { motion } from "framer-motion";
import { EASE } from "@/constant/motion";
import type { Service } from "@/constant/servicesData";
import ServiceCard from "./ServiceCard";

interface MobileServiceCardProps {
  service: Service;
  index: number;
}

// Mobile & tablet: image-first card that rises into view.
const MobileServiceCard: React.FC<MobileServiceCardProps> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
  >
    <ServiceCard service={service} imageFirst />
  </motion.div>
);

export default MobileServiceCard;
