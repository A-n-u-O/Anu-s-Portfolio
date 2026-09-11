"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] w-full">
      <div
        className="h-[3px] bg-accent transition-all"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}