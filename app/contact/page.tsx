import type { Metadata } from "next";
import { Send, Mail } from "lucide-react";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

import { contacts } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Связаться с Degitlab для разработки сайта, SEO, аудита, рекламы или digital-консультации.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Контакты | Degitlab",
    description:
      "Связаться с Degitlab для разработки сайта, SEO, аудита, рекламы или digital-консультации.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Контакты"
            title={
              <>
                Обсудим ваш сайт{" "}
                <span className="text-gradient">или аудит</span>
              </>
            }
            description="Напишите в Telegram или на почту — отвечу обычно в течение рабочего дня. Можно также заполнить форму ниже."
          />
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Контактные карточки */}
            <div className="lg:col-span-5">
              <h2 className="text-xl font-semibold text-white">
                Прямые контакты
              </h2>
              <div className="mt-5 space-y-3">
                <a
                  href={contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-graphite-900/60 p-5 transition-all hover:-translate-y-0.5 hover:border-accent-indigo/30 hover:shadow-card-hover"
                >
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-accent-gradient text-white">
                    <Send size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-graphite-400">
                      Telegram
                    </div>
                    <div className="mt-0.5 text-base font-medium text-white">
                      {contacts.telegramHandle}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${contacts.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-graphite-900/60 p-5 transition-all hover:-translate-y-0.5 hover:border-accent-indigo/30 hover:shadow-card-hover"
                >
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-accent-gradient text-white">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-graphite-400">
                      Email
                    </div>
                    <div className="mt-0.5 text-base font-medium text-white">
                      {contacts.email}
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8 rounded-xl border border-white/[0.06] bg-graphite-900/40 p-5">
                <p className="text-sm leading-relaxed text-graphite-300">
                  Если хочется сразу получить разбор сайта в цифрах — переходите
                  на страницу аудита. Если нужно обсудить новый проект — пишите
                  в Telegram или заполняйте форму справа.
                </p>
              </div>
            </div>

            {/* Форма */}
            <div className="lg:col-span-7">
              <h2 className="text-xl font-semibold text-white">
                Форма заявки
              </h2>
              <p className="mt-2 text-sm text-graphite-300">
                Опишите задачу — свяжусь и согласуем формат работы.
              </p>
              <div className="mt-5">
                <ContactForm variant="contact" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
