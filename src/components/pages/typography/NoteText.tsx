import clsx from "clsx";

interface NoteTextProps {
  children: React.ReactNode;
  className?: string;
}

// Quiet footnote under a section.
const NoteText: React.FC<NoteTextProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-sans font-normal text-body-muted/60",
      "text-[14px] leading-[150%]",
      className
    )}
  >
    {children}
  </p>
);

export default NoteText;
