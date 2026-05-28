import type { Metadata } from "next";
import {
  Briefcase,
  Compass,
  Wrench,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "О Degitlab — сайты, SEO и digital-маркетинг",
  description:
    "Degitlab помогает бизнесу запускать сайты, SEO-структуру, рекламу, контент и digital-системы для привлечения заявок.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "О Degitlab — сайты, SEO и digital-маркетинг",
    description:
      "Degitlab помогает бизнесу запускать сайты, SEO-структуру, рекламу, контент и digital-системы для привлечения заявок.",
    url: "/about",
  },
};

type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    title: "Опыт",
    description: "6+ лет в рекламе и digital. Работа с малым бизнесом и B2B.",
    icon: Briefcase,
  },
  {
    title: "Подход",
    description:
      "Сначала бизнес-задача — потом дизайн и код. Не наоборот.",
    icon: Compass,
  },
  {
    title: "Инструменты",
    description:
      "Сайты, SEO, реклама, SMM, AI-визуалы и автоматизация — связно, а не по кускам.",
    icon: Wrench,
  },
  {
    title: "Отличие",
    description:
      "Смотрю на проект сразу как маркетолог, разработчик и контент-специалист.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Обо мне"
            title={
              <>
                Degitlab — сайты, SEO и digital-маркетинг{" "}
                <span className="text-gradient">без лишней воды</span>
              </>
            }
            description="Меня зовут Degitlab. Я помогаю бизнесу запускать сайты, которые не просто красиво выглядят, а объясняют продукт, собирают заявки и готовы к продвижению."
          />
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-white/[0.06] bg-graphite-900/60 p-7 transition-colors hover:border-accent-indigo/30 md:p-8"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-graphite-800 text-accent-indigo">
                  <p.icon size={20} strokeWidth={1.75} />
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tightish text-white">
                  {p.title}
                </h2>
                <p className="mt-2.5 text-base leading-relaxed text-graphite-300">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-graphite-950 py-20 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tightish text-white md:text-3xl">
                Как я работаю
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-graphite-200 md:text-lg">
                <p>
                  Сначала разбираюсь в бизнесе: что продаётся, кто покупает,
                  откуда приходят клиенты сейчас. Без этого любой сайт — это
                  просто упражнение в дизайне.
                </p>
                <p>
                  Дальше — структура: какие страницы нужны, какие запросы они
                  должны закрывать, какой путь проходит посетитель до заявки.
                  Здесь же закладывается SEO и подготовка к рекламе.
                </p>
                <p>
                  Только после этого — дизайн и код. Next.js, чистая верстка,
                  быстрая загрузка, аналитика, формы. Сайт, который не стыдно
                  показать и который реально работает.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-graphite-900/60 p-7 md:p-8">
                <div className="text-5xl font-semibold tracking-tightish text-white md:text-6xl">
                  6+
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-graphite-400">
                  лет опыта
                </div>
                <p className="mt-5 text-sm leading-relaxed text-graphite-300">
                  За это время — десятки проектов: от лендингов и каталогов до
                  B2B-сайтов и SEO-структур. С 2023 года активно использую AI
                  для ускорения работы с контентом и визуалами.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
