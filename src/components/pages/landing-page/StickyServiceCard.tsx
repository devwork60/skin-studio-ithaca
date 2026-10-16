"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Service } from "@/constant/servicesData";
import ServiceCard from "./ServiceCard";

const CARD_OFFSET = 22;

interface StickyServiceCardProps {
  service: Service;
  index: number;
}

// Desktop: cards stack on scroll and dim as the next one covers them.
const StickyServiceCard: React.FC<StickyServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });
  const dimOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0.6]);

  return (
    <div
      ref={cardRef}
      className="sticky top-[96px] flex min-h-[calc(100vh-96px)] items-start justify-center"
    >
      <div className="relative w-full origin-top" style={{ top: `${index * CARD_OFFSET}px` }}>
        <ServiceCard service={service} />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[28px] bg-dark-primary"
          style={{ opacity: dimOpacity }}
        />
      </div>
    </div>
  );
};

export default StickyServiceCard;
