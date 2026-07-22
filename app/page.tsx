import { BetaCtaSection } from "@/components/sections/BetaCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeMethodOverviewSection } from "@/components/sections/HomeMethodOverviewSection";
import { HomeLabConstructionSection } from "@/components/sections/HomeLabConstructionSection";
import {
  HomeAppliedInvestigationSection,
  HomeEcosystemSection,
  HomeLabSection,
  HomeLearningSection,
} from "@/components/sections/HomePathwaysSections";
import { PayloadFlowDemoSection } from "@/components/sections/PayloadFlowDemoSection";
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
        <PayloadFlowDemoSection />
        <HomeMethodOverviewSection />
        <HomeAppliedInvestigationSection />
        <HomeEcosystemSection />
        <HomeLabConstructionSection />
        <HomeLearningSection />
        <HomeLabSection />
        <BetaCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
