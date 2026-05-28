export const navigation = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/services" },
  { label: "Кейсы", href: "/cases" },
  { label: "Аудит сайта", href: "/audit" },
  { label: "Обо мне", href: "/about" },
  { label: "Контакты", href: "/contact" },
] as const;

export const contacts = {
  telegram: "https://t.me/yourtelegram",
  telegramHandle: "@yourtelegram",
  email: "your@email.com",
} as const;
