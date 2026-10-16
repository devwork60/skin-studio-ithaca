import ServicePageTemplate from "@/components/pages/service-detail/ServicePageTemplate";
import { FACIAL_TREATMENTS } from "@/constant/servicePages/facialTreatmentsData";

export default function FacialTreatmentsPage() {
  return <ServicePageTemplate data={FACIAL_TREATMENTS} />;
}
