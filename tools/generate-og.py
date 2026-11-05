#!/usr/bin/env python3
"""Generate the Open Graph image without external dependencies.

Usage: python3 tools/generate-og.py
Output: assets/img/og.png (1200x630)
"""

import os
import struct
import zlib

WIDTH = 1200
HEIGHT = 630
BG = (244, 241, 234)
INK = (23, 20, 17)
MUTED = (111, 103, 91)
ACCENT = (163, 61, 31)

FONT = {
    " ": ["....."] * 7,
    "-": [".....", ".....", ".....", "#####", ".....", ".....", "....."],
    "/": ["....#", "....#", "...#.", "..#..", ".#...", "#....", "#...."],
    "0": [".###.", "#...#", "#..##", "#.#.#", "##..#", "#...#", ".###."],
    "2": [".###.", "#...#", "....#", "...#.", "..#..", ".#...", "#####"],
    "6": [".###.", "#....", "#....", "####.", "#...#", "#...#", ".###."],
    "A": [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
    "B": ["####.", "#...#", "#...#", "####.", "#...#", "#...#", "####."],
    "D": ["####.", "#...#", "#...#", "#...#", "#...#", "#...#", "####."],
    "E": ["#####", "#....", "#....", "####.", "#....", "#....", "#####"],
    "F": ["#####", "#....", "#....", "####.", "#....", "#....", "#...."],
    "H": ["#...#", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
    "I": [".###.", "..#..", "..#..", "..#..", "..#..", "..#..", ".###."],
    "K": ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"],
    "L": ["#....", "#....", "#....", "#....", "#....", "#....", "#####"],
    "M": ["#...#", "##.##", "#.#.#", "#.#.#", "#...#", "#...#", "#...#"],
    "N": ["#...#", "##..#", "##..#", "#.#.#", "#..##", "#..##", "#...#"],
    "O": [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
    "P": ["####.", "#...#", "#...#", "####.", "#....", "#....", "#...."],
    "R": ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
    "T": ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
    "U": ["#...#", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
    "W": ["#...#", "#...#", "#...#", "#.#.#", "#.#.#", "##.##", "#...#"],
    "Y": ["#...#", "#...#", ".#.#.", "..#..", "..#..", "..#..", "..#.."],
    "Z": ["#####", "....#", "...#.", "..#..", ".#...", "#....", "#####"],
}

canvas = bytearray(WIDTH * HEIGHT * 3)


def fill(color):
    canvas[:] = bytes(color) * (WIDTH * HEIGHT)


def rect(x, y, w, h, color):
    x0 = max(0, x)
    y0 = max(0, y)
    x1 = min(WIDTH, x + w)
    y1 = min(HEIGHT, y + h)
    if x1 <= x0 or y1 <= y0:
        return
    row = bytes(color) * (x1 - x0)
    for yy in range(y0, y1):
        start = (yy * WIDTH + x0) * 3
        canvas[start:start + len(row)] = row


def text(value, x, y, scale, color, spacing=1):
    cursor = x
    step = (5 + spacing) * scale
    for char in value.upper():
        glyph = FONT.get(char, FONT[" "])
        for gy, row in enumerate(glyph):
            for gx, cell in enumerate(row):
                if cell == "#":
                    rect(cursor + gx * scale, y + gy * scale, scale, scale, color)
        cursor += step


def write_png(path):
    raw = bytearray()
    for y in range(HEIGHT):
        raw.append(0)
        start = y * WIDTH * 3
        raw.extend(canvas[start:start + WIDTH * 3])

    def chunk(tag, data):
        payload = tag + data
        return (
            struct.pack(">I", len(data))
            + payload
            + struct.pack(">I", zlib.crc32(payload) & 0xFFFFFFFF)
        )

    header = struct.pack(">IIBBBBB", WIDTH, HEIGHT, 8, 2, 0, 0, 0)
    png = (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", header)
        + chunk(b"IDAT", zlib.compress(bytes(raw), 9))
        + chunk(b"IEND", b"")
    )

    with open(path, "wb") as handle:
        handle.write(png)


def main():
    fill(BG)

    # Frame
    rect(28, 28, WIDTH - 56, 3, INK)
    rect(28, HEIGHT - 31, WIDTH - 56, 3, INK)
    rect(28, 28, 3, HEIGHT - 56, INK)
    rect(WIDTH - 31, 28, 3, HEIGHT - 56, INK)

    # Small accent square
    rect(1088, 104, 32, 32, ACCENT)

    text("PORTFOLIO - 2026", 80, 108, 4, ACCENT)
    text("DZAKK", 80, 190, 30, INK)
    rect(80, 440, WIDTH - 160, 2, INK)
    text("WEB / PYTHON / ML", 80, 480, 5, MUTED)
    text("DZAKK - 2026", 80, 560, 4, MUTED)

    # Accent rule at the very bottom
    rect(0, HEIGHT - 10, WIDTH, 10, ACCENT)

    output = os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        "assets",
        "img",
        "og.png",
    )
    write_png(output)
    print("wrote", output)


if __name__ == "__main__":
    main()
