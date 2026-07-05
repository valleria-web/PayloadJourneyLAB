import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function AboutSection() {
  return (
    <Section id="sobre">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <SectionHeader title={siteContent.about.title} description={siteContent.about.text} />
        <Card>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
            Área reservada
          </p>
          <div className="mt-6 grid gap-3">
            {siteContent.about.reserved.map((item) => (
              <div key={item} className="border border-line p-4 text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
