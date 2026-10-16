"use client";

import { POLICIES } from "@/constant/cancellationPolicyData";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import PolicyArticle from "./PolicyArticle";
import PolicySidebar from "./PolicySidebar";

const IDS = POLICIES.map((p) => p.id);

// Table of contents on the left, the policy sections on the right.
const PolicyBody = () => {
  const active = useScrollSpy(IDS);
  return (
    <section className="bg-dark-primary py-[60px]">
      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 lg:grid-cols-[260px_1fr] lg:gap-20 lg:px-12">
        <PolicySidebar active={active} />
        <div>
          {POLICIES.map((policy, i) => (
            <PolicyArticle key={policy.id} policy={policy} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyBody;
