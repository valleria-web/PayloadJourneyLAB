import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function EducationSection() {
  return (
    <Section id="formacao" className="bg-subtle">
      <SectionHeader
        title={siteContent.education.title}
        description={siteContent.education.intro}
      />
      <Card className="mt-10 border-ink bg-ink text-white">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-muted">
              LAB Beta
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              {siteContent.education.beta.title}
            </h3>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-white/80">
              {siteContent.education.beta.description}
            </p>
          </div>
          <Button
            href={siteContent.education.beta.action.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="w-full border-white/20 bg-white text-ink hover:border-accent hover:text-accent sm:w-fit"
          >
            {siteContent.education.beta.action.label}
          </Button>
        </div>
      </Card>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {siteContent.education.items.map((item) => (
          <Card key={item.title} className="min-h-56">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-5 text-sm leading-6 text-graphite">{item.description}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10 rounded-sm border border-line bg-white p-6">
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
