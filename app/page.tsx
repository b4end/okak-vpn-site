"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Gift, ShieldCheck } from "lucide-react";

// Варианты анимации для элементов
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  const buttonBaseClass = "w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-okak-orange text-white hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 font-medium border border-transparent cursor-pointer";
  const miniButtonClass = "w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-okak-orange text-white hover:bg-orange-600 transition-all hover:scale-105 active:scale-90 cursor-pointer";
  const imageIconClass = "w-5 h-5 filter brightness-0 invert";
  const miniImageIconClass = "w-6 h-6 filter brightness-0 invert";
  const cardClass = "bg-gray-50 dark:bg-[#151518] p-8 md:p-10 rounded-[2rem] flex flex-col items-start text-left hover:bg-gray-100 dark:hover:bg-[#1A1A1E] transition-colors duration-300 border border-black/5 dark:border-white/5 relative z-10";

  // Массив кнопок для удобного управления анимациями
  const downloadButtons = [
    { href: "/download/ios", icon: "/apple-logo.svg", label: "iOS / iPadOS" },
    { href: process.env.NEXT_PUBLIC_DL_GOOGLE_PLAY || "#", icon: "/android-logo.svg", label: "Android" },
    { href: process.env.NEXT_PUBLIC_DL_EXE || "#", icon: "/windows-logo.svg", label: "Windows" },
    { href: "/download/macos", icon: "/apple-logo.svg", label: "macOS" },
    { href: process.env.NEXT_PUBLIC_DL_APP_IMAGE || "#", icon: "/linux-logo.svg", label: "Linux" },
    { href: process.env.NEXT_PUBLIC_DL_GOOGLE_PLAY || "#", icon: "/android-logo.svg", label: "Android TV" },
  ];

  // Массив карточек преимуществ
  const featureCards = [
    {
      title: "Абсолютная приватность.",
      description: "Мы не храним, не отслеживаем и не передаем информацию о вашей активности. Ноль логов.",
      tagline: "Privacy First",
    },
    {
      title: "Скорость света. \nПротоколы нового поколения.",
      description: "Используем современные протоколы (VLESS, Reality), которые невозможно замедлить. YouTube в 4K летает.",
      tagline: "Lightning Fast",
    },
    {
      title: "Ваша свобода. Любые клиенты.",
      description: "Используйте любимые клиенты: V2RayTun, Hiddify или Happ. Наш VPN — универсальный ключ.",
      tagline: "Total Control",
      fullWidth: true,
    },
    {
      title: "Одна подписка на все устройства.",
      description: "Забудьте про разные VPN сервисы на каждом устройстве. Подключите телефон, планшет, ноутбук и компьютер к одному аккаунту.",
      tagline: "One for All",
      fullWidth: true,
      showButtons: true,
    },
  ];

  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      
      {/* --- СЕКЦИЯ 1: Главный экран (Заголовок и Кнопки) --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
          }
        }}
        className="flex flex-col items-center pt-6 lg:pt-10 px-6 lg:px-12 w-full max-w-7xl text-center z-20"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] text-black dark:text-white mb-6 max-w-3xl"
        >
          Любимые сервисы всегда на связи. Безопасно и быстро.
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 font-medium max-w-2xl"
        >
          Один аккаунт для всех устройств.
        </motion.p>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.2 }
            }
          }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-fit sm:w-full max-w-3xl mx-auto"
        >
          {downloadButtons.map((btn, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={btn.href} className={buttonBaseClass}>
                <Image src={btn.icon} alt={btn.label} width={20} height={20} className={imageIconClass} />
                {btn.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* --- ГИГАНТСКАЯ СЕКЦИЯ: МЕМНЫЕ ДЖУНГЛИ --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full mt-8 md:mt-24 select-none flex justify-center"
      >
        {/* Оранжевое свечение на фоне */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-okak-orange/20 blur-[120px] -z-10 pointer-events-none"></div>
        <Image 
          src="/meme_jungle.png" 
          alt="Okak VPN Meme Jungle" 
          width={4000} 
          height={1100}
          className="w-full max-w-[1400px] h-[380px] md:h-auto object-cover object-bottom"
          priority
        />
      </motion.div>

      {/* --- СЕКЦИЯ 2: TELEGRAM --- */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="w-full py-12 px-6 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-black dark:text-white">
            Следи за новостями и акциями <br/>в нашем Telegram-канале
          </h2>
          <motion.a 
            href={process.env.NEXT_PUBLIC_TG_CHANNEL_URL || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-[#229ED9] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity rounded-full"></div>
            <div className="relative z-10 bg-[#229ED9] hover:bg-[#1e8db3] text-white text-lg md:text-xl font-bold py-4 px-10 rounded-full flex items-center gap-3 transition-all shadow-xl">
              <Send className="w-6 h-6" />
              Telegram Okak VPN
            </div>
          </motion.a>
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg">
            Новости Okak VPN, розыгрыши подписок, акции и промокоды — все это ждет тебя в нашем канале.
          </p>
        </div>
      </motion.section>

      {/* --- СЕКЦИЯ 3: КАРТОЧКИ ПРЕИМУЩЕСТВ --- */}
      <section className="w-full py-12 px-6 lg:px-12 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className={`${cardClass} ${card.fullWidth ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-okak-orange overflow-hidden relative shadow-md">
                    <Image src="/okak-logo.png" alt="Okak" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white">Okak VPN</h4>
                    <p className="text-xs text-gray-500">{card.tagline}</p>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white leading-tight whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                  {card.description}
                </p>
                
                {card.showButtons && (
                  <motion.div 
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                    className="flex flex-wrap gap-3 mt-6"
                  >
                    <Link href="/download" className={buttonBaseClass}>
                      <ShieldCheck className="w-5 h-5" />
                      Защитить все гаджеты
                    </Link>
                    <div className="flex gap-2">
                      <Link href="/download/ios" className={miniButtonClass}>
                        <Image src="/apple-logo.svg" alt="A" width={24} height={24} className={miniImageIconClass} />
                      </Link>
                      <Link href={process.env.NEXT_PUBLIC_DL_GOOGLE_PLAY || "#"} className={miniButtonClass}>
                        <Image src="/android-logo.svg" alt="A" width={24} height={24} className={miniImageIconClass} />
                      </Link>
                      <Link href={process.env.NEXT_PUBLIC_DL_EXE || "#"} className={miniButtonClass}>
                        <Image src="/windows-logo.svg" alt="W" width={24} height={24} className={miniImageIconClass} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- СЕКЦИЯ 4: ПРОБНЫЙ ПЕРИОД --- */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full py-16 px-6 pb-32"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-8 text-black dark:text-white leading-tight"
          >
            Ваш пробный период начинается <br className="hidden md:block"/>
            прямо сейчас{" "}
            <span className="inline-block bg-[#386118] text-white px-4 py-1 md:px-8 md:py-2 rounded-full whitespace-nowrap mt-2 md:mt-0 align-middle text-2xl md:text-5xl">
              Без привязки карты
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <p className="text-gray-500 max-w-2xl text-lg">
              Наслаждайтесь полным доступом к Okak VPN без ввода данных карты. Просто зарегистрируйтесь в боте и начните пользоваться.
            </p>
            <motion.a 
              href={process.env.NEXT_PUBLIC_TG_BOT_URL || "#"} 
              target="_blank" 
              className={buttonBaseClass}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Gift className="w-5 h-5" />
              Попробуйте бесплатно
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}