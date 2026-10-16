import Link from "next/link";
import CapsLabel from "@/components/pages/typography/CapsLabel";
import type { FooterLink } from "@/constant/footerData";

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  children?: React.ReactNode; // extra list items, e.g. the address
}

export const footerLinkClasses =
  "font-sans text-[14px] leading-[150%] text-body-muted transition-colors duration-300 hover:text-ivory";

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, children }) => (
  <div>
    <CapsLabel as="h4" className="mb-4 block">
      {title}
    </CapsLabel>
    <ul className="space-y-3">
      {links.map((link) => {
        const Tag = link.href.startsWith("tel:") ? "a" : Link;
        return (
          <li key={link.label}>
            <Tag href={link.href} className={footerLinkClasses}>
              {link.label}
            </Tag>
          </li>
        );
      })}
      {children}
    </ul>
  </div>
);

export default FooterColumn;
