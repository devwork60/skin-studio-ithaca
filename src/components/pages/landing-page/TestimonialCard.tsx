"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import StarRating from "@/components/common-components/StarRating";
import CapsLabel from "@/components/pages/typography/CapsLabel";
import QuoteMark from "@/components/pages/typography/QuoteMark";
import QuoteText from "@/components/pages/typography/QuoteText";
import type { Testimonial } from "@/constant/testimonialsData";

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  // Reviews longer than 4 lines are cut off with a "Read more" toggle; measured again on resize.
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const measure = () => {
      if (!expanded) setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [expanded]);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-dark-secondary p-8 md:p-9">
      <QuoteMark className="mb-5" />
      <div ref={textRef} className={clsx(!expanded && "line-clamp-4")}>
        <QuoteText>{item.quote}</QuoteText>
      </div>
      {(overflows || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          className="mt-3 self-start font-sans text-[13px] leading-[150%] text-rose transition-colors duration-300 hover:text-rose-hover"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
      <div className="mb-8" />
      <StarRating size={14} className="mb-6 mt-auto gap-1" />

      <div className="flex items-center gap-3.5 border-t border-border-subtle pt-6">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-border-subtle font-sans text-[13px] font-semibold tracking-[0.08em] text-ivory"
          >
            {initials(item.name)}
          </span>
        )}
        <CapsLabel>{item.name}</CapsLabel>
      </div>
    </div>
  );
};

export default TestimonialCard;
