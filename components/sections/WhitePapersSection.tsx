import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function WhitePapersSection() {
  return (
    <Section id="white-papers">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          title={siteContent.whitePapers.title}
          description={siteContent.whitePapers.description}
        />
        <Button disabled variant="secondary" className="w-fit">
          {siteContent.whitePapers.action.label}
          {siteContent.whitePapers.action.status ? ` - ${siteContent.whitePapers.action.status}` : null}
        </Button>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {siteContent.whitePapers.items.map((paper) => (
          <Card key={paper.id} className="flex min-h-80 flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite">
                  {paper.id}
                </p>
                <p className="mt-2 text-xs text-graphite">{paper.type}</p>
              </div>
              <span className="border border-line px-2 py-1 text-xs text-graphite">
                {paper.status}
              </span>
            </div>
            <h3 className="mt-8 text-xl font-semibold">{paper.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-6 text-graphite">{paper.summary}</p>
            <div className="mt-8 flex items-center justify-between border-t border-line pt-4 text-sm">
              <span className="text-graphite">{paper.date}</span>
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2 font-semibold text-graphite"
              >
                Publicação em preparação
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
