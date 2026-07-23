import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  caseEvidence,
  casesPageContent as content,
  publicCases,
} from "@/content/cases";

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-6 text-text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="text-accent-readable">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CasesPageSections() {
  const currentCase = publicCases[0];

  return (
    <>
      <Section id="case-reading-guide" className="border-b border-line">
        <SectionHeader {...content.readingGuide} />
        <dl className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.readingGuide.items.map((item) => (
            <Card key={item.title}>
              <dt className="font-bold text-ink">{item.title}</dt>
              <dd className="mt-2 text-sm leading-6 text-text-muted">{item.description}</dd>
            </Card>
          ))}
        </dl>
      </Section>

      <Section id="case-registry" variant="soft" className="border-b border-line">
        <SectionHeader {...content.registry} />
        <Card id={`case-record-${currentCase.id.toLowerCase()}`} className="mt-10 max-w-4xl">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-sm font-semibold text-accent-readable">{currentCase.id}</p>
              <h3 className="mt-3 text-2xl font-bold text-ink">{currentCase.title}</h3>
            </div>
            <Badge variant="neutral">{currentCase.status}</Badge>
          </div>
          <p className="mt-5 text-base leading-7 text-text-muted">{currentCase.system}</p>
          <dl className="mt-6 grid gap-5 text-sm leading-6 sm:grid-cols-2">
            <div><dt className="font-semibold text-ink">Flow</dt><dd className="mt-1 text-text-muted">{currentCase.flow}</dd></div>
            <div><dt className="font-semibold text-ink">Etapa</dt><dd className="mt-1 text-text-muted">{currentCase.protocolStage}</dd></div>
            <div><dt className="font-semibold text-ink">Fontes localizadas</dt><dd className="mt-1 text-text-muted">{currentCase.evidenceIds.length} fontes documentais internas</dd></div>
            <div><dt className="font-semibold text-ink">Última atualização</dt><dd className="mt-1 text-text-muted">{currentCase.updatedAt}</dd></div>
          </dl>
          <a className="mt-6 inline-flex font-semibold text-accent-readable underline decoration-2 underline-offset-4" href="#case-hora-city">
            Examinar escopo, evidências e limites
          </a>
        </Card>
      </Section>

      <Section id="case-hora-city" className="border-b border-line">
        <SectionHeader
          eyebrow="CASO INTERNO EM INVESTIGAÇÃO"
          title={currentCase.title}
          description={currentCase.origin}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Badge>{currentCase.status}</Badge>
          <Badge variant="neutral">{currentCase.protocolStage}</Badge>
          <Badge variant="neutral">Aplicação, não eficácia</Badge>
        </div>

        <dl className="mt-10 grid gap-5 lg:grid-cols-2">
          {[
            ["Sistema", currentCase.system],
            ["Operação", currentCase.operation],
            ["Pergunta investigativa", currentCase.question],
            ["Anomalia documentada", currentCase.anomaly],
            ["Comportamento esperado", currentCase.expectedBehavior],
            ["Comportamento observado", currentCase.observedBehavior],
          ].map(([term, description]) => (
            <Card key={term}>
              <dt className="font-bold text-ink">{term}</dt>
              <dd className="mt-3 text-sm leading-6 text-text-muted">{description}</dd>
            </Card>
          ))}
        </dl>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <Card>
            <h3 className="text-xl font-bold text-ink">Fatos confirmados</h3>
            <List items={currentCase.confirmedFacts} />
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-ink">Hipóteses</h3>
            <List items={currentCase.hypotheses} />
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-ink">Desconhecidos</h3>
            <List items={currentCase.unknowns} />
          </Card>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-bold text-ink">Métodos documentados</h3>
            <List items={currentCase.methods} />
            <p className="mt-5 text-sm leading-6 text-text-muted">
              <strong className="text-ink">Componentes:</strong> {currentCase.components.join("; ")}
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-ink">Restauração e validação</h3>
            <p className="mt-4 text-sm leading-6 text-text-muted"><strong className="text-ink">Restauração:</strong> {currentCase.restoration}</p>
            <p className="mt-3 text-sm leading-6 text-text-muted"><strong className="text-ink">Validação:</strong> {currentCase.validation}</p>
          </Card>
        </div>
      </Section>

      <Section id="case-evidence" variant="soft" className="border-b border-line">
        <SectionHeader {...content.evidence} />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {caseEvidence.map((evidence) => (
            <Card key={evidence.id}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-sm font-semibold text-accent-readable">{evidence.id}</p>
                  <h3 className="mt-3 text-xl font-bold text-ink">{evidence.title}</h3>
                </div>
                <Badge variant="neutral">{evidence.status}</Badge>
              </div>
              <p className="mt-4 text-sm leading-6 text-text-muted">{evidence.description}</p>
              <dl className="mt-5 space-y-3 text-sm leading-6">
                <div><dt className="font-semibold text-ink">Tipo</dt><dd className="text-text-muted">{evidence.type}</dd></div>
                <div><dt className="font-semibold text-ink">Origem</dt><dd className="text-text-muted">{evidence.source}</dd></div>
                <div><dt className="font-semibold text-ink">Data</dt><dd className="text-text-muted">{evidence.observedAt}</dd></div>
                <div><dt className="font-semibold text-ink">Acesso</dt><dd className="text-text-muted">{evidence.access}</dd></div>
              </dl>
              <h4 className="mt-6 font-semibold text-ink">Claims sustentados</h4>
              <List items={evidence.supports} />
              <h4 className="mt-6 font-semibold text-ink">Limitações</h4>
              <List items={evidence.limitations} />
            </Card>
          ))}
        </div>
        <Card className="mt-6 border-dashed">
          <Badge variant="neutral">Não localizado</Badge>
          <h3 className="mt-4 text-xl font-bold text-ink">Artefatos técnicos públicos do caso</h3>
          <p className="mt-3 text-sm leading-6 text-text-muted">
            Logs, traces, payloads observados, checkpoints, OPP produzido, Detection Report e pacote de evidências não foram localizados neste repositório.
          </p>
        </Card>
      </Section>

      <Section id="case-timeline" className="border-b border-line">
        <SectionHeader {...content.timeline} />
        <p className="mt-8 max-w-3xl rounded-foundation-card border border-dashed border-border-default p-5 font-semibold leading-7 text-ink">
          0 marcos públicos datados. Ausência preservada sem inferência.
        </p>
      </Section>

      <Section id="case-conclusions" variant="soft" className="border-b border-line">
        <SectionHeader
          eyebrow="CONCLUSÕES E LIMITES"
          title="O caso demonstra aplicação naquele contexto"
          description="As conclusões permanecem limitadas às fontes documentais localizadas."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-bold text-ink">Conclusões autorizadas</h3>
            <List items={currentCase.authorizedClaims} />
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-ink">Conclusões não autorizadas</h3>
            <List items={currentCase.prohibitedClaims} />
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-ink">Limitações do caso</h3>
            <List items={currentCase.limitations} />
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-ink">Próximos passos</h3>
            <List items={currentCase.nextSteps} />
          </Card>
        </div>
        <p className="mt-8 max-w-3xl text-lg font-bold leading-8 text-ink">{content.future}</p>
      </Section>
    </>
  );
}
