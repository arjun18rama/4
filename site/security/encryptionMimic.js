/**
 * encryptionMimic.js - Placeholder module within security.
 * Provides a pseudo encryption routine for demonstration.
 */

export function encryptPayload(payload) {
  console.log('encryptionMimic encrypting payload', payload);
  return btoa(JSON.stringify(payload));
}

export function decryptPayload(token) {
  console.log('encryptionMimic decrypting token', token);
  return JSON.parse(atob(token));
}
