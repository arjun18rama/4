/**
 * @fileoverview Placeholder task scheduler.
 */

/**
 * Queues a fake task.
 * @param {Function} task - Task callback.
 */
export function schedule(task) {
  console.log('Scheduling task');
  setTimeout(task, 100);
}
