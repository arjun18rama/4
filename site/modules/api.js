/**
 * @fileoverview Fake API request utilities.
 */

/**
 * Simulates an API request.
 * @param {string} endpoint - The endpoint to request.
 * @returns {Promise<object>} A promise that resolves with fake data.
 */
export function fakeRequest(endpoint) {
  console.log(`Requesting: ${endpoint}`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: 'ok', endpoint });
    }, 300);
  });
}
