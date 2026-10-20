"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TESTIMONIALS } from "@/constant/testimonialsData";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";

// Auto-scrolling, looping review slider: 3 cards on desktop, 2 on tablet, 1 on mobile.
const TestimonialsSlider = () => (
  <Swiper
    modules={[Autoplay]}
    loop
    speed={700}
    spaceBetween={24}
    slidesPerView={1}
    autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3, spaceBetween: 32 },
    }}
  >
    {TESTIMONIALS.map((item, i) => (
      <SwiperSlide key={i} className="!h-auto">
        <TestimonialCard item={item} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default TestimonialsSlider;
