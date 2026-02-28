// Файл: app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-6">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        О нас
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Здесь будет информация о команде и философии Okak VPN.
      </p>
    </main>
  );
}