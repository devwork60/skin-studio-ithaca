import FadeUp from "@/components/common-components/FadeUp";
import BarLabel from "@/components/pages/typography/BarLabel";
import { POLICY_HIGHLIGHTS } from "@/constant/cancellationPolicyData";

// Three key numbers in a card that overlaps the bottom of the hero.
const PolicyHighlights = () => (
  <section className="relative z-20 -mt-20 px-6 lg:px-12">
    <FadeUp
      y={30}
      duration={0.8}
      delay={0.7}
      className="mx-auto grid max-w-[1100px] overflow-hidden rounded-[28px] border border-border-subtle bg-dark-secondary/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:grid-cols-3"
    >
      {POLICY_HIGHLIGHTS.map((h, i) => (
        <div
          key={h.label}
          className={`px-8 py-8 text-center md:py-10 ${
            i > 0 ? "border-t border-border-subtle sm:border-l sm:border-t-0" : ""
          }`}
        >
          <p className="font-serif text-[48px] font-normal leading-[110%] text-ivory md:text-[60px]">
            {h.value}
            {h.unit && (
              <span className="ml-1 font-serif text-[24px] italic text-rose md:text-[30px]">{h.unit}</span>
            )}
          </p>
          <BarLabel className="mt-3 block text-body-muted/70">{h.label}</BarLabel>
        </div>
      ))}
    </FadeUp>
  </section>
);

export default PolicyHighlights;
