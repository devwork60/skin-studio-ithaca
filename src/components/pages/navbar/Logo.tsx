import Link from "next/link";
import BrandLogo from "@/components/pages/typography/BrandLogo";

const Logo = () => (
  <Link href="/" aria-label="Skin Studio home">
    <BrandLogo>Skin Studio</BrandLogo>
  </Link>
);

export default Logo;
