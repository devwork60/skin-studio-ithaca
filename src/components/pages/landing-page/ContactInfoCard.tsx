import clsx from "clsx";
import FadeUp from "@/components/common-components/FadeUp";
import AccentLabel from "@/components/pages/typography/AccentLabel";
import CardDesc from "@/components/pages/typography/CardDesc";
import ContactValue from "@/components/pages/typography/ContactValue";
import type { ContactInfo } from "@/constant/contactData";

interface ContactInfoCardProps {
  info: ContactInfo;
  index: number;
  className?: string; // column spacing / divider
}

const hover = "transition-colors duration-300 group-hover:text-rose";

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ info, index, className }) => {
  const Icon = info.icon;
  return (
    <FadeUp inView y={16} duration={0.6} delay={index * 0.1} margin="-60px" className={className}>
      <a
        href={info.href}
        className="group block"
        {...(info.external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <div className="mb-5 flex items-center gap-3">
          <Icon size={16} className={clsx("text-rose/60", hover)} />
          <AccentLabel className={hover}>{info.label}</AccentLabel>
        </div>
        {info.lines.map((line) => (
          <ContactValue key={line} className={hover}>
            {line}
          </ContactValue>
        ))}
        <CardDesc className="mt-2">{info.note}</CardDesc>
      </a>
    </FadeUp>
  );
};

export default ContactInfoCard;
