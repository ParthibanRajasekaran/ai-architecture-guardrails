# ai-architecture-guardrails

A small, vendor-neutral template from the talk "Your Copilot Never Attended Design Review: Stopping AI architecture drift before merge".

Review the decision, not the diff. Three layers:

1. **Capture**: `architecture-intent.md`, one page of boundaries and reasons, kept in the repo.
2. **Encode**: `.dependency-cruiser.js`, invariants that fail the build and name the decision (ADR) they protect.
3. **Gate**: `.github/pull_request_template.md` asks "Which decision does this change touch?"

All rules, ADR numbers and paths here are illustrative. Replace them with your own.

## Try it

```bash
npm install
npm run test:architecture      # passes
```

Now make the controller reach into infrastructure, for example add this as the first line of `src/controllers/PaymentController.ts`:

```ts
import { cache } from '../infrastructure/cache';
```

```bash
npm run test:architecture      # fails
# error no-controller-to-infrastructure: src/controllers/PaymentController.ts -> src/infrastructure/cache.ts
```

The rule's `comment` points at ADR-009, so the person (or the assistant) knows which decision was broken and what to do instead.

## Equivalents

dependency-cruiser fits JavaScript and TypeScript. On the JVM, ArchUnit covers the same ground. Custom lint rules work anywhere.

## Limits

Automate what is mechanical (boundaries, conventions, required wrappers). Keep trade-offs, rule retirement and deliberate exceptions human. Review the rules like code.

Licence: MIT. See the LICENSE file.
