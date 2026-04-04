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
    "inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(18,20,23,0.08)]";
  const variants = {
    primary:
      "border-transparent bg-[linear-gradient(135deg,#0b6e4f_0%,#093f30_100%)] text-[#f8faf8]",
    secondary:
      "border-black/[0.08] bg-white/[0.9] text-[#121417]",
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
}
