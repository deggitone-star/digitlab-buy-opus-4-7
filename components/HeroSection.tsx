"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "./Container";
import Button from "./Button";
import AnimatedBackground from "./AnimatedBackground";
import ProcessGraph from "./ProcessGraph";
import CountUp from "./CountUp";

/**
 * Hero в стиле Marketeam:
 * - Скруглённый контейнер с тенью и bloom-градиентом внутри
 * - Огромная типографика с акцентом в брендовом градиенте
 * - Справа — граф процесса (8 узлов соединённых линиями)
 * - Внизу — полоса компетенций
 */
export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <div className="px-4 pt-6 md:px-6 md:pt-8">
      <section className="hero-shell relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] md:rounded-[32px]">
        <AnimatedBackground />

        <Container className="relative px-6 pb-16 pt-12 md:px-10 md:pb-20 md:pt-16 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            {/* Левая часть */}
            <div>
              <motion.div
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-graphite-200 backdrop-blur-sm"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Сайты как инструмент продаж
              </motion.div>

              <motion.h1
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-7 text-[40px] font-bold leading-[0.98] tracking-extra-tight text-white sm:text-[52px] md:text-[64px] lg:text-[72px]"
              >
                Сайты, SEO и digital-система{" "}
                <span className="text-gradient">которая приводит заявки</span>
              </motion.h1>

              <motion.p
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-7 max-w-xl text-base leading-relaxed text-graphite-300 md:text-lg"
              >
                Помогаю малому и B2B-бизнесу превратить сайт из формальности в
                рабочий инструмент продаж: структура, SEO, реклама, контент,
                аналитика и понятные цифры.
              </motion.p>

              <motion.div
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-9 flex flex-wrap gap-3"
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

              <motion.div
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-12 flex gap-10 md:gap-12"
              >
                <Metric>
                  <CountUp to={6} suffix="+" />
                  <span>лет в digital</span>
                </Metric>
                <Metric isStatic value="Сайты" label="SEO · реклама" />
                <Metric isStatic value="B2B" label="и малый бизнес" />
              </motion.div>
            </div>

            {/* Граф процесса */}
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <ProcessGraph />
            </motion.div>
          </div>
        </Container>

        {/* Полоса компетенций */}
        <div className="relative z-[5] border-t border-white/8">
          <Container className="flex flex-wrap items-center justify-between gap-6 px-6 py-5 md:px-10 md:py-6 lg:px-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-graphite-300">
              Стек и компетенции
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium tracking-tightish text-white/55">
              {[
                "Next.js",
                "SEO",
                "Performance",
                "Аналитика",
                "AI-визуалы",
                "Автоматизация",
              ].map((t) => (
                <span
                  key={t}
                  className="cursor-default transition-colors hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </Container>
        </div>
      </section>
    </div>
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
        <div className="bg-gradient-to-br from-white to-graphite-300 bg-clip-text text-3xl font-bold leading-none tracking-tightish text-transparent md:text-[32px]">
          {value}
        </div>
        <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-graphite-300">
          {label}
        </div>
      </div>
    );
  }
  const arr = Array.isArray(children) ? children : [children];
  return (
    <div>
      <div className="bg-gradient-to-br from-white to-graphite-300 bg-clip-text text-3xl font-bold leading-none tracking-tightish text-transparent md:text-[32px]">
        {arr[0]}
      </div>
      <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-graphite-300">
        {arr[1]}
      </div>
    </div>
  );
}
