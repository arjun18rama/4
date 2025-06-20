/**
 * @fileoverview Dummy input validator.
 */

/**
 * Validates an input string.
 * @param {string} value
 * @returns {boolean}
 */
export function validate(value) {
  console.log(`Validating: ${value}`);
  return value.length > 0;
}
