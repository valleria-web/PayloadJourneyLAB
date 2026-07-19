import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { homepageAnchors, trainingPresentation } from "@/content/site";

export function EducationSection() {
  const training = trainingPresentation;

  return (
    <Section id={homepageAnchors.training} className="border-b border-line">
      <SectionHeader
        eyebrow={training.eyebrow}
        eyebrowTone="readable"
        title={training.title}
        description={training.description}
      />

      <Card className="mt-10 overflow-hidden border-accent-readable/30 bg-accent-muted/35 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <TechnicalLabel tone="readable">{training.format.platform}</TechnicalLabel>
              <span className="rounded-full border border-border-default bg-surface-card px-3 py-1 font-mono text-technical-sm font-semibold uppercase tracking-technical text-text-primary">
                {training.format.state}
              </span>
              {training.campaign.state === "active" ? (
                <span className="rounded-full border border-accent-readable/25 bg-surface-card px-3 py-1 font-mono text-technical-sm font-semibold text-accent-readable">
                  Cupom: {training.campaign.coupon.code}
                </span>
              ) : null}
            </div>
            <h3 className="mt-5 max-w-3xl text-2xl font-bold leading-8 text-ink sm:text-3xl sm:leading-10">
              {training.product.name}
            </h3>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-ink sm:text-lg sm:leading-8">
              {training.promise}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              href={training.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="contrast"
              className="w-full"
            >
              {training.primaryCta.label}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Button>
            <Button href={training.secondaryCta.href} variant="secondary" className="w-full">
              {training.secondaryCta.label}
              <ArrowDownLeft aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </div>
      </Card>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card>
          <h3 className="text-xl font-bold text-ink">Para quem é</h3>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-text-muted">
            {training.audience.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-readable" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-ink">O que você aprenderá</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {training.topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-border-default bg-surface-soft px-3 py-1.5 text-sm font-medium leading-5 text-text-primary"
              >
                {topic}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-ink">Como começar</h3>
          <p className="mt-5 text-sm leading-6 text-text-muted">
            A formação está disponível na {training.format.platform} em estado {training.format.state}.
            Comece pelos fundamentos e use a Trilha como referência para acompanhar sua progressão.
          </p>
          <p className="mt-5 border-t border-border-default pt-5 text-sm font-semibold leading-6 text-ink">
            É aqui que você começa a aprender a seguir o flow.
          </p>
        </Card>
      </div>
    </Section>
  );
}
