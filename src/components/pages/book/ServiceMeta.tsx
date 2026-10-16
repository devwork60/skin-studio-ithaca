import { Clock, DollarSign } from "lucide-react";
import type { MenuService } from "@/constant/servicesMenuData";
import { formatDuration, formatPrice } from "@/utils/formatters";

// "$125 · 1 hr" row with small rose icons.
const ServiceMeta = ({ service }: { service: MenuService }) => (
  <div className="flex items-center gap-3 font-sans text-[13px] leading-[150%] text-body-muted">
    <span className="flex items-center gap-1">
      <DollarSign size={12} className="text-rose/60" aria-hidden="true" />
      {formatPrice(service.priceCents)}
    </span>
    <span className="flex items-center gap-1">
      <Clock size={12} className="text-rose/60" aria-hidden="true" />
      {formatDuration(service.durationMinutes)}
    </span>
  </div>
);

export default ServiceMeta;
