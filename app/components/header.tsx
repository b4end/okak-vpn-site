"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();
  const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Блокируем скролл страницы, когда открыто мобильное меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Массив ссылок, чтобы не дублировать код для десктопа и мобилки
  const navLinks =[
    { href: "/download", label: "Скачать" },
    { href: "/about", label: "О нас" },
    { href: "/support", label: "Помощь и поддержка" },
  ];

  return (
    // backdrop-blur для красивого размытия фона под шапкой
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#0B0B0F]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        
        {/* Логотип (при клике на него закрываем мобильное меню, если оно открыто) */}
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95"
        >
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
          
          {/* --- ДЕСКТОПНОЕ МЕНЮ --- */}
          <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 ${
                    isActive 
                      ? "bg-okak-orange text-white shadow-lg shadow-okak-orange/20" 
                      : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="w-px h-6 bg-gray-200 dark:bg-white/10 hidden md:block mx-2"></div>
          
          <div className="flex items-center gap-3">
            <div className="transition-transform hover:scale-110 active:scale-90">
              <ThemeToggle />
            </div>

            {/* --- КНОПКА ГАМБУРГЕРА (ТОЛЬКО НА МОБИЛКЕ) --- */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 text-black dark:text-white transition-transform hover:scale-105 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* --- МОБИЛЬНОЕ МЕНЮ --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 top-0 z-40 bg-white dark:bg-[#0B0B0F] pt-24 px-6 h-[100dvh] flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-bold py-4 px-4 rounded-2xl transition-all active:scale-95 ${
                      isActive 
                        ? "bg-okak-orange/10 text-okak-orange" 
                        : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto mb-10 flex flex-col gap-6 px-4">
               <p className="text-center text-sm text-gray-500">
                 © 2026 Okak VPN
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}