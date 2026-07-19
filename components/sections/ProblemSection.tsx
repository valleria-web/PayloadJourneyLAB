import { Card } from "@/components/ui/Card";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageEntry } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function ProblemSection() {
  const { problem } = homepageEntry;

  return (
    <Section
      id={homepageAnchors.learn}
      variant="soft"
      className="border-b border-line"
    >
      <SectionHeader
        eyebrow={problem.eyebrow}
        eyebrowTone="readable"
        title={problem.title}
        description={problem.description}
      />
      <p className="mt-4 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
        {problem.supportingText}
      </p>

      <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {problem.steps.map((step) => (
          <li key={step.id}>
            <Card className="h-full">
              <span className="font-mono text-technical-lg font-semibold text-accent-readable">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{step.description}</p>
            </Card>
          </li>
        ))}
      </ol>

      <HighlightPanel
        variant="dark"
        className="mt-6 border-white/15 !bg-ink px-6 py-7 sm:px-8"
      >
        <p className="max-w-3xl text-xl font-semibold leading-8 text-white sm:text-2xl">
          {problem.result}
        </p>
      </HighlightPanel>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          { ...problem.comparison.withoutTracing, tone: "neutral" },
          { ...problem.comparison.withTracing, tone: "technical" },
        ].map((comparison) => (
          <Card
            key={comparison.title}
            className={
              comparison.tone === "technical"
                ? "border-accent-readable/30 bg-accent-muted/60"
                : "bg-surface-card/70"
            }
          >
            <h3 className="text-xl font-bold text-ink">{comparison.title}</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-text-muted sm:text-base">
              {comparison.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-accent-readable"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
