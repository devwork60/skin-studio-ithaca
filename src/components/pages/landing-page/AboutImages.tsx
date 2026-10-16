import Image from "next/image";
import FadeUp from "@/components/common-components/FadeUp";
import { ABOUT_IMAGES } from "@/constant/aboutData";

const AboutImages = () => (
  <FadeUp
    inView
    y={0}
    scale={0.95}
    duration={0.9}
    margin="-100px"
    className="relative flex min-h-[400px] items-center justify-center md:min-h-[500px] lg:min-h-[580px]"
  >
    <div className="relative ml-auto w-[72%] -rotate-2 overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={ABOUT_IMAGES.main.src}
          alt={ABOUT_IMAGES.main.alt}
          fill
          sizes="(min-width: 1024px) 36vw, 72vw"
          className="-scale-x-100 object-cover object-top"
        />
      </div>
    </div>

    <FadeUp
      inView
      y={0}
      x={-30}
      delay={0.3}
      className="absolute bottom-0 left-0 z-20 w-[52%] rotate-3 overflow-hidden rounded-2xl border-[5px] border-dark-secondary shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={ABOUT_IMAGES.secondary.src}
          alt={ABOUT_IMAGES.secondary.alt}
          fill
          sizes="(min-width: 1024px) 26vw, 52vw"
          className="object-cover object-center"
        />
      </div>
    </FadeUp>

    <div className="absolute -right-3 top-[15%] z-0 h-[70%] w-[70%] rounded-full bg-rose/[0.04] blur-3xl" />
  </FadeUp>
);

export default AboutImages;
