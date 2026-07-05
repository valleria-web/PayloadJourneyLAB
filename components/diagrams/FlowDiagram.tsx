type FlowDiagramProps = {
  steps: string[];
};

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="overflow-hidden border border-line bg-subtle p-4">
      <div className="grid gap-3 md:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step} className="relative border border-line bg-white p-4">
            <p className="text-sm font-semibold">{step}</p>
            {index < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 items-center justify-center border border-line bg-white text-xs md:flex"
              >
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
