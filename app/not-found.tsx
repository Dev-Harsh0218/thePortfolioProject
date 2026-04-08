import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="pb-20 pt-10">
      <Container>
        <section className="rounded-[36px] border border-black/[0.08] bg-white/[0.82] p-8 shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] max-[720px]:rounded-[26px] max-[720px]:p-6">
          <p
            className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Not Found
          </p>
          <h1 className="max-w-[10ch] text-[clamp(2.5rem,6vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#121417]">
            That page doesn&apos;t exist.
          </h1>
          <p className="mt-5 max-w-[58ch] text-[1.04rem] leading-[1.8] text-[#5d6774]">
            The link may be outdated, or the project route may have changed while
            the portfolio was being updated.
          </p>
          <div className="mt-7">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-transparent bg-[linear-gradient(135deg,#0b6e4f_0%,#093f30_100%)] px-5 text-sm font-medium text-[#f8faf8] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(18,20,23,0.08)]"
            >
              Go back home
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
