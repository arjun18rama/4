"""Observer hub to manage listeners."""

_listeners = []


def add(listener):
    _listeners.append(listener)
