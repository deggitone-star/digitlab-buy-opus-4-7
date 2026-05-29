import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Case } from "@/data/cases";

export default function CaseCard({ data }: { data: Case }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-graphite-900/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-violet/30 hover:shadow-card-hover md:p-7">
      <div className="mb-5 flex items-center gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-graphite-200">
          {data.tag}
        </span>
        {data.demoUrl && (
          <span className="rounded-full border border-accent-violet/30 bg-accent-violet/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-accent-violet">
            живое демо
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold tracking-tightish text-white">
        {data.title}
      </h3>

      <div className="mt-5 space-y-4 border-t border-white/5 pt-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-graphite-400">
            Задача
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-graphite-200">
            {data.problem}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-graphite-400">
            Решение
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-graphite-200">
            {data.solution}
          </p>
        </div>
        {data.improvements.length > 0 && (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-graphite-400">
              Что сделано
            </p>
            <ul className="mt-2 space-y-1.5">
              {data.improvements.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2.5 text-sm text-graphite-200"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-violet" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
        {data.demoUrl && (
          <a
            href={data.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-graphite-950 transition-transform hover:-translate-y-0.5"
          >
            Открыть демо
            <ExternalLink size={14} />
          </a>
        )}
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-violet transition-colors hover:text-accent-magenta"
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
