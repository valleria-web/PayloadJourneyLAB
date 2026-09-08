import { CanonicalEntityPage } from "@/components/pages/CanonicalEntityPage";
import { getEntityRoute } from "@/content/canonical-entity-pages";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata(getEntityRoute("track-to-origin"));
export default function Page() { return <CanonicalEntityPage id="track-to-origin" />; }
