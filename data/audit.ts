import {
  Gauge,
  Smartphone,
  Search,
  Sparkles,
  ClipboardList,
  ShieldCheck,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export type AuditItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const auditChecklist: AuditItem[] = [
  {
    title: "Скорость загрузки",
    description:
      "Core Web Vitals, размер страниц, изображения, скрипты — что замедляет сайт.",
    icon: Gauge,
  },
  {
    title: "Мобильная версия",
    description:
      "Как сайт ведёт себя на телефоне: верстка, читаемость, удобство форм.",
    icon: Smartphone,
  },
  {
    title: "SEO-структура",
    description:
      "Мета-теги, заголовки, посадочные страницы, техническая оптимизация.",
    icon: Search,
  },
  {
    title: "Оффер и первый экран",
    description:
      "Понятно ли с первых секунд, что вы предлагаете и кому это нужно.",
    icon: Sparkles,
  },
  {
    title: "Формы заявок",
    description:
      "Удобство, валидация, количество полей, путь от интереса до заявки.",
    icon: ClipboardList,
  },
  {
    title: "Доверие",
    description:
      "Кейсы, отзывы, контакты, реквизиты, гарантии — есть ли причины верить.",
    icon: ShieldCheck,
  },
  {
    title: "Аналитика",
    description:
      "Подключена ли аналитика, настроены ли цели и события, что отслеживается.",
    icon: LineChart,
  },
];

export const auditResults = [
  "Список технических проблем с приоритетом",
  "Рекомендации по SEO-структуре",
  "Замечания по офферу и первому экрану",
  "Проверка форм и пути к заявке",
  "Рекомендации перед запуском рекламы",
  "План доработок: что исправить в первую очередь",
];

export const auditAudience = [
  "Бизнес, у которого сайт есть, но заявок мало",
  "Перед запуском платной рекламы",
  "Перед редизайном или переездом",
  "Когда непонятно, на что тратить бюджет в первую очередь",
];
