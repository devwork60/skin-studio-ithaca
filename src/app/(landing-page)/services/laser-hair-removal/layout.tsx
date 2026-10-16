import type { Metadata } from "next";
import { LASER_HAIR_REMOVAL } from "@/constant/servicePages/laserHairRemovalData";
import { buildServiceMetadata } from "@/utils/serviceMetadata";

export const metadata: Metadata = buildServiceMetadata(LASER_HAIR_REMOVAL);

export default function LaserHairRemovalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
