import Image from "next/image";
import BarLabel from "@/components/pages/typography/BarLabel";

interface ResultCardProps {
  label: string;
  src: string;
  alt: string;
  aspectRatio: string;
}

// One half of a before/after pair: caption bar above a cropped photo.
const ResultCard: React.FC<ResultCardProps> = ({ label, src, alt, aspectRatio }) => (
  <div className="overflow-hidden rounded-2xl border border-border-subtle">
    <div className="bg-dark-secondary/60 px-5 py-3">
      <BarLabel>{label}</BarLabel>
    </div>
    <div className="relative w-full" style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1400px) 650px, (min-width: 768px) 45vw, 100vw"
        className="object-cover"
      />
    </div>
  </div>
);

export default ResultCard;
