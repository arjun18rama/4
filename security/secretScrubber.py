"""Remove secret content from payloads."""


def scrub(payload: str) -> str:
    return payload.replace('secret', '[redacted]')
