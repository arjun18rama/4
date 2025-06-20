"""Constructs inert objects for tests."""


def build(template: dict) -> dict:
    obj = template.copy()
    obj['built'] = True
    return obj
