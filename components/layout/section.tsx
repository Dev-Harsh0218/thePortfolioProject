import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-[44px] md:py-12 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
