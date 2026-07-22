import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageContinuation } from "@/components/pages/PageContinuation";
import { PageIntro } from "@/components/pages/PageIntro";
import { JsonLd } from "@/components/seo/JsonLd";
import { getThematicPageStructuredData } from "@/lib/structured-data";

type RoutePresentation = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  metadataDescription?: string;
};

type SitePageProps = {
  route: RoutePresentation;
  children: ReactNode;
  continuation: Array<{ label: string; href: string }>;
};

export function SitePage({ route, children, continuation }: SitePageProps) {
  return (
    <>
      <JsonLd
        data={getThematicPageStructuredData(
          route.path,
          route.title,
          route.metadataDescription ?? route.description,
        )}
      />
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow={route.eyebrow}
          title={route.title}
          description={route.description}
        />
        {children}
        <PageContinuation items={continuation} />
      </main>
      <SiteFooter />
    </>
  );
}
