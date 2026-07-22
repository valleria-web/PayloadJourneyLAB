import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export function PageIntro({ eyebrow, title, description, action }: PageIntroProps) {
  return (
    <Section id="page-intro" className="border-b border-line py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl">
        <TechnicalLabel tone="readable">{eyebrow}</TechnicalLabel>
        <h1 className="mt-5 text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">
          {description}
        </p>
        <div className="mt-7 flex flex-col items-start gap-2">
          {action ? (
            <Button
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              variant="contrast"
            >
              {action.label}
            </Button>
          ) : null}
          <Button href="/" variant="ghost" className="px-0">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Voltar à homepage
          </Button>
        </div>
      </div>
    </Section>
  );
}
