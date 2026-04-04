import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[22px] border border-black/[0.08] bg-white/[0.76] shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] transition-[transform,box-shadow,border-color] duration-[220ms] ease-out hover:-translate-y-1 hover:border-[rgba(11,110,79,0.18)] hover:shadow-[0_28px_64px_rgba(18,20,23,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}
