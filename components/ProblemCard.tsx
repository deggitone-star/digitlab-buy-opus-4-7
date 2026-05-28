import { AlertCircle } from "lucide-react";

export default function ProblemCard({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="group flex gap-3.5 rounded-xl border border-white/[0.06] bg-graphite-900/40 p-5 transition-all duration-300 hover:border-white/15 hover:bg-graphite-900/70">
      <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-red-500/10 text-red-400">
        <AlertCircle size={17} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-sm leading-relaxed text-graphite-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
