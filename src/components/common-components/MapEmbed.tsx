"use client";

import { useState } from "react";
import clsx from "clsx";

interface MapEmbedProps {
  src: string;
  title: string;
  className?: string; // height classes for the frame
}

// Lazy-loaded Google Maps iframe. The map only takes mouse/touch input after a click,
// so scrolling the page with the cursor over it never gets trapped by the map.
const MapEmbed: React.FC<MapEmbedProps> = ({ src, title, className }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setActive(false)}>
      <iframe
        loading="lazy"
        src={src}
        title={title}
        className={clsx("w-full border-0", !active && "pointer-events-none", className)}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      {!active && (
        <button
          type="button"
          aria-label="Activate map"
          onClick={() => setActive(true)}
          className="absolute inset-0 cursor-pointer"
        />
      )}
    </div>
  );
};

export default MapEmbed;
