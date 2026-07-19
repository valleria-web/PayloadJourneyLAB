import { AboutSection } from "@/components/sections/AboutSection";
import { BetaCtaSection } from "@/components/sections/BetaCtaSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ConceptEcosystemSection } from "@/components/sections/ConceptEcosystemSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InvestigationCycleSection } from "@/components/sections/InvestigationCycleSection";
import { InvestigationPracticeSection } from "@/components/sections/InvestigationPracticeSection";
import { LabLogSection } from "@/components/sections/LabLogSection";
import { LabOverviewSection } from "@/components/sections/LabOverviewSection";
import { LearningOutcomesSection } from "@/components/sections/LearningOutcomesSection";
import { LearningPathSection } from "@/components/sections/LearningPathSection";
import { MethodsSection } from "@/components/sections/MethodsSection";
import { PayloadFlowDemoSection } from "@/components/sections/PayloadFlowDemoSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { UsmtSection } from "@/components/sections/UsmtSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomePageStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={getHomePageStructuredData()} />
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <LearningOutcomesSection />
        <LearningPathSection />
        <PayloadFlowDemoSection />
        <EducationSection />
        <CaseStudySection />
        <UsmtSection />
        <InvestigationCycleSection />
        <MethodsSection />
        <InvestigationPracticeSection />
        <LabOverviewSection />
        <ConceptEcosystemSection />
        <LabLogSection />
        <AboutSection />
        <BetaCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
