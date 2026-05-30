import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";

import { services, extraServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги — аудит, лендинг, доработка и сайт для бизнеса",
  description:
    "Аудит сайта, быстрый лендинг, доработка существующего сайта и сайт для малого и B2B-бизнеса. SEO-структура, аналитика и подготовка к рекламе.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Услуги — аудит, лендинг, доработка и сайт для бизнеса | Degitlab",
    description:
      "Аудит сайта, быстрый лендинг, доработка существующего сайта и сайт для малого и B2B-бизнеса.",
    url: "/services",
  },
};

const ctaHref: Record<string, string> = {
  audit: "/audit",
  landing: "/landings",
  rework: "/contact",
  website: "/contact",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Услуги"
            title={
              <>
                С чем я <span className="text-gradient">помогаю бизнесу</span>
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
                className="grid gap-8 border-t border-white/5 pt-12 md:grid-cols-12 md:gap-10 md:pt-16 first:border-t-0 first:pt-0"
              >
                <div className="md:col-span-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-graphite-800 text-accent-violet">
                      <s.icon size={20} strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-graphite-400">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tightish text-white md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-graphite-300">
                    {s.short}
                  </p>
                  <div className="mt-6">
                    <Button href={ctaHref[s.id] ?? "/contact"} size="md">
                      {s.cta}
                    </Button>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-graphite-400">
                    Что входит
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-graphite-900/60 px-4 py-3.5 transition-colors hover:border-accent-violet/30"
                      >
                        <CheckCircle2 size={16} className="flex-shrink-0 text-accent-violet" />
                        <span className="text-sm text-graphite-100">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Доп возможности */}
          <div className="mt-20 border-t border-white/5 pt-12">
            <h2 className="text-xl font-semibold text-white">Дополнительно</h2>
            <p className="mt-2 text-sm text-graphite-300">
              Эти задачи беру в дополнение к основным — когда они нужны проекту.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {extraServices.map((e) => (
                <div key={e.title} className="rounded-xl border border-white/[0.06] bg-graphite-900/40 p-5">
                  <div className="text-base font-semibold text-white">{e.title}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-graphite-300">{e.short}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Технический блок — мелким, не главный аргумент */}
          <div className="mt-16 rounded-2xl border border-white/[0.06] bg-graphite-900/40 p-6">
            <p className="text-sm leading-relaxed text-graphite-400">
              <span className="font-semibold text-graphite-200">Технически</span>{" "}
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
