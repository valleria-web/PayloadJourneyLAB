import { CanonicalEntityPage } from "@/components/pages/CanonicalEntityPage";
import { getEntityRoute } from "@/content/canonical-entity-pages";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata(getEntityRoute("operational-payload-path"));
export default function Page() { return <CanonicalEntityPage id="operational-payload-path" />; }
