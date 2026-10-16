import Link from "next/link";
import Eyebrow from "@/components/pages/typography/Eyebrow";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="heading-serif text-[48px] leading-[110%] md:text-[72px] lg:text-[88px]">Page not found</h1>
      <Link
        href="/"
        className="inline-flex rounded-full bg-rose px-8 py-3.5 font-sans text-[15px] font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-hover"
      >
        Back to home
      </Link>
    </main>
  );
}
