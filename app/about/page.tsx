import { SitePage } from "@/components/pages/SitePage";
import { AboutSection } from "@/components/sections/AboutSection";
import { thematicRoutes } from "@/content/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = thematicRoutes.about;
export const metadata = createPageMetadata(route);

export default function AboutPage() {
  return (
    <SitePage
      route={route}
      continuation={[
        { label: "Conhecer o LAB", href: "/lab" },
        { label: "Explorar o ecossistema", href: "/ecosystem" },
      ]}
    >
      <AboutSection />
    </SitePage>
  );
}
