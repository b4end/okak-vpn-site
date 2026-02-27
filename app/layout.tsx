import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

// Inter - отличный минималистичный шрифт, похожий на Apple (SF Pro)
const inter = Inter({ subsets:["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Okak VPN",
  description: "Окак, вот это скорость!",
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
          defaultTheme="dark" /* По умолчанию всегда темная тема */
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}