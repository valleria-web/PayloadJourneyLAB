import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type ContinuationItem = {
  label: string;
  href: string;
};

type PageContinuationProps = {
  title?: string;
  items: ContinuationItem[];
};

export function PageContinuation({
  title = "Continue explorando o LAB",
  items,
}: PageContinuationProps) {
  return (
    <section className="border-t border-line bg-subtle py-10 sm:py-12">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <h2 className="max-w-xl text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {items.map((item, index) => (
              <Button
                key={item.href}
                href={item.href}
                variant={index === 0 ? "contrast" : "secondary"}
              >
                {item.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
