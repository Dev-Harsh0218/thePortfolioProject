import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Harsh Bhardwaj | Software Engineer",
  description: "Portfolio of Harsh Bhardwaj, a software engineer building thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
