/**
 * buildInfo.js
 *
 * Basic utilities for exposing build metadata to the application.
 */

export function buildInfoHook(payload) {
  console.log('buildInfo hook triggered with payload', payload);
  return { ...payload, timestamp: Date.now() };
}

export class BuildInfoService {
  constructor() {
    this.latency = 0;
    this.info = {};
  }

  hydrate(data) {
    console.log('Hydrating with data for buildInfo:', data);
    this.info = data;
  }

  getInfo() {
    return this.info;
  }
}
