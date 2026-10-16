import Image from "next/image";
import FadeUp from "@/components/common-components/FadeUp";
import StarRating from "@/components/common-components/StarRating";
import CapsLabel from "@/components/pages/typography/CapsLabel";
import QuoteMark from "@/components/pages/typography/QuoteMark";
import QuoteText from "@/components/pages/typography/QuoteText";
import type { Testimonial } from "@/constant/testimonialsData";

interface TestimonialCardProps {
  item: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, index }) => (
  <FadeUp
    inView
    y={30}
    delay={index * 0.12}
    margin="-60px"
    className="rounded-2xl border border-border-subtle bg-dark-secondary p-8 md:p-9"
  >
    <QuoteMark className="mb-5" />
    <QuoteText className="mb-8">{item.quote}</QuoteText>
    <StarRating size={14} className="mb-6 gap-1" />

    <div className="flex items-center gap-3.5 border-t border-border-subtle pt-6">
      <Image
        src={item.image}
        alt={item.name}
        width={44}
        height={44}
        className="h-11 w-11 rounded-full object-cover"
      />
      <CapsLabel>{item.name}</CapsLabel>
    </div>
  </FadeUp>
);

export default TestimonialCard;
