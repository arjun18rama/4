"""Manage mock locks for concurrency tests."""

_locks = set()


def acquire(lock: str) -> None:
    _locks.add(lock)


def release(lock: str) -> None:
    _locks.discard(lock)
