import clsx from "clsx";

interface SliderDividerProps {
  position: number;
  isDragging: boolean;
}

// Vertical divider line with a round drag handle.
const SliderDivider: React.FC<SliderDividerProps> = ({ position, isDragging }) => (
  <div
    className="absolute bottom-0 top-0 z-10 -translate-x-1/2"
    style={{ left: `${position}%` }}
  >
    <div
      className={clsx(
        "h-full w-[2px] transition-colors duration-200",
        isDragging ? "bg-ivory/70" : "bg-ivory/45"
      )}
    />
    <div
      className={clsx(
        "absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-[8px] transition-all duration-200",
        isDragging ? "border-ivory/50 bg-rose/95" : "border-ivory/30 bg-dark-primary/75"
      )}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M5.5 6L3 9L5.5 12"
          stroke="var(--ivory)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 6L15 9L12.5 12"
          stroke="var(--ivory)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

export default SliderDivider;
