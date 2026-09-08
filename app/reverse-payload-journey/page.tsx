import { CanonicalEntityPage } from "@/components/pages/CanonicalEntityPage";
import { getEntityRoute } from "@/content/canonical-entity-pages";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata(getEntityRoute("reverse-payload-journey"));
export default function Page() { return <CanonicalEntityPage id="reverse-payload-journey" />; }
