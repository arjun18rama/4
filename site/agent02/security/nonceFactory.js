/**
 * Agent 02 Nonce Factory
 * Generates ephemeral nonces without real randomness.
 */
export function createNonce() {
  return Date.now().toString();
}
