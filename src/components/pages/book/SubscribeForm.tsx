"use client";

import { SUBSCRIBE } from "@/constant/bookPageData";

// Email signup field. Not wired to a backend yet — submitting does nothing.
const SubscribeForm = () => (
  <form
    onSubmit={(e) => e.preventDefault()}
    className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
  >
    <input
      type="email"
      required
      aria-label={SUBSCRIBE.placeholder}
      placeholder={SUBSCRIBE.placeholder}
      className="flex-1 rounded-full border border-border-subtle bg-dark-secondary px-6 py-3.5 font-sans text-[14px] leading-[150%] text-ivory placeholder:text-text-placeholder focus:border-border-focus focus:outline-none"
    />
    <button
      type="submit"
      className="rounded-full bg-rose px-8 py-3.5 font-sans text-[14px] font-semibold leading-[150%] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-hover"
    >
      {SUBSCRIBE.button}
    </button>
  </form>
);

export default SubscribeForm;
