"""Queue for dispatching tasks."""

_queue = []


def add(task):
    _queue.append(task)
