import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteContent } from "@/content/payload-journey-lab";

export function LabLogSection() {
  return (
    <Section id="lablog" className="border-y border-line bg-subtle">
      <div className="max-w-3xl">
        <SectionHeader
          eyebrow="LABLOG / YOUTUBE"
          title="LabLog"
          description="Acompanhe a investigacao em movimento: payloads, anomalias, decisoes, camadas e retorno a origem."
        />
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
