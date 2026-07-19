import { SitePage } from "@/components/pages/SitePage";
import { LearningOutcomesSection } from "@/components/sections/LearningOutcomesSection";
import { PayloadFlowDemoSection } from "@/components/sections/PayloadFlowDemoSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.payloadJourney;
export const metadata = createPageMetadata(route);

export default function PayloadJourneyPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Conhecer a USMT", href: "/usmt" },
        { label: "Ver o protocolo", href: "/protocol" },
      ]}
    >
      <ProblemSection />
      <LearningOutcomesSection />
      <PayloadFlowDemoSection />
    </SitePage>
  );
}
