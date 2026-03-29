import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition";
  const variants = {
    primary: "bg-neutral-950 text-white hover:bg-neutral-800",
    secondary:
      "border border-black/10 bg-white/70 text-neutral-900 backdrop-blur-sm hover:bg-white",
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
}

