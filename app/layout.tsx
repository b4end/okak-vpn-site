import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Footer } from "./components/footer"; // <--- Импортируем Footer

const inter = Inter({ subsets:["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Okak VPN | Включил и понял",
  description: "Один аккаунт для всей семьи. Никаких логов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-okak-orange selection:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="pt-20 min-h-screen">
            {children}
          </div>
          <Footer /> {/* <--- Вставляем Footer здесь, чтобы он был на ВСЕХ страницах */}
        </ThemeProvider>
      </body>
    </html>
  );
}