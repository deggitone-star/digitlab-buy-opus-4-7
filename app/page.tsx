import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, MessageSquare, Zap } from "lucide-react";

import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CaseCard from "@/components/CaseCard";
import CTASection from "@/components/CTASection";
import ProblemCard from "@/components/ProblemCard";
import HeroSection from "@/components/HeroSection";
import Reveal from "@/components/Reveal";
import RevealStagger, { RevealStaggerItem } from "@/components/RevealStagger";

import { services, extraServices } from "@/data/services";
import { cases } from "@/data/cases";
import {
  problems,
  landingTypes,
  corporateValues,
  workSteps,
  clientGets,
} from "@/data/homepage";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PositioningSection />
      <ProblemSection />
      <ServicesSection />
      <SmallSiteSection />
      <CasesSection />
      <TeardownTeaser />
      <CorporateSection />
      <ProcessSection />
      <ClientGetsSection />
      <FirstProjectsSection />
      <FinalCTA />
    </>
  );
}

/* ---------- Позиционирование: корпоративный опыт → практика ---------- */
function PositioningSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-graphite-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
              Позиционирование
            </div>
            <h2 className="text-3xl font-semibold tracking-tightish text-white sm:text-4xl">
              Из корпоративных проектов — в понятные сайты для бизнеса
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-graphite-300 md:text-lg">
              <p>
                Я много лет работал в корпоративной digital-среде, где важны
                структура, процессы, аналитика, стабильность и результат. Сейчас
                развиваю собственную практику и хочу работать ближе к реальному
                бизнесу: без лишней бюрократии, с понятными задачами, быстрыми
                решениями и честным подходом.
              </p>
              <p>
                Мой фокус — сайты и лендинги для малого и B2B-бизнеса, которые
                помогают объяснить продукт, вызвать доверие и привести человека к
                заявке.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Типичные проблемы ---------- */
function ProblemSection() {
  return (
    <section className="border-t border-white/5 bg-graphite-950 py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Проблема"
            title="Часто сайт есть, но заявки всё равно не идут"
            description="Большинство сайтов выглядят прилично, но не работают как инструмент продаж. Вот что вижу чаще всего."
          />
        </Reveal>
        <RevealStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <RevealStaggerItem key={p.title}>
              <ProblemCard title={p.title} description={p.description} />
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ---------- Услуги ---------- */
function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Услуги"
              title="С чем помогаю"
              description="Четыре понятных формата работы. Можно начать с малого — аудит или одна страница — и развивать дальше."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-violet transition-colors hover:text-accent-magenta"
            >
              Подробнее об услугах
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <RevealStaggerItem key={s.id} className="h-full">
              <ServiceCard
                icon={s.icon}
                title={s.title}
                description={s.short}
              />
            </RevealStaggerItem>
          ))}
        </RevealStagger>

        {/* Доп. возможности */}
        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {extraServices.map((e, i) => (
              <div
                key={e.title}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-graphite-900/40 p-5"
              >
                <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-graphite-800 text-graphite-300">
                  {i === 0 ? <MessageSquare size={16} /> : <Zap size={16} />}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {e.title}
                    <span className="ml-2 text-[11px] font-normal uppercase tracking-wider text-graphite-400">
                      дополнительно
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-graphite-300">
                    {e.short}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Не всегда нужен большой сайт ---------- */
function SmallSiteSection() {
  return (
    <section className="border-t border-white/5 bg-graphite-950 py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Лендинги"
            title="Не всегда нужен большой сайт"
            description="Иногда бизнесу достаточно одного сильного лендинга: под услугу, рекламу, сезонную акцию, запуск продукта, эксперта или локальный оффер. Такая страница быстрее запускается, проще тестируется и помогает понять, есть ли спрос."
          />
        </Reveal>
        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {landingTypes.map(({ title, description, icon: Icon }) => (
            <RevealStaggerItem key={title} className="h-full">
              <div className="h-full rounded-xl border border-white/[0.06] bg-graphite-900/60 p-6 transition-colors hover:border-accent-violet/30">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-graphite-800 text-accent-violet">
                  <Icon size={19} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-300">
                  {description}
                </p>
              </div>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
        <Reveal delay={0.1}>
          <div className="mt-8">
            <Button href="/landings" variant="secondary" size="lg" icon={<ArrowRight size={16} />}>
              Подробнее про лендинги
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Примеры решений / демо ---------- */
function CasesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Примеры решений"
              title="Как может выглядеть работа"
              description="Пока я формирую публичное портфолио, показываю демонстрационные проекты: как может выглядеть сайт, структура и путь к заявке для разных ниш. Это не выдуманные результаты, а примеры подхода."
            />
            <Link
              href="/cases"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-violet transition-colors hover:text-accent-magenta"
            >
              Все примеры
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <RevealStagger className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((c) => (
            <RevealStaggerItem key={c.id} className="h-full">
              <CaseCard data={c} />
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ---------- Тизер разборов ---------- */
function TeardownTeaser() {
  return (
    <section className="border-t border-white/5 bg-graphite-950 py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-graphite-900/60 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-graphite-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" />
                  Разборы сайтов
                </div>
                <h2 className="text-2xl font-semibold tracking-tightish text-white md:text-3xl">
                  Разборы сайтов: что мешает заявкам
                </h2>
                <p className="mt-4 text-base leading-relaxed text-graphite-300">
                  Даже без доступа к внутренней аналитике можно увидеть слабые
                  места сайта: первый экран, структуру, тексты, мобильную версию,
                  формы, доверие и подготовку к рекламе.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <Button href="/cases#teardowns" size="lg" icon={<ArrowRight size={16} />}>
                  Смотреть разборы
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Что забрал из корпоративного опыта ---------- */
function CorporateSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Опыт"
            title="Что я забрал из корпоративного опыта"
            description="Подход, который остаётся вне зависимости от размера проекта."
          />
        </Reveal>
        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {corporateValues.map(({ title, description, icon: Icon }) => (
            <RevealStaggerItem key={title} className="h-full">
              <div className="h-full rounded-xl border border-white/[0.06] bg-graphite-900/60 p-6 transition-colors hover:border-accent-violet/30">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-graphite-800 text-accent-violet">
                  <Icon size={19} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-300">
                  {description}
                </p>
              </div>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ---------- Как проходит работа ---------- */
function ProcessSection() {
  return (
    <section className="border-t border-white/5 bg-graphite-950 py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Процесс"
            title="Как проходит работа"
            description="Простые, понятные шаги — без бюрократии и сюрпризов."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {workSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-xl border border-white/[0.06] bg-graphite-900/60 p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-violet">
                  Шаг {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 text-base font-semibold text-white">
                  {s.title}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite-300">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Что получает клиент ---------- */
function ClientGetsSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal direction="right" className="lg:col-span-5">
            <SectionTitle
              eyebrow="Результат"
              title="Не просто сайт, а рабочая основа для заявок"
              description="Конкретный набор того, что вы получаете на выходе — не абстракция, а понятные элементы."
            />
          </Reveal>
          <Reveal direction="left" delay={0.1} className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {clientGets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-graphite-900/60 px-4 py-3.5"
                >
                  <CheckCircle2 size={17} className="flex-shrink-0 text-accent-violet" />
                  <span className="text-sm text-graphite-100">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Первые проекты ---------- */
function FirstProjectsSection() {
  return (
    <section className="border-t border-white/5 bg-graphite-950 py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent-violet/20 bg-graphite-900 p-8 md:p-12">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial opacity-70" />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-violet">
                  Открыт к сотрудничеству
                </div>
                <h2 className="text-2xl font-semibold tracking-tightish text-white md:text-3xl">
                  Сейчас беру первые проекты напрямую
                </h2>
                <div className="mt-4 space-y-3 text-base leading-relaxed text-graphite-300">
                  <p>
                    После корпоративной среды я запускаю собственную практику,
                    поэтому открыт к первым проектам для бизнеса: аудит сайта,
                    доработка, лендинг, сайт услуг или B2B-структура.
                  </p>
                  <p>
                    Для первых клиентов могу предложить более гибкие условия — в
                    обмен на возможность оформить результат в публичный кейс:
                    задача, процесс, скриншоты до/после и отзыв.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Button href="/contact" size="lg" icon={<ArrowRight size={16} />}>
                  Обсудить проект
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Финальный CTA ---------- */
function FinalCTA() {
  return (
    <CTASection
      title="Начать можно с малого"
      description="Не обязательно сразу заказывать большой сайт. Можно начать с аудита, одной посадочной страницы или доработки текущего сайта. Я посмотрю задачу и предложу понятный первый шаг."
    />
  );
}
