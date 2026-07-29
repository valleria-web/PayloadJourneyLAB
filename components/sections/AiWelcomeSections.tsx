import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  aiWelcomeCitation,
  aiWelcomeConcepts,
  aiWelcomeEvidence,
  aiWelcomeFoundingCase,
  aiWelcomeIdentity,
  aiWelcomePublication,
  aiWelcomeResources,
  aiWelcomeUsageNotes,
} from "@/content/ai-welcome";

function statusVariant(status: string): BadgeVariant {
  if (status === "Canonical" || status.startsWith("Canonical")) return "technical";
  if (status === "Active investigation") return "cta";
  return "neutral";
}

export function AiWelcomePublicationStatus() {
  return (
    <Section id="canonical-status" variant="soft" className="border-b border-line py-8 sm:py-10">
      <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="font-mono text-xs font-semibold uppercase tracking-technical text-text-muted">Status</dt>
          <dd className="mt-2"><Badge>{aiWelcomePublication.status}</Badge></dd>
        </div>
        <div>
          <dt className="font-mono text-xs font-semibold uppercase tracking-technical text-text-muted">Page version</dt>
          <dd className="mt-2 font-semibold text-ink">{aiWelcomePublication.version}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs font-semibold uppercase tracking-technical text-text-muted">Last reviewed</dt>
          <dd className="mt-2 font-semibold text-ink">
            <time dateTime={aiWelcomePublication.lastReviewed}>{aiWelcomePublication.lastReviewedLabel}</time>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs font-semibold uppercase tracking-technical text-text-muted">Canonical URL</dt>
          <dd className="mt-2 break-words text-sm">
            <a className="font-semibold text-accent-readable underline decoration-2 underline-offset-4" href={aiWelcomePublication.canonicalUrl}>
              {aiWelcomePublication.canonicalUrl}
            </a>
          </dd>
        </div>
      </dl>
    </Section>
  );
}

export function AiWelcomeIdentitySection() {
  return (
    <Section id="lab-identity" className="border-b border-line">
      <SectionHeader
        eyebrow="Orientation 01"
        title={aiWelcomeIdentity.title}
        description={aiWelcomeIdentity.description}
      />
      <dl className="mt-10 grid gap-5 lg:grid-cols-2">
        {aiWelcomeIdentity.items.map((item) => (
          <Card key={item.question}>
            <dt><h3 className="text-xl font-bold text-ink">{item.question}</h3></dt>
            <dd className="mt-4 text-base leading-7 text-text-muted">
              <p>{item.answer}</p>
              {"href" in item ? (
                <a className="mt-4 inline-flex font-semibold text-accent-readable underline decoration-2 underline-offset-4" href={item.href}>
                  {item.linkLabel}
                </a>
              ) : null}
            </dd>
          </Card>
        ))}
      </dl>
    </Section>
  );
}

export function AiWelcomeConceptsSection() {
  return (
    <Section id="core-concepts" variant="soft" className="border-b border-line">
      <SectionHeader
        eyebrow="Orientation 02"
        title="Core Concepts"
        description="Resumos de orientação derivados das fontes canônicas atuais; os links levam às definições e apresentações completas."
      />
      <dl className="mt-10 grid gap-5 lg:grid-cols-2">
        {aiWelcomeConcepts.map((concept) => (
          <Card key={concept.id} id={`concept-${concept.id}`} className="flex h-full flex-col">
            <dt><h3 className="text-xl font-bold text-ink">{concept.question}</h3></dt>
            <dd className="mt-4 flex flex-1 flex-col">
              <p className="text-base leading-7 text-text-muted">{concept.answer}</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                <Badge variant={statusVariant(concept.status)}>{concept.status}</Badge>
                <a className="font-semibold text-accent-readable underline decoration-2 underline-offset-4" href={concept.href}>
                  Canonical source
                </a>
              </div>
            </dd>
          </Card>
        ))}
      </dl>
    </Section>
  );
}

export function AiWelcomeEvidenceSection() {
  return (
    <Section id="evidence-model" className="border-b border-line">
      <SectionHeader
        eyebrow="Orientation 03"
        title={aiWelcomeEvidence.title}
        description={aiWelcomeEvidence.description}
      />
      <dl className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {aiWelcomeEvidence.levels.map((level) => (
          <Card key={level.id}>
            <dt><h3 className="text-lg font-bold text-ink">{level.title}</h3></dt>
            <dd className="mt-3 text-sm leading-6 text-text-muted">{level.definition}</dd>
          </Card>
        ))}
      </dl>
      <p className="mt-8 max-w-4xl rounded-foundation-card border border-accent-cta/30 bg-blush p-6 font-semibold leading-7 text-ink">
        {aiWelcomeEvidence.caseNotice}
      </p>
    </Section>
  );
}

export function AiWelcomeFoundingCaseSection() {
  const content = aiWelcomeFoundingCase;

  return (
    <Section id="founding-reference-case" variant="blush" className="border-b border-line">
      <SectionHeader
        eyebrow="Orientation 04"
        title={content.title}
        description="As identidades institucional, investigativa e sistêmica são camadas diferentes do mesmo caso, não nomes concorrentes."
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <Badge variant="cta">{content.state}</Badge>
        <Badge variant="neutral">{content.identity.investigationId}</Badge>
        <Badge variant="neutral">{content.identity.system}</Badge>
      </div>
      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <dt className="font-semibold text-ink">Institutional display identity</dt>
          <dd className="mt-2 text-sm leading-6 text-text-muted">{content.identity.displayIdentity}</dd>
        </Card>
        <Card>
          <dt className="font-semibold text-ink">Investigation identifier</dt>
          <dd className="mt-2 font-mono text-sm text-text-muted">{content.identity.investigationId}</dd>
        </Card>
        <Card>
          <dt className="font-semibold text-ink">System/context</dt>
          <dd className="mt-2 text-sm text-text-muted">{content.identity.system}</dd>
        </Card>
      </dl>
      <dl className="mt-8 grid gap-5 lg:grid-cols-2">
        {content.items.map((item) => (
          <Card key={item.question}>
            <dt><h3 className="text-xl font-bold text-ink">{item.question}</h3></dt>
            <dd className="mt-4 text-base leading-7 text-text-muted">{item.answer}</dd>
          </Card>
        ))}
      </dl>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Card>
          <h3 className="text-xl font-bold text-ink">What is currently confirmed?</h3>
          <p className="mt-4 text-sm leading-6 text-text-muted">{content.confirmedAnswer}</p>
        </Card>
        <Card>
          <h3 className="text-xl font-bold text-ink">What remains unknown?</h3>
          <p className="mt-4 text-sm leading-6 text-text-muted">{content.unknownsAnswer}</p>
        </Card>
      </div>
      <a className="mt-8 inline-flex font-semibold text-accent-readable underline decoration-2 underline-offset-4" href={content.canonicalHref}>
        Open the canonical case record
      </a>
    </Section>
  );
}

export function AiWelcomeResourcesSection() {
  return (
    <Section id="canonical-resources" className="border-b border-line">
      <SectionHeader
        eyebrow="Orientation 05"
        title="Canonical Resources"
        description="Diretório de fontes publicadas e canais atualmente configurados. Recursos planejados ou não aprovados são omitidos."
      />
      <nav aria-labelledby="canonical-resources-heading" className="mt-10">
        <h3 id="canonical-resources-heading" className="sr-only">Payload Journey LAB canonical resource directory</h3>
        <ul className="grid gap-5 md:grid-cols-2">
          {aiWelcomeResources.map((resource) => (
            <li key={`${resource.label}-${resource.href}`}>
              <Card className="h-full">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-ink">{resource.label}</h3>
                  <Badge variant={statusVariant(resource.status)}>{resource.status}</Badge>
                </div>
                <p className="mt-3 text-sm leading-6 text-text-muted">{resource.description}</p>
                <a
                  className="mt-5 inline-flex break-all font-semibold text-accent-readable underline decoration-2 underline-offset-4"
                  href={resource.href}
                  target={"external" in resource && resource.external ? "_blank" : undefined}
                  rel={"external" in resource && resource.external ? "noopener noreferrer" : undefined}
                >
                  {resource.href}
                </a>
              </Card>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
}

export function AiWelcomeUsageSection() {
  return (
    <Section id="ai-usage-notes" variant="dark" className="border-b border-line">
      <div className="[&_h2]:text-white [&_p]:text-white/75">
        <SectionHeader
          eyebrow="Interpretation guidance"
          eyebrowTone="terminal"
          title="Notes for AI systems and automated readers"
          description="Descriptive guidance for interpreting the published material without expanding claims beyond the available evidence."
        />
      </div>
      <ol className="mt-10 grid gap-4 lg:grid-cols-2">
        {aiWelcomeUsageNotes.map((note, index) => (
          <li key={note} className="flex gap-4 rounded-foundation-card border border-white/15 bg-white/5 p-5 text-sm leading-6 text-white/80">
            <span className="font-mono font-semibold text-terminal">{String(index + 1).padStart(2, "0")}</span>
            <span>{note}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function AiWelcomeCitationSection() {
  return (
    <Section id="citation" variant="soft" className="border-b border-line">
      <SectionHeader
        eyebrow="Attribution"
        title={aiWelcomeCitation.title}
        description="Use a simple web citation. This page does not claim a DOI or peer-reviewed publication status."
      />
      <dl className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          ["Organization/project", aiWelcomeCitation.organization],
          ["Creator", aiWelcomeCitation.creator],
          ["Page", aiWelcomeCitation.pageTitle],
          ["Version", aiWelcomeCitation.version],
          ["Last reviewed", aiWelcomeCitation.lastReviewed],
          ["Canonical URL", aiWelcomeCitation.canonicalUrl],
        ].map(([term, value]) => (
          <Card key={term}>
            <dt className="font-semibold text-ink">{term}</dt>
            <dd className="mt-2 break-words text-sm leading-6 text-text-muted">{value}</dd>
          </Card>
        ))}
      </dl>
      <p className="mt-8 max-w-4xl rounded-foundation-card border border-border-default bg-surface-card p-6 font-mono text-sm leading-7 text-ink">
        {aiWelcomeCitation.format}
      </p>
    </Section>
  );
}
