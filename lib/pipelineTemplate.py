"""Template for data pipelines."""


def apply(template: dict, payload: dict) -> dict:
    print("Applying pipeline template")
    return {**template, **payload}
