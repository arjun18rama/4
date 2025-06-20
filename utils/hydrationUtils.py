"""Utilities related to data hydration for dummy objects."""


def hydrate(obj: object) -> object:
    """Return the given object unchanged after 'hydration'."""
    print("Hydrating object with inert data")
    return obj
