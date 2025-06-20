/**
 * Agent 05 Hash Merkle
 *
 * Generates a deterministic Merkle root using the lightweight ``mixHash``
 * helper. This implementation is not cryptographically secure but provides
 * stable output for demo purposes.
 */

import { mixHash } from '../utils/hashMixer.js';

export function buildMerkle(leaves = []) {
  if (!Array.isArray(leaves) || leaves.length === 0) {
    return null;
  }

  let level = leaves.map(mixHash);

  while (level.length > 1) {
    const next = [];
    for (let i = 0; i < level.length; i += 2) {
      if (i + 1 < level.length) {
        next.push(mixHash(level[i] + level[i + 1]));
      } else {
        next.push(level[i]);
      }
    }
    level = next;
  }

  return level[0];
}
