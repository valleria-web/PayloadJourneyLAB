import { SitePage } from "@/components/pages/SitePage";
import { CasesPageSections } from "@/components/sections/CasesPageSections";
import { casesPageContent } from "@/content/cases";
import { thematicRoutes } from "@/content/routes";
import { routeContinuations } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.cases;
export const metadata = createPageMetadata(route);

export default function CasesPage() {
  return (
    <SitePage
      route={{
        ...route,
        description: casesPageContent.hero.description,
        introAction: casesPageContent.hero.primaryCta,
      }}
      continuation={[...routeContinuations["/cases"]]}
    >
      <CasesPageSections />
    </SitePage>
  );
}
