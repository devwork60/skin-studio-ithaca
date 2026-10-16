import clsx from "clsx";
import FadeUp from "@/components/common-components/FadeUp";
import SectionHeader from "@/components/common-components/SectionHeader";
import type { ServiceResultItem } from "@/constant/servicePages/types";
import ResultCard from "./ResultCard";

const ServiceResultsSection = ({ items }: { items: ServiceResultItem[] }) => (
  <section className="bg-dark-primary py-28 md:py-36 lg:py-44">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
      <SectionHeader
        align="center"
        eyebrow="Real Results"
        title={
          <>
            Before &amp; <span className="heading-serif-italic">After</span>
          </>
        }
        headingVariant="cta"
        headingSpacing=""
        className="mb-16"
      />

      <FadeUp inView y={30} duration={0.8} className="space-y-10">
        {items.map((item) => (
          <div key={item.beforeSrc}>
            <div className={clsx("mx-auto grid gap-6 md:grid-cols-2", item.maxWidthClass)}>
              <ResultCard
                label="Before"
                src={item.beforeSrc}
                alt={item.beforeAlt}
                aspectRatio={item.aspectRatio ?? "4/3"}
              />
              <ResultCard
                label="After"
                src={item.afterSrc}
                alt={item.afterAlt}
                aspectRatio={item.aspectRatio ?? "4/3"}
              />
            </div>
            {item.caption && (
              <p className="mt-4 text-center font-sans text-[13px] leading-[150%] text-body-muted/70">
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </FadeUp>
    </div>
  </section>
);

export default ServiceResultsSection;
