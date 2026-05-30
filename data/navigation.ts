export const navigation = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/services" },
  { label: "Лендинги", href: "/landings" },
  { label: "Аудит", href: "/audit" },
  { label: "Примеры", href: "/cases" },
  { label: "Контакты", href: "/contact" },
] as const;

export const contacts = {
  telegram: "https://t.me/yourtelegram",
  telegramHandle: "@yourtelegram",
  email: "your@email.com",
} as const;
