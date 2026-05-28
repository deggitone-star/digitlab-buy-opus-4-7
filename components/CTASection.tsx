import { Send } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { contacts } from "@/data/navigation";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Хотите понять, что сейчас мешает вашему сайту получать заявки?",
  description = "Напишите в Telegram или закажите аудит — посмотрю сайт и покажу, что можно исправить в цифрах.",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-graphite-900 p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-hero-radial opacity-80"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid opacity-40"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tightish text-white sm:text-4xl md:text-[42px] md:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite-300 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={contacts.telegram}
                external
                size="lg"
                icon={<Send size={16} />}
              >
                Написать в Telegram
              </Button>
              <Button href="/audit" variant="secondary" size="lg">
                Получить аудит сайта
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
