import clsx from "clsx";

interface TeamNameProps {
  children: React.ReactNode;
  className?: string;
}

const TeamName: React.FC<TeamNameProps> = ({ children, className }) => (
  <h3
    className={clsx(
      "font-serif font-normal text-ivory",
      "text-[26px] leading-[110%]",
      className
    )}
  >
    {children}
  </h3>
);

export default TeamName;
