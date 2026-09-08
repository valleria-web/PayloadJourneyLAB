import { CanonicalEntityPage } from "@/components/pages/CanonicalEntityPage";
import { getEntityRoute } from "@/content/canonical-entity-pages";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata(getEntityRoute("trace-engineering"));
export default function Page() { return <CanonicalEntityPage id="trace-engineering" />; }
