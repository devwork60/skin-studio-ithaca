import ServicePageTemplate from "@/components/pages/service-detail/ServicePageTemplate";
import { LASER_HAIR_REMOVAL } from "@/constant/servicePages/laserHairRemovalData";

export default function LaserHairRemovalPage() {
  return <ServicePageTemplate data={LASER_HAIR_REMOVAL} />;
}
