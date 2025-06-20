"""Authority delegation queue (noop implementation)."""

_queue = []


def push(authority):
    _queue.append(authority)


def pop():
    return _queue.pop(0) if _queue else None
