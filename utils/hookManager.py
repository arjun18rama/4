"""Hook management utilities for controlling dummy callbacks."""

_hooks = []


def register_hook(func):
    """Add a hook to the internal list."""
    _hooks.append(func)
    print("Hook registered")
