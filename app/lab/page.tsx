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
        { label: "Explorar a USMT", href: "/usmt" },
        { label: "Conhecer o método", href: "/method" },
        { label: "Ver a investigação aplicada", href: "/cases" },
      ]}
    >
      <LabOverviewSection />
    </SitePage>
  );
}
