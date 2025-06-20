/**
 * pluginBus.js - Placeholder module within lib.
 * Routes plugin payloads through simulated message bus.
 */

import { observerHubHook } from './observerHub.js';

export function pluginBusHook(payload) {
  console.log('pluginBus hook routed payload', payload);
  observerHubHook(payload);
  return payload;
}
