import { ArrowRight, Calendar, ExternalLink, MapPin, Phone } from "lucide-react";
import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonSm from "@/components/button/ButtonSm";
import CenteredCtaCard from "@/components/common-components/CenteredCtaCard";
import FadeUp from "@/components/common-components/FadeUp";
import MapEmbed from "@/components/common-components/MapEmbed";
import SectionHeader from "@/components/common-components/SectionHeader";
import CardDesc from "@/components/pages/typography/CardDesc";
import {
  CONTACT_BANNER,
  CONTACT_CTA,
  CONTACT_DETAILS,
  CONTACT_LOCATION,
} from "@/constant/contactPageData";
import { GOOGLE_MAPS_DIRECTIONS_URL, GOOGLE_MAPS_EMBED_URL } from "@/constant/site";
import ContactDetailCard from "./ContactDetailCard";

export const ContactDetailsSection = () => (
  <section className="bg-dark-secondary py-20 md:py-28 lg:py-36">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
      <div className="grid gap-6 md:grid-cols-3">
        {CONTACT_DETAILS.map((detail, i) => (
          <ContactDetailCard key={detail.label} detail={detail} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export const ContactBannerSection = () => (
  <section className="border-y border-border-subtle bg-dark-primary py-20 md:py-24">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
      <CenteredCtaCard
        eyebrow={CONTACT_BANNER.eyebrow}
        heading={CONTACT_BANNER.heading}
        description={CONTACT_BANNER.description}
        descriptionClassName="max-w-xl"
        className="bg-gradient-to-b from-dark-secondary to-dark-secondary/60 p-10 md:p-14 lg:p-16"
        actions={
          <>
            <ButtonSm
              text={CONTACT_BANNER.bookText}
              url={CONTACT_BANNER.bookUrl}
              iconStart={<Calendar size={18} />}
              icon={<ArrowRight size={16} />}
              padding="px-9 py-4"
              className="gap-2.5 shadow-lg shadow-rose/20"
            />
            <ButtonOutline
              tone="ivory"
              text={CONTACT_BANNER.callText}
              url={CONTACT_BANNER.callUrl}
              icon={<Phone size={15} />}
              padding="px-7 py-4"
            />
          </>
        }
      />
    </div>
  </section>
);

export const ContactLocationSection = () => (
  <section className="bg-dark-secondary py-20 md:py-28 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionHeader
            eyebrow={CONTACT_LOCATION.eyebrow}
            title={CONTACT_LOCATION.heading}
            headingSpacing="mb-4"
          />
          <CardDesc>{CONTACT_LOCATION.address}</CardDesc>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <ButtonOutline
            tone="ivory"
            text={CONTACT_LOCATION.directionsText}
            url={GOOGLE_MAPS_DIRECTIONS_URL}
            icon={<MapPin size={15} />}
            iconEnd={<ExternalLink size={13} />}
            padding="px-6 py-3"
            textClassName="text-[13px]"
          />
          <ButtonSm
            text={CONTACT_LOCATION.bookText}
            url={CONTACT_LOCATION.bookUrl}
            iconStart={<Calendar size={15} />}
            padding="px-6 py-3"
            textClassName="text-[13px] leading-[150%]"
          />
        </div>
      </div>

      <FadeUp
        inView
        y={28}
        duration={0.8}
        margin="-60px"
        className="overflow-hidden rounded-[28px] border border-border-subtle shadow-2xl"
      >
        <MapEmbed
          src={GOOGLE_MAPS_EMBED_URL}
          title={CONTACT_LOCATION.mapTitle}
          className="h-[460px] md:h-[520px] lg:h-[600px]"
        />
      </FadeUp>
    </div>
  </section>
);

export const ContactCtaSection = () => (
  <section className="bg-dark-primary py-28 md:py-36 lg:py-44">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
      <CenteredCtaCard
        eyebrow={CONTACT_CTA.eyebrow}
        heading={CONTACT_CTA.heading}
        description={CONTACT_CTA.description}
        descriptionClassName="max-w-lg"
        className="bg-dark-secondary p-10 md:p-14 lg:p-20"
        actions={
          <>
            <ButtonSm
              text={CONTACT_CTA.bookText}
              url={CONTACT_CTA.bookUrl}
              iconStart={<Calendar size={16} />}
              padding="px-8 py-3.5"
              className="shadow-lg shadow-rose/20"
            />
            <ButtonOutline
              text={CONTACT_CTA.callText}
              url={CONTACT_CTA.callUrl}
              icon={<Phone size={15} />}
              padding="px-6 py-3.5"
            />
          </>
        }
      />
    </div>
  </section>
);
