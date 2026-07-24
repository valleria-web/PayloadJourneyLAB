import { SitePage } from "@/components/pages/SitePage";
import { LabDefinitionsPageSections } from "@/components/sections/LabDefinitionsSections";
import { labDefinitionsPageContent } from "@/content/lab-definitions";
import { thematicRoutes } from "@/content/routes";
import { routeContinuations } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.labDefinitions;

export const metadata = createPageMetadata(route);

export default function LabDefinitionsPage() {
  return (
    <SitePage
      route={{
        ...route,
        description: labDefinitionsPageContent.description,
      }}
      continuation={[...routeContinuations["/lab-definitions"]]}
    >
      <LabDefinitionsPageSections />
    </SitePage>
  );
}
