import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

