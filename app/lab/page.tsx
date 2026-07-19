import { SitePage } from "@/components/pages/SitePage";
import { LabOverviewSection } from "@/components/sections/LabOverviewSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.lab;
export const metadata = createPageMetadata(route);

export default function LabPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Explorar o ecossistema", href: "/ecosystem" },
        { label: "Conhecer a origem", href: "/about" },
      ]}
    >
      <LabOverviewSection />
    </SitePage>
  );
}
