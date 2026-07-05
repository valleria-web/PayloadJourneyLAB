import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function EducationSection() {
  return (
    <Section id="formacao" className="bg-subtle">
      <SectionHeader title={siteContent.education.title} />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {siteContent.education.items.map((item) => (
          <Card key={item.title} className="min-h-56">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-5 text-sm leading-6 text-graphite">{item.description}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10 border border-line bg-white p-6">
        <p className="text-sm font-semibold">Links futuros</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {siteContent.education.links.map((link) => (
            <Badge key={link}>{link}</Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
