import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function MethodsSection() {
  return (
    <Section id="metodos" className="border-y border-line bg-subtle">
      <SectionHeader title={siteContent.methods.title} description={siteContent.methods.intro} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {siteContent.methods.items.map((method) => (
          <Card key={method.title} className="flex min-h-64 flex-col justify-between">
            <div>
              {method.category ? (
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-graphite">
                  {method.category}
                </p>
              ) : null}
              <h3 className="text-xl font-semibold">{method.title}</h3>
              <p className="mt-6 text-sm leading-6 text-graphite">{method.description}</p>
              {method.status ? (
                <p className="mt-4 text-sm font-semibold text-graphite">{method.status}</p>
              ) : null}
            </div>
            {method.action ? (
              <Button disabled variant="secondary" className="mt-6 w-fit">
                {method.action.label}
                {method.action.status ? ` - ${method.action.status}` : null}
              </Button>
            ) : null}
          </Card>
        ))}
      </div>
      <p className="mt-8 border border-line bg-white p-6 text-sm leading-6 text-graphite">
        {siteContent.methods.relation}
      </p>
    </Section>
  );
}
