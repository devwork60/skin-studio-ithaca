import Image from "next/image";
import clsx from "clsx";
import ButtonCapsLink from "@/components/button/ButtonCapsLink";
import CardEyebrow from "@/components/pages/typography/CardEyebrow";
import CardNumber from "@/components/pages/typography/CardNumber";
import Label from "@/components/pages/typography/Label";
import ServiceCardDesc from "@/components/pages/typography/ServiceCardDesc";
import ServiceCardHeading from "@/components/pages/typography/ServiceCardHeading";
import { SERVICES_CARD_CTA, type Service } from "@/constant/servicesData";

interface ServiceCardProps {
  service: Service;
  imageFirst?: boolean; // mobile stacks the image above the text
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, imageFirst = false }) => {
  const content = (
    <div className="flex gap-5 p-8 md:p-10 lg:gap-8 lg:p-14">
      <CardNumber className="shrink-0 text-ivory/[0.14]">
        {service.number}
      </CardNumber>
      <div className="flex min-w-0 flex-col justify-center">
        <CardEyebrow className="mb-3">{service.eyebrow}</CardEyebrow>
        <ServiceCardHeading className="mb-4">{service.title}</ServiceCardHeading>
        <ServiceCardDesc className="mb-7 max-w-md">{service.description}</ServiceCardDesc>
        <div className="mb-8 flex flex-wrap gap-2.5">
          {service.tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </div>
        <ButtonCapsLink text={SERVICES_CARD_CTA.text} url={service.bookUrl} />
      </div>
    </div>
  );

  const image = (
    <div className="relative min-h-[240px] overflow-hidden lg:min-h-[420px]">
      <Image
        src={service.image}
        alt={service.alt}
        fill
        sizes="(min-width: 1200px) 580px, (min-width: 1024px) 45vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-dark-secondary lg:via-dark-secondary/20 lg:to-transparent" />
    </div>
  );

  return (
    <div
      className={clsx(
        "grid overflow-hidden rounded-[28px] border border-border-subtle bg-dark-secondary shadow-[0_-8px_40px_rgba(0,0,0,0.35)]",
        !imageFirst && "lg:grid-cols-[1.05fr_1fr]"
      )}
    >
      {imageFirst ? image : content}
      {imageFirst ? content : image}
    </div>
  );
};

export default ServiceCard;
