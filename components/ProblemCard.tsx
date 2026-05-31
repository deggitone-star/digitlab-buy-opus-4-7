import { AlertCircle } from "lucide-react";

export default function ProblemCard({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="group flex gap-3.5 rounded-xl border border-line bg-white p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-card">
      <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-red-50 text-red-500">
        <AlertCircle size={17} strokeWidth={1.9} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        {description && (
          <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
        )}
      </div>
    </div>
  );
}
