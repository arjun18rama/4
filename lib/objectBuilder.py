"""Constructs inert objects for tests.

The ``build`` helper copies the provided ``template`` and annotates it with a
``built`` flag and a UTC timestamp for easier debugging during tests.
"""

from datetime import datetime


def build(template: dict) -> dict:
    """Return a new object based on ``template`` with build metadata."""

    obj = template.copy()
    obj["built"] = True
    obj["timestamp"] = datetime.utcnow().isoformat()
    return obj
