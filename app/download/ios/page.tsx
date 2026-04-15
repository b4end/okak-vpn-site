"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Apple, Globe, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

export default function IOSDownloadPage() {
  const cardClass = "bg-gray-50 dark:bg-[#151518] p-8 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5 w-full max-w-3xl flex flex-col items-center text-center shadow-xl shadow-black/5";
  const buttonBase = "w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 font-bold text-lg cursor-pointer";
  const imageIconClass = "w-7 h-7 invert dark:invert-0";

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-6">
      
      {/* Кнопка "Назад" */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8 self-start lg:self-center lg:w-full lg:max-w-3xl"
      >
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors group">
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Назад на главную
        </Link>
      </motion.div>

      {/* Основная карточка Bento */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cardClass}
      >
        {/* Иконка приложения */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-[#1A1A1E]">
          <Image 
            src="/okak-logo.png" 
            alt="Okak VPN Logo" 
            fill 
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-black dark:text-white">
          Скачать для <span className="text-okak-orange">iOS / iPadOS</span>
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
          Приложение может не отображаться в AppStore, если у вас установлен российский регион.
        </p>

        {/* Блок кнопок */}
        <div className="flex flex-col gap-4 w-full">
          <a 
            href="https://apps.apple.com/us/app/v2raytun/id6476628951" 
            className={`${buttonBase} bg-black text-white dark:bg-white dark:text-black shadow-lg`}
          >
            <Image src="/apple-logo.svg" alt="Apple" width={40} height={40} className={imageIconClass} />
            У меня не РФ регион, скачать
          </a>

          <a 
            href="https://vc.ru/services/1173441-kak-pomenyat-region-na-aifone-izmenit-stranu-v-app-store" 
            className={`${buttonBase} bg-transparent border-2 border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5`}
          >
            <Settings2 className="w-6 h-6" />
            Как сменить регион в AppStore
          </a>
          
          <Link 
            href="/support"
            className="mt-4 text-okak-orange font-medium hover:underline transition-all"
          >
            Нужна помощь с установкой?
          </Link>
        </div>
      </motion.div>

      {/* Фоновое свечение, как на главной */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-okak-orange/10 blur-[120px] -z-10 pointer-events-none"></div>
    </main>
  );
}