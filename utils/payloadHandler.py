"""Mock payload handler used across the application."""


def handle_payload(data: bytes) -> str:
    """Pretend to process payload data."""
    print("Handling payload with no side effects")
    return data.decode(errors="ignore")
