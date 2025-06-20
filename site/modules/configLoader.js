/**
 * @fileoverview Dummy config loader.
 * Provides placeholder methods to mimic configuration retrieval.
 */

/**
 * Loads the application configuration.
 * @returns {{env: string, version: string}}
 */
export function loadConfig() {
  console.log('Loading configuration');
  return { env: 'development', version: '1.0.0' };
}
