import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Anuoluwapo Victor | Software Developer",
  description:
    "Software Developer building modern web applications across frontend interfaces, APIs, and backend systems with React, TypeScript, Node.js, and Express.",

  openGraph: {
    title: "Anuoluwapo Victor | Software Developer",
    description:
      "Software Developer building modern web applications across frontend interfaces, APIs, and backend systems.",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Anuoluwapo Victor | Software Developer",
    description:
      "Software Developer building modern web applications across frontend interfaces, APIs, and backend systems.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-background text-foreground`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
