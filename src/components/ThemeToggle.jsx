import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={` text-sm flex items-center
                   text-gray-900 border-gray-300
                   dark:text-gray-100 dark:border-neutral-700 ${className}`}
      aria-label="Toggle dark mode"
    >
      {isDark ? <Moon size={22} /> : <Sun size={22} />}
    </button>
  );
}
