"""Registry for plugins."""

PLUGINS = {}


def register(name, plugin):
    PLUGINS[name] = plugin
