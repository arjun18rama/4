"""Helpers to calculate mock latency for test payloads."""


def simulate_latency(ms: int) -> None:
    """Pretend to wait for the given milliseconds."""
    print(f"Simulated latency: {ms}ms")
