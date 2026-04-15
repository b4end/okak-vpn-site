import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Колонка 1: Логотип и QR */}
          <div className="flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20">
                <Image src="/okak-logo.png" alt="Logo" fill className="object-cover" />
              </div>
              <span className="font-bold text-xl">Okak VPN</span>
            </Link>
            
            {/* Имитация QR кода (или вставь картинку qr.png если есть) */}
            <div className="flex items-center gap-4">
               <div className="w-24 h-24 bg-white rounded-lg p-1">
                 {/* Заглушка под QR код */}
                 <div className="w-full h-full border-2 border-dashed border-black rounded flex items-center justify-center text-black text-xs text-center font-bold">
                   QR Code
                 </div>
               </div>
               <div className="text-sm text-gray-400 max-w-[120px]">
                 Сканируй, чтобы скачать на телефон
               </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-2">
              © 2026 Okak VPN. <br/>Все права защищены.
            </p>
          </div>

          {/* Колонка 2: Скачать */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl mb-2">Скачать</h3>
            <Link href="/download/ios" className="text-gray-400 hover:text-okak-orange transition-colors">iOS / iPadOS</Link>
            <Link href="https://play.google.com/store/apps/details?id=com.v2raytun.android" className="text-gray-400 hover:text-okak-orange transition-colors">Android</Link>
            <Link href="https://storage.v2raytun.com/v2RayTun_Setup.exe" className="text-gray-400 hover:text-okak-orange transition-colors">Windows</Link>
            <Link href="/download/macos" className="text-gray-400 hover:text-okak-orange transition-colors">macOS</Link>
            <Link href="https://github.com/hiddify/hiddify-app/releases/download/v4.1.1/Hiddify-Linux-x64-AppImage.AppImage" className="text-gray-400 hover:text-okak-orange transition-colors">Linux</Link>
          </div>

          {/* Колонка 3: О нас */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl mb-2">О нас</h3>
            <Link href="/about" className="text-gray-400 hover:text-okak-orange transition-colors">Политика конфиденциальности</Link>
            <Link href="/about" className="text-gray-400 hover:text-okak-orange transition-colors">Условия использования</Link>
          </div>

          {/* Колонка 4: Поддержка */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-xl">Поддержка</h3>
            <Link href={process.env.NEXT_PUBLIC_TG_CHANNEL_URL || "#"} className="text-gray-400 hover:text-okak-orange transition-colors">Telegram Канал</Link>
            <Link href="/support" className="text-gray-400 hover:text-okak-orange transition-colors">Почта</Link>
            <Link href="/support" className="text-gray-400 hover:text-okak-orange transition-colors">Инструкции</Link>
          </div>

        </div>
      </div>
    </footer>
  );
} 