import { SitePage } from "@/components/pages/SitePage";
import { InvestigationPracticeSection } from "@/components/sections/InvestigationPracticeSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.investigation;
export const metadata = createPageMetadata(route);

export default function InvestigationPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Ver o protocolo", href: "/protocol" },
        { label: "Conhecer os casos", href: "/cases" },
      ]}
    >
      <InvestigationPracticeSection />
    </SitePage>
  );
}
