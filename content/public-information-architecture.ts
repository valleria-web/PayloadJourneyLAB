export type ArchitectureEntity = {
  id: string; name: string; canonicalPath: string;
  decision: "KEEP" | "CREATE" | "RESERVE" | "REDIRECT" | "DO_NOT_CREATE";
  lifecycle: string; pageRole: string; primaryQuestion: string; primaryAudience: string;
  primaryCta: string; primaryCtaHref: string; secondaryCta?: string; secondaryCtaHref?: string;
  inboundLinks: readonly string[]; outboundLinks: readonly string[]; implementationPriority: string;
};
export const publicInformationArchitecture = [
  {
    "id": "payload-journey",
    "name": "Payload Journey",
    "canonicalPath": "/payload-journey",
    "decision": "KEEP",
    "lifecycle": "Canonical within Payload Journey LAB",
    "pageRole": "Canonical method",
    "primaryQuestion": "How can I follow an operation through its representations, layers, decisions, states and effects?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore the flow / apply Payload Journey",
    "primaryCtaHref": "/payload-journey#demo",
    "inboundLinks": [
      "/payload-tracing",
      "/method"
    ],
    "outboundLinks": [
      "/method",
      "/learn"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "payload-tracing",
    "name": "Payload Tracing",
    "canonicalPath": "/payload-tracing",
    "decision": "CREATE",
    "lifecycle": "Practical orientation",
    "pageRole": "Conceptual/practical entry",
    "primaryQuestion": "What is payload tracing and what does following a payload reveal about a software operation?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore Payload Journey",
    "primaryCtaHref": "/payload-journey",
    "inboundLinks": [
      "/method"
    ],
    "outboundLinks": [
      "/payload-journey",
      "/investigation"
    ],
    "implementationPriority": "P1",
    "secondaryCta": "Explore Software System Investigation",
    "secondaryCtaHref": "/investigation"
  },
  {
    "id": "investigation",
    "name": "Software System Investigation",
    "canonicalPath": "/investigation",
    "decision": "KEEP",
    "lifecycle": "Broader investigative practice",
    "pageRole": "Practice / orientation",
    "primaryQuestion": "How do I investigate a software system before modifying it?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore Trace Engineering and the investigation protocol",
    "primaryCtaHref": "/trace-engineering",
    "inboundLinks": [
      "/method",
      "/trace-engineering"
    ],
    "outboundLinks": [
      "/trace-engineering",
      "/protocol"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "usmt",
    "name": "USMT — Universal System Modeling Template",
    "canonicalPath": "/usmt",
    "decision": "KEEP",
    "lifecycle": "Canonical within Payload Journey LAB",
    "pageRole": "Modeling method",
    "primaryQuestion": "What should happen for the modeled system to remain valid?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Model the expected system",
    "primaryCtaHref": "/usmt#usmt",
    "inboundLinks": [
      "/method"
    ],
    "outboundLinks": [
      "/payload-journey",
      "/protocol"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "reverse-payload-journey",
    "name": "Reverse Payload Journey",
    "canonicalPath": "/reverse-payload-journey",
    "decision": "CREATE",
    "lifecycle": "Canonical investigation method within Payload Journey LAB",
    "pageRole": "Investigation method",
    "primaryQuestion": "How do I investigate from an observable anomaly toward an evidence-supported origin?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "See the investigation protocol",
    "primaryCtaHref": "/protocol",
    "inboundLinks": [
      "/method",
      "/cases/rpj-hora-001"
    ],
    "outboundLinks": [
      "/protocol",
      "/cases/rpj-hora-001"
    ],
    "implementationPriority": "P1",
    "secondaryCta": "Examine the HORA.city case",
    "secondaryCtaHref": "/cases/rpj-hora-001"
  },
  {
    "id": "operational-payload-path",
    "name": "Operational Payload Path",
    "canonicalPath": "/operational-payload-path",
    "decision": "CREATE",
    "lifecycle": "Canonical investigation artifact within Payload Journey LAB",
    "pageRole": "Investigation mapping instrument",
    "primaryQuestion": "What is the probable or confirmed operational path of this payload or operation?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore the investigation methods",
    "primaryCtaHref": "/method",
    "inboundLinks": [
      "/method"
    ],
    "outboundLinks": [
      "/method",
      "/reverse-payload-journey",
      "/cases/rpj-hora-001"
    ],
    "implementationPriority": "P1",
    "secondaryCta": "Examine the case mapping question and evidence limits",
    "secondaryCtaHref": "/cases/rpj-hora-001"
  },
  {
    "id": "track-to-origin",
    "name": "Track to Origin",
    "canonicalPath": "/track-to-origin",
    "decision": "CREATE",
    "lifecycle": "Canonical investigative mission within Payload Journey LAB",
    "pageRole": "Origin and authority mission",
    "primaryQuestion": "Where does this value or decision originate, and who has authority over it?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore an investigation",
    "primaryCtaHref": "/investigation",
    "inboundLinks": [
      "/method",
      "/cases/rpj-hora-001"
    ],
    "outboundLinks": [
      "/investigation",
      "/cases/rpj-hora-001"
    ],
    "implementationPriority": "P1",
    "secondaryCta": "Examine the HORA.city case",
    "secondaryCtaHref": "/cases/rpj-hora-001"
  },
  {
    "id": "trace-engineering",
    "name": "Trace Engineering",
    "canonicalPath": "/trace-engineering",
    "decision": "CREATE",
    "lifecycle": "Developing investigative practice",
    "pageRole": "Practice and capabilities",
    "primaryQuestion": "What is Trace Engineering and which capabilities compose it?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore Software System Investigation",
    "primaryCtaHref": "/investigation",
    "inboundLinks": [
      "/method",
      "/investigation",
      "/protocol"
    ],
    "outboundLinks": [
      "/investigation",
      "/protocol"
    ],
    "implementationPriority": "P1",
    "secondaryCta": "See the investigation protocol",
    "secondaryCtaHref": "/protocol"
  },
  {
    "id": "trace-engineer",
    "name": "Trace Engineer",
    "canonicalPath": "/trace-engineering#trace-engineer",
    "decision": "DO_NOT_CREATE",
    "lifecycle": "Developing investigative function/profile",
    "pageRole": "Entity section within practice page",
    "primaryQuestion": "Who applies Trace Engineering capabilities?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore the broader practice",
    "primaryCtaHref": "/investigation",
    "inboundLinks": [
      "/trace-engineering"
    ],
    "outboundLinks": [
      "/investigation"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "tep",
    "name": "Trace Engineer Protocol (TEP)",
    "canonicalPath": "/trace-engineer-protocol",
    "decision": "RESERVE",
    "lifecycle": "Developing protocol artifact; not fully public",
    "pageRole": "Future canonical protocol artifact",
    "primaryQuestion": "How does TEP structure investigation progression?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Read public TEP orientation",
    "primaryCtaHref": "/protocol#tep",
    "inboundLinks": [],
    "outboundLinks": [
      "/trace-engineering",
      "/protocol",
      "/investigation",
      "/method"
    ],
    "implementationPriority": "Future"
  },
  {
    "id": "method",
    "name": "Methods Hub",
    "canonicalPath": "/method",
    "decision": "KEEP",
    "lifecycle": "Current public hub",
    "pageRole": "Taxonomy and relationship hub",
    "primaryQuestion": "Which practice, method or instrument answers my question?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "See the investigation protocol",
    "primaryCtaHref": "/protocol",
    "inboundLinks": [
      "/",
      "/investigation"
    ],
    "outboundLinks": [
      "/payload-tracing",
      "/payload-journey",
      "/usmt",
      "/reverse-payload-journey",
      "/operational-payload-path",
      "/track-to-origin",
      "/trace-engineering",
      "/protocol"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "protocol",
    "name": "Protocol",
    "canonicalPath": "/protocol",
    "decision": "KEEP",
    "lifecycle": "Public four-phase orientation",
    "pageRole": "Investigation progression",
    "primaryQuestion": "How should an investigation progress?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Examine a case",
    "primaryCtaHref": "/cases/rpj-hora-001",
    "inboundLinks": [
      "/method",
      "/investigation"
    ],
    "outboundLinks": [
      "/method",
      "/trace-engineering",
      "/cases/rpj-hora-001"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "cases",
    "name": "Case Files",
    "canonicalPath": "/cases",
    "decision": "KEEP",
    "lifecycle": "Current public index",
    "pageRole": "Case index / evidence entry",
    "primaryQuestion": "What investigations and bounded evidence are available?",
    "primaryAudience": "Investigators and evidence reviewers",
    "primaryCta": "Examine HORA.city",
    "primaryCtaHref": "/cases/rpj-hora-001",
    "inboundLinks": [
      "/",
      "/protocol"
    ],
    "outboundLinks": [
      "/cases/rpj-hora-001",
      "/method",
      "/protocol"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "rpj-hora-001",
    "name": "Founding Reference Case 001 — HORA.city",
    "canonicalPath": "/cases/rpj-hora-001",
    "decision": "CREATE",
    "lifecycle": "Active investigation",
    "pageRole": "Founder-owned internal reference investigation",
    "primaryQuestion": "What is documented and what remains unknown in RPJ-HORA-001?",
    "primaryAudience": "Investigators and evidence reviewers",
    "primaryCta": "Examine documentary evidence",
    "primaryCtaHref": "/cases/rpj-hora-001#evidence",
    "inboundLinks": [
      "/cases",
      "/reverse-payload-journey",
      "/track-to-origin",
      "/operational-payload-path"
    ],
    "outboundLinks": [
      "/reverse-payload-journey",
      "/track-to-origin",
      "/learn",
      "/cases"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "papers",
    "name": "Papers",
    "canonicalPath": "/papers",
    "decision": "RESERVE",
    "lifecycle": "Awaiting first genuine paper",
    "pageRole": "Future publication index",
    "primaryQuestion": "Which research papers are available?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore current definitions",
    "primaryCtaHref": "/lab-definitions",
    "inboundLinks": [],
    "outboundLinks": [
      "/lab-definitions"
    ],
    "implementationPriority": "Future"
  },
  {
    "id": "definitions",
    "name": "LAB Definitions",
    "canonicalPath": "/lab-definitions",
    "decision": "KEEP",
    "lifecycle": "Canonical public reference",
    "pageRole": "Glossary",
    "primaryQuestion": "What do LAB terms mean?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore methods",
    "primaryCtaHref": "/method",
    "inboundLinks": [
      "/ai-welcome",
      "/"
    ],
    "outboundLinks": [
      "/method",
      "/lab"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "ai-welcome",
    "name": "AI Welcome",
    "canonicalPath": "/ai-welcome",
    "decision": "KEEP",
    "lifecycle": "Canonical public orientation",
    "pageRole": "Machine and human semantic orientation",
    "primaryQuestion": "How should the LAB be represented accurately?",
    "primaryAudience": "AI agents and human readers",
    "primaryCta": "Consult LAB Definitions",
    "primaryCtaHref": "/lab-definitions",
    "inboundLinks": [
      "/"
    ],
    "outboundLinks": [
      "/lab-definitions",
      "/method",
      "/cases",
      "/lab"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "lab",
    "name": "LAB",
    "canonicalPath": "/lab",
    "decision": "KEEP",
    "lifecycle": "Current author-led LAB identity",
    "pageRole": "Identity, mission, origin and founder",
    "primaryQuestion": "Who is behind the LAB and why does it exist?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore methods",
    "primaryCtaHref": "/method",
    "inboundLinks": [
      "/"
    ],
    "outboundLinks": [
      "/method",
      "/investigation",
      "/cases",
      "/learn"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "author",
    "name": "Author",
    "canonicalPath": "/lab#founder",
    "decision": "KEEP",
    "lifecycle": "Creator and methodological direction",
    "pageRole": "Founder context",
    "primaryQuestion": "Who created the LAB and USMT?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore the LAB",
    "primaryCtaHref": "/lab",
    "inboundLinks": [
      "/lab"
    ],
    "outboundLinks": [
      "/lab"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "author-future",
    "name": "Author future route",
    "canonicalPath": "/author/valeria-dos-santos-reiser",
    "decision": "RESERVE",
    "lifecycle": "Awaiting publication need",
    "pageRole": "Future author entity page",
    "primaryQuestion": "Who authored these publications?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Read founder context",
    "primaryCtaHref": "/lab#founder",
    "inboundLinks": [],
    "outboundLinks": [
      "/lab#founder"
    ],
    "implementationPriority": "Future"
  },
  {
    "id": "learn",
    "name": "Learn",
    "canonicalPath": "/learn",
    "decision": "KEEP",
    "lifecycle": "Current learning progression; beta training",
    "pageRole": "Learning and formal training bridge",
    "primaryQuestion": "How do I progress from tracing to investigation?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore the course",
    "primaryCtaHref": "/learn#formacao",
    "inboundLinks": [
      "/",
      "/cases/rpj-hora-001"
    ],
    "outboundLinks": [
      "/payload-journey",
      "/cases",
      "/method"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "home",
    "name": "Homepage",
    "canonicalPath": "/",
    "decision": "KEEP",
    "lifecycle": "Current public entry",
    "pageRole": "Problem and orientation",
    "primaryQuestion": "Where should I begin?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore Payload Journey",
    "primaryCtaHref": "/payload-journey",
    "inboundLinks": [],
    "outboundLinks": [
      "/payload-journey",
      "/method",
      "/cases",
      "/learn"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "ecosystem",
    "name": "Ecosystem",
    "canonicalPath": "/ecosystem",
    "decision": "KEEP",
    "lifecycle": "Current public orientation",
    "pageRole": "Relationships and channels",
    "primaryQuestion": "How do LAB activities relate?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Start learning",
    "primaryCtaHref": "/learn",
    "inboundLinks": [
      "/lab"
    ],
    "outboundLinks": [
      "/learn",
      "/cases",
      "/lab"
    ],
    "implementationPriority": "P1"
  },
  {
    "id": "lablog",
    "name": "LabLog",
    "canonicalPath": "/lablog",
    "decision": "RESERVE",
    "lifecycle": "Feature flag disabled",
    "pageRole": "Editorial surface held from publication",
    "primaryQuestion": "What is happening in the LAB?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Explore cases",
    "primaryCtaHref": "/cases",
    "inboundLinks": [],
    "outboundLinks": [
      "/cases"
    ],
    "implementationPriority": "Future"
  },
  {
    "id": "glossary",
    "name": "Glossary alias",
    "canonicalPath": "/glossary",
    "decision": "DO_NOT_CREATE",
    "lifecycle": "No demonstrated navigation need",
    "pageRole": "Avoid duplicate glossary",
    "primaryQuestion": "Where are definitions?",
    "primaryAudience": "Students, developers and software investigators",
    "primaryCta": "Consult canonical definitions",
    "primaryCtaHref": "/lab-definitions",
    "inboundLinks": [],
    "outboundLinks": [
      "/lab-definitions"
    ],
    "implementationPriority": "P1"
  }
] as const satisfies readonly ArchitectureEntity[];
export const createdArchitectureEntities = publicInformationArchitecture.filter(entity => entity.decision === "CREATE");
