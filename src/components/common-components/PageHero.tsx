import Image from "next/image";
import clsx from "clsx";
import FadeUp from "@/components/common-components/FadeUp";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import HeroDescription from "@/components/pages/typography/HeroDescription";
import Breadcrumb, { type BreadcrumbItem } from "./Breadcrumb";

interface PageHeroProps {
  image: { src: string; alt: string };
  breadcrumb: BreadcrumbItem[];
  title: React.ReactNode;
  description: string;
  eyebrow?: string;
  imageClassName?: string; // how the photo fills the hero; defaults to object-cover
  wide?: boolean; // 1400px content width instead of 1200px
  compact?: boolean; // shorter hero (50vh / 40vh)
  overlap?: boolean; // extra bottom space for a card that overlaps the hero
}

// Hero for inner pages: photo background, breadcrumb, the page's single <h1> and a short intro.
const PageHero: React.FC<PageHeroProps> = ({
  image,
  breadcrumb,
  title,
  description,
  eyebrow,
  imageClassName = "object-cover",
  wide,
  compact,
  overlap,
}) => (
  <section
    className={clsx(
      "relative flex items-end overflow-hidden pt-32",
      overlap ? "pb-32 md:pb-36" : "pb-20 md:pb-24 lg:pb-28",
      compact
        ? "min-h-[50vh] md:min-h-[40vh]"
        : overlap
          ? "min-h-[56vh] md:min-h-[50vh]"
          : "min-h-[60vh] md:min-h-[50vh]"
    )}
  >
    <div className="absolute inset-0">
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className={imageClassName} />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/95 via-dark-primary/80 to-dark-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/40 to-transparent" />
    </div>

    <div
      className={clsx(
        "relative z-10 mx-auto w-full px-6 lg:px-12",
        wide ? "max-w-[1400px]" : "max-w-[1200px]"
      )}
    >
      <FadeUp y={16} delay={0.2} className="mb-6">
        <Breadcrumb items={breadcrumb} />
      </FadeUp>

      {eyebrow && (
        <FadeUp y={16} delay={0.3} className="mb-4">
          <Eyebrow>{eyebrow}</Eyebrow>
        </FadeUp>
      )}

      <FadeUp y={30} duration={0.8} delay={0.35}>
        <h1 className="font-serif text-[48px] font-normal leading-[110%] text-ivory md:text-[60px] lg:text-[76px]">
          {title}
        </h1>
      </FadeUp>

      <FadeUp delay={0.55}>
        <HeroDescription className="mt-6 max-w-lg">{description}</HeroDescription>
      </FadeUp>
    </div>
  </section>
);

export default PageHero;
