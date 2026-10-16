import Image from "next/image";
import clsx from "clsx";
import { ExternalLink } from "lucide-react";
import ButtonSm from "@/components/button/ButtonSm";
import ButtonText from "@/components/button/ButtonText";
import FadeUp from "@/components/common-components/FadeUp";
import CardEyebrow from "@/components/pages/typography/CardEyebrow";
import FeatureHeading from "@/components/pages/typography/FeatureHeading";
import Label from "@/components/pages/typography/Label";
import OverlayNumber from "@/components/pages/typography/OverlayNumber";
import ServiceCardDesc from "@/components/pages/typography/ServiceCardDesc";
import {
  SERVICE_BOOK_LABEL,
  SERVICE_CARD_EYEBROW,
  type ServiceListItem,
} from "@/constant/servicesPageData";

interface ServiceListCardProps {
  service: ServiceListItem;
  reversed?: boolean; // photo on the right at desktop
}

// Full-width two-column card used on the services page; alternates sides down the list.
const ServiceListCard: React.FC<ServiceListCardProps> = ({ service, reversed = false }) => (
  <FadeUp
    inView
    y={50}
    duration={0.9}
    delay={0.1}
    margin="-60px"
    className="grid overflow-hidden rounded-[28px] border border-border-subtle bg-dark-secondary shadow-[0_4px_40px_rgba(0,0,0,0.3)] lg:grid-cols-2"
  >
    <div
      className={clsx(
        "relative min-h-[280px] overflow-hidden lg:min-h-[480px]",
        reversed && "lg:order-2"
      )}
    >
      <Image
        src={service.image}
        alt={service.alt}
        fill
        sizes="(min-width: 1200px) 580px, (min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-t from-dark-secondary/60 via-transparent to-transparent lg:bg-gradient-to-r",
          reversed
            ? "lg:from-transparent lg:to-dark-secondary/80"
            : "lg:from-dark-secondary/80 lg:to-transparent"
        )}
      />
      <div className="absolute left-6 top-6 lg:left-8 lg:top-8">
        <OverlayNumber>{service.number}</OverlayNumber>
      </div>
    </div>

    <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">
      <CardEyebrow className="mb-4">{SERVICE_CARD_EYEBROW}</CardEyebrow>
      <FeatureHeading className="mb-5">{service.title}</FeatureHeading>
      <ServiceCardDesc className="mb-8 max-w-md">{service.description}</ServiceCardDesc>
      <div className="mb-8 flex flex-wrap gap-2.5">
        {service.tags.map((tag) => (
          <Label key={tag}>{tag}</Label>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <ButtonSm
          text={SERVICE_BOOK_LABEL}
          url={service.bookUrl}
          icon={<ExternalLink size={13} />}
          padding="px-7 py-3"
          textClassName="text-[14px] leading-[150%]"
        />
        <ButtonText variant="subtle" text="Learn More" url={service.href} />
      </div>
    </div>
  </FadeUp>
);

export default ServiceListCard;
