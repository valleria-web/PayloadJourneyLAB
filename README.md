# Payload Journey LAB

**Follow the flow. Understand the system.**

*Siga o flow. Entenda o sistema.*

https://www.payloadjourneylab.com

Payload Journey LAB is an author-led software system investigation lab created by Valéria dos Santos Reiser. It develops investigative methods, evidence models, case studies, and educational resources for understanding execution before modification.

The LAB develops methods and pedagogical artifacts to understand how payloads, states, events, and decisions move through complex systems, especially in codebases expanded or modified with the assistance of AI agents.

## Purpose

AI agents can expand software systems faster than people can structurally understand them.

When code production grows without equivalent system comprehension, software teams may lose visibility over data flow, authority, traceability, and confidence in system behavior.

Payload Journey LAB exists to help students, engineers, and organizations follow payloads across system layers, understand how events, states, and decisions propagate, and investigate complex software systems before modifying them.


## Core methods

### Payload Journey

A method that follows an operation through the representations, layers, interpretations, decisions, states, and effects that compose its execution.

### USMT

**Universal System Modeling Template**

A structural modeling template for organizing phenomena, states, events, allowed and forbidden transitions, invariants, layers, metrics, and termination conditions.

USMT is canonical within Payload Journey LAB. It is not presented as an external industry standard.

### Reverse Payload Journey

An investigation method that begins with an observable anomaly and follows the associated payload backwards through the system to reconstruct its path and locate the first evidence-backed divergence.

### Operational Payload Path

An investigation artifact representing the bounded path actually investigated for a payload or operation. It distinguishes observed, inferred, expected, and unknown segments.

It transforms abstract architecture into an investigable route.

### Track to Origin

An investigative mission that pursues the earliest evidence-supported point at which a relevant value, representation, decision, or authority originates. Origin is not declared before evidence establishes it.

These method domains currently do not have separate, standalone versioned specifications published in the documentation system. Their [method READMEs](docs/methods/README.md) are navigation indexes, not substitute specifications.

## Conceptual ecosystem

The methods and concepts of the LAB have distinct lifecycle states and are part of a broader practice of software system investigation.

The main investigation flow is:

```text
Track Mode
-> Reverse Payload Journey
-> Track to Origin
-> Evidence
-> Restoration
```

### Trace Engineering

Trace Engineering is a **developing investigative practice** composed of capabilities for tracing operations, locating decisions, comparing expected models with execution, and producing verifiable explanations.

It is not presented as an established engineering discipline, an industry standard, or an externally standardized field.

### Trace Engineer

Trace Engineer is a **developing investigative function/profile** applying Trace Engineering capabilities. It is not presented by Payload Journey LAB as an established profession, certification, official job category, or universally recognized occupational role.

### Track Mode

An investigative operating practice in which modification-oriented behavior is suspended and the priority becomes observing, delimiting, registering, and understanding.

### Software System Investigation

A structured practice that investigates observable software phenomena by delimiting systems, following operations, collecting evidence, comparing expected and observed behavior, and producing bounded explanations.

## Founding Reference Case 001 — HORA.city

HORA.city is a founder-owned internal reference investigation conducted on a real geolocated software system. It remains active and does not constitute external independent or scientific validation.

After rapid expansion with AI agents, the system grew from approximately 6,000 to 40,000 lines of code and lost part of its structural observability.

The current investigation concerns an incorrect `createdAt` representation. `HeartCreated` is the payload currently associated with the investigation at the **Documentary Evidence** level. Runtime confirmation of this association has not been established in the public evidence record.

```text
Case: Founding Reference Case 001 — HORA.city
Investigation ID: RPJ-HORA-001
Anomaly: incorrect createdAt
Associated payload: HeartCreated
Association evidence: Documentary
Method: Reverse Payload Journey
Mission: Track to Origin
Lifecycle: Active investigation
```

The investigation has not established causal origin, temporal authority, restoration, a verified fix, final outcome, or closure. Its [active case record](docs/cases/RPJ-HORA-001/README.md) preserves the current boundaries and links separately to historical baseline assessments.

## Payload Journey LAB Evidence Model

The LAB distinguishes six evidence levels—**Conceptual, Documentary, Runtime, Implementation, Verification, and External or Independent Evidence**—to prevent different kinds of claims from being conflated.

The model is canonical within Payload Journey LAB; it is not presented as an external scientific standard. See the [Semantic Identity Charter](docs/governance/semantic-identity/semantic-identity-charter-v1.0.md#8-payload-journey-lab-evidence-model) for the current definitions and guardrails.

## Documentation

The governed [documentation system](docs/README.md) separates:

* current governance;
* method indexes and future versioned specifications;
* active cases;
* research outputs;
* operational records;
* product documentation;
* historical archive.

The [Payload Journey LAB Semantic Identity Charter v1.0](docs/governance/semantic-identity/semantic-identity-charter-v1.0.md) is the current semantic governance source. This repository README is an orientation document and does not override governance.

## Founder

Valéria dos Santos Reiser is the creator of Payload Journey LAB and USMT and provides the LAB's intellectual, methodological, investigative, and pedagogical direction.

Her work develops ways to observe how payloads, states, events, and decisions move through complex systems, especially in codebases expanded by AI agents.

## Website

This repository contains the institutional website for Payload Journey LAB.

The website presents:

* the LAB;
* its methods;
* its conceptual ecosystem;
* the HORA.city founding reference case;
* the investigative protocol and practice;
* canonical LAB definitions;
* future white papers;
* education and collaboration paths.

## Technical stack

The website is currently built with:

* Next.js App Router;
* React;
* TypeScript;
* Tailwind CSS;
* functional components;
* minimal SVG and CSS-based visual artifacts.

The project follows a lightweight, editorial, technical, and accessible approach.

## Development status

The website is in active development.

Current implementation includes:

* institutional homepage;
* centralized content structure;
* metadata and canonical URL;
* Open Graph and Twitter metadata;
* `robots.txt`;
* `sitemap.xml`;
* JSON-LD for `Organization`, `WebSite`, `WebPage`, `Person`, and `CreativeWork`, with contextual `FAQPage` data;
* dedicated routes for AI orientation, methods, USMT, learning, investigation, protocol, LAB definitions, cases, ecosystem, and the LAB;
* a governed documentation system separating current authority from historical memory;
* initial visual system;
* accessibility and responsiveness improvements;
* minimal institutional favicon.

Future work may include:

* standalone versioned method specifications;
* expanded live evidence records for `RPJ-HORA-001`;
* white paper publication pages;
* official Open Graph image;
* legal pages;
* contact channel configuration.

## Repository scope

This repository is focused on the public institutional website.

It does not currently include:

* backend services;
* CMS;
* authentication;
* database;
* analytics;
* production contact form;
* private research material;
* unpublished white papers.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Run TypeScript validation:

```bash
npx tsc --noEmit
```

Run documentation-system validation:

```bash
npm run verify:documentation
```

Run root README semantic validation:

```bash
npm run verify:root-readme
```

Build the project:

```bash
npm run build
```

## AI and crawler visibility

The website is structured to be readable by humans, search engines, and AI-assisted discovery systems.

The current crawler policy allows general indexing and discovery while keeping training-related access separated for later review.

Current policy:

```text
OAI-SearchBot: allowed
ChatGPT-User: allowed
GPTBot: blocked for now
General crawlers: allowed
```

This policy may evolve as the LAB defines its long-term publication and intellectual property strategy.

## License

License information has not been finalized yet.

Until a license is explicitly added, all rights are reserved by Payload Journey LAB.

## Author

Payload Journey LAB
Created by Valéria dos Santos Reiser

https://www.payloadjourneylab.com
