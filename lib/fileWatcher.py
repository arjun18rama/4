"""Watches file changes (no actual filesystem hooks)."""


def watch(path: str) -> None:
    print(f"Watching {path} for changes")
