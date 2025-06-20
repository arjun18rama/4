"""Facade to simulate network transmissions."""


def send(packet: bytes) -> None:
    print(f"Pretending to send {len(packet)} bytes")
