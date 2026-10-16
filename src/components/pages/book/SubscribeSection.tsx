import FadeUp from "@/components/common-components/FadeUp";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import StatHeading from "@/components/pages/typography/StatHeading";
import { SUBSCRIBE } from "@/constant/bookPageData";
import SubscribeForm from "./SubscribeForm";

const SubscribeSection = () => (
  <section className="bg-dark-primary py-[60px]">
    <div className="mx-auto max-w-[800px] px-6 text-center lg:px-12">
      <FadeUp inView y={24} duration={0.8}>
        <Eyebrow className="mb-6">{SUBSCRIBE.eyebrow}</Eyebrow>
        <StatHeading as="h2" className="mb-8 text-ivory">
          {SUBSCRIBE.heading}
        </StatHeading>
        <SubscribeForm />
      </FadeUp>
    </div>
  </section>
);

export default SubscribeSection;
