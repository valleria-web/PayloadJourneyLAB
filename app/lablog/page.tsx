import { SitePage } from "@/components/pages/SitePage";
import { LabLogSection } from "@/components/sections/LabLogSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.lablog;
export const metadata = createPageMetadata(route);

export default function LabLogPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Conhecer os casos", href: "/cases" },
        { label: "Explorar a formação", href: "/learn" },
      ]}
    >
      <LabLogSection />
    </SitePage>
  );
}
