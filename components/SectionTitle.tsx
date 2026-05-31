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
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <div className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-brand">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tightish text-ink sm:text-4xl md:text-[42px] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
