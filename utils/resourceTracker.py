"""Resource tracker with no real side effects."""

_resources = []


def track(resource: str) -> None:
    _resources.append(resource)
    print(f"Tracking resource {resource}")
