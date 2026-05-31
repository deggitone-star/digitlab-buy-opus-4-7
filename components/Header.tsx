"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/data/navigation";
import Container from "./Container";

/**
 * Светлый минималистичный header: белый фон, графитовый логотип,
 * тёмная CTA-кнопка (синеет при наведении).
 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/80 backdrop-blur-lg">
      <Container>
        <div className="flex h-[68px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid h-[30px] w-[30px] place-items-center rounded-lg bg-brand text-[15px] font-extrabold text-white transition-transform group-hover:scale-105">
              D
            </span>
            <span className="text-[17px] font-bold tracking-tightish text-ink">
              Degitlab
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    active ? "text-ink" : "text-muted hover:bg-surface-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/audit"
              className="group inline-flex items-center gap-2 rounded-[9px] bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand"
            >
              Заказать аудит
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-surface-soft md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-line pb-6 pt-2 md:hidden">
            <nav className="flex flex-col">
              {navigation.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      active ? "bg-surface-soft text-ink" : "text-muted hover:bg-surface-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 px-1">
              <Link
                href="/audit"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-[10px] bg-ink px-4 py-3 text-sm font-semibold text-white"
              >
                Заказать аудит
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
