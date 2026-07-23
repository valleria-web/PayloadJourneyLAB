import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageContinuation } from "@/components/pages/PageContinuation";
import { EducationSection } from "@/components/sections/EducationSection";
import { LearningPathSection } from "@/components/sections/LearningPathSection";
import {
  LearningEffortFoundationsSection,
  LearningFlowSection,
  LearningHeroSection,
} from "@/components/sections/LearningOverviewSection";
import {
  LearningAvailableSection,
  LearningCasesEvidenceSection,
  LearningInitialPathSection,
} from "@/components/sections/LearningPracticeSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { routeContinuations } from "@/content/site";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";
import { getThematicPageStructuredData } from "@/lib/structured-data";

const route = thematicRoutes.learn;

export const metadata = createPageMetadata({
  ...route,
  description: route.metadataDescription,
});

export default function LearnPage() {
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
        <LearningHeroSection />
        <LearningFlowSection />
        <LearningPathSection />
        <LearningEffortFoundationsSection />
        <LearningAvailableSection />
        <LearningInitialPathSection />
        <EducationSection />
        <LearningCasesEvidenceSection />
        <PageContinuation
          title="Escolha o primeiro recorte e continue investigando"
          items={[...routeContinuations["/learn"]]}
        />
      </main>
      <SiteFooter />
    </>
  );
}
