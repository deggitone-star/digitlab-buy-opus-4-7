import type { Metadata } from "next";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CaseCard from "@/components/CaseCard";
import CTASection from "@/components/CTASection";

import { cases, teardowns } from "@/data/cases";

export const metadata: Metadata = {
  title: "Примеры решений — демо-проекты и разборы сайтов",
  description:
    "Демонстрационные проекты и разборы сайтов: подход к структуре, дизайну, SEO и заявкам для разных ниш. Реальные кейсы добавляются по мере запуска проектов.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "Примеры решений | Degitlab",
    description:
      "Демонстрационные проекты и разборы сайтов: подход к структуре, дизайну, SEO и заявкам.",
    url: "/cases",
  },
};

export default function CasesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-surface-soft">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Примеры решений"
            title={
              <>
                Демо-проекты и{" "}
                <span className="text-brand">разборы сайтов</span>
              </>
            }
            description="Демонстрационные проекты и разборы, которые показывают мой подход к структуре, дизайну, SEO и заявкам. Реальные публичные кейсы будут добавляться по мере запуска собственных проектов."
          />
        </Container>
      </section>

      {/* Демо-проекты */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Демо-проекты"
            title="Живые демонстрационные сайты"
            description="Их можно открыть и потрогать — это работающие страницы, а не картинки."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <CaseCard key={c.id} data={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* Разборы сайтов */}
      <section id="teardowns" className="scroll-mt-20 border-t border-line bg-surface-soft py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Разборы сайтов"
            title="Что мешает заявкам"
            description="Даже без доступа к внутренней аналитике можно увидеть слабые места: первый экран, структуру, тексты, мобильную версию, формы, доверие и подготовку к рекламе."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {teardowns.map((t) => (
              <article
                key={t.id}
                className="rounded-2xl border border-line bg-white shadow-card p-6 shadow-card md:p-7"
              >
                <h3 className="text-lg font-bold tracking-tightish text-ink">
                  {t.title}
                </h3>
                <div className="mt-5 space-y-4 border-t border-line pt-5">
                  {t.blocks.map((b) => (
                    <div key={b.label}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                        {b.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-700">
                        {b.text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Будущие клиентские кейсы */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="rounded-3xl border border-dashed border-line bg-surface-soft p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tightish text-ink md:text-3xl">
              Будущие клиентские кейсы
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Здесь появятся реальные проекты с задачей, процессом, скриншотами
              до/после и отзывами — по мере запуска. Хотите стать одним из первых
              кейсов на гибких условиях?
            </p>
            <div className="mt-7 flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand"
              >
                Обсудить проект
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Хотите такой же подход к своему проекту?"
        description="Расскажите задачу — предложу решение и формат работы под ваш бизнес."
      />
    </>
  );
}
