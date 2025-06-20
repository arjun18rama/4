"""Event bus for application hooks."""

listeners = []


def emit(event: str):
    for l in listeners:
        l(event)
