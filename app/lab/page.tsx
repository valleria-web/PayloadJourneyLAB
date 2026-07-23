import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageContinuation } from "@/components/pages/PageContinuation";
import {
  LabPublicCommitmentSection,
  LabPilotSection,
  LabStateConstructionSection,
  LabTraceVisionSection,
} from "@/components/sections/LabConstructionSection";
import {
  LabHeroSection,
  LabHumanFounderSection,
  LabMethodsBridgeSection,
  LabMissionOriginSection,
} from "@/components/sections/LabOverviewSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { routeContinuations } from "@/content/site";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";
import { getThematicPageStructuredData } from "@/lib/structured-data";

const route = thematicRoutes.lab;

export const metadata = createPageMetadata({
  ...route,
  description: route.metadataDescription,
});

export default function LabPage() {
  return (
    <>
      <JsonLd
        data={getThematicPageStructuredData(
          route.path,
          route.title,
          route.metadataDescription,
        )}
      />
      <SiteHeader currentPath={route.path} />
      <main>
        <LabHeroSection />
        <LabMissionOriginSection />
        <LabMethodsBridgeSection />
        <LabHumanFounderSection />
        <LabStateConstructionSection />
        <LabPilotSection />
        <LabTraceVisionSection />
        <LabPublicCommitmentSection />
        <PageContinuation items={[...routeContinuations["/lab"]]} />
      </main>
      <SiteFooter />
    </>
  );
}
