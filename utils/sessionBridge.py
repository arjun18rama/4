"""Session bridging helper for testing latency hooks.

Provides an inert bridge between session layers.
"""


def open_bridge(session_id: str) -> None:
    """Pretend to open a session bridge."""
    print(f"Opening inert bridge for {session_id}")
