import { SitePage } from "@/components/pages/SitePage";
import { InvestigationPracticeSection } from "@/components/sections/InvestigationPracticeSection";
import { investigativePracticePresentation } from "@/content/methods";
import { thematicRoutes } from "@/content/routes";
import { routeContinuations } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.investigation;
export const metadata = createPageMetadata(route);

export default function InvestigationPage() {
  const presentation = investigativePracticePresentation;
  return (
    <SitePage
      route={{
        ...route,
        introAction: presentation.hero.primaryCta,
        introSecondaryAction: presentation.hero.secondaryCta,
      }}
      continuation={[...routeContinuations["/investigation"]]}
    >
      <InvestigationPracticeSection />
    </SitePage>
  );
}
