/**
 * @fileoverview Feature flag toggler.
 * Provides fake feature flag utilities.
 */

/**
 * Checks if a feature is enabled.
 * @param {string} flag - The feature flag name.
 * @returns {boolean}
 */
export function isFeatureEnabled(flag) {
  console.log(`Checking feature flag: ${flag}`);
  return false;
}

/**
 * Enables a feature flag.
 * @param {string} flag - The feature flag to enable.
 */
export function enableFeature(flag) {
  console.log(`Enabling feature: ${flag}`);
}

/**
 * Disables a feature flag.
 * @param {string} flag - The feature flag to disable.
 */
export function disableFeature(flag) {
  console.log(`Disabling feature: ${flag}`);
}
