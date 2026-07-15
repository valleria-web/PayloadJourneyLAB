import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function EducationSection() {
  return (
    <Section id="formacao" className="bg-paper">
      <SectionHeader
        eyebrow="DO METODO A PRATICA"
        title={siteContent.education.title}
        description={siteContent.education.intro}
      />
      <Card className="mt-10 overflow-hidden border-accent/30 bg-white/85">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-[calc(0.75rem+5px)] font-semibold uppercase tracking-[0.08em] text-accent">
              LAB Beta
            </p>
            <h3 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
              {siteContent.education.beta.title}
            </h3>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {siteContent.education.beta.description}
            </p>
            <div className="mt-5 inline-flex w-fit items-center rounded-full border border-accent/25 bg-accent-muted px-3 py-1 font-mono text-[calc(0.75rem+5px)] font-semibold text-accent">
              coupon: FOLLOW-THE-FLOW
            </div>
          </div>
          <Button
            href={siteContent.education.beta.action.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-fit"
          >
            Entrar no LAB Beta
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </Card>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {siteContent.education.items.map((item) => (
          <Card key={item.title} className="min-h-56 hover:-translate-y-0.5 hover:border-accent">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-5 text-sm leading-6 text-graphite">{item.description}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-line bg-white/75 p-6">
        <p className="font-mono text-[calc(0.75rem+5px)] font-semibold uppercase tracking-[0.08em] text-accent">
          Trilhas futuras
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {siteContent.education.links.map((link) => (
            <Badge key={link}>{link}</Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
