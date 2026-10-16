import Image from "next/image";
import clsx from "clsx";
import FadeUp from "@/components/common-components/FadeUp";
import { WHY_CHOOSE_IMAGES } from "@/constant/whyChooseData";

const WhyChooseImages = () => (
  <FadeUp
    inView
    y={0}
    scale={0.97}
    duration={0.9}
    margin="-100px"
    className="order-1 grid min-h-[400px] grid-cols-2 grid-rows-2 gap-3 lg:order-2 lg:gap-4"
  >
    {WHY_CHOOSE_IMAGES.map((img) => (
      <div
        key={img.src}
        className={clsx("relative min-h-0 overflow-hidden rounded-lg", img.className)}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          className={img.imageClassName}
        />
      </div>
    ))}
  </FadeUp>
);

export default WhyChooseImages;
