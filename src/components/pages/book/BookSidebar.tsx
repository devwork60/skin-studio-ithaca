import Link from "next/link";
import { ArrowUpRight, FileText, Phone } from "lucide-react";
import ButtonOutline from "@/components/button/ButtonOutline";
import FadeUp from "@/components/common-components/FadeUp";
import BodyTitle from "@/components/pages/typography/BodyTitle";
import CardDesc from "@/components/pages/typography/CardDesc";
import { BOOK_SIDEBAR } from "@/constant/bookPageData";

const IconBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-accent-soft">
    {children}
  </div>
);

// Right-hand column: phone booking card and a link to the cancellation policy.
const BookSidebar = () => (
  <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
    <FadeUp inView y={20} duration={0.7} margin="-60px" className="rounded-2xl border border-border-subtle bg-dark-primary p-7">
      <div className="mb-5 flex items-center gap-3">
        <IconBadge>
          <Phone size={16} className="text-rose" aria-hidden="true" />
        </IconBadge>
        <BodyTitle>{BOOK_SIDEBAR.call.title}</BodyTitle>
      </div>
      <CardDesc className="mb-5">{BOOK_SIDEBAR.call.description}</CardDesc>
      <ButtonOutline
        tone="ivory"
        text={BOOK_SIDEBAR.call.phoneText}
        url={BOOK_SIDEBAR.call.phoneUrl}
        icon={<Phone size={15} />}
        padding="px-6 py-3"
        className="w-full justify-center"
      />
    </FadeUp>

    <FadeUp inView y={20} duration={0.7} delay={0.1} margin="-60px">
      <Link
        href={BOOK_SIDEBAR.policy.url}
        className="group flex items-center gap-4 rounded-2xl border border-border-subtle bg-dark-primary p-6 transition-all duration-300 hover:border-border-accent"
      >
        <IconBadge>
          <FileText size={16} className="text-rose" aria-hidden="true" />
        </IconBadge>
        <div className="min-w-0 flex-1">
          <p className="font-sans text-[14px] font-semibold leading-[150%] text-ivory">
            {BOOK_SIDEBAR.policy.title}
          </p>
          <p className="font-sans text-[12px] leading-[150%] text-body-muted/60">
            {BOOK_SIDEBAR.policy.note}
          </p>
        </div>
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="shrink-0 text-body-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ivory"
        />
      </Link>
    </FadeUp>
  </div>
);

export default BookSidebar;
