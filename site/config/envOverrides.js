/**
 * envOverrides.js - Placeholder module within config.
 * Provides dummy functions related to envOverrides.
 */

export function envOverridesHook(payload) {
  console.log('envOverrides hook triggered with payload', payload);
  return payload;
}

export class EnvOverridesService {
  constructor() {
    this.latency = 0;
  }
  hydrate(data) {
    console.log('Hydrating with data for envOverrides:', data);
  }
}
