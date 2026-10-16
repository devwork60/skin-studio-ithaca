import { MessageSquare, Phone } from "lucide-react";
import clsx from "clsx";
import CardDesc from "@/components/pages/typography/CardDesc";
import Eyebrow from "@/components/pages/typography/Eyebrow";
import { FRONT_DESK, POLICIES, POLICY_SIDEBAR, TEXT_LINE } from "@/constant/cancellationPolicyData";

const contactLink =
  "flex items-center gap-2 font-sans text-[13px] font-medium leading-[150%] text-body-muted transition-colors hover:text-ivory";

// Sticky table of contents (desktop) with the section in view highlighted, plus a help card.
const PolicySidebar = ({ active }: { active: string }) => (
  <aside className="hidden lg:block">
    <div className="sticky top-32">
      <Eyebrow className="mb-6">{POLICY_SIDEBAR.heading}</Eyebrow>
      <nav className="relative border-l border-border-subtle" aria-label="Policy sections">
        {POLICIES.map((p, i) => {
          const isActive = active === p.id;
          return (
            <a
              key={p.id}
              href={`#${p.id}`}
              className={clsx(
                "relative -ml-px flex items-baseline gap-3 border-l py-2.5 pl-5 font-sans text-[14px] leading-[150%] transition-colors duration-300",
                isActive ? "border-rose text-ivory" : "border-transparent text-body-muted/60 hover:text-ivory"
              )}
            >
              <span
                className={clsx(
                  "text-[11px] font-semibold tracking-wider",
                  isActive ? "text-rose" : "text-body-muted/40"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.title}
            </a>
          );
        })}
      </nav>

      <div className="mt-10 rounded-2xl border border-border-subtle bg-dark-secondary p-6">
        <p className="mb-1 font-sans text-[14px] font-semibold leading-[150%] text-ivory">
          {POLICY_SIDEBAR.helpTitle}
        </p>
        <CardDesc className="mb-5 text-body-muted/70">{POLICY_SIDEBAR.helpText}</CardDesc>
        <a href={FRONT_DESK.href} className={clsx(contactLink, "mb-2")}>
          <Phone size={14} className="text-rose" aria-hidden="true" />
          {FRONT_DESK.number}
        </a>
        <a href={TEXT_LINE.href} className={contactLink}>
          <MessageSquare size={14} className="text-rose" aria-hidden="true" />
          Text {TEXT_LINE.number}
        </a>
      </div>
    </div>
  </aside>
);

export default PolicySidebar;
