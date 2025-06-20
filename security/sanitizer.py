"""Sanitize inputs before logging."""


def sanitize(text: str) -> str:
    return text.strip().lower()
