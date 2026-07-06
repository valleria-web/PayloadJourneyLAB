# Payload Journey LAB

**Siga o flow. Entenda o sistema.**

https://www.payloadjourneylab.com

Payload Journey LAB is a laboratory for education, research, and applied investigation in software systems.

The LAB develops methods and pedagogical artifacts to understand how payloads, states, events, and decisions move through complex systems, especially in codebases expanded or modified with the assistance of AI agents.

## Purpose

AI agents can expand software systems faster than people can understand them.

When production speed becomes greater than comprehension speed, software teams may lose structural visibility, data authority, traceability, and confidence in system behavior.

Payload Journey LAB exists to investigate this gap and develop methods that help students, engineers, and organizations understand systems before modifying them.

## Core methods

### Payload Journey

A progressive observation method that follows how information is born, crosses layers, assumes different representations, and produces effects inside a system.

### USMT

**Universal System Modeling Template**

A structural modeling template for organizing phenomena, states, events, allowed and forbidden transitions, invariants, layers, metrics, and termination conditions.

### Reverse Payload Journey

An investigation method that starts from an observable anomaly and reconstructs, in reverse, the path traveled by a payload.

### Operational Payload Path

An operational Mapping instrument that organizes zones, boundaries, components, representations, responsibilities, authorities, and checkpoints across a software operation.

It transforms abstract architecture into an investigable route.

### Track to Origin

An investigative process that traces an anomaly back to its technical, semantic, or temporal origin and to the first relevant point of decision.

## Conceptual ecosystem

The methods of the LAB are part of a broader practice of structural system investigation.

The main investigation flow is:

```text
Track Mode
-> Reverse Payload Journey
-> Track to Origin
-> Evidence
-> Restoration
```

### Trace Engineer

A professional role or investigative function dedicated to following payloads, states, events, and decisions across the layers of a system.

### Track Mode

An operational state in which changes are suspended and the priority becomes observing, delimiting, registering, and understanding.

### Software System Investigation

A practice of structural investigation based on tracing, modeling, evidence, and reconstruction of decisions.

## Case Study: Saving HORA.city

HORA.city is a geolocated system used by Payload Journey LAB as a real case study for applied investigation.

After rapid expansion with AI agents, the system grew from approximately 6,000 to 40,000 lines of code and lost part of its structural observability.

The current investigation follows a temporal anomaly in `createdAt`, associated with the `HeartCreated` payload.

```text
Case ID: RPJ-HORA-001
Anomaly: incorrect createdAt
Associated payload: HeartCreated
Method: Reverse Payload Journey
Mission: Track to Origin
Status: Investigation in progress
```

The case is used to test and document how Payload Journey LAB methods operate in real systems.

## Founder

Valéria dos Santos Reiser is the creator of Payload Journey LAB and of the methods that structure its practice of applied investigation.

Her work develops ways to observe how payloads, states, events, and decisions move through complex systems, especially in codebases expanded by AI agents.

## Website

This repository contains the institutional website for Payload Journey LAB.

The website presents:

* the LAB;
* its methods;
* its conceptual ecosystem;
* the HORA.city case study;
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
* JSON-LD for `Organization`, `WebSite`, and `WebPage`;
* initial visual system;
* accessibility and responsiveness improvements;
* minimal institutional favicon.

Future work may include:

* dedicated pages for each method;
* USMT documentation page;
* HORA.city case study page;
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
