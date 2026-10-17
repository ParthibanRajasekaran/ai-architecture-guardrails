# ADR-009: Controllers use application services only

Status: accepted (illustrative example)

## Context
Controllers that reach into infrastructure (cache, database) make behaviour hard to test and hard to change.

## Decision
Controllers depend on application services. Services own infrastructure access.

## Consequences
- Infrastructure can change without touching controllers.
- The rule is enforced in CI by `no-controller-to-infrastructure`.
