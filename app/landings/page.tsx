import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Быстрые лендинги под услугу, рекламу или запуск",
  description:
    "Компактная страница под конкретную задачу: объяснить услугу, показать преимущества, закрыть возражения и привести человека к заявке.",
  alternates: { canonical: "/landings" },
  openGraph: {
    title: "Быстрые лендинги под услугу, рекламу или запуск | Degitlab",
    description:
      "Компактная страница под конкретную задачу: услуга, реклама, эксперт, локальный бизнес, акция.",
    url: "/landings",
  },
};

const forWhom = [
  "Мастера и специалисты",
  "Локальный бизнес",
  "B2B-услуги",
  "Эксперты",
  "Небольшие компании",
  "Тест новой услуги",
  "Рекламная кампания",
  "Сезонная акция",
  "Один товар или направление",
];

const included = [
  "Структура",
  "Оффер",
  "Первый экран",
  "Преимущества",
  "Блок доверия",
  "Возражения",
  "Форма заявки",
  "Мобильная версия",
  "Базовая аналитика",
];

export default function LandingsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-surface-soft">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Лендинги"
            title={
              <>
                Быстрые лендинги под услугу,{" "}
                <span className="text-brand">рекламу или запуск</span>
              </>
            }
            description="Соберу компактную страницу под конкретную задачу: объяснить услугу, показать преимущества, закрыть возражения и привести человека к заявке."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">Обсудить лендинг</Button>
            <Button href="/cases" variant="secondary" size="lg">Посмотреть примеры</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tightish text-ink md:text-3xl">
                Для кого
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Лендинг быстрее запускается, проще тестируется и помогает понять,
                есть ли спрос — до того, как вкладываться в большой сайт.
              </p>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {forWhom.map((w) => (
                  <li key={w} className="flex items-center gap-2.5 text-sm text-ink-700">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tightish text-ink md:text-3xl">
                Что входит
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Всё, что нужно странице, чтобы работать на заявку, а не просто
                существовать.
              </p>
              <ul className="mt-7 grid gap-3">
                {included.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 rounded-xl border border-line bg-white shadow-card px-4 py-3"
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0 text-brand" />
                    <span className="text-sm text-ink-800">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Нужен лендинг под конкретную задачу?"
        description="Опишите, что продвигаете — предложу структуру и формат страницы под вашу цель."
      />
    </>
  );
}
