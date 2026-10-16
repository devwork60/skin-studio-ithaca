import Image from "next/image";
import { ExternalLink } from "lucide-react";
import ButtonSm from "@/components/button/ButtonSm";
import FadeUp from "@/components/common-components/FadeUp";
import CardHeading from "@/components/pages/typography/CardHeading";
import Label from "@/components/pages/typography/Label";
import PriceDisplay from "@/components/pages/typography/PriceDisplay";
import ServiceCardDesc from "@/components/pages/typography/ServiceCardDesc";
import ValueBadge from "@/components/pages/typography/ValueBadge";
import { OFFER_BOOK_LABEL, type Offer } from "@/constant/offersPageData";

interface OfferCardProps {
  offer: Offer;
  index: number;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer, index }) => {
  const Icon = offer.icon;
  return (
    <FadeUp
      inView
      y={40}
      duration={0.8}
      delay={index * 0.15}
      margin="-60px"
      className="group overflow-hidden rounded-[28px] border border-border-subtle bg-dark-primary shadow-[0_4px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-border-accent hover:shadow-[0_8px_60px_rgba(194,90,131,0.1)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.alt}
          fill
          sizes="(min-width: 1200px) 560px, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/30 to-transparent" />
        <div className="absolute bottom-6 left-8 flex items-baseline gap-2.5 md:left-10">
          <PriceDisplay>{offer.price}</PriceDisplay>
          {offer.valued && <ValueBadge>{offer.valued}</ValueBadge>}
        </div>
      </div>

      <div className="px-8 pb-10 pt-8 md:px-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-accent-soft">
            <Icon size={18} className="text-rose" aria-hidden="true" />
          </div>
          <CardHeading size="lg">{offer.title}</CardHeading>
        </div>

        <ServiceCardDesc className="mb-8">{offer.description}</ServiceCardDesc>

        <div className="mb-8 flex flex-wrap gap-2.5">
          {offer.tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </div>

        <ButtonSm
          text={OFFER_BOOK_LABEL}
          url={offer.bookingUrl}
          icon={<ExternalLink size={14} />}
          padding="px-8 py-3.5"
          className="w-full"
        />
      </div>
    </FadeUp>
  );
};

export default OfferCard;
