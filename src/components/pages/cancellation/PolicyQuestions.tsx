import { ArrowRight, MessageSquare, Phone, type LucideIcon } from "lucide-react";
import ButtonSm from "@/components/button/ButtonSm";
import FadeUp from "@/components/common-components/FadeUp";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import ServiceCardDesc from "@/components/pages/typography/ServiceCardDesc";
import SubHeading from "@/components/pages/typography/SubHeading";
import { FRONT_DESK, POLICY_QUESTIONS, TEXT_LINE } from "@/constant/cancellationPolicyData";

interface ContactRowProps {
  icon: LucideIcon;
  label: string;
  number: string;
  href: string;
}

const ContactRow = ({ icon: Icon, label, number, href }: ContactRowProps) => (
  <a
    href={href}
    className="group flex items-center gap-4 rounded-2xl border border-border-subtle bg-dark-primary/60 p-5 transition-all duration-300 hover:border-border-hover"
  >
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-accent-soft">
      <Icon size={16} className="text-rose" aria-hidden="true" />
    </span>
    <span className="flex-1">
      <span className="block font-sans text-[12px] uppercase leading-[150%] tracking-[0.14em] text-body-muted/60">
        {label}
      </span>
      <span className="block font-sans text-[16px] font-semibold leading-[150%] text-ivory">{number}</span>
    </span>
    <ArrowRight
      size={16}
      aria-hidden="true"
      className="text-body-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ivory"
    />
  </a>
);

const PolicyQuestions = () => (
  <section className="bg-dark-primary pb-[60px]">
    <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
      <FadeUp
        inView
        y={30}
        duration={0.8}
        className="relative overflow-hidden rounded-[28px] border border-border-subtle bg-dark-deep p-10 md:p-14"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-mauve/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow className="mb-5">{POLICY_QUESTIONS.eyebrow}</Eyebrow>
            <SubHeading className="mb-5">{POLICY_QUESTIONS.heading}</SubHeading>
            <ServiceCardDesc className="max-w-md">{POLICY_QUESTIONS.description}</ServiceCardDesc>
          </div>

          <div className="flex flex-col gap-3">
            <ContactRow icon={Phone} {...FRONT_DESK} />
            <ContactRow icon={MessageSquare} {...TEXT_LINE} />
            <ButtonSm
              text={POLICY_QUESTIONS.bookText}
              url={POLICY_QUESTIONS.bookUrl}
              icon={<ArrowRight size={16} />}
              padding="px-8 py-4"
              className="mt-2"
            />
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default PolicyQuestions;
