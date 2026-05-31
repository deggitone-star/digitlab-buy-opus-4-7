import { type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  price?: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  bullets,
  price,
}: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-card-hover md:p-7">
      <div className="mb-5 flex items-center justify-between">
        <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
          <Icon size={20} strokeWidth={1.9} />
        </div>
        {price && (
          <span className="rounded-lg border border-line bg-surface-soft px-3 py-1.5 text-sm font-bold text-ink">
            {price}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold tracking-tightish text-ink">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-5 space-y-2 border-t border-line pt-5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
