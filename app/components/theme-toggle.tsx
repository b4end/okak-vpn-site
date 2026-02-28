"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Избегаем ошибки гидратации (ждём загрузки на клиенте)
  React.useEffect(() => setMounted(true),[]);
  if (!mounted) return <div className="w-10 h-10" />; // пустой квадрат пока грузится

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
      aria-label="Переключить тему"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
      )}
    </button>
  );
}