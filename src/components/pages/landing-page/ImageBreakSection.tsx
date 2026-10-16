"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeUp from "@/components/common-components/FadeUp";
import QuoteHeading from "@/components/pages/typography/QuoteHeading";
import { IMAGE_BREAK_IMAGE, IMAGE_BREAK_QUOTE } from "@/constant/imageBreakData";

// Full-width photo with a gentle parallax and a centered statement.
const ImageBreakSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative h-[50vh] overflow-hidden md:h-[60vh] lg:h-[70vh]">
      <motion.div className="absolute inset-[-10%]" style={{ y }}>
        <Image
          src={IMAGE_BREAK_IMAGE.src}
          alt={IMAGE_BREAK_IMAGE.alt}
          fill
          sizes="120vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-dark-primary/60" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <FadeUp inView y={24} duration={0.9} margin="0px">
          <blockquote>
            <QuoteHeading>{IMAGE_BREAK_QUOTE}</QuoteHeading>
          </blockquote>
        </FadeUp>
      </div>
    </section>
  );
};

export default ImageBreakSection;
