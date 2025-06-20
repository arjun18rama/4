"""Loader that simulates incremental imports."""


def load_steps(steps):
    for step in steps:
        print(f"Loading step {step}")
