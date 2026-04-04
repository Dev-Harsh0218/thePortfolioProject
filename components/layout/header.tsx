import { Container } from "@/components/layout/container";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-4 z-10">
      <Container>
        <div className="flex items-center justify-between gap-6 rounded-full border border-black/[0.08] bg-white/[0.74] px-[22px] py-[18px] shadow-[0_8px_30px_rgba(18,20,23,0.06)] backdrop-blur-[18px] max-[720px]:flex-col max-[720px]:gap-3 max-[720px]:rounded-[24px]">
          <a
            href="#home"
            className="text-[0.95rem] font-medium tracking-[0.03em] text-neutral-900"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Harsh Bhardwaj
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 min-[721px]:gap-[18px]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[0.82rem] tracking-[0.03em] text-[#5d6774] transition-colors duration-200 hover:text-[#121417] after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#0b6e4f] after:transition-transform after:duration-[220ms] hover:after:scale-x-100"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
