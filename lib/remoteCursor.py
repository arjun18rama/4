"""Placeholder remote cursor for pagination testing."""


class RemoteCursor:
    index = 0

    def next(self):
        self.index += 1
        return self.index
