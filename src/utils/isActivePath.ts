// True when `pathname` is the page at `href` or a page inside it ("/services" matches "/services/photo-facial").
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
