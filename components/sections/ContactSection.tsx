import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

const socialIcons = {
  LinkedIn: Linkedin,
  YouTube: Youtube,
  GitHub: Github,
};

export function ContactSection() {
  return (
    <Section id="contato" className="border-t border-line">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeader title={siteContent.contact.title} description={siteContent.contact.text} />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${siteContent.contact.email}`}>
              <Mail aria-hidden="true" className="mr-2 size-4" />
              Botão de contato
            </Button>
          </div>
        </div>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
            Canais
          </p>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="mt-6 block border border-line p-4 font-semibold hover:border-ink"
          >
            {siteContent.contact.email}
          </a>
          <div className="mt-4 grid gap-3">
            {siteContent.contact.links.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 border border-line p-4 font-semibold hover:border-ink"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </Card>
      </div>
    </Section>
  );
}
