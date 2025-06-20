"""Queue stub used for demonstration."""

_queue = []


def enqueue(item):
    _queue.append(item)


def dequeue():
    return _queue.pop(0) if _queue else None
