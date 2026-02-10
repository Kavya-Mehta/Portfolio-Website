import { useState, useEffect } from "react";

const SECTIONS = [
  "hero",
  "about",
  "education",
  "experience",
  "projects",
  "skills",
  "contact",
];

export function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const marker = 120;
      let current = "hero";

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom > marker) {
          current = id;
          break;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = "contact";

      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}
