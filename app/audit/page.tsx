import type { Metadata } from "next";
import { CheckCircle2, Target } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import AuditChecklist from "@/components/AuditChecklist";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";

import { auditChecklist, auditResults, auditAudience } from "@/data/audit";

export const metadata: Metadata = {
  title: "Аудит сайта — почему сайт не приносит заявки",
  description:
    "Проверка сайта: скорость, SEO, структура, мобильная версия, формы заявок, доверие и готовность к рекламе.",
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "Аудит сайта — почему сайт не приносит заявки | Degitlab",
    description:
      "Проверка сайта: скорость, SEO, структура, мобильная версия, формы заявок, доверие и готовность к рекламе.",
    url: "/audit",
  },
};

export default function AuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Аудит сайта"
            title={
              <>
                Покажу, почему сайт{" "}
                <span className="text-gradient">не приносит заявки</span>
              </>
            }
            description="Проверю сайт как маркетолог и разработчик: технические ошибки, SEO, структуру, доверие, мобильную версию и готовность к рекламе."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#form" size="lg">
              Заказать аудит
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Посмотреть услуги
            </Button>
          </div>
        </Container>
      </section>

      {/* Что проверяю */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Что проверяю"
            title="Семь направлений аудита"
            description="Каждое из этих направлений напрямую влияет на то, доходит ли посетитель до заявки или уходит."
          />
          <div className="mt-12">
            <AuditChecklist items={auditChecklist} />
          </div>
        </Container>
      </section>

      {/* Что получите + кому подходит */}
      <section className="border-t border-white/5 bg-graphite-950 py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold tracking-tightish text-white md:text-3xl">
                Что вы получите
              </h2>
              <p className="mt-3 text-base leading-relaxed text-graphite-300">
                Конкретный документ с приоритетами, а не общие слова. Понятно,
                что исправить в первую очередь и почему.
              </p>
              <ul className="mt-7 space-y-3">
                {auditResults.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-graphite-900/60 px-4 py-3.5"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 flex-shrink-0 text-accent-indigo"
                    />
                    <span className="text-sm text-graphite-100">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tightish text-white md:text-3xl">
                Кому подходит
              </h2>
              <p className="mt-3 text-base leading-relaxed text-graphite-300">
                Особенно полезно перед запуском рекламы — не имеет смысла лить
                трафик на слабый сайт.
              </p>
              <ul className="mt-7 space-y-3">
                {auditAudience.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-graphite-900/60 px-4 py-3.5"
                  >
                    <Target
                      size={17}
                      className="mt-0.5 flex-shrink-0 text-accent-indigo"
                    />
                    <span className="text-sm text-graphite-100">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Почему важно перед рекламой */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-graphite-900/60 p-8 md:p-12">
            <h2 className="max-w-3xl text-2xl font-semibold tracking-tightish text-white md:text-3xl">
              Почему аудит важен перед рекламой
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-graphite-300 md:text-lg">
              Реклама не делает плохой сайт хорошим — она просто приводит на
              него больше людей. Если сайт долго грузится, непонятно объясняет
              продукт и плохо собирает заявки, бюджет уходит впустую. Аудит
              позволяет сначала закрыть слабые места, а потом запускать трафик.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Сначала", value: "Аудит" },
                { label: "Потом", value: "Доработки" },
                { label: "В конце", value: "Реклама" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/[0.06] bg-graphite-800/40 p-5"
                >
                  <div className="text-xs uppercase tracking-wider text-graphite-400">
                    {s.label}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Форма */}
      <section id="form" className="border-t border-white/5 bg-graphite-950 py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Заявка на аудит"
            title="Оставьте контакты"
            description="Напишите ссылку на сайт и пару слов о задаче. Свяжусь и расскажу, как пройдёт аудит."
          />
          <div className="mt-12 max-w-3xl">
            <ContactForm variant="audit" />
          </div>
        </Container>
      </section>
    </>
  );
}
