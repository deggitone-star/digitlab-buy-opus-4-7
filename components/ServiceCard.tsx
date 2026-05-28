import { type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  bullets,
}: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-white/[0.06] bg-graphite-900/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-indigo/30 hover:shadow-card-hover md:p-7">
      <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-graphite-800 text-accent-indigo transition-colors group-hover:border-accent-indigo/40 group-hover:text-white">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-semibold tracking-tightish text-white">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-graphite-300">
        {description}
      </p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-sm text-graphite-200"
            >
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-indigo" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
