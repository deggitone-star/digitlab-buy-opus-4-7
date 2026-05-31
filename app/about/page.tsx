import type { Metadata } from "next";
import { Layers, BarChart3, Boxes, ShieldCheck } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { corporateValues } from "@/data/homepage";

export const metadata: Metadata = {
  title: "Обо мне — корпоративный опыт и личная digital-практика",
  description:
    "Много лет в корпоративной digital-среде на крупных проектах. Сейчас запускаю собственную практику: сайты, лендинги, аудит, SEO и аналитика для малого и B2B-бизнеса.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Обо мне — корпоративный опыт и личная digital-практика | Degitlab",
    description:
      "Корпоративный digital-опыт в понятные сайты и лендинги для малого и B2B-бизнеса.",
    url: "/about",
  },
};

const iconMap = [Layers, BarChart3, Boxes, ShieldCheck];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-surface-soft">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Обо мне"
            title={
              <>
                Корпоративный digital-опыт — в понятные{" "}
                <span className="text-brand">сайты для бизнеса</span>
              </>
            }
            description="Много лет работал в корпоративной digital-среде на крупных проектах: сайты, SEO, реклама, аналитика, контент, процессы. Сейчас запускаю собственную практику и беру проекты напрямую."
          />
        </Container>
      </section>

      {/* Без фейковых кейсов */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-white shadow-card p-8 md:p-12">
            <h2 className="text-2xl font-bold tracking-tightish text-ink md:text-3xl">
              Без фейковых кейсов и выдуманных цифр
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Я сейчас формирую собственное публичное портфолио, поэтому не
                показываю несуществующие результаты и не обещаю «рост заявок на
                300% за неделю». Вместо этого показываю подход: демо-проекты,
                разборы сайтов, примеры структуры и понятный процесс работы.
              </p>
              <p>
                Раньше я работал внутри крупных проектов, где не всегда можно
                публично показывать детали, цифры и внутренние процессы. Сейчас
                беру первые проекты напрямую и оформляю реальные результаты в
                открытые кейсы.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Что забрал из корпоративного опыта */}
      <section className="border-t border-line bg-surface-soft py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Опыт"
            title="Что я забрал из корпоративного опыта"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {corporateValues.map((p, i) => {
              const Icon = iconMap[i] ?? Layers;
              return (
                <article
                  key={p.title}
                  className="rounded-2xl border border-line bg-white shadow-card p-6 transition-colors hover:border-brand/30"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-brand-soft text-brand">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title="Хотите стать одним из первых проектов?"
        description="Для первых клиентов — более гибкие условия в обмен на возможность оформить результат в публичный кейс."
      />
    </>
  );
}
