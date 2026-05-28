/**
 * Многослойный анимированный фон для hero-секций.
 * Состоит из:
 *  - градиентных "blob"-пятен, медленно дрейфующих
 *  - анимированной сетки
 *  - радиальной маски (затемнение к краям)
 *
 * Полностью на CSS — без JS, без перерисовок.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Анимированная сетка */}
      <div className="absolute inset-0 bg-grid-animated opacity-60" />

      {/* Blob 1 — индиго, верх-лево */}
      <div className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-accent-indigo/30 blur-3xl animate-blob-drift" />

      {/* Blob 2 — фиолетовый, верх-право */}
      <div className="absolute -top-20 -right-10 h-[24rem] w-[24rem] rounded-full bg-accent-violet/25 blur-3xl animate-blob-drift-2" />

      {/* Blob 3 — синий, центр-низ (тонкий) */}
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent-blue/20 blur-3xl animate-blob-drift" style={{ animationDelay: "-6s" }} />

      {/* Виньетка для глубины */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0B0F_85%)]" />
    </div>
  );
}
