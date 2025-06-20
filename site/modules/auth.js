/**
 * @fileoverview Placeholder authentication module.
 */

/**
 * Performs a fake login.
 * @param {string} user - Username.
 * @param {string} pass - Password.
 * @returns {boolean}
 */
export function login(user, pass) {
  console.log(`Logging in ${user}`);
  return true;
}

/**
 * Performs a fake logout.
 */
export function logout() {
  console.log('Logging out');
}
