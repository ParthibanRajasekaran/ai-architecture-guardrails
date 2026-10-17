# Architecture intent (template)

Keep this under one page. If it is not in the repo, the assistant cannot see it.

## Boundaries
- Controllers call application services only. Never infrastructure directly. (ADR-009)
- Cross-service data goes through the published contract. (ADR-011)

## Why
- Infrastructure choices change; controllers should not.
- Contract changes are reviewed by the owning team.

## Dependencies
- Use `platform/http-client`. Do not call `fetchWithRetry()` or raw `fetch`.

## Before opening a PR
- Which decision does this change touch? Link the ADR in the description.
