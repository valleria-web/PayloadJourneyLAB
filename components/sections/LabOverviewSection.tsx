import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function LabOverviewSection() {
  return (
    <Section id={homepageAnchors.lab} className="bg-paper">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow={siteContent.lab.eyebrow}
            title={siteContent.lab.title}
            description={siteContent.lab.description}
          />
          <p className="mt-6 text-base leading-7 text-graphite">
            {siteContent.lab.connectionToInvestigativePractice}
          </p>
        </div>
        <div className="grid gap-5 rounded-foundation-card border border-line bg-subtle p-6 sm:p-8">
          <div>
            <h3 className="text-lg font-semibold text-ink">Missão</h3>
            <p className="mt-2 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {siteContent.lab.mission}
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <h3 className="text-lg font-semibold text-ink">Princípio</h3>
            <p className="mt-2 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {siteContent.lab.principle}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
