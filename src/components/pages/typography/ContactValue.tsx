import clsx from "clsx";

interface ContactValueProps {
  children: React.ReactNode;
  className?: string;
}

// Serif line for an address or phone number inside a contact card.
const ContactValue: React.FC<ContactValueProps> = ({ children, className }) => (
  <p
    className={clsx(
      "font-serif font-normal text-ivory",
      "text-[22px] leading-[150%] md:text-[24px]",
      className
    )}
  >
    {children}
  </p>
);

export default ContactValue;
