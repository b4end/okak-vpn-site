// app/support/page.tsx
"use client";

import { motion } from "framer-motion";
import { Send, Mail, BookOpen, ChevronRight, HelpCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Анимации
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Компонент кнопки связи
const SupportButton = ({ 
  icon: Icon, 
  label, 
  description, 
  href, 
  external = false,
  delay = 0
}: { 
  icon: React.ElementType; 
  label: string; 
  description: string; 
  href: string; 
  external?: boolean;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between w-full p-4 sm:p-5 
                 bg-white dark:bg-[#1A1A1E] rounded-2xl 
                 border border-gray-200 dark:border-white/10
                 hover:border-okak-orange/50 dark:hover:border-okak-orange/50
                 hover:shadow-lg hover:shadow-okak-orange/5
                 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-okak-orange/10 
                        flex items-center justify-center group-hover:bg-okak-orange 
                        transition-colors duration-300">
          <Icon className="w-5 h-5 text-okak-orange group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="text-left">
          <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-okak-orange transition-colors">
            {label}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-okak-orange group-hover:translate-x-1 transition-all duration-300" />
    </Link>
  </motion.div>
);

export default function SupportPage() {
  const botUrl = process.env.NEXT_PUBLIC_TG_BOT_URL || "#";
  const emailUrl = process.env.NEXT_PUBLIC_SUPPORT_MAIL || "#";

  return (
    <main className="min-h-screen py-12 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* --- ЗАГОЛОВОК --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Помощь и поддержка
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Возникли вопросы? Мы на связи и готовы помочь разобраться с подключением, подпиской или скоростью.
          </p>
        </motion.div>

        {/* --- БОЛЬШАЯ КАРТОЧКА (Контакты) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gray-50 dark:bg-[#151518] p-6 sm:p-10 rounded-[2.5rem] 
                     border border-black/5 dark:border-white/5 
                     relative overflow-hidden"
        >
          <div className="flex flex-col xl:flex-row items-center gap-10 relative z-10">
            
            {/* Левая часть: Текст и кнопки */}
            <div className="flex-1 w-full flex flex-col gap-6">
              <div className="text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
                  Как мы можем помочь?
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Выберите удобный способ связи или посмотрите инструкции.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {/* Кнопка 1: Telegram */}
                <SupportButton 
                  icon={Send}
                  label="Написать в Telegram-бот"
                  description="Самый быстрый способ. Ответим в течение 5 минут."
                  href={botUrl}
                  external
                  delay={0.1}
                />
                
                {/* Кнопка 2: Email */}
                <SupportButton 
                  icon={Mail}
                  label="Написать на почту"
                  description="Для детальных вопросов и предложений."
                  href={emailUrl}
                  delay={0.2}
                />

                {/* Кнопка 3: Инструкции (якорь вниз) */}
                <SupportButton 
                  icon={BookOpen}
                  label="Инструкции и FAQ"
                  description="Частые вопросы и гайды по настройке."
                  href="#faq"
                  delay={0.3}
                />
              </div>
            </div>

            {/* Правая часть: Картинка обезьяны */}
            <div className="flex-shrink-0 relative w-full max-w-[540px] lg:max-w-[540px]">
              {/* Свечение за картинкой */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                              w-64 h-64 sm:w-80 sm:h-80 
                              bg-okak-orange/20 blur-[80px] 
                              rounded-full pointer-events-none" />
              
              <Image 
                src="/monkey.png" 
                alt="Monkey Support Agent" 
                width={500} 
                height={500} 
                className="w-full h-auto relative z-10 drop-shadow-3xl"
              />
            </div>

          </div>
        </motion.div>

        {/* --- БЛОК ИНСТРУКЦИЙ (FAQ) --- */}
        <div id="faq" className="mt-20 sm:mt-32 scroll-mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-okak-orange/10 text-okak-orange text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              База знаний
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
              Частые вопросы
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Карточка вопроса 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1A1A1E] p-6 rounded-3xl border border-black/5 dark:border-white/5"
            >
              <h3 className="text-lg font-bold text-black dark:text-white mb-2">Как добавить подписку?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Перейдите в нашего бота, нажмите <strong>«Подключиться»</strong>, затем <strong>«Копировать ссылку»</strong>. Перейдите в приложение, нажмите на <strong>«+»</strong> справа сверху, и <strong>«Импорт из буфера обмена»</strong>.
              </p>
            </motion.div>

            {/* Карточка вопроса 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1A1A1E] p-6 rounded-3xl border border-black/5 dark:border-white/5"
            >
              <h3 className="text-lg font-bold text-black dark:text-white mb-2">Почему не работает интернет?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Попробуйте сменить сервер в настройках или перезапустить клиент. Если проблема не исчезла — напишите в поддержку (см. выше).
              </p>
            </motion.div>

            {/* Карточка вопроса 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1A1A1E] p-6 rounded-3xl border border-black/5 dark:border-white/5 md:col-span-2"
            >
              <h3 className="text-lg font-bold text-black dark:text-white mb-2">Как использовать на всех устройствах?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Для использования одной подписки на нескольких устройствах установите клиент на каждое из устройств и добавьте ссылку на подписку. Для максимальной рекомендуем не использовать vpn одновременно на множестве устройств, подписка поддерживает 100 МБит/с, эта скорость распределяется на все одновременные подключения.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </main>
  );
}