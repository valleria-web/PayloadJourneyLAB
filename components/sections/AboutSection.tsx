import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
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
        <Card className="mt-8 bg-subtle">
          <h3 className="text-xl font-semibold text-ink">{siteContent.about.founder.title}</h3>
          <div className="mt-4 grid gap-4 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
            {siteContent.about.founder.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
