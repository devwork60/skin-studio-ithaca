import Image from "next/image";
import { Phone } from "lucide-react";
import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonSm from "@/components/button/ButtonSm";
import FadeUp from "@/components/common-components/FadeUp";
import QuoteBlock from "@/components/common-components/QuoteBlock";
import CardRole from "@/components/pages/typography/CardRole";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import Label from "@/components/pages/typography/Label";
import ServiceCardDesc from "@/components/pages/typography/ServiceCardDesc";
import SubHeading from "@/components/pages/typography/SubHeading";
import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";
import { TEAM_FOUNDER } from "@/constant/teamPageData";

// Founder feature: portrait with a "Founder" tag, bio, motto, credentials and booking buttons.
const FounderSection = () => (
  <section className="bg-dark-secondary py-28 md:py-36 lg:py-44">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeUp
          inView
          y={0}
          scale={0.95}
          duration={0.9}
          className="relative aspect-[3/4] overflow-hidden rounded-2xl"
        >
          <Image
            src={TEAM_FOUNDER.image.src}
            alt={TEAM_FOUNDER.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-primary/60 to-transparent p-8">
            <CardRole size="md">{TEAM_FOUNDER.imageLabel}</CardRole>
          </div>
        </FadeUp>

        <FadeUp inView y={30} delay={0.2} duration={0.8}>
          <Eyebrow className="mb-6">{TEAM_FOUNDER.eyebrow}</Eyebrow>
          <SubHeading className="mb-2">{TEAM_FOUNDER.heading}</SubHeading>
          <CardRole size="md" className="mb-6">
            {TEAM_FOUNDER.role}
          </CardRole>

          {TEAM_FOUNDER.paragraphs.map((text, i) => (
            <ServiceCardDesc key={i} className={i < TEAM_FOUNDER.paragraphs.length - 1 ? "mb-4" : ""}>
              {text}
            </ServiceCardDesc>
          ))}

          <div className="mt-8">
            <QuoteBlock
              quote={TEAM_FOUNDER.quote.text}
              attribution={TEAM_FOUNDER.quote.attribution}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {TEAM_FOUNDER.tags.map((tag) => (
              <Label key={tag}>{tag}</Label>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonSm
              text={TEAM_FOUNDER.primaryCta.text}
              url={TEAM_FOUNDER.primaryCta.url}
              padding="px-8 py-3.5"
            />
            <ButtonOutline
              text={PHONE_NUMBER}
              url={PHONE_HREF}
              icon={<Phone size={15} />}
              padding="px-6 py-3.5"
            />
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

export default FounderSection;
