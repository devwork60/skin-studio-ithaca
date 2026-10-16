import ButtonSm from "@/components/button/ButtonSm";
import ButtonText from "@/components/button/ButtonText";
import StatementSection from "@/components/common-components/StatementSection";
import {
  EXPERIENCE_HEADING,
  EXPERIENCE_PARAGRAPH_1,
  EXPERIENCE_PARAGRAPH_2,
  EXPERIENCE_PRIMARY_CTA,
  EXPERIENCE_SECONDARY_CTA,
} from "@/constant/experienceData";

const ExperienceSection = () => (
  <StatementSection
    heading={EXPERIENCE_HEADING}
    paragraphs={[EXPERIENCE_PARAGRAPH_1, EXPERIENCE_PARAGRAPH_2]}
    actions={
      <>
        <ButtonSm
          text={EXPERIENCE_PRIMARY_CTA.text}
          url={EXPERIENCE_PRIMARY_CTA.url}
          padding="px-8 py-3.5"
        />
        <ButtonText
          variant="muted"
          text={EXPERIENCE_SECONDARY_CTA.text}
          url={EXPERIENCE_SECONDARY_CTA.url}
        />
      </>
    }
  />
);

export default ExperienceSection;
