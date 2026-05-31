import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";

import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги — аудит, лендинг, доработка и сайт для бизнеса",
  description:
    "Аудит сайта, быстрый лендинг, доработка, сайт для бизнеса, соцсети и контент. SEO-структура, аналитика и подготовка к рекламе.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Услуги — аудит, лендинг, доработка и сайт для бизнеса | Degitlab",
    description:
      "Аудит сайта, лендинг, доработка, сайт для бизнеса, соцсети и контент для малого и B2B-бизнеса.",
    url: "/services",
  },
};

const ctaHref: Record<string, string> = {
  audit: "/audit",
  landing: "/landings",
  rework: "/contact",
  website: "/contact",
  social: "/contact",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-surface-soft">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Услуги"
            title={
              <>
                С чем я <span className="text-brand">помогаю бизнесу</span>
              </>
            }
            description="Четыре понятных формата работы — от быстрого аудита до полноценного сайта. Можно начать с малого и развивать дальше."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/audit" size="lg">Получить аудит сайта</Button>
            <Button href="/contact" variant="secondary" size="lg">Обсудить проект</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="space-y-16 md:space-y-20">
            {services.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="grid gap-8 border-t border-line pt-12 md:grid-cols-12 md:gap-10 md:pt-16 first:border-t-0 first:pt-0"
              >
                <div className="md:col-span-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-brand-soft text-brand">
                      <s.icon size={20} strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-light">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-tightish text-ink md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {s.short}
                  </p>
                  <div className="mt-6">
                    <Button href={ctaHref[s.id] ?? "/contact"} size="md">
                      {s.cta}
                    </Button>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-light">
                    Что входит
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 rounded-xl border border-line bg-white shadow-card px-4 py-3.5 transition-colors hover:border-brand/30"
                      >
                        <CheckCircle2 size={16} className="flex-shrink-0 text-brand" />
                        <span className="text-sm text-ink-800">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Технический блок — мелким, не главный аргумент */}
          <div className="mt-16 rounded-2xl border border-line bg-surface-soft p-6">
            <p className="text-sm leading-relaxed text-muted-light">
              <span className="font-semibold text-ink-700">Технически</span>{" "}
              сайт собирается на современном стеке, быстро загружается,
              адаптируется под мобильные и готов к дальнейшему развитию. Но для
              бизнеса важнее не технологии, а то, что сайт понятно объясняет
              продукт и приводит к заявке.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Не знаете, с чего начать?"
        description="Опишите задачу — предложу понятный первый шаг: аудит, лендинг или доработку. Без обязательств и сложных терминов."
      />
    </>
  );
}
