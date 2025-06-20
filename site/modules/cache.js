/**
 * @fileoverview Fake caching utilities.
 */

const cacheStore = {};

/**
 * Stores a value in the fake cache.
 * @param {string} key
 * @param {*} value
 */
export function setCache(key, value) {
  console.log(`Caching ${key}`);
  cacheStore[key] = value;
}

/**
 * Retrieves a value from the fake cache.
 * @param {string} key
 * @returns {*}
 */
export function getCache(key) {
  console.log(`Getting cache for ${key}`);
  return cacheStore[key];
}
