"use client";

import {
  Search,
  LayoutGrid,
  Palette,
  Code2,
  BarChart3,
  Target,
  LineChart,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type NodeId =
  | "audit"
  | "structure"
  | "design"
  | "dev"
  | "seo"
  | "ads"
  | "analytics"
  | "leads";

type GraphNode = {
  id: NodeId;
  label: string;
  step: string;
  icon: LucideIcon;
  // Позиция в процентах внутри контейнера
  top: string;
  left: string;
  // Цвет иконки
  iconGradient: string;
  delay: number;
};

const nodes: GraphNode[] = [
  {
    id: "audit",
    label: "Аудит",
    step: "01",
    icon: Search,
    top: "8%",
    left: "0%",
    iconGradient: "from-accent-indigo to-accent-violet",
    delay: 0,
  },
  {
    id: "structure",
    label: "Структура",
    step: "02",
    icon: LayoutGrid,
    top: "4%",
    left: "42%",
    iconGradient: "from-accent-violet to-accent-magenta",
    delay: 0.15,
  },
  {
    id: "design",
    label: "Дизайн",
    step: "03",
    icon: Palette,
    top: "18%",
    left: "70%",
    iconGradient: "from-accent-magenta to-pink-400",
    delay: 0.3,
  },
  {
    id: "dev",
    label: "Разработка",
    step: "04",
    icon: Code2,
    top: "38%",
    left: "10%",
    iconGradient: "from-accent-blue to-accent-indigo",
    delay: 0.45,
  },
  {
    id: "seo",
    label: "SEO",
    step: "05",
    icon: BarChart3,
    top: "48%",
    left: "52%",
    iconGradient: "from-accent-indigo to-blue-400",
    delay: 0.6,
  },
  {
    id: "ads",
    label: "Реклама",
    step: "06",
    icon: Target,
    top: "66%",
    left: "0%",
    iconGradient: "from-accent-orange to-accent-magenta",
    delay: 0.75,
  },
  {
    id: "analytics",
    label: "Аналитика",
    step: "07",
    icon: LineChart,
    top: "68%",
    left: "42%",
    iconGradient: "from-accent-peach to-accent-orange",
    delay: 0.9,
  },
  {
    id: "leads",
    label: "Заявки",
    step: "+34% conv",
    icon: CheckCircle2,
    top: "84%",
    left: "28%",
    iconGradient: "from-accent-orange to-yellow-400",
    delay: 1.05,
  },
];

/**
 * Граф процесса: 8 узлов, соединённых анимированными линиями.
 * Финальный узел "Заявки" с пульсирующим оранжевым свечением.
 */
export default function ProcessGraph() {
  return (
    <div className="relative h-[460px] w-full md:h-[560px]">
      {/* SVG со связями */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(124, 91, 255, 0.6)" />
            <stop offset="50%" stopColor="rgba(197, 102, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 138, 76, 0.6)" />
          </linearGradient>
        </defs>

        {/* Связи между узлами */}
        <path
          d="M 14,12 Q 28,4 50,8"
          stroke="url(#edgeGradient)"
          strokeWidth="0.4"
          fill="none"
        />
        <path
          d="M 64,8 Q 78,14 84,22"
          stroke="url(#edgeGradient)"
          strokeWidth="0.4"
          fill="none"
        />
        <path
          d="M 84,24 Q 60,30 24,42"
          stroke="url(#edgeGradient)"
          strokeWidth="0.4"
          fill="none"
        />
        <path
          d="M 24,42 Q 44,46 60,52"
          stroke="url(#edgeGradient)"
          strokeWidth="0.4"
          fill="none"
        />
        <path
          d="M 60,55 Q 38,62 14,70"
          stroke="url(#edgeGradient)"
          strokeWidth="0.4"
          fill="none"
        />
        <path
          d="M 14,70 Q 30,72 50,72"
          stroke="url(#edgeGradient)"
          strokeWidth="0.4"
          fill="none"
        />
        <path
          d="M 50,75 Q 44,82 36,88"
          stroke="url(#edgeGradient)"
          strokeWidth="0.4"
          fill="none"
        />

        {/* Бегущая точка по всему пути */}
        <circle r="0.7" fill="white" style={{ filter: "drop-shadow(0 0 4px #7C5BFF)" }}>
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M 14,12 Q 28,4 50,8 Q 78,14 84,22 Q 60,30 24,42 Q 44,46 60,52 Q 38,62 14,70 Q 30,72 50,72 Q 44,82 36,88"
          />
        </circle>
      </svg>

      {/* Узлы */}
      {nodes.map((n) => {
        const isLeads = n.id === "leads";
        const Icon = n.icon;
        return (
          <div key={n.id}>
            {/* Пульсирующие кольца только у финального узла */}
            {isLeads && (
              <div
                className="pointer-events-none absolute z-[1]"
                style={{ top: n.top, left: n.left }}
                aria-hidden
              >
                <div className="absolute -inset-2 animate-pulse-ring rounded-2xl border border-accent-orange" />
                <div
                  className="absolute -inset-2 animate-pulse-ring rounded-2xl border border-accent-orange"
                  style={{ animationDelay: "1.25s" }}
                />
              </div>
            )}

            {/* "Result →" метка над финальным узлом */}
            {isLeads && (
              <div
                className="absolute z-[3] font-mono text-[10px] text-accent-orange"
                style={{ top: "76%", left: "30%", opacity: 0, animation: "fade-up 0.5s ease-out 1.5s forwards" }}
              >
                <span className="rounded-full border border-accent-orange/30 bg-accent-orange/10 px-2 py-0.5">
                  Result →
                </span>
              </div>
            )}

            {/* Сам узел */}
            <div
              className={`group absolute z-[2] flex min-w-[120px] animate-node-appear items-center gap-2.5 rounded-xl border px-3 py-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 md:min-w-[130px] md:gap-3 md:px-3.5 md:py-2.5 ${
                isLeads
                  ? "border-accent-orange/40 bg-gradient-to-br from-accent-orange/20 to-accent-magenta/20 shadow-glow-orange"
                  : "border-white/10 bg-graphite-800/85 shadow-card hover:border-white/25"
              }`}
              style={{ top: n.top, left: n.left, animationDelay: `${n.delay}s` }}
            >
              <div
                className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-md bg-gradient-to-br ${n.iconGradient}`}
              >
                <Icon size={14} className="text-white" strokeWidth={2.2} />
              </div>
              <div>
                <div
                  className={`text-xs font-semibold leading-tight tracking-tightish md:text-[13px] ${
                    isLeads ? "text-gradient" : "text-white"
                  }`}
                >
                  {n.label}
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-graphite-300">
                  {n.step}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
