/**
 * Agent 04 Hook Resolver
 * Locates mock lifecycle hooks for modules.
 */
export function resolveHook(name) {
  return `hook-${name}`;
}
