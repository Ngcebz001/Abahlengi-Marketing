"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-sage/60 bg-white/70 text-forest shadow-sm backdrop-blur transition hover:border-forest/80 hover:text-forest dark:border-sage/40 dark:bg-forest/50 dark:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2",
        className,
      )}
    >
      {mounted && currentTheme === "dark" ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MoonStar className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
