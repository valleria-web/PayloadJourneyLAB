import { SitePage } from "@/components/pages/SitePage";
import { Section } from "@/components/ui/Section";
import { foundingReferenceCaseIdentity } from "@/content/case-identities";
import { publicCases, caseEvidence } from "@/content/cases";
import { createPageMetadata } from "@/lib/metadata";

const record = publicCases[0];
const route = {
  path: foundingReferenceCaseIdentity.canonicalHref,
  title: foundingReferenceCaseIdentity.displayIdentity,
  eyebrow: "Active investigation · RPJ-HORA-001",
  description: "Founder-owned internal reference investigation. A pergunta temporal, a associação documental a HeartCreated e os limites públicos de RPJ-HORA-001.",
  introAction: { label: "Examinar evidências documentais", href: "/cases/rpj-hora-001#evidence" },
};
export const metadata = createPageMetadata(route);

export default function HoraCasePage() {
  return <SitePage route={route} continuation={[
    {label: "Reverse Payload Journey", href: "/reverse-payload-journey"},
    {label: "Track to Origin", href: "/track-to-origin"},
    {label: "Continuar aprendendo", href: "/learn"},
    {label: "Índice de casos", href: "/cases"},
  ]}>
    <Section>
      <h2 className="text-2xl font-semibold">Identidade e limites atuais</h2>
      <p className="mt-4">Investigation ID: {record.id} · Lifecycle: Active investigation</p>
      <p className="mt-4">Relationship: founder-owned internal reference investigation. Não constitui validação externa independente.</p>
      <p className="mt-4">HeartCreated → Documentary Evidence association. Runtime confirmation is not publicly established. Causal origin, temporal authority, restoration and verification are not established.</p>
      <p className="mt-4">A publicação desta página não aumenta o nível de evidência nem declara conclusão de TEP.</p>
    </Section>
    <Section variant="soft">
      <h2 className="text-2xl font-semibold">{record.question}</h2>
      <dl className="mt-6 space-y-4">{[
        ["Sistema", record.system], ["Anomalia documentada", record.anomaly],
        ["Esperado", record.expectedBehavior], ["Comportamento registrado", record.observedBehavior],
        ["Mapeamento em andamento", record.protocolStage],
      ].map(([label,value]) => <div key={label}><dt className="font-semibold">{label}</dt><dd>{value}</dd></div>)}</dl>
    </Section>
    <Section id="evidence">
      <h2 className="text-2xl font-semibold">Documentary Evidence · nível 2</h2>
      {caseEvidence.map(evidence => <article key={evidence.id} className="mt-6 max-w-4xl">
        <h3 className="text-xl font-semibold">{evidence.id} — {evidence.title}</h3>
        <p className="mt-3">{evidence.description}</p><p className="mt-3">{evidence.access}</p>
        <ul className="mt-3 list-disc pl-6">{evidence.limitations.map(limit => <li key={limit}>{limit}</li>)}</ul>
      </article>)}
    </Section>
    {[{title: "Hipóteses", items: record.hypotheses}, {title: "Desconhecidos", items: record.unknowns}, {title: "Limites", items: record.limitations}, {title: "Próximos passos investigativos", items: record.nextSteps}].map(section =>
      <Section key={section.title} variant="soft"><h2 className="text-2xl font-semibold">{section.title}</h2><ul className="mt-4 list-disc pl-6">{section.items.map(item => <li key={item}>{item}</li>)}</ul></Section>)}
  </SitePage>;
}
