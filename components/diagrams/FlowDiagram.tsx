type FlowDiagramProps = {
  steps: string[];
};

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="overflow-hidden rounded-sm border border-line bg-subtle p-4">
      <ol className="grid gap-3 md:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step} className="relative rounded-sm border border-line bg-white p-4">
            <p className="text-xs text-muted">0{index + 1}</p>
            <p className="mt-3 text-sm font-semibold leading-5">{step}</p>
            {index < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-xs text-accent md:flex"
              >
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
