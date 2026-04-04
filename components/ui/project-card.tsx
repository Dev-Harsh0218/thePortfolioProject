import { Card } from "@/components/ui/card";

type ProjectCardProps = {
  tag: string;
  title: string;
  description: string;
};

export function ProjectCard({
  tag,
  title,
  description,
}: ProjectCardProps) {
  return (
    <Card className="rounded-[2rem] p-6 md:p-8">
      <p className="text-sm text-neutral-500">{tag}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-neutral-600">{description}</p>
    </Card>
  );
}

