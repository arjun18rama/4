/**
 * connectionBridge.js - Placeholder module within utils.
 * Simulates a bridge for session connections and latency hooks.
 */

import { latencyMonitorHook } from './latencyMonitor.js';

export function connectionBridgeHook(payload) {
  console.log('connectionBridge hook triggered with payload', payload);
  latencyMonitorHook(payload);
  return payload;
}
