import { SitePage } from "@/components/pages/SitePage";
import { Section } from "@/components/ui/Section";
import { TepOrientation } from "@/components/sections/TepOrientation";
import { canonicalMethodDefinitions } from "@/content/methods";
import { getEntityRoute, entityPageSections } from "@/content/canonical-entity-pages";
import { createdArchitectureEntities, publicInformationArchitecture } from "@/content/public-information-architecture";
export function CanonicalEntityPage({id}: {id: string}) {
 const entity = createdArchitectureEntities.find(item => item.id === id)!;
 return <SitePage route={getEntityRoute(id)} continuation={entity.outboundLinks.map(href => ({href, label: publicInformationArchitecture.find(item => item.canonicalPath === href)?.name ?? href}))}>
  <Section><h2 className="text-2xl font-semibold">{entity.primaryQuestion}</h2></Section>
  {entityPageSections[id].map(section => <Section key={section.title} variant="soft"><h2 className="text-2xl font-semibold">{section.title}</h2>{section.paragraphs.map(text => <p className="mt-4 max-w-4xl" key={text}>{text}</p>)}</Section>)}
  {id === "trace-engineering" && <><Section id="trace-engineer"><h2 className="text-2xl font-semibold">Trace Engineer</h2><p className="mt-4">{canonicalMethodDefinitions.traceEngineer}</p><p className="mt-4">Developing investigative function/profile. Não é profissão consolidada, cargo reconhecido ou certificação oficial.</p></Section><TepOrientation /></>}
 </SitePage>;
}
