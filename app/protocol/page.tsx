import { SitePage } from "@/components/pages/SitePage";
import { InvestigationCycleSection } from "@/components/sections/InvestigationCycleSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.protocol;
export const metadata = createPageMetadata(route);

export default function ProtocolPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Conhecer os métodos", href: "/method" },
        { label: "Ver a prática", href: "/investigation" },
      ]}
    >
      <InvestigationCycleSection />
    </SitePage>
  );
}
