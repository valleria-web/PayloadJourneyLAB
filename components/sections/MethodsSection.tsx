import { SectionHeader } from "@/components/sections/SectionHeader";
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
    </Section>
  );
}
