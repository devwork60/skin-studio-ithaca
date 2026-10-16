import type { Metadata } from "next";
import { PHOTO_FACIAL } from "@/constant/servicePages/photoFacialData";
import { buildServiceMetadata } from "@/utils/serviceMetadata";

export const metadata: Metadata = buildServiceMetadata(PHOTO_FACIAL);

export default function PhotoFacialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
