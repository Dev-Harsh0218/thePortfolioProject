import { Container } from "./contianer"

const navItems = [
    {label: "Work", href: "#work"},
    {label: "Projects", href: "#projects"},
    {label: "About", href: "#about"},
    {label: "Contact", href: "#contact"},
]

export function Header() {
    return (
        <header className="sticky top-4 z-50 py-4">
            <Container>
                <div className="flex items-center justify-between rounded-full border border-black/10 bg-white/70 px-5 py-3 backdrop-blur-xl">
                <a
                    href="#home"
                    className="text-sm font-medium tracking-tight text-neutral-900">
                    Harsh Bhardwaj
                    </a>

                    <nav className="flex items-center gap-5">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="text-sm text-neutral-600 transition hover:text-neutral-950">
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    )
}
