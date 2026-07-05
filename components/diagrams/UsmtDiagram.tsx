export function UsmtDiagram() {
  return (
    <div
      className="grid min-h-[380px] gap-4 overflow-hidden border border-line bg-white p-5"
      role="img"
      aria-label="Placeholder estrutural da USMT"
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-line p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-graphite">Estado</p>
          <p className="mt-2 font-semibold">S1 Observado</p>
        </div>
        <div className="border border-line p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-graphite">Evento</p>
          <p className="mt-2 font-semibold">E1 Payload emitido</p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="h-px bg-ink" />
        <span className="border border-line px-3 py-1 text-xs text-graphite">transição</span>
        <div className="h-px bg-ink" />
      </div>
      <div className="grid gap-3 border border-line p-4">
        {["UI boundary", "Application layer", "Domain invariant", "Persistence store"].map(
          (layer) => (
            <div key={layer} className="flex items-center justify-between border border-line p-3">
              <span className="text-sm font-medium">{layer}</span>
              <span className="size-3 rounded-full border border-ink" />
            </div>
          ),
        )}
      </div>
      <div className="flex items-end justify-between">
        <div className="border border-line px-4 py-3 text-sm text-graphite">limite</div>
        <div className="grid h-14 w-20 place-items-center border border-ink text-xs">DB</div>
      </div>
    </div>
  );
}
