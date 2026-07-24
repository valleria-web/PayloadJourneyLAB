import { BetaCtaSection } from "@/components/sections/BetaCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeMethodOverviewSection } from "@/components/sections/HomeMethodOverviewSection";
import { HomeLabConstructionSection } from "@/components/sections/HomeLabConstructionSection";
import {
  HomeProgressionSection,
  HomeProposalSection,
  HomeWhyNowSection,
} from "@/components/sections/HomeNarrativeSections";
import {
  HomeAppliedInvestigationSection,
  HomeEcosystemSection,
  HomeLabSection,
} from "@/components/sections/HomePathwaysSections";
import { PayloadFlowDemoSection } from "@/components/sections/PayloadFlowDemoSection";
import { HomeLabDefinitionsSection } from "@/components/sections/LabDefinitionsSections";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomePageStructuredData } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { homepageMetadata } from "@/content/routes";

export const metadata = createPageMetadata(homepageMetadata);

export default function Home() {
  return (
    <>
      <JsonLd data={getHomePageStructuredData(homepageMetadata)} />
      <SiteHeader currentPath="/" />
      <main>
        <HeroSection />
        <HomeWhyNowSection />
        <HomeLabConstructionSection />
        <HomeProposalSection />
        <HomeLabDefinitionsSection />
        <PayloadFlowDemoSection homepagePresentation />
        <HomeMethodOverviewSection />
        <HomeAppliedInvestigationSection />
        <HomeProgressionSection />
        <BetaCtaSection />
        <HomeEcosystemSection />
        <HomeLabSection />
      </main>
      <SiteFooter />
    </>
  );
}
