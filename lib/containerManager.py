"""Manages containers for the fake runtime."""


class Container:
    def __init__(self, name: str):
        self.name = name


def create_container(name: str) -> Container:
    print(f"Creating container {name}")
    return Container(name)
