import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string; // omit for the current page
}

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav
    aria-label="Breadcrumb"
    className="flex items-center gap-3 font-sans text-[13px] leading-[150%] text-body-muted"
  >
    {items.map((item, i) => (
      <span key={item.label} className="flex items-center gap-3">
        {i > 0 && (
          <span className="text-border-subtle" aria-hidden="true">
            /
          </span>
        )}
        {item.href ? (
          <Link href={item.href} className="transition-colors duration-300 hover:text-ivory">
            {item.label}
          </Link>
        ) : (
          <span className="text-ivory" aria-current="page">
            {item.label}
          </span>
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumb;
