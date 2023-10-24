#### Knight's Dialer

Deployment: https://irongade.github.io/algo-knights-dialer/

This project explores the algorithmic complexities (speed and memory) of counting how many distinct paths can be taken on a standard 10-digit dialpad if the move (aka "hop") from one key to the next must be like a Knight on a chessboard (two spaces in one direction, and one space in the perpendicular direction).

Here's a standard 10-digit dialpad:

```1 2 3
4 5 6
7 8 9
  0
```

If you start from the 4 key, for example, you can hop (like a chess Knight) to the 3, 9, or 0 keys, as illustrated here (the @ marks the current position, and the *s mark the possible keys you can hop to from that position).

```
1 2 *
@ 5 6
7 8 *
  *
```

Similarly, if you start from the 3 key, you can only hop to the 4 or 8 keys. But if you start from the 5 key, you can't hop anywhere, nor can the 5 key be hopped to from any other key.

If you hop from the 1 key to the 6 key, then hop back to the 1 key, and then hop to the 8 key, you've moved a total of 3 hops. In other words, a path can back-track and/or cycle through repeat key(s) any number of times.

Two questions this workshop will explore:

Count how many distinct paths can be traversed when starting from a specific key and moving a certain number of hops?

If we disallow cycles (no repeat keys, back-tracking, etc), what distinct paths (and how many hops are they comprised of?) can you take from a given starting key?
