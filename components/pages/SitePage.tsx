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
  description: string | readonly string[];
  metadataDescription?: string;
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
  return (
    <>
      <JsonLd
        data={getThematicPageStructuredData(
          route.path,
          route.title,
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
          action={route.introAction}
          secondaryAction={route.introSecondaryAction}
        />
        {children}
        <PageContinuation items={continuation} />
      </main>
      <SiteFooter />
    </>
  );
}
