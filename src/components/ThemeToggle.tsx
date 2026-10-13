import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.add("theme-transition");
    root.dataset.theme = nextTheme;
    setTheme(nextTheme);

    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // Keep theme switching functional when storage is unavailable.
    }

    window.setTimeout(() => root.classList.remove("theme-transition"), 400);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface-subtle text-ink-secondary transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm active:scale-95"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.8} />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" strokeWidth={1.8} />
      )}
    </button>
  );
}
