import { SitePage } from "@/components/pages/SitePage";
import { UsmtSection } from "@/components/sections/UsmtSection";
import { thematicRoutes } from "@/content/routes";
import { routeContinuations } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.usmt;
export const metadata = createPageMetadata(route);

export default function UsmtPage() {
  return (
    <SitePage
      route={route}
      continuation={[...routeContinuations["/usmt"]]}
    >
      <UsmtSection />
    </SitePage>
  );
}
