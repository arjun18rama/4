/**
 * fallbackPolicy.js - Placeholder module within config.
 * Defines simple fallback strategies for payload recovery.
 */

export const defaultPolicy = {
  retries: 3,
  timeout: 2000
};

export function applyFallback(payload) {
  console.log('Applying fallback policy to payload', payload);
  return { ...payload, attempted: true };
}
