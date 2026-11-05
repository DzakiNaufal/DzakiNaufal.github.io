#!/usr/bin/env python3
"""Generate favicon.ico and apple-touch-icon.png without dependencies.

Usage: python3 tools/generate-icons.py
Output:
  assets/img/favicon.ico        (16, 32, 48)
  assets/img/apple-touch-icon.png (180x180)
"""

import os
import struct
import zlib

INK = (23, 20, 17)
CREAM = (244, 241, 234)
RUST = (163, 61, 31)

GLYPH_D = [
    "####.",
    "#...#",
    "#...#",
    "#...#",
    "#...#",
    "#...#",
    "####.",
]


class Canvas:
    def __init__(self, width, height, background):
        self.width = width
        self.height = height
        self.buffer = bytearray(bytes(background + (255,)) * (width * height))

    def rect(self, x, y, width, height, color):
        x0 = max(0, x)
        y0 = max(0, y)
        x1 = min(self.width, x + width)
        y1 = min(self.height, y + height)
        if x1 <= x0 or y1 <= y0:
            return
        pixel = bytes(color + (255,))
        row = pixel * (x1 - x0)
        for yy in range(y0, y1):
            start = (yy * self.width + x0) * 4
            self.buffer[start:start + len(row)] = row

    def png(self):
        raw = bytearray()
        stride = self.width * 4
        for y in range(self.height):
            raw.append(0)
            raw.extend(self.buffer[y * stride:(y + 1) * stride])

        def chunk(tag, data):
            payload = tag + data
            return (
                struct.pack(">I", len(data))
                + payload
                + struct.pack(">I", zlib.crc32(payload) & 0xFFFFFFFF)
            )

        header = struct.pack(">IIBBBBB", self.width, self.height, 8, 6, 0, 0, 0)
        return (
            b"\x89PNG\r\n\x1a\n"
            + chunk(b"IHDR", header)
            + chunk(b"IDAT", zlib.compress(bytes(raw), 9))
            + chunk(b"IEND", b"")
        )


def draw_icon(size):
    canvas = Canvas(size, size, INK)

    border = max(1, round(size * 0.075))
    inset = max(2, round(size * 0.15))
    inner = size - 2 * inset

    canvas.rect(inset, inset, inner, border, RUST)
    canvas.rect(inset, size - inset - border, inner, border, RUST)
    canvas.rect(inset, inset, border, inner, RUST)
    canvas.rect(size - inset - border, inset, border, inner, RUST)

    scale = max(1, (inner - 2 * border) // 7)
    glyph_w = 5 * scale
    glyph_h = 7 * scale
    x = (size - glyph_w) // 2
    y = (size - glyph_h) // 2

    for gy, row in enumerate(GLYPH_D):
        for gx, cell in enumerate(row):
            if cell == "#":
                canvas.rect(x + gx * scale, y + gy * scale, scale, scale, CREAM)

    return canvas


def write_ico(path, images):
    header = struct.pack("<HHH", 0, 1, len(images))
    entries = b""
    payload = b""
    offset = 6 + 16 * len(images)

    for size, data in images:
        entries += struct.pack(
            "<BBBBHHII",
            0 if size >= 256 else size,
            0 if size >= 256 else size,
            0,
            0,
            1,
            32,
            len(data),
            offset,
        )
        offset += len(data)
        payload += data

    with open(path, "wb") as handle:
        handle.write(header + entries + payload)


def main():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    img_dir = os.path.join(base, "assets", "img")

    apple = draw_icon(180)
    with open(os.path.join(img_dir, "apple-touch-icon.png"), "wb") as handle:
        handle.write(apple.png())

    icon192 = draw_icon(192)
    with open(os.path.join(img_dir, "icon-192.png"), "wb") as handle:
        handle.write(icon192.png())

    icon512 = draw_icon(512)
    with open(os.path.join(img_dir, "icon-512.png"), "wb") as handle:
        handle.write(icon512.png())

    ico_images = []
    for size in (16, 32, 48):
        ico_images.append((size, draw_icon(size).png()))

    write_ico(os.path.join(img_dir, "favicon.ico"), ico_images)
    print("wrote", os.path.join(img_dir, "apple-touch-icon.png"))
    print("wrote", os.path.join(img_dir, "icon-192.png"))
    print("wrote", os.path.join(img_dir, "icon-512.png"))
    print("wrote", os.path.join(img_dir, "favicon.ico"))


if __name__ == "__main__":
    main()
