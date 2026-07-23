import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  labLogEntries,
  labLogPageContent as content,
} from "@/content/cases";

export function LabLogPageSections() {
  return (
    <>
      <Section id="lablog-guide" className="border-b border-line">
        <SectionHeader {...content.guide} />
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Data", "Quando o trabalho foi registrado."],
            ["Trabalho", "O que foi efetivamente realizado."],
            ["Evidência", "Que fonte sustenta a entrada."],
            ["Limite", "O que permanece desconhecido."],
          ].map(([term, description]) => (
            <Card key={term}>
              <dt className="font-bold text-ink">{term}</dt>
              <dd className="mt-2 text-sm leading-6 text-text-muted">{description}</dd>
            </Card>
          ))}
        </dl>
      </Section>

      <Section id="lablog-inventory" variant="soft" className="border-b border-line">
        <SectionHeader
          eyebrow={content.inventory.eyebrow}
          title={content.inventory.title}
          description={content.inventory.description}
        />
        <Card className="mt-10 max-w-4xl border-dashed">
          <Badge variant="neutral">{content.inventory.status}</Badge>
          <p className="mt-5 text-base font-semibold leading-7 text-ink">
            {labLogEntries.length === 0
              ? "Não há entradas para apresentar. A ausência é parte do estado documental atual."
              : `${labLogEntries.length} entradas localizadas.`}
          </p>
          <p className="mt-4 text-sm leading-6 text-text-muted">
            Documentos de sprint, temas e um canal configurado não foram convertidos automaticamente em entradas.
          </p>
        </Card>

        <div className="mt-10">
          <h3 className="text-xl font-bold text-ink">Temas já documentados</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {content.themes.map((theme) => (
              <li key={theme}>
                <Badge variant="neutral">{theme}</Badge>
              </li>
            ))}
          </ul>
          <div className="mt-8 max-w-3xl rounded-foundation-card border border-border-default bg-surface-card p-6">
            <p className="text-sm leading-6 text-text-muted">{content.channel.status}</p>
          </div>
        </div>
      </Section>

      <Section id="lablog-case-relation" className="border-b border-line">
        <SectionHeader {...content.relation} />
        <p className="mt-7 max-w-3xl rounded-foundation-card border border-border-default bg-accent-muted p-5 text-lg font-bold leading-8 text-ink">
          Nenhuma entrada está ligada ao caso HORA.city porque nenhuma entrada estruturada foi localizada.
        </p>
      </Section>

      <Section id="lablog-provenance" variant="soft" className="border-b border-line">
        <SectionHeader
          eyebrow={content.provenance.eyebrow}
          title={content.provenance.title}
        />
        <dl className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.provenance.items.map((item) => (
            <Card key={item.title}>
              <dt className="font-bold text-ink">{item.title}</dt>
              <dd className="mt-2 text-sm leading-6 text-text-muted">{item.description}</dd>
            </Card>
          ))}
        </dl>
        <p className="mt-8 max-w-4xl text-base leading-7 text-text-muted">
          Conversas privadas com IA não são publicadas. A seleção, a interpretação, os limites e a conclusão permanecem sob responsabilidade humana.
        </p>
      </Section>
    </>
  );
}
