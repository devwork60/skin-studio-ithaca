import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import NoteText from "@/components/pages/typography/NoteText";
import { OFFERS, OFFERS_INTRO, OFFERS_NOTE } from "@/constant/offersPageData";
import OfferCard from "./OfferCard";

const OffersSection = () => (
  <section className="bg-dark-secondary py-28 md:py-36 lg:py-44">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
      <SectionHeader
        align="center"
        eyebrow={OFFERS_INTRO.eyebrow}
        title={OFFERS_INTRO.heading}
        description={OFFERS_INTRO.description}
        headingSpacing="mb-6"
        descriptionClassName="max-w-md"
        className="mb-16 md:mb-20"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
        {OFFERS.map((offer, i) => (
          <OfferCard key={offer.title} offer={offer} index={i} />
        ))}
      </div>

      <FadeUp inView y={16} delay={0.2} margin="0px">
        <NoteText className="mt-12 text-center">{OFFERS_NOTE}</NoteText>
      </FadeUp>
    </div>
  </section>
);

export default OffersSection;
