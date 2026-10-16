import FadeUp from "@/components/common-components/FadeUp";
import MetaText from "@/components/pages/typography/MetaText";
import { HERO_TRUST_ITEMS } from "@/constant/heroData";

const HeroTrustRow = () => (
  <FadeUp
    y={0}
    duration={0.8}
    delay={1.1}
    className="mt-16 flex flex-wrap gap-8 border-t border-border-subtle pt-8"
  >
    {HERO_TRUST_ITEMS.map(({ icon: Icon, label }) => (
      <div key={label} className="flex items-center gap-3">
        <Icon size={16} className="text-rose/70" />
        <MetaText>{label}</MetaText>
      </div>
    ))}
  </FadeUp>
);

export default HeroTrustRow;
