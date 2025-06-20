/**
 * Agent 08 Data Cloner
 * Clones data objects for isolation tests.
 */
export function clone(item) {
  return JSON.parse(JSON.stringify(item));
}
