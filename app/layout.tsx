import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Inter заменяет Geist (Geist в next/font/google недоступен в Next 14.2.5).
// Inter визуально близок к Geist — оба построены на одних принципах.
// В CSS-стеке (см. globals.css) сначала идёт Geist (если установлен у пользователя),
// затем Inter как полноценный fallback. На Vercel сборка скачает Inter и положит локально.
const interSans = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans-loaded",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-loaded",
  weight: ["400", "500"],
});

const SITE_URL = "https://degitlab.com";
const SITE_NAME = "Degitlab";
const DEFAULT_TITLE = "Degitlab — сайты, SEO и digital-система для бизнеса";
const DEFAULT_DESCRIPTION =
  "Создание сайтов, SEO, реклама, контент и AI-визуалы для малого и B2B-бизнеса. Аудит сайта и понятные рекомендации для роста заявок.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s | Degitlab" },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Degitlab" }],
  keywords: [
    "разработка сайтов",
    "SEO",
    "Next.js",
    "B2B сайты",
    "digital маркетинг",
    "аудит сайта",
    "контент",
    "SMM",
    "AI визуалы",
    "автоматизация",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#07070C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${interSans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
