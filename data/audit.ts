import {
  Layout,
  Sparkles,
  Network,
  Compass,
  FileText,
  Search,
  Smartphone,
  Gauge,
  ClipboardList,
  MousePointerClick,
  ShieldCheck,
  LineChart,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export type AuditItem = { title: string; icon: LucideIcon };

// Что проверяется (по ТЗ)
export const auditChecklist: AuditItem[] = [
  { title: "Первый экран", icon: Layout },
  { title: "Оффер", icon: Sparkles },
  { title: "Структура", icon: Network },
  { title: "Навигация", icon: Compass },
  { title: "Страницы услуг", icon: FileText },
  { title: "SEO", icon: Search },
  { title: "Мобильная версия", icon: Smartphone },
  { title: "Скорость", icon: Gauge },
  { title: "Формы", icon: ClipboardList },
  { title: "Кнопки", icon: MousePointerClick },
  { title: "Блоки доверия", icon: ShieldCheck },
  { title: "Аналитика", icon: LineChart },
  { title: "Готовность к рекламе", icon: Megaphone },
];

// Что получает клиент
export const auditResults = [
  "Список проблем",
  "Приоритеты доработок",
  "Рекомендации по первому экрану",
  "Идеи страниц под SEO",
  "Проверку готовности к рекламе",
  "Понятный план действий",
];
