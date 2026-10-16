import SocialIcon from "@/components/icons/SocialIcons";
import BrandLogo from "@/components/pages/typography/BrandLogo";
import CardDesc from "@/components/pages/typography/CardDesc";
import { FOOTER_SOCIAL, FOOTER_TAGLINE } from "@/constant/footerData";

const FooterBrand = () => (
  <div className="lg:col-span-1">
    <BrandLogo className="mb-4 block">Skin Studio</BrandLogo>
    <CardDesc className="mb-6 max-w-xs">{FOOTER_TAGLINE}</CardDesc>
    <div className="flex gap-3">
      {FOOTER_SOCIAL.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-body-muted transition-all duration-300 hover:border-border-hover hover:text-ivory"
        >
          <SocialIcon name={social.label} />
        </a>
      ))}
    </div>
  </div>
);

export default FooterBrand;
