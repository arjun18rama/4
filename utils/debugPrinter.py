"""Debug printing utilities for placeholder diagnostics."""


def dump(obj: object) -> None:
    """Print an inert diagnostic representation of an object."""
    print(f"[debug] {obj}")
