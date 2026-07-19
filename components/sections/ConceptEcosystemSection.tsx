import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function ConceptEcosystemSection() {
  return (
    <Section id={homepageAnchors.ecosystem}>
      <SectionHeader
        title={siteContent.ecosystem.title}
        description={siteContent.ecosystem.intro}
      />
      <p className="mt-7 max-w-3xl border-l-2 border-accent-readable pl-5 text-base leading-7 text-text-muted">
        {siteContent.ecosystem.institutionalTransition}
      </p>
    </Section>
  );
}
