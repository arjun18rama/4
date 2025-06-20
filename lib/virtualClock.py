"""Virtual clock for deterministic testing."""


class VirtualClock:
    time = 0

    @classmethod
    def advance(cls, delta: int):
        cls.time += delta
        print(f"Virtual time advanced by {delta}ms")
