import { ArrowUpRight, GitBranch } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function MethodsSection() {
  return (
    <Section id="metodos" className="border-y border-line bg-subtle">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-[calc(0.75rem+5px)] font-semibold uppercase tracking-[0.08em] text-accent">
            METODOS PARA COMPREENDER SISTEMAS
          </p>
          <h2 className="text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            {siteContent.methods.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-graphite sm:text-lg sm:leading-8">
            {siteContent.methods.intro}
          </p>
        </div>
        <div className="w-fit rounded-full border border-line bg-white px-4 py-2 font-mono text-[calc(0.75rem+5px)] text-accent">
          trace stack: payload / usmt / origin
        </div>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {siteContent.methods.items.map((method, index) => (
          <Card
            key={method.title}
            className="group flex min-h-72 flex-col justify-between hover:-translate-y-0.5 hover:border-accent"
          >
            <div>
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="grid size-10 place-items-center rounded-lg border border-line bg-blush/50 text-pink">
                  <GitBranch aria-hidden="true" className="size-4" />
                </span>
                <span className="font-mono text-[calc(0.75rem+5px)] text-accent">0{index + 1}</span>
              </div>
              {method.category ? (
                <p className="mb-3 font-mono text-[calc(0.75rem+5px)] font-semibold uppercase tracking-[0.08em] text-accent">
                  {method.category}
                </p>
              ) : null}
              <h3 className="text-xl font-bold">{method.title}</h3>
              <p className="mt-5 text-sm leading-6 text-graphite">{method.description}</p>
              {method.status ? (
                <p className="mt-4 font-mono text-[calc(0.75rem+5px)] font-semibold text-accent">{method.status}</p>
              ) : null}
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-8 size-5 self-end text-pink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Card>
        ))}
      </div>
      <p className="mt-8 rounded-xl border border-line bg-white/80 p-6 text-sm leading-6 text-graphite">
        <span className="font-mono text-[calc(0.875rem+5px)] text-accent">{">_"}</span> {siteContent.methods.relation}
      </p>
    </Section>
  );
}
