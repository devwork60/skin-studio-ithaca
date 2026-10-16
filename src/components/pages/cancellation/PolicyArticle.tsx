import clsx from "clsx";
import { ShieldCheck } from "lucide-react";
import FadeUp from "@/components/common-components/FadeUp";
import type { Policy } from "@/constant/cancellationPolicyData";

interface PolicyArticleProps {
  policy: Policy;
  index: number;
}

// One numbered policy section: number + rule + icon, title, bullet points and optional callout.
const PolicyArticle: React.FC<PolicyArticleProps> = ({ policy, index }) => {
  const Icon = policy.icon;
  const number = String(index + 1).padStart(2, "0");
  return (
    <FadeUp
      inView
      y={30}
      duration={0.7}
      margin="-60px"
      className={clsx("scroll-mt-32 py-10 md:py-12", index > 0 ? "border-t border-border-subtle" : "pt-0 md:pt-0")}
    >
      <article id={policy.id} className="scroll-mt-32">
        <div className="mb-5 flex items-center gap-5">
          <span className="font-serif text-[48px] italic leading-none text-rose/40 md:text-[60px]">{number}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-rose/30 to-transparent" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-accent bg-bg-accent-soft">
            <Icon size={16} className="text-rose" aria-hidden="true" />
          </div>
        </div>

        <h2 className="mb-5 font-serif text-[30px] font-normal leading-[110%] text-ivory md:text-[36px]">
          {policy.title}
        </h2>

        <ul className="space-y-3">
          {policy.points.map((point) => (
            <li
              key={point}
              className="relative pl-6 font-sans text-[16px] leading-[180%] text-body-muted before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-3 before:bg-rose/60"
            >
              {point}
            </li>
          ))}
        </ul>

        {policy.callout && (
          <div className="mt-6 flex gap-4 rounded-2xl border border-border-accent bg-bg-accent-soft p-5">
            <ShieldCheck size={18} className="mt-0.5 shrink-0 text-rose" aria-hidden="true" />
            <p className="font-sans text-[14px] leading-[163%] text-ivory/90">{policy.callout}</p>
          </div>
        )}
      </article>
    </FadeUp>
  );
};

export default PolicyArticle;
