import type { AuditItem } from "@/data/audit";

export default function AuditChecklist({ items }: { items: AuditItem[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, icon: Icon }) => (
        <li
          key={title}
          className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-graphite-900/60 px-4 py-3.5 transition-colors hover:border-accent-violet/30"
        >
          <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-graphite-800 text-accent-violet transition-colors group-hover:border-accent-violet/40 group-hover:text-white">
            <Icon size={16} strokeWidth={1.75} />
          </div>
          <span className="text-sm font-medium text-graphite-100">{title}</span>
        </li>
      ))}
    </ul>
  );
}
