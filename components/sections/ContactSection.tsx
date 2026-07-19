import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

const channelIcons = {
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
            <Button disabled>
              <Mail aria-hidden="true" className="mr-2 size-4" />
              {siteContent.contact.action.label}
            </Button>
          </div>
        </div>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
            Canais
          </p>
          <div className="mt-6 grid gap-3">
            {siteContent.contact.channels.map((channel) => {
              const Icon = channelIcons[channel.label as keyof typeof channelIcons];

              return (
                <span
                  key={channel.label}
                  aria-disabled="true"
                  className="flex items-center gap-3 rounded-sm border border-line bg-soft p-4 font-semibold text-muted"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {channel.label}
                  {channel.status ? ` - ${channel.status}` : null}
                </span>
              );
            })}
          </div>
        </Card>
      </div>
    </Section>
  );
}
