/**
 * @fileoverview Fake encryption utilities.
 */

/**
 * Encrypts data in a fake manner.
 * @param {string} data
 * @returns {string}
 */
export function encrypt(data) {
  console.log('Encrypting data');
  return btoa(data);
}

/**
 * Decrypts previously 'encrypted' data.
 * @param {string} data
 * @returns {string}
 */
export function decrypt(data) {
  console.log('Decrypting data');
  return atob(data);
}
