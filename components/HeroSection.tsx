"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Check,
  Layout,
  Network,
  Smartphone,
  ClipboardList,
  LineChart,
} from "lucide-react";

import Container from "./Container";
import Button from "./Button";

/**
 * Светлый минималистичный hero с фокусом на аудит.
 * Справа — карточка "Что проверю". В подвале — противопоставление агентству.
 */
export default function HeroSection() {
  const reduce = useReducedMotion();

  const checks = [
    "Первый экран и оффер",
    "Структура и навигация",
    "SEO и поисковые запросы",
    "Мобильная версия и скорость",
    "Формы и кнопки заявок",
    "Аналитика и готовность к рекламе",
  ];

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light" />
      <Container className="relative">
        <div className="grid items-center gap-12 py-20 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Левая часть */}
          <div>
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-soft px-3 py-1.5 text-[13px] font-medium text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Аудит сайтов · разработка
            </motion.div>

            <motion.h1
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-[34px] font-bold leading-[1.05] tracking-extra-tight text-ink sm:text-[44px] md:text-[54px] lg:text-[58px]"
            >
              Покажу, почему сайт не приносит заявки —{" "}
              <span className="text-brand">и что исправить</span>
            </motion.h1>

            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              Разберу сайт как маркетолог и разработчик: первый экран, структура,
              SEO, мобильная версия, формы и готовность к рекламе. Дам понятный
              список, что чинить в первую очередь.
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="/audit" size="lg" icon={<ArrowRight size={16} />} className="btn-sheen">
                Заказать аудит
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Посмотреть, что входит
              </Button>
            </motion.div>

            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-x-7 gap-y-2"
            >
              {["Работаете напрямую со специалистом", "Без аккаунт-менеджеров"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-[13px] text-muted">
                  <Check size={15} className="text-brand" strokeWidth={2.5} />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Карточка "Что проверю" */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-line bg-white p-6 shadow-card md:p-7"
          >
            <div className="flex items-center gap-3 border-b border-line pb-4">
              <div className="grid h-9 w-9 place-items-center rounded-[9px] bg-brand-soft text-brand">
                <Search size={18} />
              </div>
              <div>
                <div className="text-[15px] font-bold text-ink">Что проверю</div>
                <div className="text-xs text-muted-light">на вашем сайте</div>
              </div>
            </div>
            <div className="pt-3">
              {checks.map((c, i) => (
                <motion.div
                  key={c}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.35 + i * 0.07 }}
                  className="flex items-center gap-3 py-2.5 text-sm text-ink-800"
                >
                  <Check size={16} className="flex-shrink-0 text-brand" strokeWidth={2.5} />
                  {c}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
