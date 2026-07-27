# Public verification evidence

Observed on 27 July 2026 using unauthenticated public web retrieval.

## Successfully retrieved

- `https://www.payloadjourneylab.com/`
- `https://www.payloadjourneylab.com/payload-journey`
- `https://www.payloadjourneylab.com/learn`
- `https://www.payloadjourneylab.com/cases`
- `https://www.payloadjourneylab.com/usmt`
- `https://www.payloadjourneylab.com/method`
- `https://www.payloadjourneylab.com/protocol`
- `https://www.payloadjourneylab.com/investigation`
- `https://www.payloadjourneylab.com/lab`
- `https://www.payloadjourneylab.com/ecosystem`
- `https://www.payloadjourneylab.com/lablog`
- Udemy course URL with the repository coupon query

## Not conclusively retrieved

- `/lab-definitions` returned a retrieval cache miss.
- `/robots.txt` and `/sitemap.xml` were not retrievable by the public web tool.
- `/about` redirect responses could not be captured.
- The YouTube channel page could not be retrieved by the tool.

These failures mean `External verification required.` They do not prove that a
resource is absent.

## Deployment drift confirmed

The live `/lablog` page returned content and was linked by the live site. In the
current branch:

- `config/site.ts` sets `labLogPublic: false`;
- `/lablog` executes `notFound()`;
- the route is removed from sitemap, footer and continuations;
- `verify:cases-evidence` confirms a 404.

The live homepage and some route copy also differ from current branch copy.
No deployment workflow/configuration is versioned, so the deployed commit could
not be identified. Public availability must therefore be recorded separately
from current-branch behavior.
