"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const pathname = usePathname();

  // Общий класс для анимации кнопок в шапке
  const navItemBase = "px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 font-medium text-sm";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Логотип с анимацией */}
        <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95">
          <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-sm border border-black/5 dark:border-white/10">
            <Image 
              src="/okak-logo.png" 
              alt="Okak Logo" 
              fill 
              className="object-cover"
              sizes="44px"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-black dark:text-white">
            Okak VPN
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
            
            <Link 
              href="/download" 
              className={`${navItemBase} ${
                pathname === "/download" 
                  ? "bg-okak-orange text-white shadow-lg shadow-okak-orange/20" 
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              Скачать
            </Link>
            
            <Link 
              href="/about" 
              className={`${navItemBase} ${
                pathname === "/about" 
                  ? "bg-okak-orange text-white shadow-lg shadow-okak-orange/20" 
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              О нас
            </Link>
            
            <Link 
              href="/support" 
              className={`${navItemBase} ${
                pathname === "/support" 
                  ? "bg-okak-orange text-white shadow-lg shadow-okak-orange/20" 
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              Помощь и поддержка
            </Link>
          </nav>
          
          <div className="w-px h-6 bg-gray-200 dark:bg-white/10 hidden md:block mx-2"></div>
          
          {/* Переключатель темы тоже теперь скейлится */}
          <div className="transition-transform hover:scale-110 active:scale-90">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}