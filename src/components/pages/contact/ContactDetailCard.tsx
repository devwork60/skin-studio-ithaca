import FadeUp from "@/components/common-components/FadeUp";
import AccentLabel from "@/components/pages/typography/AccentLabel";
import CardDesc from "@/components/pages/typography/CardDesc";
import ContactValue from "@/components/pages/typography/ContactValue";
import type { ContactDetail } from "@/constant/contactPageData";

interface ContactDetailCardProps {
  detail: ContactDetail;
  index: number;
}

const hover = "transition-colors duration-300 group-hover:text-rose";

const ContactDetailCard: React.FC<ContactDetailCardProps> = ({ detail, index }) => {
  const Icon = detail.icon;
  return (
    <FadeUp inView y={24} duration={0.6} delay={index * 0.1} margin="-60px">
      <a
        href={detail.href}
        className="group block h-full rounded-[20px] border border-border-subtle bg-dark-primary/40 p-8 transition-all duration-300 hover:border-border-accent hover:bg-dark-primary/60"
        {...(detail.external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-bg-accent-soft transition-colors duration-300 group-hover:bg-rose/15">
          <Icon size={20} className={`text-rose/70 ${hover}`} aria-hidden="true" />
        </div>
        <AccentLabel as="p" className={`mb-4 ${hover}`}>
          {detail.label}
        </AccentLabel>
        <ContactValue>{detail.primary}</ContactValue>
        <CardDesc className="mt-1">{detail.secondary}</CardDesc>
        <p
          className={`mt-4 font-sans text-[13px] font-semibold leading-[150%] text-rose/70 ${hover}`}
        >
          {detail.action} &rarr;
        </p>
      </a>
    </FadeUp>
  );
};

export default ContactDetailCard;
