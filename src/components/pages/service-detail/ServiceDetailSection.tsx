import Image from "next/image";
import { ExternalLink, Phone } from "lucide-react";
import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonSm from "@/components/button/ButtonSm";
import BulletList from "@/components/common-components/BulletList";
import FadeUp from "@/components/common-components/FadeUp";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import Label from "@/components/pages/typography/Label";
import Paragraph from "@/components/pages/typography/Paragraph";
import SubHeading from "@/components/pages/typography/SubHeading";
import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";
import type { ServicePageData } from "@/constant/servicePages/types";

// Two-column service overview: photo on the left, copy, highlights, tags and CTAs on the right.
const ServiceDetailSection = ({ detail }: { detail: ServicePageData["detail"] }) => (
  <section className="bg-dark-secondary py-[60px]">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <FadeUp
          inView
          y={0}
          scale={0.95}
          duration={0.9}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <Image
            src={detail.image.src}
            alt={detail.image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </FadeUp>

        <FadeUp inView y={30} delay={0.2} duration={0.8}>
          <Eyebrow className="mb-6">{detail.eyebrow}</Eyebrow>
          <SubHeading className="mb-6">{detail.heading}</SubHeading>
          {detail.paragraphs.map((text, i) => (
            <Paragraph
              key={text}
              className={i === detail.paragraphs.length - 1 ? "mb-8" : "mb-6"}
            >
              {text}
            </Paragraph>
          ))}

          <BulletList items={detail.highlights} className="mb-8" />

          <div className="mb-10 flex flex-wrap gap-2.5">
            {detail.tags.map((tag) => (
              <Label key={tag}>{tag}</Label>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <ButtonSm
              text={detail.primaryCta.text}
              url={detail.primaryCta.url}
              icon={detail.primaryCta.external ? <ExternalLink size={14} /> : undefined}
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

export default ServiceDetailSection;
