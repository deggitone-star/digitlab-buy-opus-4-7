"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Gauge,
  Search,
  Layout,
  ClipboardList,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

import Container from "./Container";
import Button from "./Button";
import AnimatedBackground from "./AnimatedBackground";
import ParticlesField from "./ParticlesField";
import CountUp from "./CountUp";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <AnimatedBackground />
      <ParticlesField />

      <Container className="relative pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Левая часть */}
          <div className="lg:col-span-7">
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-graphite-200 backdrop-blur-sm"
            >
              <Sparkles size={13} className="text-accent-indigo animate-soft-pulse" />
              Сайты как инструмент продаж
            </motion.div>

            <motion.h1
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl font-semibold tracking-tightish text-white sm:text-5xl md:text-6xl md:leading-[1.05]"
            >
              Сайты, SEO и digital-система для бизнеса,{" "}
              <span className="text-gradient">которая приводит заявки</span>
            </motion.h1>

            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-graphite-300 md:text-lg"
            >
              Я помогаю малому и B2B-бизнесу превратить сайт из формальности в
              рабочий инструмент продаж: структура, SEO, реклама, контент,
              аналитика и понятные цифры.
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                href="/audit"
                size="lg"
                icon={<ArrowRight size={16} />}
                className="btn-sheen"
              >
                Получить аудит сайта
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Посмотреть услуги
              </Button>
            </motion.div>

            {/* Мини-метрики с count-up */}
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 grid max-w-lg grid-cols-3 gap-6"
            >
              <Metric>
                <CountUp to={6} suffix="+" /> <span>лет в digital</span>
              </Metric>
              <Metric>
                <CountUp to={20} suffix="+" /> <span>проектов</span>
              </Metric>
              <Metric isStatic value="∞" label="идей и итераций" />
            </motion.div>
          </div>

          {/* Карточка "Аудит сайта" */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <HeroAuditCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Метрика ---------- */

function Metric({
  children,
  isStatic,
  value,
  label,
}: {
  children?: React.ReactNode;
  isStatic?: boolean;
  value?: string;
  label?: string;
}) {
  if (isStatic) {
    return (
      <div>
        <div className="text-2xl font-semibold text-white md:text-3xl">{value}</div>
        <div className="mt-1 text-xs uppercase tracking-wider text-graphite-400">
          {label}
        </div>
      </div>
    );
  }
  // children: <CountUp /> <span>label</span>
  const childArr = Array.isArray(children) ? children : [children];
  return (
    <div>
      <div className="text-2xl font-semibold text-white md:text-3xl">
        {childArr[0]}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-graphite-400">
        {childArr[1]}
      </div>
    </div>
  );
}

/* ---------- Карточка аудита ---------- */

function HeroAuditCard() {
  const reduce = useReducedMotion();

  const checks = [
    { label: "Скорость", icon: Gauge },
    { label: "SEO", icon: Search },
    { label: "Структура", icon: Layout },
    { label: "Заявки", icon: ClipboardList },
    { label: "Доверие", icon: ShieldCheck },
    { label: "Мобильная версия", icon: Smartphone },
  ];

  const badges = [
    { label: "PageSpeed", value: 92, suffix: "" },
    { label: "SEO", value: "A", isStatic: true },
    { label: "Conversion", value: 34, prefix: "+", suffix: "%" },
    { label: "UX", value: "OK", isStatic: true },
  ];

  return (
    <div className="relative">
      {/* Размытое свечение позади карточки */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl bg-accent-gradient opacity-25 blur-3xl"
      />
      <div className="glow-border relative rounded-2xl border border-white/10 bg-graphite-900/85 p-6 shadow-card backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent-gradient text-white animate-glow-pulse">
              <ClipboardList size={16} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Аудит сайта</div>
              <div className="text-xs text-graphite-400">что проверяем</div>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-accent-indigo/30 bg-accent-indigo/10 px-2.5 py-1 text-[11px] font-medium text-accent-indigo">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-indigo opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-indigo" />
            </span>
            Live
          </span>
        </div>

        <ul className="mt-6 space-y-2.5">
          {checks.map(({ label, icon: Icon }, i) => (
            <motion.li
              key={label}
              initial={reduce ? { opacity: 1 } : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-graphite-800/40 px-3.5 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  size={15}
                  className="text-accent-indigo"
                  strokeWidth={1.75}
                />
                <span className="text-sm text-graphite-100">{label}</span>
              </div>
              <motion.span
                initial={reduce ? { scale: 1 } : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.7 + i * 0.08,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <CheckCircle2 size={15} className="text-emerald-400" />
              </motion.span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-6 grid grid-cols-2 gap-2.5 border-t border-white/5 pt-5"
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="rounded-lg border border-white/[0.06] bg-graphite-800/40 px-3 py-2.5"
            >
              <div className="text-[11px] uppercase tracking-wider text-graphite-400">
                {b.label}
              </div>
              <div className="mt-0.5 text-base font-semibold text-white">
                {b.isStatic ? (
                  (b.value as string)
                ) : (
                  <CountUp
                    to={b.value as number}
                    prefix={b.prefix}
                    suffix={b.suffix}
                    duration={1.2}
                  />
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
