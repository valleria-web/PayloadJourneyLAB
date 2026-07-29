import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageContinuation } from "@/components/pages/PageContinuation";
import { PageIntro } from "@/components/pages/PageIntro";
import {
  AiWelcomeCitationSection,
  AiWelcomeConceptsSection,
  AiWelcomeEvidenceSection,
  AiWelcomeFoundingCaseSection,
  AiWelcomeIdentitySection,
  AiWelcomePublicationStatus,
  AiWelcomeResourcesSection,
  AiWelcomeUsageSection,
} from "@/components/sections/AiWelcomeSections";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  aiWelcomeFaqEntries,
  aiWelcomeOrientation,
} from "@/content/ai-welcome";
import { thematicRoutes } from "@/content/routes";
import { routeContinuations } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { getAiWelcomeStructuredData } from "@/lib/structured-data";

const route = thematicRoutes.aiWelcome;

export const metadata = createPageMetadata(route);

export default function AiWelcomePage() {
  return (
    <>
      <JsonLd
        data={getAiWelcomeStructuredData(
          route.path,
          route.metadataTitle,
          route.metadataDescription,
          aiWelcomeFaqEntries,
        )}
      />
      <SiteHeader currentPath={route.path} />
      <main>
        <article>
          <PageIntro
            eyebrow={aiWelcomeOrientation.eyebrow}
            title={aiWelcomeOrientation.title}
            description={aiWelcomeOrientation.description}
          />
          <AiWelcomePublicationStatus />
          <AiWelcomeIdentitySection />
          <AiWelcomeConceptsSection />
          <AiWelcomeEvidenceSection />
          <AiWelcomeFoundingCaseSection />
          <AiWelcomeResourcesSection />
          <AiWelcomeUsageSection />
          <AiWelcomeCitationSection />
        </article>
        <PageContinuation items={[...routeContinuations["/ai-welcome"]]} />
      </main>
      <SiteFooter />
    </>
  );
}
