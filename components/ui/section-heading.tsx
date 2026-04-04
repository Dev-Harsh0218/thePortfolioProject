type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p
        className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        {eyebrow}
      </p>
      <h2 className="max-w-[14ch] text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#121417]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[42ch] text-[1.02rem] leading-[1.7] text-[#5d6774]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
