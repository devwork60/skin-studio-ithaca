"use client";

import { useCallback, useMemo, useState } from "react";
import { MENU_SERVICES, type MenuService } from "@/constant/servicesMenuData";
import BookSidebar from "./BookSidebar";
import CategoryFilter from "./CategoryFilter";
import ServiceMenuCard from "./ServiceMenuCard";
import ServiceModal from "./ServiceModal";

// Service menu: category pills and a grid of services on the left, booking help on the right.
// Choosing a service opens its details dialog.
const ServiceMenuSection = () => {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<MenuService | null>(null);
  const close = useCallback(() => setSelected(null), []);

  const visible = useMemo(
    () => MENU_SERVICES.filter((s) => category === "all" || s.categorySlug === category),
    [category]
  );

  return (
    <section className="bg-dark-secondary py-[60px]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-8 md:mb-10">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          <div className="grid content-start gap-3 sm:grid-cols-2">
            {visible.map((service, i) => (
              <ServiceMenuCard key={service.id} service={service} index={i} onSelect={setSelected} />
            ))}
          </div>

          <BookSidebar />
        </div>
      </div>

      <ServiceModal service={selected} onClose={close} />
    </section>
  );
};

export default ServiceMenuSection;
