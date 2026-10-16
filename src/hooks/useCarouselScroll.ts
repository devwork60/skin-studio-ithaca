"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MIN_PROGRESS = 0.25;

// Scroll state and prev/next stepping for a horizontally scrolling track.
export function useCarouselScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(MIN_PROGRESS);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 1;
    setProgress(Math.max(MIN_PROGRESS, p));
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0");
    const step = card ? card.getBoundingClientRect().width + gap : 0;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return { trackRef, progress, atStart, atEnd, update, scrollByCard };
}
