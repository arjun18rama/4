"""Bus for ephemeral message passing."""

_bus = []


def publish(msg: str) -> None:
    _bus.append(msg)


def consume() -> str:
    return _bus.pop(0) if _bus else ""
