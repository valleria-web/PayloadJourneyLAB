import { SitePage } from "@/components/pages/SitePage";
import { InvestigationCycleSection } from "@/components/sections/InvestigationCycleSection";
import { protocolPagePresentation } from "@/content/methods";
import { thematicRoutes } from "@/content/routes";
import { routeContinuations } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.protocol;
export const metadata = createPageMetadata(route);

export default function ProtocolPage() {
  const presentation = protocolPagePresentation;
  return (
    <SitePage
      route={{
        ...route,
        introAction: presentation.hero.primaryCta,
        introSecondaryAction: presentation.hero.secondaryCta,
      }}
      continuation={[...routeContinuations["/protocol"]]}
    >
      <InvestigationCycleSection />
    </SitePage>
  );
}
