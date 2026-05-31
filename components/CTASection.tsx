import { Send } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { contacts } from "@/data/navigation";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Начнём с аудита?",
  description = "Пришлите ссылку на сайт — посмотрю и покажу, что мешает заявкам. Дальше решите сами, что делать.",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink p-8 md:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.07]" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tightish text-white sm:text-4xl md:text-[42px] md:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white"
              >
                Заказать аудит
              </a>
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/20 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
              >
                <Send size={16} />
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
