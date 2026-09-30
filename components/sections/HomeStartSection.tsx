import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { homeStartContent } from "@/content/site";

export function HomeStartSection() {
  return (
    <Section id="comece-aqui" aria-labelledby="comece-aqui-title" className="border-b border-line py-10 sm:py-12">
      <div className="max-w-4xl border-l-2 border-accent-readable pl-5">
        <h2 id="comece-aqui-title" className="text-2xl font-bold text-ink sm:text-3xl">
          {homeStartContent.title}
        </h2>
        <p className="mt-2 text-base font-semibold leading-7 text-ink">
          {homeStartContent.subtitle}
        </p>
        <p className="mt-3 text-sm leading-6 text-text-muted">
          {homeStartContent.description}
        </p>
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {homeStartContent.options.map((option) => (
          <li key={option.href} className="min-w-0">
            <Card className="h-full p-5">
              <h3 className="text-base font-semibold leading-6">
                <a
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center gap-3 rounded-sm text-accent-readable hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                >
                  <span>{option.label}</span>
                  {option.external ? (
                    <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                  ) : (
                    <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                  )}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{option.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
