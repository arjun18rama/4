"""Payload wrapper for pretend encryption."""


def wrap(data: str) -> str:
    return f"secure:{data}"
