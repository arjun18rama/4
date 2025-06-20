/**
 * @fileoverview Placeholder router for navigation.
 */

/**
 * Simple route map.
 */
export const routes = {
  '/': 'index.html',
  '/about': 'about/'
};

/**
 * Navigates to a route.
 * @param {string} path - Route path.
 */
export function navigate(path) {
  console.log(`Navigating to ${path}`);
  const target = routes[path];
  if (target) {
    window.location.href = target;
  } else {
    console.warn(`Route ${path} not found`);
  }
}
