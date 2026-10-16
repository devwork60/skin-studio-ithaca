import Link from "next/link";
import {
  FOOTER_ADDRESS,
  FOOTER_BOOK_LINK,
  FOOTER_COPYRIGHT,
  FOOTER_INFO_LINKS,
  FOOTER_NAV_LINKS,
  FOOTER_TREATMENT_LINKS,
} from "@/constant/footerData";
import FooterBrand from "./FooterBrand";
import FooterColumn from "./FooterColumn";

const Footer = () => (
  <footer className="border-t border-border-subtle bg-dark-deep">
    <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <FooterBrand />
        <FooterColumn title="Navigation" links={FOOTER_NAV_LINKS} />
        <FooterColumn title="Treatments" links={FOOTER_TREATMENT_LINKS} />
        <FooterColumn title="Info" links={FOOTER_INFO_LINKS}>
          <li>
            <address className="font-sans text-[14px] not-italic leading-[150%] text-body-muted">
              {FOOTER_ADDRESS[0]}
              <br />
              {FOOTER_ADDRESS[1]}
            </address>
          </li>
        </FooterColumn>
      </div>

      <div className="mt-16 border-t border-border-subtle pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-sans text-[13px] leading-[150%] text-body-muted/60">
            &copy; {new Date().getFullYear()} {FOOTER_COPYRIGHT}
          </p>
          <Link
            href={FOOTER_BOOK_LINK.href}
            className="font-sans text-[13px] font-medium leading-[150%] text-rose transition-colors duration-300 hover:text-rose-hover"
          >
            {FOOTER_BOOK_LINK.label}
          </Link>
        </div>
      </div>

      <div className="mt-12 overflow-hidden text-center" aria-hidden="true">
        <span className="font-serif text-[60px] font-normal uppercase leading-[110%] tracking-wider text-ivory md:text-[80px] lg:text-[100px]">
          Skin Studio
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
