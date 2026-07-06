const labels = ["UI", "Application", "Domain", "Persistence"];

export function PayloadJourneyDiagram() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-sm border border-line bg-white p-5 sm:min-h-[420px] sm:p-6">
      <div className="grid gap-3">
        {labels.map((label) => (
          <div key={label} className="flex items-center justify-between rounded-sm border border-line p-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite">
              {label}
            </span>
            <span className="h-px w-16 bg-line sm:w-24" />
          </div>
        ))}
      </div>
      <svg
        className="absolute inset-x-5 bottom-16 top-24 h-auto w-[calc(100%-2.5rem)] sm:inset-x-6 sm:bottom-10 sm:w-[calc(100%-3rem)]"
        viewBox="0 0 460 260"
        role="img"
        aria-label="Diagrama abstrato da jornada de um payload"
      >
        <path
          d="M26 218 C110 188, 92 90, 180 112 S294 214, 378 86 S424 44, 438 40"
          fill="none"
          stroke="#0f766e"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {[26, 180, 292, 378, 438].map((cx, index) => (
          <g key={cx}>
            <circle
              cx={cx}
              cy={[218, 112, 176, 86, 40][index]}
              r={index === 0 || index === 4 ? 9 : 7}
              fill="#ffffff"
              stroke="#0a0a0a"
              strokeWidth="2"
            />
            <circle cx={cx} cy={[218, 112, 176, 86, 40][index]} r="2.5" fill="#0a0a0a" />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 text-xs text-graphite sm:bottom-6 sm:left-6 sm:right-6 sm:gap-3">
        <span className="rounded-sm border border-line bg-white p-2">origin</span>
        <span className="rounded-sm border border-line bg-white p-2">checkpoint</span>
        <span className="rounded-sm border border-line bg-white p-2">effect</span>
      </div>
    </div>
  );
}
