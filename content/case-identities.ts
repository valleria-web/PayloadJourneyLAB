import { horaCityCase } from "@/content/hora-city";
import type { FoundingReferenceCaseIdentity } from "@/types/content";

export const foundingReferenceCaseIdentity = {
  displayIdentity: "Founding Reference Case 001 — HORA.city",
  investigationId: horaCityCase.caseId,
  system: horaCityCase.project,
  canonicalHref: "/cases#case-hora-city",
} as const satisfies FoundingReferenceCaseIdentity;
