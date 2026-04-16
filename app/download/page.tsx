// app/download/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Bot } from "lucide-react";

interface PlatformCardProps {
  icon: string;
  label: string;
  href: string;
  external?: boolean;
}

const PlatformCard = ({ icon, label, href, external = false }: PlatformCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
  >
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 p-6 rounded-3xl bg-gray-50 dark:bg-[#151518] 
                 hover:bg-gray-100 dark:hover:bg-[#1A1A1E] 
                 border border-black/5 dark:border-white/5
                 transition-colors duration-300 group"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-okak-orange/10 
                      flex items-center justify-center group-hover:bg-okak-orange/20 
                      transition-colors">
        <div
          className="w-9 h-9 bg-okak-orange"
          style={{
            maskImage: `url(${icon})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url(${icon})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
          }}
        />
      </div>
      <span className="font-semibold text-lg text-black dark:text-white">
        {label}
      </span>
    </Link>
  </motion.div>
);

export default function DownloadPage() {
  const platforms: PlatformCardProps[] = [
    {
      icon: "/apple-logo.svg",
      label: "iOS / iPadOS",
      href: "/download/ios",
    },
    {
      icon: "/android-logo.svg",
      label: "Android",
      href: process.env.NEXT_PUBLIC_DL_GOOGLE_PLAY || "#",
      external: true,
    },
    {
      icon: "/windows-logo.svg",
      label: "Windows",
      href: process.env.NEXT_PUBLIC_DL_EXE || "#",
      external: true,
    },
    {
      icon: "/apple-logo.svg",
      label: "macOS",
      href: "/download/macos",
    },
    {
      icon: "/linux-logo.svg",
      label: "Linux",
      href: process.env.NEXT_PUBLIC_DL_APP_IMAGE || "#",
      external: true,
    },
    {
      icon: "/android-logo.svg",
      label: "Android TV",
      href: process.env.NEXT_PUBLIC_DL_GOOGLE_PLAY || "#",
      external: true,
    },
  ];

  return (
    <main className="min-h-screen py-12 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Скачать Okak VPN
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Выберите вашу платформу и откройте интернет без границ и потери скорости.
          </p>
        </motion.div>

        {/* Сетка платформ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16"
        >
          {platforms.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </motion.div>

        {/* Инструкция */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-okak-orange/10 to-okak-orange/5 
                     dark:from-okak-orange/20 dark:to-okak-orange/10 
                     rounded-3xl p-6 sm:p-8 border border-okak-orange/20"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-okak-orange 
                            flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">
                Как начать пользоваться
              </h2>
              <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-okak-orange 
                                   text-white text-sm font-bold flex items-center justify-center">
                    1
                  </span>
                  <span>Скачайте клиент для вашего устройства</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-okak-orange 
                                   text-white text-sm font-bold flex items-center justify-center">
                    2
                  </span>
                  <span>Перейдите в нашего Telegram-бота</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-okak-orange 
                                   text-white text-sm font-bold flex items-center justify-center">
                    3
                  </span>
                  <span>Добавьте подписку и наслаждайтесь!</span>
                </li>
              </ol>
              
              <Link
                href={process.env.NEXT_PUBLIC_TG_BOT_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full 
                           bg-okak-orange text-white font-semibold 
                           hover:bg-orange-600 transition-colors
                           active:scale-95 transform"
              >
                <Bot className="w-5 h-5" />
                Перейти в бота
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}