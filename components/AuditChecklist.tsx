import type { AuditItem } from "@/data/audit";

export default function AuditChecklist({ items }: { items: AuditItem[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, icon: Icon }) => (
        <li
          key={title}
          className="group flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5 shadow-card transition-colors hover:border-brand/40"
        >
          <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-brand-soft text-brand transition-colors">
            <Icon size={16} strokeWidth={1.75} />
          </div>
          <span className="text-sm font-medium text-ink-800">{title}</span>
        </li>
      ))}
    </ul>
  );
}
