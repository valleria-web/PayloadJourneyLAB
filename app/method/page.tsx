import { SitePage } from "@/components/pages/SitePage";
import { MethodsSection } from "@/components/sections/MethodsSection";
import { methodPagePresentation } from "@/content/methods";
import { thematicRoutes } from "@/content/routes";
import { routeContinuations } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.method;
export const metadata = createPageMetadata(route);

export default function MethodPage() {
  const presentation = methodPagePresentation;
  return (
    <SitePage
      route={{
        ...route,
        introAction: presentation.hero.primaryCta,
        introSecondaryAction: presentation.hero.secondaryCta,
      }}
      continuation={[...routeContinuations["/method"]]}
    >
      <MethodsSection />
    </SitePage>
  );
}
