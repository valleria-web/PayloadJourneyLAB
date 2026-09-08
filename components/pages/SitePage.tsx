import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageContinuation } from "@/components/pages/PageContinuation";
import { PageIntro } from "@/components/pages/PageIntro";
import { JsonLd } from "@/components/seo/JsonLd";
import { getThematicPageStructuredData } from "@/lib/structured-data";
import { publicInformationArchitecture } from "@/content/public-information-architecture";

type RoutePresentation = {
  path: string;
  eyebrow: string;
  title: string;
  description: string | readonly string[];
  metadataDescription?: string;
  metadataTitle?: string;
  introAction?: {
    label: string;
    href: string;
    external?: boolean;
  };
  introSecondaryAction?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

type SitePageProps = {
  route: RoutePresentation;
  children: ReactNode;
  continuation: Array<{ label: string; href: string }>;
};

export function SitePage({ route, children, continuation }: SitePageProps) {
  const entity = publicInformationArchitecture.find(item => item.canonicalPath === route.path);
  const architectureAction = entity ? { label: entity.primaryCta, href: entity.primaryCtaHref } : undefined;
  const useArchitectureAction = ["/investigation", "/protocol", "/cases"].includes(route.path);
  return (
    <>
      <JsonLd
        data={getThematicPageStructuredData(
          route.path,
          route.metadataTitle ?? route.title,
          route.metadataDescription ??
            (typeof route.description === "string"
              ? route.description
              : route.description.join(" ")),
        )}
      />
      <SiteHeader currentPath={route.path} />
      <main>
        <PageIntro
          eyebrow={route.eyebrow}
          title={route.title}
          description={route.description}
          action={useArchitectureAction ? architectureAction : route.introAction ?? architectureAction}
          secondaryAction={route.introSecondaryAction}
        />
        {children}
        <PageContinuation items={continuation} />
      </main>
      <SiteFooter />
    </>
  );
}
