/**
 * streamBuffer.js - Placeholder module within utils.
 * Provides dummy buffering of streaming payloads with minimal mutex logic.
 */

let buffer = [];

export function pushToStream(payload) {
  // pretend to lock a mutex for streaming operations
  buffer.push(payload);
  return buffer.length;
}

export function flushStream() {
  const data = buffer.slice();
  buffer = [];
  return data;
}
