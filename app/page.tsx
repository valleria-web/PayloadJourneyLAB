import { AboutSection } from "@/components/sections/AboutSection";
import { BetaCtaSection } from "@/components/sections/BetaCtaSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ConceptEcosystemSection } from "@/components/sections/ConceptEcosystemSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LabLogSection } from "@/components/sections/LabLogSection";
import { LabOverviewSection } from "@/components/sections/LabOverviewSection";
import { MethodsSection } from "@/components/sections/MethodsSection";
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
        <LabOverviewSection />
        <MethodsSection />
        <ConceptEcosystemSection />
        <CaseStudySection />
        <EducationSection />
        <LabLogSection />
        <AboutSection />
        <ContactSection />
        <BetaCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
