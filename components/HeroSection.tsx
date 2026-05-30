"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Search, Rocket, Wrench, LayoutPanelTop } from "lucide-react";

import Container from "./Container";
import Button from "./Button";
import AnimatedBackground from "./AnimatedBackground";

/**
 * Упрощённый бизнесовый hero (по новому ТЗ):
 * - Понятный оффер про сайты/лендинги и заявки
 * - Без графа процесса — вместо него простая карточка с 4 услугами
 * - Сохранён bloom-фон и скруглённый контейнер
 */
export default function HeroSection() {
  const reduce = useReducedMotion();

  const services = [
    { label: "Аудит сайта", icon: Search },
    { label: "Быстрый лендинг", icon: Rocket },
    { label: "Доработка сайта", icon: Wrench },
    { label: "Сайт для бизнеса", icon: LayoutPanelTop },
  ];

  return (
    <div className="px-4 pt-6 md:px-6 md:pt-8">
      <section className="hero-shell relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] md:rounded-[32px]">
        <AnimatedBackground />

        <Container className="relative px-6 pb-16 pt-12 md:px-10 md:pb-20 md:pt-16 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
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
                Личная digital-практика
              </motion.div>

              <motion.h1
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-7 text-[34px] font-bold leading-[1.05] tracking-extra-tight text-white sm:text-[44px] md:text-[54px] lg:text-[58px]"
              >
                Сайты и лендинги, которые понятно объясняют бизнес и{" "}
                <span className="text-gradient">приводят к заявке</span>
              </motion.h1>

              <motion.p
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-7 max-w-xl text-base leading-relaxed text-graphite-300 md:text-lg"
              >
                Много лет работал с крупными digital-проектами в корпоративной
                среде. Сейчас запускаю собственную практику и помогаю малому и
                B2B-бизнесу: аудит сайта, лендинги, SEO-структура, аналитика и
                подготовка к рекламе.
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
                <Button href="/contact" variant="secondary" size="lg">
                  Обсудить проект
                </Button>
              </motion.div>
            </div>

            {/* Карточка с 4 услугами вместо графа */}
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                aria-hidden
                className="absolute -inset-6 rounded-3xl bg-brand-gradient opacity-20 blur-3xl"
              />
              <div className="glass-card relative rounded-2xl p-6 shadow-card md:p-7">
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-graphite-300">
                  С чего можно начать
                </div>
                <div className="mt-5 grid gap-3">
                  {services.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <motion.div
                        key={s.label}
                        initial={reduce ? { opacity: 1 } : { opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-accent-violet/30"
                      >
                        <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-brand-gradient text-white">
                          <Icon size={16} strokeWidth={2} />
                        </div>
                        <span className="text-sm font-medium text-white">
                          {s.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-graphite-400">
                  Не обязательно сразу заказывать большой сайт — можно начать с
                  аудита или одной страницы.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Полоса опыта */}
        <div className="relative z-[5] border-t border-white/8">
          <Container className="flex flex-wrap items-center justify-between gap-6 px-6 py-5 md:px-10 md:py-6 lg:px-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-graphite-300">
              Корпоративный опыт · своя практика
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium tracking-tightish text-white/55">
              {["Сайты", "Лендинги", "SEO", "Аналитика", "Реклама"].map((t) => (
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
