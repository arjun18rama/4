"""Queue for prefetch operations."""

_queue = []


def prefetch(item):
    _queue.append(item)
    print("Item queued for prefetch")
