// layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anuoluwapo Victor | Developer Portfolio",
  description: "Frontend Developer Portfolio showcasing projects, skills, and contact information.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-b from-black via-gray-900 to-black text-white`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
