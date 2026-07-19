import { SitePage } from "@/components/pages/SitePage";
import { UsmtSection } from "@/components/sections/UsmtSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.usmt;
export const metadata = createPageMetadata(route);

export default function UsmtPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Explorar o Payload Journey", href: "/payload-journey" },
        { label: "Ver o protocolo", href: "/protocol" },
      ]}
    >
      <UsmtSection />
    </SitePage>
  );
}
