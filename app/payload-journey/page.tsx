import { SitePage } from "@/components/pages/SitePage";
import { LearningOutcomesSection } from "@/components/sections/LearningOutcomesSection";
import { PayloadFlowDemoSection } from "@/components/sections/PayloadFlowDemoSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { thematicRoutes } from "@/content/routes";
import { routeContinuations } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.payloadJourney;
export const metadata = createPageMetadata(route);

export default function PayloadJourneyPage() {
  return (
    <SitePage
      route={route}
      continuation={[...routeContinuations["/payload-journey"]]}
    >
      <ProblemSection />
      <LearningOutcomesSection />
      <PayloadFlowDemoSection />
    </SitePage>
  );
}
