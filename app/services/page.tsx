import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Button from "@/components/Button";

import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги — сайты, SEO, реклама, SMM и AI-контент",
  description:
    "Разработка сайтов, SEO-структура, реклама, аналитика, SMM, AI-визуалы и автоматизация контента для бизнеса.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Услуги — сайты, SEO, реклама, SMM и AI-контент | Degitlab",
    description:
      "Разработка сайтов, SEO-структура, реклама, аналитика, SMM, AI-визуалы и автоматизация контента для бизнеса.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Услуги Degitlab"
            title={
              <>
                Услуги, которые{" "}
                <span className="text-gradient">работают на заявки</span>
              </>
            }
            description="Закрываю задачи, которые обычно делятся между разработчиком, маркетологом и контент-специалистом. Это даёт согласованность и скорость."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/audit" size="lg">
              Получить аудит сайта
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Обсудить задачу
            </Button>
          </div>
        </Container>
      </section>

      {/* Подробные блоки услуг */}
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
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-graphite-800 text-accent-indigo">
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
                </div>

                <div className="md:col-span-7">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-graphite-900/60 px-4 py-3.5 transition-colors hover:border-accent-indigo/30"
                      >
                        <CheckCircle2
                          size={16}
                          className="flex-shrink-0 text-accent-indigo"
                        />
                        <span className="text-sm text-graphite-100">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Готовы обсудить ваш проект?"
        description="Расскажите задачу — предложу решение и формат работы. Начнём с того, что действительно повлияет на заявки."
      />
    </>
  );
}
