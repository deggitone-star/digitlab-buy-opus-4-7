/**
 * Многослойный анимированный фон в стиле Marketeam:
 * - 4 крупных blob'а: violet, magenta, orange, indigo
 * - тонкая сетка с маской по центру
 * - тёмная виньетка для глубины
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Blob: фиолетовый — верх-лево */}
      <div className="absolute -top-[15%] left-[20%] h-[700px] w-[700px] animate-blob-drift rounded-full bg-[radial-gradient(circle,#7C5BFF_0%,transparent_60%)] opacity-85 blur-3xl" />

      {/* Blob: маджента — верх-право */}
      <div className="absolute top-[10%] right-[5%] h-[600px] w-[600px] animate-blob-drift-2 rounded-full bg-[radial-gradient(circle,#C566FF_0%,transparent_60%)] opacity-85 blur-3xl" />

      {/* Blob: оранжевый — низ-центр */}
      <div className="absolute -bottom-[10%] left-[35%] h-[550px] w-[550px] animate-blob-drift-3 rounded-full bg-[radial-gradient(circle,#FF8A4C_0%,transparent_60%)] opacity-50 blur-3xl" />

      {/* Blob: индиго — лево */}
      <div className="absolute top-[30%] -left-[5%] h-[500px] w-[500px] animate-blob-drift rounded-full bg-[radial-gradient(circle,#5B5BF6_0%,transparent_60%)] opacity-55 blur-3xl" style={{ animationDirection: "reverse" }} />

      {/* Сетка */}
      <div className="absolute inset-0 bg-grid-masked" />

      {/* Виньетка */}
      <div className="absolute inset-0 vignette" />
    </div>
  );
}
