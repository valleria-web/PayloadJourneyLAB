import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { traceEngineerProtocol as tep } from "@/content/tep";

export function TepOrientation() {
  return <Section id="tep" variant="soft">
    <h2 className="text-2xl font-semibold">{tep.name}</h2>
    <p className="mt-3 font-mono text-sm">{tep.lifecycle}</p>
    {[tep.definition, tep.relationship, tep.boundary, tep.procedureBoundary].map(text => <p key={text} className="mt-4 max-w-4xl">{text}</p>)}
    <p className="mt-6"><Link className="underline" href="/trace-engineering">Explorar Trace Engineering</Link> · <Link className="underline" href="/protocol">Consultar a orientação do protocolo</Link></p>
  </Section>;
}
