import FadeUp from "@/components/common-components/FadeUp";
import BodyTitle from "@/components/pages/typography/BodyTitle";
import CardDesc from "@/components/pages/typography/CardDesc";
import IndexLabel from "@/components/pages/typography/IndexLabel";
import { WHY_CHOOSE_VALUES } from "@/constant/whyChooseData";

const WhyChooseValueList = () => (
  <div>
    {WHY_CHOOSE_VALUES.map((item, i) => (
      <FadeUp
        key={item.number}
        inView
        duration={0.6}
        delay={i * 0.1}
        margin="-60px"
        className="border-b border-border-subtle py-7 first:border-t"
      >
        <div className="flex gap-5">
          <IndexLabel className="mt-0.5">{item.number}</IndexLabel>
          <div>
            <BodyTitle className="mb-2">{item.title}</BodyTitle>
            <CardDesc className="max-w-md">{item.description}</CardDesc>
          </div>
        </div>
      </FadeUp>
    ))}
  </div>
);

export default WhyChooseValueList;
