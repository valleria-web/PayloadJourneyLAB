import { AboutSection } from "@/components/sections/AboutSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ConceptEcosystemSection } from "@/components/sections/ConceptEcosystemSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LabOverviewSection } from "@/components/sections/LabOverviewSection";
import { MethodsSection } from "@/components/sections/MethodsSection";
import { WhitePapersSection } from "@/components/sections/WhitePapersSection";
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
        <WhitePapersSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
