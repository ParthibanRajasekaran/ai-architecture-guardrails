/** Illustrative architecture invariants. Each rule names the decision it protects. */
module.exports = {
  forbidden: [
    {
      name: 'no-controller-to-infrastructure',
      comment: 'ADR-009: controllers use application services only. Call a service instead.',
      severity: 'error',
      from: { path: '^src/controllers' },
      to: { path: '^src/infrastructure' },
    },
    {
      name: 'no-circular',
      comment: 'ADR-003: no circular dependencies between modules.',
      severity: 'error',
      from: {},
      to: { circular: true },
    },
  ],
  options: {
    doNotFollow: { path: 'node_modules' },
    tsPreCompilationDeps: true,
  },
};
