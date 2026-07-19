import { SitePage } from "@/components/pages/SitePage";
import { EducationSection } from "@/components/sections/EducationSection";
import { LearningPathSection } from "@/components/sections/LearningPathSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.learn;
export const metadata = createPageMetadata(route);

export default function LearnPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Explorar o Payload Journey", href: "/payload-journey" },
        { label: "Acompanhar o LabLog", href: "/lablog" },
      ]}
    >
      <LearningPathSection />
      <EducationSection />
    </SitePage>
  );
}
