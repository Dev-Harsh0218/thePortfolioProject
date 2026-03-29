import { Container } from "@/components/layout/contianer";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-36">
      <Container>
        <p className="text-sm tracking-wide text-neutral-500">
          {" "}
          Software Engineer {"•"} Product Builder {"•"} Systems Thinker
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-7xl">
          {" "}
          Digital products shaped with precision, clarity, and quiet confidence.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
          {" "}
          I build web experiences that feel premium because the design,
          engineering, motion, and structure have all been treated like part of
          the same product.
        </p>
          <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#projects">View selected work</Button>
          <Button href="#contact" variant="secondary">Let&apos;s build something</Button>
          </div>
      </Container>
    </section>
  );
}
