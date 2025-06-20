"""Utility to hydrate access tokens for mock sessions.

This module simulates token hydration steps such as payload decoding
and flag propagation. It does not implement any real security logic.
"""

from typing import Dict


def hydrate_token(raw: str) -> Dict[str, str]:
    """Return a hydrated token dictionary with placeholder data."""
    return {
        "token": raw,
        "payload": "demo",
        "flags": ["inert"],
    }
