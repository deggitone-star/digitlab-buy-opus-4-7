import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Hammer,
  Store,
  Briefcase,
  User,
  PackageOpen,
} from "lucide-react";

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

import { services } from "@/data/services";
import { cases } from "@/data/cases";

/* ============== Данные блоков главной ============== */

const problems = [
  { title: "Сайт долго загружается", description: "Каждая секунда задержки — потерянные посетители и заявки." },
  { title: "Непонятно, чем вы лучше", description: "На первом экране нет ответа, почему стоит выбрать именно вас." },
  { title: "Нет SEO-структуры", description: "Сайт не отвечает на реальные поисковые запросы клиентов." },
  { title: "Слабая мобильная версия", description: "Больше половины трафика — с телефонов, и они уходят." },
  { title: "Нет нормальных форм заявок", description: "Сложные или незаметные формы убивают конверсию." },
  { title: "Нет аналитики", description: "Непонятно, что работает, а что просто съедает бюджет." },
];

const audience = [
  { title: "Производства", icon: Factory },
  { title: "Мебельные компании", icon: Hammer },
  { title: "Локальный бизнес", icon: Store },
  { title: "B2B-услуги", icon: Briefcase },
  { title: "Эксперты и специалисты", icon: User },
  { title: "Интернет-каталоги", icon: PackageOpen },
];

const aboutHighlights = [
  "6+ лет в рекламе и digital",
  "Сайты, SEO, SMM, контент",
  "Работа с малым бизнесом и B2B",
  "AI-инструменты для ускорения работы",
  "Понимание бизнеса, а не только кода",
];

/* ============== Страница ============== */

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <AudienceSection />
      <CasesSection />
      <AboutSection />
      <CTASection />
    </>
  );
}

/* ---------- ПРОБЛЕМА ---------- */

function ProblemSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Проблема"
            title="Ваш сайт может терять заявки каждый день"
            description="Большинство сайтов выглядят прилично, но не работают как инструмент продаж. Вот типичные слабые места, которые я вижу чаще всего."
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

/* ---------- УСЛУГИ ---------- */

function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Услуги"
              title="Что я делаю"
              description="От разработки сайта до контента и автоматизации — закрываю задачи, которые обычно делятся между несколькими подрядчиками."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-indigo transition-colors hover:text-accent-violet"
            >
              Все услуги
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      </Container>
    </section>
  );
}

/* ---------- ДЛЯ КОГО ---------- */

function AudienceSection() {
  return (
    <section className="border-t border-white/5 bg-graphite-950 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Для кого"
            title="С кем я работаю"
            description="Не делаю одинаковые шаблонные сайты. Подход отличается для производства, локального бизнеса и эксперта — и это нормально."
          />
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map(({ title, icon: Icon }) => (
            <RevealStaggerItem key={title}>
              <div className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-graphite-900/60 p-5 transition-all hover:-translate-y-0.5 hover:border-accent-indigo/30 hover:shadow-card-hover">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-graphite-800 text-accent-indigo transition-colors group-hover:border-accent-indigo/40 group-hover:text-white">
                  <Icon size={19} strokeWidth={1.75} />
                </div>
                <div className="text-base font-medium text-white">{title}</div>
              </div>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ---------- КЕЙСЫ ---------- */

function CasesSection() {
  const highlighted = cases.slice(0, 3);
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Работы"
              title="Демо-проекты и направления"
              description="Живые демонстрационные сайты под разные ниши — можно открыть и потрогать. Так видно подход к структуре, дизайну и пути к заявке."
            />
            <Link
              href="/cases"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-violet transition-colors hover:text-accent-magenta"
            >
              Все работы
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-5 lg:grid-cols-3">
          {highlighted.map((c) => (
            <RevealStaggerItem key={c.id} className="h-full">
              <CaseCard data={c} />
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ---------- ОБО МНЕ ---------- */

function AboutSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal direction="right" className="lg:col-span-7">
            <SectionTitle
              eyebrow="Обо мне"
              title="Маркетинг, разработка и AI в одном подходе"
              description="Я занимаюсь сайтами, рекламой, SEO и digital-маркетингом более 6 лет. Сейчас объединяю классический маркетинг, разработку и AI-инструменты, чтобы быстрее создавать сайты, контент и системы привлечения заявок для бизнеса."
            />
            <div className="mt-8">
              <Button href="/about" variant="secondary" size="lg" icon={<ArrowRight size={16} />}>
                Подробнее об опыте
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-5">
            <ul className="space-y-3 rounded-2xl border border-white/[0.06] bg-graphite-900/60 p-6 shadow-card md:p-7">
              {aboutHighlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-gradient" />
                  <span className="text-sm text-graphite-100 md:text-base">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
