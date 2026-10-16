import clsx from "clsx";

interface MenuTitleProps {
  children: React.ReactNode;
  className?: string;
}

// Service name inside a menu card or dialog (h3).
const MenuTitle: React.FC<MenuTitleProps> = ({ children, className }) => (
  <h3
    className={clsx(
      "font-serif font-semibold text-ivory",
      "text-[17px] leading-[120%] md:text-[18px]",
      className
    )}
  >
    {children}
  </h3>
);

export default MenuTitle;
