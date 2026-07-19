import { SitePage } from "@/components/pages/SitePage";
import { MethodsSection } from "@/components/sections/MethodsSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.method;
export const metadata = createPageMetadata(route);

export default function MethodPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Ver o protocolo", href: "/protocol" },
        { label: "Ver a prática", href: "/investigation" },
      ]}
    >
      <MethodsSection />
    </SitePage>
  );
}
