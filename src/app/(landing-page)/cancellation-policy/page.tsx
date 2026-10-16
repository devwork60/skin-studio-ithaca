import PageHero from "@/components/common-components/PageHero";
import PolicyBody from "@/components/pages/cancellation/PolicyBody";
import PolicyHighlights from "@/components/pages/cancellation/PolicyHighlights";
import PolicyQuestions from "@/components/pages/cancellation/PolicyQuestions";
import { CANCELLATION_HERO } from "@/constant/cancellationPolicyData";

export default function CancellationPolicyPage() {
  return (
    <main>
      <PageHero overlap {...CANCELLATION_HERO} />
      <PolicyHighlights />
      <PolicyBody />
      <PolicyQuestions />
    </main>
  );
}
