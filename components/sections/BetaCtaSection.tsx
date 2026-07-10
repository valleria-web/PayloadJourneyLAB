import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";

export function BetaCtaSection() {
  return (
    <section className="border-t border-line bg-ink py-10 text-white sm:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-terminal">
              LAB Beta
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{siteContent.betaCta.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              {siteContent.betaCta.text}
            </p>
          </div>
          <Button
            href={siteContent.betaCta.action.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-fit"
          >
            {siteContent.betaCta.action.label}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
