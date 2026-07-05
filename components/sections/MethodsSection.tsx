import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function MethodsSection() {
  return (
    <Section id="metodos" className="border-y border-line bg-subtle">
      <SectionHeader title={siteContent.methods.title} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {siteContent.methods.items.map((method) => (
          <Card key={method.title} className="flex min-h-64 flex-col justify-between">
            <h3 className="text-xl font-semibold">{method.title}</h3>
            <p className="mt-6 text-sm leading-6 text-graphite">{method.description}</p>
          </Card>
        ))}
      </div>
      <div className="mt-8 grid gap-6 border border-line bg-white p-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
            {siteContent.usmt.subtitle}
          </p>
          <h3 className="mt-3 text-2xl font-semibold">{siteContent.usmt.title}</h3>
          <p className="mt-4 text-sm leading-6 text-graphite">{siteContent.usmt.description}</p>
        </div>
        <div className="grid gap-5 lg:justify-items-end">
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {siteContent.usmt.elements.map((element) => (
              <Badge key={element}>{element}</Badge>
            ))}
          </div>
          <Button disabled variant="secondary" className="w-fit">
            {siteContent.usmt.action}
          </Button>
        </div>
      </div>
    </Section>
  );
}
