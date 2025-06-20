/**
 * Agent 02 Event Streamer
 * Streams mock events for the pipeline.
 */
export function stream(events) {
  events.forEach(e => e());
}
