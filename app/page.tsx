import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Check, X } from "lucide-react";

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
import { problems, auditGives, workFunnel, directVsAgency } from "@/data/homepage";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <AuditValueSection />
      <ServicesSection />
      <FunnelSection />
      <CasesSection />
      <DirectVsAgencySection />
      <TrustSection />
      <CTASection
        title="Начнём с аудита?"
        description="Пришлите ссылку на сайт — посмотрю и покажу, что мешает заявкам. Дальше решите сами, что делать."
      />
    </>
  );
}

/* ---------- 1. Проблема (язык клиента) ---------- */
function ProblemSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Знакомо?"
            title="Сайт есть. А звонков и заявок — нет"
            description="Сайт может выглядеть прилично и всё равно не приводить клиентов. Вот что обычно мешает."
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

/* ---------- 2. Что даёт аудит (главный оффер) ---------- */
function AuditValueSection() {
  return (
    <section className="border-t border-line bg-surface-soft py-20 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal direction="right" className="lg:col-span-5">
            <SectionTitle
              eyebrow="С чего начать"
              title="Что вы получите после аудита"
              description="Аудит — самый понятный первый шаг. Без больших вложений вы узнаёте, что именно мешает заявкам и что чинить в первую очередь."
            />
            <div className="mt-8">
              <Button href="/audit" size="lg" icon={<ArrowRight size={16} />} className="btn-sheen">
                Заказать аудит
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {auditGives.map((a) => (
                <div
                  key={a.title}
                  className="rounded-xl border border-line bg-white shadow-card p-5"
                >
                  <CheckCircle2 size={18} className="text-brand" />
                  <h3 className="mt-3 text-base font-semibold text-white">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 3. Что ещё могу (услуги следом за аудитом) ---------- */
function ServicesSection() {
  // Аудит уже раскрыт выше — здесь показываем остальные услуги
  const rest = services.filter((s) => s.id !== "audit");
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Дальше"
              title="Нашли проблемы — помогу исправить"
              description="Аудит часто показывает, что сайту нужна доработка, отдельный лендинг или новая структура. Могу закрыть и это."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
            >
              Все услуги
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2">
          {rest.map((s) => (
            <RevealStaggerItem key={s.id} className="h-full">
              <ServiceCard icon={s.icon} title={s.title} description={s.short} price={s.price} />
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ---------- 4. Примеры решений ---------- */
function CasesSection() {
  return (
    <section className="border-t border-line bg-surface-soft py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Примеры решений"
              title="Как может выглядеть сильный сайт"
              description="Демонстрационные проекты под разные ниши — можно открыть и посмотреть, как устроены структура и путь к заявке."
            />
            <Link
              href="/cases"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
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

/* ---------- 5. Доверие ---------- */
function TrustSection() {
  return (
    <section className="border-t border-line bg-surface-soft py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-brand">
                Почему мне можно доверить сайт
              </div>
              <h2 className="text-2xl font-bold tracking-tightish text-ink md:text-[34px] md:leading-[1.1]">
                Сначала бизнес-задача — потом дизайн и код
              </h2>
              <div className="mt-5 space-y-3 text-base leading-relaxed text-muted">
                <p>
                  Не начинаю с красивой картинки. Сначала разбираю продукт,
                  аудиторию и путь клиента к заявке — а потом делаю сайт под это.
                </p>
                <p>
                  Сайт должен быть измеримым: аналитика, цели, формы и понятные
                  метрики. За плечами — работа с крупными digital-проектами.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact" size="lg" icon={<ArrowRight size={16} />}>
                  Обсудить проект
                </Button>
                <Button href="/about" variant="secondary" size="lg">
                  Подробнее обо мне
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ul className="space-y-3">
                {[
                  ["Системность", "Сначала продукт и путь клиента, потом дизайн."],
                  ["Аналитика", "Сайт измерим: цели, формы, источники трафика."],
                  ["Без воды", "Решения понятные и обоснованные, без лишних терминов."],
                ].map(([title, text]) => (
                  <li
                    key={title}
                    className="rounded-xl border border-line bg-white p-4 shadow-card"
                  >
                    <div className="text-sm font-semibold text-ink">{title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Воронка: как я работаю ---------- */
function FunnelSection() {
  return (
    <section className="border-t border-line bg-surface-soft py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Как я работаю"
            title="От аудита до заявок — понятными шагами"
            description="Не начинаю с дизайна. Сначала разбираю задачу и структуру, потом делаю и подключаю аналитику."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {workFunnel.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.07} className="h-full">
              <div className="h-full rounded-xl border border-line bg-white p-5 shadow-card">
                <div className="text-sm font-bold text-brand">{s.step}</div>
                <div className="mt-2 text-base font-semibold text-ink">{s.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Противопоставление: специалист vs агентство ---------- */
function DirectVsAgencySection() {
  return (
    <section className="border-t border-line py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="В чём разница"
            title="Специалист напрямую или агентство"
            description="Для малого и B2B-бизнеса работа напрямую со специалистом часто удобнее и быстрее, чем через агентство."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Со мной */}
          <Reveal>
            <div className="h-full rounded-2xl border-2 border-brand bg-brand-soft/40 p-7 shadow-card">
              <h3 className="text-lg font-bold text-ink">{directVsAgency.direct.title}</h3>
              <ul className="mt-5 space-y-3">
                {directVsAgency.direct.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink-800">
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-brand" strokeWidth={2.5} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          {/* Агентство */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-white p-7">
              <h3 className="text-lg font-bold text-muted">{directVsAgency.agency.title}</h3>
              <ul className="mt-5 space-y-3">
                {directVsAgency.agency.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted">
                    <X size={18} className="mt-0.5 flex-shrink-0 text-muted-light" strokeWidth={2.5} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
