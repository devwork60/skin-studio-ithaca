import clsx from "clsx";

interface MenuDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

// Short service description under a menu title.
const MenuDescription: React.FC<MenuDescriptionProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-normal text-body-muted/70",
      "text-[13px] leading-[170%]",
      className
    )}
  >
    {children}
  </p>
);

export default MenuDescription;
