"use client";

import Image from "next/image";
import FadeUp from "@/components/common-components/FadeUp";
import Badge from "@/components/pages/typography/Badge";
import CapsLabelSm from "@/components/pages/typography/CapsLabelSm";
import { useComparisonSlider } from "@/hooks/useComparisonSlider";
import type { Transformation } from "@/constant/beforeAfterData";
import SliderDivider from "./SliderDivider";

interface ComparisonSliderProps {
  item: Transformation;
  index: number;
}

const imageSizes = "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw";
const badgeClasses = "bg-bg-overlay backdrop-blur-[6px]";

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ item, index }) => {
  const { containerRef, position, isDragging, handlers } = useComparisonSlider();

  return (
    <FadeUp inView y={40} duration={0.8} delay={index * 0.15} className="group">
      <div
        ref={containerRef}
        className="relative aspect-[4/5] cursor-ew-resize touch-none overflow-hidden rounded-2xl bg-dark-deep"
        {...handlers}
      >
        <Image
          src={item.after}
          alt={`${item.treatment} — after treatment`}
          fill
          sizes={imageSizes}
          draggable={false}
          className="select-none object-cover"
        />

        {/* Before image, revealed up to the divider */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.treatment} — before treatment`}
            fill
            sizes={imageSizes}
            draggable={false}
            className="select-none object-cover"
          />
        </div>

        <SliderDivider position={position} isDragging={isDragging} />

        <div className="pointer-events-none absolute left-4 top-4 z-20">
          <Badge className={badgeClasses}>Before</Badge>
        </div>
        <div className="pointer-events-none absolute right-4 top-4 z-20">
          <Badge className={badgeClasses}>After</Badge>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[30%] bg-gradient-to-t from-dark-primary/50 to-transparent" />
      </div>

      <CapsLabelSm className="mt-5 text-center transition-colors duration-300 group-hover:text-ivory">
        {item.treatment}
      </CapsLabelSm>
    </FadeUp>
  );
};

export default ComparisonSlider;
