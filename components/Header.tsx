"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "@/data/navigation";
import Container from "./Container";

/**
 * Header в стиле Marketeam: компактный pill-bar навигации по центру,
 * белая CTA-кнопка справа, логотип-градиент слева.
 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-graphite-950/80 backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-8 w-8 animate-glow-pulse place-items-center rounded-lg bg-brand-gradient text-sm font-extrabold text-white transition-transform group-hover:scale-105">
              D
            </span>
            <span className="text-base font-bold tracking-tightish text-white">
              Degitlab
            </span>
          </Link>

          {/* Pill-навигация */}
          <nav className="hidden items-center md:flex">
            <div className="pill-nav flex gap-1 rounded-full p-1">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-white/8 text-white"
                        : "text-graphite-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/audit"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-graphite-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(255,255,255,0.4)]"
            >
              Получить аудит
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-md text-graphite-200 hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-white/5 pb-6 pt-2 md:hidden">
            <nav className="flex flex-col">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-3 text-base font-medium transition-colors ${
                      active
                        ? "bg-white/5 text-white"
                        : "text-graphite-200 hover:bg-white/5 hover:text-white"
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
                className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-graphite-950"
              >
                Получить аудит
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
