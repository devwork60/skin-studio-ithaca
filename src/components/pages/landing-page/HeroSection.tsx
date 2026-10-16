import Image from "next/image";
import ButtonSm from "@/components/button/ButtonSm";
import ButtonText from "@/components/button/ButtonText";
import FadeUp from "@/components/common-components/FadeUp";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import HeroDescription from "@/components/pages/typography/HeroDescription";
import {
  HERO_DESCRIPTION,
  HERO_EYEBROW,
  HERO_HEADING_LINE_1,
  HERO_HEADING_LINE_2_ITALIC,
  HERO_HEADING_LINE_2_PLAIN,
  HERO_IMAGE,
  HERO_PRIMARY_CTA,
  HERO_SECONDARY_CTA,
} from "@/constant/heroData";
import HeroTrustRow from "./HeroTrustRow";

const h1Line =
  "block font-serif font-normal text-ivory text-[48px] leading-[110%] md:text-[72px] lg:text-[88px]";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/90 via-dark-primary/70 to-dark-primary/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-transparent to-dark-primary/30" />
    </div>

    <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-32 lg:px-12">
      <div className="max-w-2xl">
        <FadeUp y={16} delay={0.2}>
          <Eyebrow className="mb-8">{HERO_EYEBROW}</Eyebrow>
        </FadeUp>

        <h1 className="mb-8">
          <FadeUp as="span" y={30} duration={0.8} delay={0.35} className={h1Line}>
            {HERO_HEADING_LINE_1}
          </FadeUp>
          <FadeUp as="span" y={30} duration={0.8} delay={0.5} className={h1Line}>
            {HERO_HEADING_LINE_2_PLAIN}{" "}
            <span className="heading-serif-italic">{HERO_HEADING_LINE_2_ITALIC}</span>
          </FadeUp>
        </h1>

        <FadeUp delay={0.7}>
          <HeroDescription className="mb-10 max-w-lg">{HERO_DESCRIPTION}</HeroDescription>
        </FadeUp>

        <FadeUp delay={0.85} className="flex flex-wrap items-center gap-4">
          <ButtonSm
            text={HERO_PRIMARY_CTA.text}
            url={HERO_PRIMARY_CTA.url}
            padding="px-8 py-3.5"
          />
          <ButtonText text={HERO_SECONDARY_CTA.text} url={HERO_SECONDARY_CTA.url} />
        </FadeUp>

        <HeroTrustRow />
      </div>
    </div>
  </section>
);

export default HeroSection;
