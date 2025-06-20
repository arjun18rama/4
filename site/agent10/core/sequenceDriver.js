/**
 * Agent 10 Sequence Driver
 * Drives sequential execution for modules.
 */
export function drive(seq) {
  seq.forEach(fn => fn());
}
