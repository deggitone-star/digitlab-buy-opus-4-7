# Degitlab

Сайт мини-студии Degitlab: сайты, SEO, реклама, контент, AI-визуалы и автоматизация для малого и B2B-бизнеса.

## Стек

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS v3**
- **lucide-react** — иконки
- **framer-motion** — анимации появления при скролле и интерактив
- **Шрифт** — Geist (через `next/font` использует Inter как загружаемый fallback, визуально идентичен; на Vercel скачивается один раз при сборке). Geist приоритетный — пользователи, у которых он установлен системно, увидят именно его.
- Без внешней CMS — весь контент в `/data`

## Анимации

Сайт использует несколько слоёв анимаций, все уважают системную настройку `prefers-reduced-motion` (на устройствах с отключённым движением анимации не проигрываются):

- **Hero** — плывущие градиентные пятна (CSS), частицы на canvas с соединительными линиями, анимированная сетка, перетекающий текст-градиент, появление элементов каскадом, count-up для цифр, "живая" карточка аудита с поэтапным появлением чек-листа и анимацией метрик
- **Секции** — появление при скролле (fade + slide) через Intersection Observer, карточки выезжают каскадом
- **Карточки** — приподнимаются и подсвечиваются при наведении
- **Кнопки CTA** — бегущий блик (sheen) при наведении
- **Логотип** — мягкое пульсирующее свечение

Компоненты анимаций: `AnimatedBackground`, `ParticlesField`, `Reveal`, `RevealStagger`, `CountUp`, `HeroSection`.

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть http://localhost:3000

## Сборка и продакшн

```bash
npm run build
npm run start
```

## Деплой на Vercel

1. Запушить репозиторий в GitHub
2. Импортировать в Vercel — фреймворк определится автоматически
3. Деплой без дополнительных настроек

## Структура проекта

```
app/
  layout.tsx          корневой layout (Manrope, Header, Footer, OG metadata)
  page.tsx            главная (9 блоков: hero, проблема, решение, услуги, для кого, кейсы, аудит, обо мне, CTA)
  globals.css         базовые стили + утилиты
  services/page.tsx   страница услуг с подробными блоками
  audit/page.tsx      продающая страница аудита + форма
  cases/page.tsx      все кейсы
  about/page.tsx      обо мне
  contact/page.tsx    контакты + форма
  sitemap.ts          sitemap.xml
  robots.ts           robots.txt

components/
  Header.tsx          адаптивная навигация с мобильным меню
  Footer.tsx          подвал
  Container.tsx       контейнер фиксированной ширины
  Button.tsx          кнопка/ссылка (primary | secondary | ghost), размеры md | lg
  SectionTitle.tsx    eyebrow + h2 + description
  ServiceCard.tsx     карточка услуги
  CaseCard.tsx        карточка кейса
  ProblemCard.tsx     карточка проблемы
  AuditChecklist.tsx  чеклист аудита
  ContactForm.tsx     форма с валидацией (audit | contact)
  CTASection.tsx      финальный CTA-блок

data/
  navigation.ts       пункты меню + контакты (плейсхолдеры)
  services.ts         6 услуг с буллетами
  cases.ts            5 кейсов с проблемой/решением/улучшениями
  audit.ts            7 пунктов аудита, результаты, целевая аудитория

public/
  favicon.svg         градиентный брендовый favicon
```

## Что и где править

- **Тексты услуг** — `data/services.ts`
- **Кейсы** — `data/cases.ts`
- **Пункты аудита** — `data/audit.ts`
- **Навигация и контакты** — `data/navigation.ts`
- **Цвета и палитра** — `tailwind.config.ts`
- **Глобальные стили** — `app/globals.css`

## Контакты — плейсхолдеры

Telegram и email в `data/navigation.ts`:

```ts
export const contacts = {
  telegram: "https://t.me/yourtelegram",
  telegramHandle: "@yourtelegram",
  email: "your@email.com",
};
```

После того как появятся реальные контакты — заменить в этом одном месте.

## Форма заявок

Сейчас форма работает как заглушка: при валидной отправке выводит сообщение
«Заявка подготовлена. Позже подключим отправку в Telegram или email» и логирует
данные в `console.log`.

Чтобы подключить реальный бэкенд, в `components/ContactForm.tsx` найдите
комментарий `// Заглушка — здесь позже подключим...` и замените на:

- **Telegram Bot API** — отправка через ваш бот
- **Formspree / Getform** — без своего бэкенда
- **Next.js Route Handler** — `app/api/contact/route.ts` + ваш SMTP/Resend

## SEO

- Уникальные `title` и `description` для каждой страницы
- OpenGraph и Twitter Card metadata в layout + на каждой странице
- `sitemap.xml` и `robots.txt` генерируются автоматически
- `lang="ru"` на `<html>`
- Семантическая разметка: `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>`

## Что добавить позже

- Реальные контакты вместо плейсхолдеров
- Backend для формы (Telegram Bot / Resend / Formspree)
- OG-картинка (`/public/og.jpg`, 1200×630)
- Реальные кейсы с цифрами по мере их появления
- Аналитика (Plausible / Яндекс.Метрика / GA4)
