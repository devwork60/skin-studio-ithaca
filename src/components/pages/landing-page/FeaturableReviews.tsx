"use client";

import { useEffect, useRef, useState } from "react";
import { GOOGLE_REVIEWS_WIDGET_READY, TESTIMONIALS, TESTIMONIALS_RATING } from "@/constant/testimonialsData";
import TestimonialCard from "./TestimonialCard";
import TestimonialsRating from "./TestimonialsRating";

const FEATURABLE_WIDGET_ID = "868d7fd1-2dd4-41e3-b41c-1995c08eec8b";

// Featurable draws the widget inside an open shadow root, so the site's CSS can't reach it. These
// rules are added into that shadow root (using Featurable's `review__*` class names) so each review
// looks like the site's own review card: quote mark, text, stars, divider, then avatar + name.
// The widget's own title and summary bar are hidden; the rating line is drawn by the site from the
// numbers the widget reports. The "Powered by Featurable" credit is left in place.
const WIDGET_CSS = `
  .widget { padding: 0 !important; }
  .widget .title,
  .carousel__summary { display: none !important; }
  .container { max-width: none !important; }

  .slick-track { display: flex !important; }
  .slick-slide { height: auto !important; }
  .slick-slide > div,
  .carousel__card { height: 100% !important; }
  .carousel__card { padding: 0 12px !important; }

  .review {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    height: 100% !important;
    max-width: none !important;
    box-sizing: border-box !important;
    padding: 36px !important;
    background: #292A26 !important;
    border: 1px solid rgba(255, 255, 255, 0.10) !important;
    border-radius: 16px !important;
    box-shadow: none !important;
  }
  .review::before {
    content: "\\201C";
    order: 0;
    display: block;
    margin-bottom: 20px;
    font-family: var(--font-serif), Georgia, serif;
    font-size: 48px;
    line-height: 1;
    color: rgba(194, 90, 131, 0.25);
  }

  /* Text first, then stars, then divider + avatar + name */
  .review__header { display: contents !important; }
  .review__header > *:not(.review__reviewer) { order: 1 !important; }
  .review__header > div:not(.review__reviewer) { flex: 0 0 auto !important; margin-top: 0 !important; }
  .review__footer { order: 2 !important; margin: 32px 0 0 !important; justify-content: flex-start !important; }
  .review__reviewer { order: 3 !important; margin-top: 24px !important; padding-top: 24px !important; border-top: 1px solid rgba(255, 255, 255, 0.10) !important; }
  [class*="google-icon"], .review__date--md, .review__date--sm, .review__date--lg, .review__date--xl { display: none !important; }
  .review__footer > *:not(.star-rating) { display: none !important; }

  .review [class*="review__text"],
  .review [class*="review__text"] * {
    font-family: var(--font-sans), system-ui, sans-serif !important;
    font-size: 14px !important;
    line-height: 185% !important;
    color: #D6D0C8 !important;
  }
  .review__read-more { color: #C25A83 !important; font-size: 13px !important; padding: 0 !important; margin-top: 8px !important; }
  .star-rating__star--filled { color: #FBBF24 !important; }
  .star-rating__star--empty { color: rgba(255, 255, 255, 0.2) !important; }

  .review__reviewer-container { width: 44px !important; height: 44px !important; min-width: 44px !important; min-height: 44px !important; }
  .review__reviewer-img { width: 44px !important; height: 44px !important; min-width: 44px !important; min-height: 44px !important; }
  .review [class*="review__reviewer-name"] {
    margin: 0 !important;
    font-family: var(--font-sans), system-ui, sans-serif !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    color: #F4EFE8 !important;
  }

  .carousel__btn { background: #292A26 !important; border-color: rgba(255, 255, 255, 0.15) !important; color: #F4EFE8 !important; box-shadow: none !important; }
  .carousel__btn:hover { background: #3a3b36 !important; }
`;

// Reads the score ("4.4") and review count ("Based on 45 reviews") from the widget's own summary bar,
// for the site's rating line.
function readStats(shadow: ShadowRoot) {
  const ratingText = shadow.querySelector(".summary-bar__rating")?.textContent ?? "";
  const countText = shadow.querySelector(".summary-bar__sublabel")?.textContent ?? "";
  const rating = ratingText.match(/([0-5](?:\.\d)?)/)?.[1];
  const count = countText.match(/([\d,]+)\s+reviews?/i)?.[1];
  return rating && count ? { rating, count: Number(count.replace(/,/g, "")) } : null;
}

// Featurable Google Reviews widget. The embed script finds the `featurable-<id>` element and
// renders the reviews into it. While GOOGLE_REVIEWS_WIDGET_READY is false, the site's built-in
// review cards are shown instead.
const FeaturableReviews = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState<{ rating: string; count: number } | null>(null);
  const [gaveUp, setGaveUp] = useState(false);

  useEffect(() => {
    if (!GOOGLE_REVIEWS_WIDGET_READY) return;

    // The embed script only scans the page for widgets when it runs. Site navigation doesn't reload
    // the page, so it is added again every time this section mounts (a fresh script tag runs again).
    // Its loader also skips itself when its own inner script tag is still on the page, so remove that too.
    document.querySelectorAll("script[data-featurable-loader]").forEach((el) => el.remove());
    const script = document.createElement("script");
    script.src = "https://cdn.featurable.com/widget/v2/embed.js";
    script.charset = "UTF-8";
    script.defer = true;
    document.body.appendChild(script);

    const started = Date.now();
    const timer = window.setInterval(() => {
      const host = Array.from(rootRef.current?.querySelectorAll("*") ?? []).find((el) => el.shadowRoot);
      const shadow = host?.shadowRoot;
      if (shadow) {
        if (!shadow.querySelector("[data-site-style]")) {
          const style = document.createElement("style");
          style.setAttribute("data-site-style", "");
          style.textContent = WIDGET_CSS;
          shadow.appendChild(style);
        }
        const found = readStats(shadow);
        if (found) {
          setStats(found);
          window.clearInterval(timer);
          return;
        }
      }
      if (Date.now() - started > 45000) {
        setGaveUp(true);
        window.clearInterval(timer);
      }
    }, 800);
    return () => {
      window.clearInterval(timer);
      script.remove();
    };
  }, []);

  if (!GOOGLE_REVIEWS_WIDGET_READY) {
    return (
      <>
        <TestimonialsRating rating={TESTIMONIALS_RATING} />
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      {stats ? (
        <TestimonialsRating rating={stats.rating} reviewCount={stats.count} />
      ) : (
        gaveUp && <TestimonialsRating />
      )}
      <div ref={rootRef}>
        <div id={`featurable-${FEATURABLE_WIDGET_ID}`} data-featurable-async />
      </div>
    </>
  );
};

export default FeaturableReviews;
