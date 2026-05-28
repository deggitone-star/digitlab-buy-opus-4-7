import type { AuditItem } from "@/data/audit";

export default function AuditChecklist({ items }: { items: AuditItem[] }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {items.map(({ title, description, icon: Icon }) => (
        <li
          key={title}
          className="group flex gap-4 rounded-xl border border-white/[0.06] bg-graphite-900/60 p-5 transition-colors hover:border-accent-indigo/30"
        >
          <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-graphite-800 text-accent-indigo transition-colors group-hover:border-accent-indigo/40 group-hover:text-white">
            <Icon size={18} strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-graphite-300">
              {description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
