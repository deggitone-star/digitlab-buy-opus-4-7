import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-graphite-200">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-indigo" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tightish text-white sm:text-4xl md:text-[44px] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-graphite-300 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
