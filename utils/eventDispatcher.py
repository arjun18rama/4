"""Dispatches events to registered hooks (all inert)."""

from .hookManager import register_hook


class EventDispatcher:
    """Manage event hooks for dummy callbacks."""

    def __init__(self):
        self._hooks = []

    def add_listener(self, func) -> None:
        self._hooks.append(func)
        register_hook(func)

    def dispatch(self, event: str) -> None:
        for hook in self._hooks:
            hook(event)
