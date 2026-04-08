import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="flex items-end justify-between gap-8 rounded-[32px] border border-black/[0.08] bg-white/[0.76] p-9 shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] max-[980px]:flex-col max-[980px]:items-start max-[720px]:rounded-[24px] max-[720px]:p-[22px]">
          <div className="min-w-0">
            <p
              className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Contact
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#121417]">
              Let&apos;s build something precise, useful, and beautifully executed.
            </h2>
            <p className="mt-6 max-w-[58ch] text-[1.02rem] leading-[1.7] text-[#5d6774]">
              I&apos;m open to internships, freelance work, and full-time roles where
              product quality, ownership, and curiosity are valued.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-[14px] max-[980px]:justify-start">
            <Button href={siteConfig.email}>Email me</Button>
            <Button href={siteConfig.github} variant="secondary">
              GitHub
            </Button>
            <Button href={siteConfig.linkedin} variant="secondary">
              LinkedIn
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
