import { SitePage } from "@/components/pages/SitePage";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.cases;
export const metadata = createPageMetadata(route);

export default function CasesPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Ver a prática investigativa", href: "/investigation" },
        { label: "Acompanhar o LabLog", href: "/lablog" },
      ]}
    >
      <CaseStudySection />
    </SitePage>
  );
}
