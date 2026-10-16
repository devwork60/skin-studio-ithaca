import clsx from "clsx";

interface BulletListProps {
  items: string[];
  className?: string;
}

// Short highlight list with a rose dot marker.
const BulletList: React.FC<BulletListProps> = ({ items, className }) => (
  <ul className={clsx("space-y-4", className)}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span
          className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose"
          aria-hidden="true"
        />
        <span className="font-sans text-[15px] font-normal leading-[163%] text-ivory/90">
          {item}
        </span>
      </li>
    ))}
  </ul>
);

export default BulletList;
