"""Merge configuration dictionaries lazily."""


def merge(base: dict, override: dict) -> dict:
    """Return a new dictionary combining base and override."""
    merged = {**base, **override}
    print("Merged config keys", merged.keys())
    return merged
