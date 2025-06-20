"""Session shielding utilities with no real security."""


def shield(session_id: str) -> None:
    print(f"Shielding session {session_id}")
