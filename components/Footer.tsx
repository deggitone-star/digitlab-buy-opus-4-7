import Link from "next/link";
import { Send, Mail } from "lucide-react";
import { navigation, contacts } from "@/data/navigation";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface-soft">
      <Container>
        <div className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-bold text-white">
                D
              </span>
              <span className="text-base font-semibold tracking-tightish text-ink">
                Degitlab
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Сайты и лендинги для малого и B2B-бизнеса. Начинаем с аудита: покажу,
              что мешает заявкам, и помогу исправить.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-light">
              Навигация
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-700 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-light">
              Контакты
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-700 transition-colors hover:text-brand"
                >
                  <Send size={15} className="text-brand" />
                  Telegram: {contacts.telegramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contacts.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-700 transition-colors hover:text-brand"
                >
                  <Mail size={15} className="text-brand" />
                  {contacts.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-line py-6 text-xs text-muted-light sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Degitlab. Все права защищены.</p>
          <p>Аудит · лендинги · доработка · сайты для бизнеса.</p>
        </div>
      </Container>
    </footer>
  );
}
