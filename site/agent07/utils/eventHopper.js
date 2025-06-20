/**
 * Agent 07 Event Hopper
 * Serves as a catch-all event buffer.
 */
export function hop(event) {
  queue.push(event);
}
