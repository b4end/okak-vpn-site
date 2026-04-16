import Image from "next/image";
import Link from "next/link";
import { Send, Gift, ShieldCheck } from "lucide-react";

export default function Home() {
  const buttonBaseClass = "w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 font-medium border border-transparent cursor-pointer";
  const imageIconClass = "w-5 h-5 invert dark:invert-0";
  const miniButtonClass = "w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all hover:scale-105 active:scale-90 cursor-pointer";
  const miniImageIconClass = "w-6 h-6 invert dark:invert-0";
  const cardClass = "bg-gray-50 dark:bg-[#151518] p-8 md:p-10 rounded-[2rem] flex flex-col items-start text-left hover:bg-gray-100 dark:hover:bg-[#1A1A1E] transition-colors duration-300 border border-black/5 dark:border-white/5";

  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      
      {/* --- СЕКЦИЯ 1: Главный экран (Заголовок и Кнопки) --- */}
      <div className="flex flex-col items-center pt-6 lg:pt-10 px-6 lg:px-12 w-full max-w-7xl text-center z-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] text-black dark:text-white mb-6 max-w-3xl">
          Любимые сервисы всегда на связи. Безопасно и быстро.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 font-medium max-w-2xl">
          Один аккаунт для всех устройств.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-fit sm:w-full max-w-3xl mx-auto">
          <Link href="/download/ios" className={buttonBaseClass}>
            <Image src="/apple-logo.svg" alt="Apple" width={20} height={20} className={imageIconClass} />
            iOS / iPadOS
          </Link>
          <Link href={process.env.NEXT_PUBLIC_DL_GOOGLE_PLAY || "#"} className={buttonBaseClass}>
            <Image src="/android-logo.svg" alt="Android" width={20} height={20} className={imageIconClass} />
            Android
          </Link>
          <Link href={process.env.NEXT_PUBLIC_DL_EXE || "#"} className={buttonBaseClass}>
            <Image src="/windows-logo.svg" alt="Windows" width={20} height={20} className={imageIconClass} />
            Windows
          </Link>
          <Link href="/download/macos" className={buttonBaseClass}>
            <Image src="/apple-logo.svg" alt="macOS" width={20} height={20} className={imageIconClass} />
            macOS
          </Link>
          <Link href={process.env.NEXT_PUBLIC_DL_APP_IMAGE || "#"} className={buttonBaseClass}>
            <Image src="/linux-logo.svg" alt="Linux" width={20} height={20} className={imageIconClass} />
            Linux
          </Link>
          <Link href={process.env.NEXT_PUBLIC_DL_GOOGLE_PLAY || "#"} className={buttonBaseClass}>
            <Image src="/android-logo.svg" alt="Android" width={20} height={20} className={imageIconClass} />
            Android TV
          </Link>
        </div>
      </div>

      {/* --- ГИГАНТСКАЯ СЕКЦИЯ: МЕМНЫЕ ДЖУНГЛИ --- */}
      <div className="relative w-full mt-8 md:mt-24 select-none flex justify-center">
        
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
      </div>

      {/* --- СЕКЦИЯ 2: TELEGRAM --- */}
      <section className="w-full py-12 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-black dark:text-white">
            Следи за новостями и акциями <br/>в нашем Telegram-канале
          </h2>
          <a href={process.env.NEXT_PUBLIC_TG_CHANNEL_URL || "#"} target="_blank" rel="noopener noreferrer" className="inline-block relative group">
            <div className="absolute inset-0 bg-[#229ED9] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity rounded-full"></div>
            <div className="relative z-10 bg-[#229ED9] hover:bg-[#1e8db3] text-white text-lg md:text-xl font-bold py-4 px-10 rounded-full flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl">
              <Send className="w-6 h-6" />
              Telegram Okak VPN
            </div>
          </a>
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg">
            Новости Okak VPN, розыгрыши подписок, акции и промокоды — все это ждет тебя в нашем канале.
          </p>
        </div>
      </section>

      {/* --- СЕКЦИЯ 3: КАРТОЧКИ ПРЕИМУЩЕСТВ --- */}
      <section className="w-full py-12 px-6 lg:px-12 bg-white dark:bg-[#0B0B0F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={cardClass}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-okak-orange overflow-hidden relative shadow-md">
                   <Image src="/okak-logo.png" alt="Okak" fill className="object-cover" />
                </div>
                <div><h4 className="font-bold text-black dark:text-white">Okak VPN</h4><p className="text-xs text-gray-500">Privacy First</p></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white leading-tight">Абсолютная приватность.</h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">Мы не храним, не отслеживаем и не передаем информацию о вашей активности. Ноль логов.</p>
            </div>

            <div className={cardClass}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-okak-orange overflow-hidden relative shadow-md">
                   <Image src="/okak-logo.png" alt="Okak" fill className="object-cover" />
                </div>
                <div><h4 className="font-bold text-black dark:text-white">Okak VPN</h4><p className="text-xs text-gray-500">Lightning Fast</p></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white leading-tight">Скорость света. <br/>Протоколы нового поколения.</h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">Используем современные протоколы (VLESS, Reality), которые невозможно замедлить. YouTube в 4K летает.</p>
            </div>

            <div className={`${cardClass} md:col-span-2`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-okak-orange overflow-hidden relative shadow-md">
                   <Image src="/okak-logo.png" alt="Okak" fill className="object-cover" />
                </div>
                <div><h4 className="font-bold text-black dark:text-white">Okak VPN</h4><p className="text-xs text-gray-500">Total Control</p></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white leading-tight">Ваша свобода. Любые клиенты.</h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">Используйте любимые клиенты: V2RayTun, Hiddify или Happ. Наш VPN — универсальный ключ.</p>
            </div>

            <div className={`${cardClass} md:col-span-2`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-okak-orange overflow-hidden relative shadow-md">
                   <Image src="/okak-logo.png" alt="Okak" fill className="object-cover" />
                </div>
                <div><h4 className="font-bold text-black dark:text-white">Okak VPN</h4><p className="text-xs text-gray-500">One for All</p></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white leading-tight">Одна подписка на все устройства.</h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mb-8">Забудьте про разные VPN сервисы на каждом устройстве. Подключите телефон, планшет, ноутбук и компьютер к одному аккаунту.</p>
              
              <div className="flex flex-wrap gap-3">
                <Link href="/download" className={buttonBaseClass}>
                  <ShieldCheck className="w-5 h-5" />
                  Защитить все гаджеты
                </Link>
                <div className="flex gap-2">
                  <Link href="/download/ios" className={miniButtonClass}><Image src="/apple-logo.svg" alt="A" width={24} height={24} className={miniImageIconClass} /></Link>
                  <Link href={process.env.NEXT_PUBLIC_DL_GOOGLE_PLAY || "#"} className={miniButtonClass}><Image src="/android-logo.svg" alt="A" width={24} height={24} className={miniImageIconClass} /></Link>
                  <Link href={process.env.NEXT_PUBLIC_DL_EXE || "#"} className={miniButtonClass}><Image src="/windows-logo.svg" alt="W" width={24} height={24} className={miniImageIconClass} /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- СЕКЦИЯ 4: ПРОБНЫЙ ПЕРИОД --- */}
      <section className="w-full py-16 px-6 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black dark:text-white leading-tight">
            Ваш пробный период начинается <br className="hidden md:block"/>
            прямо сейчас{" "}
            <span className="inline-block bg-[#386118] text-white px-4 py-1 md:px-8 md:py-2 rounded-full whitespace-nowrap mt-2 md:mt-0 align-middle text-2xl md:text-5xl">
              Без привязки карты
            </span>
          </h2>
          <div className="flex flex-col items-center gap-8">
            <p className="text-gray-500 max-w-2xl text-lg">
              Наслаждайтесь полным доступом к Okak VPN без ввода данных карты. Просто зарегистрируйтесь в боте и начните пользоваться.
            </p>
            <a 
              href={process.env.NEXT_PUBLIC_TG_BOT_URL || "#"} 
              target="_blank" 
              className={buttonBaseClass}
            >
              <Gift className="w-5 h-5" />Попробуйте бесплатно
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}