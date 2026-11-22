import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://anuvictor.vercel.app"),
  title: "Anuoluwapo Victor | Software Developer",
  description:
    "Software Developer building modern web applications across frontend interfaces, APIs, and backend systems with React, TypeScript, Node.js, and Express.",

  openGraph: {
    title: "Anuoluwapo Victor | Software Developer",
    description:
      "Software Developer building modern web applications across frontend interfaces, APIs, and backend systems.",
    type: "website",
    url: "https://anuvictor.vercel.app",
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
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
