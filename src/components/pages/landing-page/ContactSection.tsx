import ButtonCircleLink from "@/components/button/ButtonCircleLink";
import ButtonSm from "@/components/button/ButtonSm";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import AccentLabel from "@/components/pages/typography/AccentLabel";
import CardDesc from "@/components/pages/typography/CardDesc";
import {
  CONTACT_BOOK,
  CONTACT_BOOK_URL,
  CONTACT_EYEBROW,
  CONTACT_HEADING,
  CONTACT_INFO,
} from "@/constant/contactData";
import ContactInfoCard from "./ContactInfoCard";

const columnClasses = [
  "md:border-r md:border-border-subtle md:pr-12",
  "md:border-r md:border-border-subtle md:px-12",
];

const ContactSection = () => (
  <section id="contact" className="bg-dark-secondary py-[60px]">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
        <SectionHeader eyebrow={CONTACT_EYEBROW} title={CONTACT_HEADING} headingSpacing="" />
        <FadeUp inView y={0} scale={0.95} delay={0.2} className="hidden lg:block">
          <ButtonCircleLink url={CONTACT_BOOK_URL} label={CONTACT_BOOK.button.text} />
        </FadeUp>
      </div>

      <FadeUp
        inView
        y={0}
        delay={0.2}
        duration={0.8}
        margin="-60px"
        className="mt-16 border-t border-border-subtle pt-16 md:mt-20 md:pt-20"
      >
        <div className="grid gap-12 md:grid-cols-3 md:gap-0">
          {CONTACT_INFO.map((info, i) => (
            <ContactInfoCard key={info.label} info={info} index={i} className={columnClasses[i]} />
          ))}

          <FadeUp inView y={16} duration={0.6} delay={0.2} margin="-60px" className="md:pl-12">
            <AccentLabel as="p" className="mb-5">
              {CONTACT_BOOK.label}
            </AccentLabel>
            <ButtonSm
              text={CONTACT_BOOK.button.text}
              url={CONTACT_BOOK.button.url}
              padding="px-8 py-3.5"
            />
            <CardDesc className="mt-4">{CONTACT_BOOK.note}</CardDesc>
          </FadeUp>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default ContactSection;
