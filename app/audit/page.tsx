import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import AuditChecklist from "@/components/AuditChecklist";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";

import { auditChecklist, auditResults } from "@/data/audit";

export const metadata: Metadata = {
  title: "Аудит сайта перед рекламой и продвижением",
  description:
    "Проверю сайт и покажу, что мешает заявкам: структура, первый экран, SEO, мобильная версия, скорость, формы, доверие, аналитика и готовность к рекламе.",
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "Аудит сайта перед рекламой и продвижением | Degitlab",
    description:
      "Проверю сайт и покажу, что мешает заявкам: структура, SEO, мобильная версия, формы, аналитика.",
    url: "/audit",
  },
};

export default function AuditPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Аудит сайта"
            title={
              <>
                Аудит сайта перед{" "}
                <span className="text-gradient">рекламой и продвижением</span>
              </>
            }
            description="Проверю сайт и покажу, что мешает заявкам: структура, первый экран, SEO, мобильная версия, скорость, формы, доверие, аналитика и готовность к рекламе."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#form" size="lg">Отправить сайт на аудит</Button>
            <Button href="/services" variant="secondary" size="lg">Другие услуги</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Что проверяется"
            title="13 точек, которые влияют на заявки"
            description="Каждая из них либо ведёт посетителя к заявке, либо теряет его по пути."
          />
          <div className="mt-12">
            <AuditChecklist items={auditChecklist} />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-graphite-950 py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold tracking-tightish text-white md:text-3xl">
                Что получает клиент
              </h2>
              <p className="mt-3 text-base leading-relaxed text-graphite-300">
                Конкретный документ с приоритетами и понятным планом, а не общие
                слова.
              </p>
              <ul className="mt-7 space-y-3">
                {auditResults.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-graphite-900/60 px-4 py-3.5"
                  >
                    <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0 text-accent-violet" />
                    <span className="text-sm text-graphite-100">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tightish text-white md:text-3xl">
                Почему это важно перед рекламой
              </h2>
              <p className="mt-3 text-base leading-relaxed text-graphite-300">
                Реклама не делает слабый сайт сильным — она просто приводит на
                него больше людей. Если сайт непонятно объясняет продукт и плохо
                собирает заявки, бюджет уходит впустую.
              </p>
              <p className="mt-4 text-base leading-relaxed text-graphite-300">
                Аудит позволяет сначала закрыть слабые места, а потом запускать
                трафик — так каждый рубль работает эффективнее.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="form" className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Заявка на аудит"
            title="Отправьте сайт на аудит"
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
