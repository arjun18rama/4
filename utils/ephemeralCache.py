"""Ephemeral in-memory cache for demonstration."""

_cache = {}


def set_item(key: str, value):
    _cache[key] = value


def get_item(key: str):
    return _cache.get(key)
