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
      <p className="text-sm tracking-wide text-neutral-500">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

