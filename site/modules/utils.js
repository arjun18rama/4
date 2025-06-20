/**
 * @fileoverview General utilities.
 */

/**
 * Sleeps for the specified duration.
 * @param {number} ms - Duration in milliseconds.
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  console.log(`Sleeping for ${ms}ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
}
