import { SitePage } from "@/components/pages/SitePage";
import { ConceptEcosystemSection } from "@/components/sections/ConceptEcosystemSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.ecosystem;
export const metadata = createPageMetadata(route);

export default function EcosystemPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Conhecer o LAB", href: "/lab" },
        { label: "Explorar a formação", href: "/learn" },
      ]}
    >
      <ConceptEcosystemSection />
    </SitePage>
  );
}
