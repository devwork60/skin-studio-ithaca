import { Phone } from "lucide-react";
import clsx from "clsx";
import { PHONE_HREF, PHONE_NUMBER } from "@/constant/navData";

interface PhoneLinkProps {
  iconSize?: number;
  className?: string;
}

const PhoneLink: React.FC<PhoneLinkProps> = ({ iconSize = 14, className }) => (
  <a
    href={PHONE_HREF}
    className={clsx(
      "flex items-center gap-2 text-body-muted transition-colors duration-300 hover:text-ivory",
      className
    )}
  >
    <Phone size={iconSize} />
    {PHONE_NUMBER}
  </a>
);

export default PhoneLink;
