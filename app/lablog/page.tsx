import { notFound } from "next/navigation";
import { SitePage } from "@/components/pages/SitePage";
import { LabLogPageSections } from "@/components/sections/LabLogPageSections";
import { labLogPageContent } from "@/content/cases";
import { thematicRoutes } from "@/content/routes";
import { routeContinuations } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

const route = thematicRoutes.lablog;
export const metadata = createPageMetadata(route);

export default function LabLogPage() {
  if (!siteConfig.featureFlags.labLogPublic) {
    notFound();
  }

  return (
    <SitePage
      route={{
        ...route,
        description: labLogPageContent.hero.description,
        introAction: labLogPageContent.hero.primaryCta,
        introSecondaryAction: labLogPageContent.hero.secondaryCta,
      }}
      continuation={[...routeContinuations["/lablog"]]}
    >
      <LabLogPageSections />
    </SitePage>
  );
}
