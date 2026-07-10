import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function WhitePapersSection() {
  return (
    <Section id="lablog" className="border-y border-line bg-subtle">
      <div className="max-w-3xl">
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-accent">
          LABLOG / YOUTUBE
        </p>
        <h2 className="text-3xl font-bold tracking-normal text-ink sm:text-4xl">LabLog</h2>
        <p className="mt-5 text-base leading-7 text-graphite sm:text-lg sm:leading-8">
          Acompanhe a investigacao em movimento: payloads, anomalias, decisoes, camadas e retorno a
          origem.
        </p>
        <div className="mt-8">
          <Button
            href={siteContent.hero.secondaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <Play aria-hidden="true" className="size-4" />
            Assistir ao LabLog
          </Button>
        </div>
      </div>
    </Section>
  );
}
