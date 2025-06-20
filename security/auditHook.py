"""Audit hook for security events."""


def record(event: str):
    print(f"Audit event: {event}")
