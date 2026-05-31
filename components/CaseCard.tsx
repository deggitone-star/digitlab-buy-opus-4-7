import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Case } from "@/data/cases";

export default function CaseCard({ data }: { data: Case }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-card-hover md:p-7">
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-line bg-surface-soft px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted">
          {data.tag}
        </span>
        {data.demoUrl && (
          <span className="rounded-full border border-brand/30 bg-brand-soft px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-brand">
            живое демо
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold tracking-tightish text-ink">{data.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{data.subtitle}</p>

      <div className="mt-5 space-y-4 border-t border-line pt-5">
        <Block label="Задача ниши" text={data.problem} />
        <Block label="Что важно показать" text={data.showWhat} />
        <Block label="Какая структура нужна" text={data.structure} />
        <Block label="Как ведём к заявке" text={data.toLead} />
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
        {data.demoUrl && (
          <a
            href={data.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[9px] bg-ink px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand"
          >
            Открыть демо
            <ExternalLink size={14} />
          </a>
        )}
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
        >
          Обсудить похожий проект
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-light">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{text}</p>
    </div>
  );
}
