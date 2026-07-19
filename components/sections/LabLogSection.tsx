import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageAnchors, labLogContent } from "@/content/site";

export function LabLogSection() {
  return (
    <Section id={homepageAnchors.labLog} className="border-y border-line bg-subtle">
      <div className="max-w-3xl">
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
    </Section>
  );
}
