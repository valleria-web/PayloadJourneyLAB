import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageAnchors, labLogContent } from "@/content/site";

export function LabLogSection() {
  return (
    <Section id={homepageAnchors.labLog} className="border-y border-line bg-subtle">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
        <SectionHeader
          eyebrow={labLogContent.eyebrow}
          title={labLogContent.title}
          description={labLogContent.description}
        />
        <div className="mt-8">
          <Button
            href={labLogContent.action.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <Play aria-hidden="true" className="size-4" />
            {labLogContent.action.label}
          </Button>
        </div>
        </div>
        <div className="rounded-foundation-card border border-line bg-white p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-ink">Temas acompanhados</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {labLogContent.themes.map((theme) => (
              <li
                key={theme}
                className="rounded-full border border-line bg-subtle px-3 py-2 text-sm text-graphite"
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
