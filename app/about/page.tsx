// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, Zap, MessageCircle, Wallet, Sliders, Eye, Heart, Download, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Варианты анимации для отдельных элементов
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Компонент Bento-карточки с индивидуальной задержкой
const BentoCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.5, 
          ease: "easeOut",
          delay: delay 
        },
      },
    }}
    whileHover={{ y: -4 }}
    className="bg-gray-50 dark:bg-[#151518] p-6 sm:p-8 rounded-3xl 
               border border-black/5 dark:border-white/5
               hover:bg-gray-100 dark:hover:bg-[#1A1A1E] 
               transition-colors duration-300 flex flex-col gap-4
               relative z-10"
  >
    <div className="w-12 h-12 rounded-2xl bg-okak-orange/10 
                    flex items-center justify-center">
      <Icon className="w-6 h-6 text-okak-orange" />
    </div>
    <h3 className="text-xl font-bold text-black dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
      {description}
    </p>
  </motion.div>
);

export default function AboutPage() {
  // Массив карточек для удобного управления задержками
  const bentoCards = [
    { icon: Shield, title: "Приватность — не товар", description: "Никаких логов. Данные проходят сквозь наши серверы, не задерживаясь ни на секунду для записи или сохранения." },
    { icon: MessageCircle, title: "Слушаем, а не угадываем", description: "Наши обновления рождаются из ваших идей, а не из догадок маркетинга. Пишите — мы читаем. И внедряем то, что действительно нужно." },
    { icon: Zap, title: "Стабильность без компромиссов", description: "Протоколы нового поколения маскируют трафик так, что его сложно просто распознать и заблокировать." },
    { icon: Wallet, title: "Доступная свобода", description: "Качество не должно стоить как крыло самолёта. Честная цена без скрытых платежей и десятка неудобных тарифов." },
    { icon: Sliders, title: "Выбор за вами", description: "Любой совместимый клиент. Мы не привязываем вас к своему приложению." },
    { icon: Eye, title: "Прозрачность без приукрас", description: "Никакой юридической простыни. Честность и открытые ответы на ваши вопросы." },
  ];

  return (
    <main className="min-h-screen py-12 sm:py-20 px-6">
      {/* Главный контейнер с анимацией по скроллу */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
        className="max-w-6xl mx-auto"
      >
        {/* --- ГЕРОЙ --- */}
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-14"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
            О нас
          </h1>
          <p className="text-lg sm:text-xl text-okak-orange font-medium tracking-wide">
            Технологии. Принципы. Кот.
          </p>
        </motion.div>

        {/* --- МИССИЯ И ВИДЕНИЕ (Текстовый блок) --- */}
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true, margin: "-150px" }}
          className="relative max-w-3xl mx-auto text-center mb-20 sm:mb-20"
        >
          {/* 🔆 Лёгкое свечение на заднем плане */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] 
                          bg-okak-orange/15 dark:bg-okak-orange/10 
                          blur-[120px] sm:blur-[150px] 
                          rounded-full -z-10 pointer-events-none" />

          <p className="relative z-10 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong className="text-black dark:text-white">Okak VPN родился не в корпоративном кабинете,</strong> а из простого пользовательского неудобства. 
            Мы устали от «бесплатных» решений, где продают внимание рекламе, и от дорогих сервисов, 
            которые перестают работать сразу после оплаты. Нам нужен был просто работающий интернет: быстрый, 
            стабильный и без лишних вопросов.
          </p>
          <p className="relative z-10 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Мы маскируем трафик современными протоколами, чтобы вы могли пользоваться любимыми сервисами 
            так, как задумано. Без компромиссов. Мы верим в интернет, каким его придумали изначально — 
            открытым пространством для идей, а не инструментом слежки. Наша цель — сделать доступ к нему 
            лёгким для каждого.
          </p>
        </motion.div>

        {/* --- ЦЕННОСТИ (Bento Grid) --- */}
        {/* Убрали containerVariants, теперь каждая карточка анимируется индивидуально */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20 sm:mb-28 relative z-10">
          {bentoCards.map((card, index) => (
            <BentoCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={index * 0.1} // Задержка 0.1s между каждой карточкой
            />
          ))}
        </div>

        {/* --- ФИЛОСОФИЯ (Цитата) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
            },
          }}
          className="mb-20 sm:mb-28 relative z-10"
        >
          <div className="bg-gradient-to-br from-okak-orange/10 to-transparent 
                          dark:from-okak-orange/20 dark:to-transparent 
                          rounded-3xl p-8 sm:p-12 border-l-4 border-okak-orange relative overflow-hidden">
            {/* Декоративный элемент */}
            <div className="absolute top-4 right-4 text-6xl text-okak-orange/10 font-serif select-none">❝</div>
            
            <blockquote className="relative z-10">
              <p className="text-xl sm:text-2xl font-medium text-black dark:text-white leading-snug mb-4">
                «Если приходится выбирать между одним злом и другим, мы предпочитаем не выбирать вовсе.»
              </p>

              <p className="text-xl sm:text-2xl font-medium text-black dark:text-white leading-snug mb-4">
                Поэтому мы просто даём вам инструменты, а вы уже сами решаете, куда идти. 
                <span className="text-gray-500 dark:text-gray-400 font-normal"> (А ещё мы обещаем не чинить то, что не сломано — это важно.)</span>
              </p>

              <cite className="text-sm text-gray-500 dark:text-gray-400 not-italic font-medium">
                — Сами угадайте чья цитата
              </cite>
            </blockquote>
          </div>
        </motion.div>

        {/* --- ДОВЕРИЕ И СЕКРЕТНЫЙ ИНГРЕДИЕНТ --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { 
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20 sm:mb-28 relative z-10"
        >
          {/* Блок доверия */}
          <motion.div 
            variants={itemVariants}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-[#151518] p-6 sm:p-8 rounded-3xl 
                      border border-black/5 dark:border-white/5 
                      hover:bg-gray-100 dark:hover:bg-[#1A1A1E] transition-colors duration-300
                      flex flex-col lg:flex-row gap-6 items-start lg:items-center"
          >
            {/* Левая часть: контент */}
            <div className="flex-1 flex flex-col gap-4 min-w-0">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  Без лиц, но с открытой душой
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                  Мы не показываем фотографии команды. Не ради таинственности, а ради безопасности. 
                  Зато мы абсолютно прозрачны в том, как работаем. Доверие строится на коде, делах и честной политике, 
                  а не на улыбающихся фотографиях в костюмах.
                </p>
              </div>
            </div>

            {/* Правая часть: картинка с котом */}
            <div className="flex-shrink-0 self-center lg:self-auto flex justify-center lg:justify-end">
              <Image 
                src="/framed-photo.png" 
                alt="Okak Cat" 
                width={160} 
                height={160} 
                className="w-32 h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          {/* Блок "Секретный ингредиент" */}
          <motion.div 
            variants={itemVariants}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-[#151518] p-6 sm:p-8 rounded-3xl 
                      border border-black/5 dark:border-white/5 
                      hover:bg-gray-100 dark:hover:bg-[#1A1A1E] transition-colors duration-300
                      flex flex-col lg:flex-row gap-6 items-start lg:items-center"
          >
            {/* Левая часть: контент */}
            <div className="flex-1 flex flex-col gap-4 min-w-0">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  Секретного ингредиента нет
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                  Если и есть какая-то магия, то только в том, что мы делаем этот продукт сами, для себя, с душой. 
                  Тестируем на своих устройствах, чиним то, что ломается, и верим, что хороший VPN должен быть невидимым. 
                  В хорошем смысле слова.
                </p>
              </div>
            </div>

            {/* Правая часть: картинка с котом */}
            <div className="flex-shrink-0 self-center lg:self-auto flex justify-center lg:justify-end">
              <Image 
                src="/secret-ingredient.png" 
                alt="Okak Cat" 
                width={160} 
                height={160} 
                className="w-32 h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* --- ПРИЗЫВ К ДЕЙСТВИЮ --- */}
        <motion.div 
          variants={itemVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
            Готовы попробовать?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Подключите все свои устройства к Okak VPN и наслаждайтесь интернетом без границ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 
                         rounded-full bg-okak-orange text-white font-semibold 
                         hover:bg-orange-600 transition-colors active:scale-95 transform"
            >
              <Download className="w-5 h-5" />
              Скачать Okak VPN
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 
                         rounded-full bg-gray-200 dark:bg-white/10 
                         text-black dark:text-white font-semibold 
                         hover:bg-gray-300 dark:hover:bg-white/20 
                         transition-colors active:scale-95 transform"
            >
              <MessageSquare className="w-5 h-5" />
              Написать в поддержку
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}