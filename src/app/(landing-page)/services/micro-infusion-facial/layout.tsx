import type { Metadata } from "next";
import { MICRO_INFUSION_FACIAL } from "@/constant/servicePages/microInfusionFacialData";
import { buildServiceMetadata } from "@/utils/serviceMetadata";

export const metadata: Metadata = buildServiceMetadata(MICRO_INFUSION_FACIAL);

export default function MicroInfusionFacialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
