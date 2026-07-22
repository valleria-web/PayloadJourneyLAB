import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageAnchors } from "@/content/site";
import { usmtContent } from "@/content/usmt";

export function UsmtSection() {
  return (
    <Section id={homepageAnchors.usmt} className="border-y border-line bg-paper">
      <div className="grid gap-14 lg:gap-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow={usmtContent.eyebrow}
              title={usmtContent.title}
              description={usmtContent.lead}
            />
            <p className="mt-5 rounded-foundation-control border border-line bg-subtle p-4 text-base font-semibold leading-7 text-ink">
              {usmtContent.provenance}
            </p>
            <p className="mt-5 text-lg font-semibold leading-8 text-ink">
              {usmtContent.description}
            </p>
            <p className="mt-4 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {usmtContent.indexableContext}
            </p>
          </div>
          <Card className="bg-subtle">
            <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
              Pergunta central
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-8 text-ink">
              {usmtContent.centralQuestion}
            </h3>
            <p className="mt-4 border-l-2 border-accent-readable pl-4 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {usmtContent.centralAnswer}
            </p>
          </Card>
        </div>

        <div>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-ink">{usmtContent.elementsHeading}</h3>
            <p className="mt-3 text-base leading-7 text-graphite">
              {usmtContent.elementsDescription}
            </p>
          </div>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {usmtContent.elements.map((element) => (
              <li
                key={element.id}
                id={`usmt-element-${element.id}`}
                className="grid min-h-36 content-start rounded-foundation-control border border-line bg-white p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-technical-sm font-semibold text-accent-readable">
                    {element.number}
                  </span>
                  <span
                    lang="en"
                    className="font-mono text-[calc(0.68rem+2px)] uppercase tracking-technical text-graphite"
                  >
                    {element.englishTerm}
                  </span>
                </div>
                <h4 className="mt-4 text-base font-bold leading-6 text-ink">{element.title}</h4>
                <p className="mt-2 text-sm leading-6 text-graphite">{element.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-foundation-card border border-line bg-subtle p-5 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-ink">{usmtContent.lensesHeading}</h3>
            <p className="mt-3 text-base leading-7 text-graphite">
              {usmtContent.lensesDescription}
            </p>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {usmtContent.lenses.map((lens, index) => (
              <li key={lens.id} id={`usmt-lens-${lens.id}`} className="h-full">
                <Card className="h-full bg-white" hover="technical">
                  <div className="flex items-start justify-between gap-4">
                    <span lang="en" className="font-mono text-xl font-bold text-ink">
                      {lens.label}
                    </span>
                    <span className="font-mono text-technical-sm text-accent-readable">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-technical text-accent-readable">
                    {lens.action}
                  </p>
                  <h4 className="mt-5 text-lg font-semibold leading-7 text-ink">{lens.question}</h4>
                  <p className="mt-3 text-sm leading-6 text-graphite">{lens.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {lens.observes.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-subtle px-3 py-1 text-xs text-graphite"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-ink">{usmtContent.connection.title}</h3>
            <p className="mt-3 text-base leading-7 text-graphite">
              {usmtContent.connection.description}
            </p>
          </div>
          <ol className="mt-8 grid gap-3 lg:grid-cols-4">
            {usmtContent.connection.steps.map((step) => (
              <li
                key={step.id}
                id={`usmt-connection-${step.id}`}
                className="relative rounded-foundation-control border border-line bg-white p-5 lg:[&:not(:last-child)]:after:absolute lg:[&:not(:last-child)]:after:-right-3 lg:[&:not(:last-child)]:after:top-1/2 lg:[&:not(:last-child)]:after:z-10 lg:[&:not(:last-child)]:after:-translate-y-1/2 lg:[&:not(:last-child)]:after:text-lg lg:[&:not(:last-child)]:after:text-accent-readable lg:[&:not(:last-child)]:after:content-['→']"
              >
                <span className="font-mono text-technical-sm font-semibold text-accent-readable">
                  {step.number}
                </span>
                <h4 className="mt-3 text-lg font-semibold text-ink">{step.label}</h4>
                <p className="mt-2 text-sm leading-6 text-graphite">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-4xl text-sm leading-6 text-graphite">
            {usmtContent.connection.conclusion}
          </p>
        </div>

        <div className="rounded-foundation-card bg-ink p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-terminal">
              {usmtContent.protocolTransition.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-9">
              {usmtContent.protocolTransition.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              {usmtContent.protocolTransition.description}
            </p>
          </div>
          <ol className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-0 lg:min-w-[25rem]">
            {usmtContent.protocolTransition.steps.map((step, index) => (
              <li
                key={step}
                className="rounded-foundation-control border border-white/20 px-3 py-3 text-center"
              >
                <span className="block font-mono text-xs text-terminal">0{index + 1}</span>
                <span className="mt-1 block text-sm font-semibold">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
