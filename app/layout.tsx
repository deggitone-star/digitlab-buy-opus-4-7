import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE_URL = "https://degitlab.com";
const SITE_NAME = "Degitlab";
const DEFAULT_TITLE = "Degitlab — сайты, SEO и digital-система для бизнеса";
const DEFAULT_DESCRIPTION =
  "Создание сайтов, SEO, реклама, контент и AI-визуалы для малого и B2B-бизнеса. Аудит сайта и понятные рекомендации для роста заявок.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Degitlab",
  },
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
  alternates: {
    canonical: "/",
  },
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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0B0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
