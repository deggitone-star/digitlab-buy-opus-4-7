import type { Metadata } from "next";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CaseCard from "@/components/CaseCard";
import CTASection from "@/components/CTASection";

import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Кейсы и примеры работ",
  description:
    "Примеры сайтов, SEO-структур, каталогов, AI-визуалов и digital-решений для бизнеса.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "Кейсы и примеры работ | Degitlab",
    description:
      "Примеры сайтов, SEO-структур, каталогов, AI-визуалов и digital-решений для бизнеса.",
    url: "/cases",
  },
};

export default function CasesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <Container className="relative py-20 md:py-28">
          <SectionTitle
            eyebrow="Работы"
            title={
              <>
                Демо-проекты и{" "}
                <span className="text-gradient">направления работ</span>
              </>
            }
            description="Живые демонстрационные сайты под разные ниши — их можно открыть и потрогать. Честно помечаю: это демо-проекты, показывающие подход к структуре и дизайну, а не реальные клиентские запуски."
          />
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <CaseCard key={c.id} data={c} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Хотите такой же подход к своему проекту?"
        description="Расскажите задачу — предложу решение и формат работы под ваш бизнес."
      />
    </>
  );
}
