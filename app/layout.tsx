import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Harsh Bhardwaj | Software Engineer",
    template: "%s | Harsh Bhardwaj",
  },
  description:
    "Portfolio of Harsh Bhardwaj, a software engineer building thoughtful digital experiences.",
  openGraph: {
    title: "Harsh Bhardwaj | Software Engineer",
    description:
      "Portfolio of Harsh Bhardwaj, a software engineer building thoughtful digital experiences.",
    url: "https://yourdomain.com",
    siteName: "Harsh Bhardwaj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Bhardwaj | Software Engineer",
    description:
      "Portfolio of Harsh Bhardwaj, a software engineer building thoughtful digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
