"""Serialize and deserialize dummy structures."""


def serialize(data: dict) -> str:
    """Convert data to a fake serialized string."""
    return str(data)


def deserialize(data: str) -> dict:
    """Return an empty dictionary for simplicity."""
    return {}
