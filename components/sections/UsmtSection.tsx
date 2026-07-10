import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function UsmtSection() {
  return (
    <Section id="usmt" className="border-y border-line bg-subtle">
      <div className="grid gap-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow={siteContent.usmt.subtitle}
            title={siteContent.usmt.title}
            description={siteContent.usmt.description}
          />
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex max-w-2xl flex-wrap gap-2 lg:justify-end">
              {siteContent.usmt.elements.map((element) => (
                <span
                  key={element}
                  className="border border-line bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-graphite"
                >
                  {element}
                </span>
              ))}
            </div>
            <Button href="#lablog">{siteContent.usmt.action}</Button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {siteContent.usmt.steps.map((step) => (
            <article key={step.number} className="border border-line bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-sm font-semibold text-graphite">
                  {step.number}
                </span>
                <span className="text-2xl" aria-hidden="true">
                  {step.icon}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-graphite">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
