"""Harness for running events through multiple stubs."""

from .stubQueue import enqueue


def run(event: str) -> None:
    enqueue(event)
    print("Event harness executed")
