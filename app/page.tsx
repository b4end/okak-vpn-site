import { ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Оранжевый как аккуратный акцент (иконка с легким свечением) */}
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-okak-orange/10 ring-1 ring-okak-orange/20">
            <ShieldCheck className="w-10 h-10 text-okak-orange" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Okak VPN
        </h1>
        
        <p className="text-gray-500 dark:text-gray-400">
          Базовая архитектура готова. Темная тема подключена.
        </p>

        {/* Временная тестовая кнопка для проверки акцентного цвета */}
        <button className="px-8 py-3 mt-4 rounded-full bg-okak-orange text-white font-medium hover:bg-[#e67600] transition-colors shadow-lg shadow-okak-orange/20">
          Тестовая кнопка
        </button>
        
      </div>
    </main>
  );
}