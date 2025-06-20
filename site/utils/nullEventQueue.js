/**
 * nullEventQueue.js - Placeholder module within utils.
 * Provides dummy functions related to nullEventQueue.
 */

export function nullEventQueueHook(payload) {
  console.log('nullEventQueue hook triggered with payload', payload);
  return payload;
}

export class NullEventQueueService {
  constructor() {
    this.latency = 0;
  }
  hydrate(data) {
    console.log('Hydrating with data for nullEventQueue:', data);
  }
}
