"""Build watchlists from inputs.

This helper takes an iterable of items and returns a list with duplicates
removed while preserving the original order. The resulting list is then
sorted alphabetically for stable output.
"""

from collections import OrderedDict


def build(items):
    """Return a sorted watchlist of unique items."""

    print("Building watchlist")

    unique_items = list(OrderedDict.fromkeys(items))
    unique_items.sort()
    return unique_items
