import type { LucideIcon } from "lucide-react";
import FadeUp from "@/components/common-components/FadeUp";
import MetaText from "@/components/pages/typography/MetaText";
import StatHeading from "@/components/pages/typography/StatHeading";

export interface StatItem {
  value: string;
  label: string;
  icon?: LucideIcon;
}

// Three-up row of big serif numbers with captions, optionally topped by a round icon.
const StatsRow = ({ items }: { items: StatItem[] }) => (
  <FadeUp
    inView
    y={24}
    delay={0.2}
    margin="-60px"
    className="mt-20 grid grid-cols-3 gap-8 border-t border-border-subtle pt-12 md:mt-28"
  >
    {items.map(({ icon: Icon, value, label }) => (
      <div key={label} className="text-center">
        {Icon && (
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-bg-accent-soft">
            <Icon size={18} className="text-rose" aria-hidden="true" />
          </div>
        )}
        <StatHeading className="text-rose">{value}</StatHeading>
        <MetaText className="mt-2 block md:text-[14px]">{label}</MetaText>
      </div>
    ))}
  </FadeUp>
);

export default StatsRow;
