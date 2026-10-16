"use client";

import clsx from "clsx";
import {
  CalendarCheck,
  Eye,
  Layers,
  Scissors,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { MENU_CATEGORIES, MENU_SERVICES } from "@/constant/servicesMenuData";

const ICONS: Record<string, LucideIcon> = {
  all: Sparkles,
  facials: Sparkles,
  dermaplaning: Layers,
  "lash-brow": Eye,
  waxing: Scissors,
  laser: Zap,
  consult: CalendarCheck,
};

interface CategoryFilterProps {
  active: string;
  onChange: (slug: string) => void;
}

const categories = [{ slug: "all", name: "All Services" }, ...MENU_CATEGORIES];

const count = (slug: string) =>
  slug === "all" ? MENU_SERVICES.length : MENU_SERVICES.filter((s) => s.categorySlug === slug).length;

// Pill row to filter the menu by category, with a service count on each.
const CategoryFilter: React.FC<CategoryFilterProps> = ({ active, onChange }) => (
  <div className="flex w-full flex-wrap gap-2" role="tablist" aria-label="Service categories">
    {categories.map((cat) => {
      const Icon = ICONS[cat.slug] ?? Sparkles;
      const isActive = active === cat.slug;
      return (
        <button
          key={cat.slug}
          type="button"
          role="tab"
          aria-selected={isActive}
          onClick={() => onChange(cat.slug)}
          className={clsx(
            "flex items-center gap-2 rounded-full px-4 py-2.5 font-sans text-[13px] font-medium leading-[150%] transition-all duration-300",
            isActive
              ? "bg-rose text-ivory shadow-[0_2px_12px_rgba(194,90,131,0.3)]"
              : "border border-border-subtle text-body-muted hover:border-border-hover hover:text-ivory"
          )}
        >
          <Icon size={14} aria-hidden="true" />
          {cat.name}
          <span className={clsx("ml-0.5 text-[11px]", isActive ? "text-ivory/70" : "text-body-muted/50")}>
            ({count(cat.slug)})
          </span>
        </button>
      );
    })}
  </div>
);

export default CategoryFilter;
