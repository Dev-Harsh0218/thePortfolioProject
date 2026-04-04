import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  return (
    <footer className="pt-2">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-[18px] px-1 pt-3 text-[1.02rem] leading-[1.7] text-[#5d6774] md:flex-row md:items-center">
            <p>Harsh Bhardwaj</p>
            <p>Software Engineer focused on thoughtful product experiences.</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
