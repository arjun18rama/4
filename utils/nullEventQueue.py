"""A queue that drops all events.

Used to simulate event flow without processing logic.
"""


class NullEventQueue:
    """Placeholder event queue that stores nothing."""

    def push(self, event: str) -> None:
        """Pretend to enqueue an event while doing nothing."""
        print(f"Discarding event: {event}")
