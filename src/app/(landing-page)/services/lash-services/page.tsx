import ServicePageTemplate from "@/components/pages/service-detail/ServicePageTemplate";
import { LASH_SERVICES } from "@/constant/servicePages/lashServicesData";

export default function LashServicesPage() {
  return <ServicePageTemplate data={LASH_SERVICES} />;
}
