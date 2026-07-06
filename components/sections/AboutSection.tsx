import { SectionHeader } from "@/components/sections/SectionHeader";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function AboutSection() {
  return (
    <Section id="sobre">
      <div className="max-w-4xl">
        <SectionHeader title={siteContent.about.title} description={siteContent.about.text} />
        <div className="mt-6 grid gap-5 text-base leading-7 text-graphite">
          <p>{siteContent.about.secondaryText}</p>
          <p>{siteContent.about.vision}</p>
        </div>
      </div>
    </Section>
  );
}
