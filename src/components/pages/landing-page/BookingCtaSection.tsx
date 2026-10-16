import Image from "next/image";
import clsx from "clsx";
import { Phone } from "lucide-react";
import ButtonOutline from "@/components/button/ButtonOutline";
import ButtonSm from "@/components/button/ButtonSm";
import FadeUp from "@/components/common-components/FadeUp";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import Paragraph from "@/components/pages/typography/Paragraph";
import SubHeading from "@/components/pages/typography/SubHeading";
import {
  BOOKING_CTA_DESCRIPTION,
  BOOKING_CTA_EYEBROW,
  BOOKING_CTA_HEADING,
  BOOKING_CTA_IMAGE,
  BOOKING_CTA_PHONE,
  BOOKING_CTA_PRIMARY,
} from "@/constant/bookingCtaData";

interface BookingCtaSectionProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  primaryCta?: { text: string; url: string };
  narrow?: boolean; // 1200px wide with a 480px photo, used on inner pages
}

// Photo + booking prompt. Content defaults to the home page copy; other pages pass their own.
const BookingCtaSection: React.FC<BookingCtaSectionProps> = ({
  eyebrow = BOOKING_CTA_EYEBROW,
  heading = BOOKING_CTA_HEADING,
  description = BOOKING_CTA_DESCRIPTION,
  primaryCta = BOOKING_CTA_PRIMARY,
  narrow = false,
}) => (
  <section className="relative overflow-hidden bg-dark-primary py-[60px]">
    <div className={clsx("mx-auto px-6 lg:px-12", narrow ? "max-w-[1200px]" : "max-w-[1400px]")}>
      <div className="grid overflow-hidden rounded-xl lg:grid-cols-2">
        <div
          className={clsx(
            "relative aspect-[4/3] lg:aspect-auto",
            narrow ? "lg:min-h-[480px]" : "lg:min-h-[500px]"
          )}
        >
          <Image
            src={BOOKING_CTA_IMAGE.src}
            alt={BOOKING_CTA_IMAGE.alt}
            fill
            sizes="(min-width: 1400px) 650px, (min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/60 to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center bg-dark-deep p-10 md:p-14 lg:p-16">
          <FadeUp inView y={24} duration={0.8}>
            <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
            <SubHeading className="mb-6">{heading}</SubHeading>
            <Paragraph className="mb-10 max-w-md">{description}</Paragraph>

            <div className="flex flex-wrap items-center gap-4">
              <ButtonSm text={primaryCta.text} url={primaryCta.url} padding="px-8 py-3.5" />
              <ButtonOutline
                text={BOOKING_CTA_PHONE.text}
                url={BOOKING_CTA_PHONE.url}
                icon={<Phone size={15} />}
                padding="px-6 py-3.5"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
);

export default BookingCtaSection;
