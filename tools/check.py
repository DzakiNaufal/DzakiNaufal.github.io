#!/usr/bin/env python3
"""Validate the static site without third-party dependencies.

Usage: python3 tools/check.py
Exit code: 0 if no errors, 1 otherwise.
"""

import json
import os
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOID = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link",
    "meta", "param", "source", "track", "wbr",
}
LOCAL_EXT = re.compile(r"\.(png|svg|ico|css|js|html|py|xml|txt|webmanifest)$", re.I)

errors = []
warnings = []


def fail(message):
    errors.append(message)


def warn(message):
    warnings.append(message)


class Document(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.stack = []
        self.ids = {}
        self.refs = []
        self.h1 = 0
        self.images = []
        self.lang = None
        self.viewport = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.lang = attrs.get("lang")
        if tag == "meta" and attrs.get("name") == "viewport":
            self.viewport = True
        if tag in VOID:
            pass
        else:
            self.stack.append(tag)

        if tag == "h1":
            self.h1 += 1
        if tag == "img":
            self.images.append(attrs)

        element_id = attrs.get("id")
        if element_id:
            self.ids[element_id] = self.ids.get(element_id, 0) + 1

        for attr in ("href", "src", "content"):
            value = attrs.get(attr)
            if value and attr in ("href", "src"):
                self.refs.append((attr, value))
            elif value and attr == "content" and LOCAL_EXT.search(value):
                self.refs.append((attr, value))

        has_aria_id = "data-i18n-aria-id" in attrs
        has_aria_en = "data-i18n-aria-en" in attrs
        if has_aria_id != has_aria_en:
            fail(f"{self.path}: <{tag}> has an incomplete data-i18n-aria pair")

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID and self.stack and self.stack[-1] == tag:
            self.stack.pop()

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.stack:
            fail(f"{self.path}: unexpected closing </{tag}>")
            return
        if self.stack[-1] == tag:
            self.stack.pop()
            return
        if tag in self.stack:
            while self.stack and self.stack[-1] != tag:
                fail(f"{self.path}: unclosed <{self.stack.pop()}> before </{tag}>")
            if self.stack:
                self.stack.pop()
        else:
            fail(f"{self.path}: unmatched closing </{tag}>")


def check_html(path):
    full = os.path.join(ROOT, path)
    source = open(full, encoding="utf-8").read()
    doc = Document(path)
    doc.feed(source)

    if doc.stack:
        fail(f"{path}: unclosed tags {doc.stack}")
    if not doc.lang:
        fail(f"{path}: missing <html lang>")
    if not doc.viewport:
        warn(f"{path}: missing viewport meta")
    if doc.h1 != 1:
        warn(f"{path}: expected exactly one h1, found {doc.h1}")

    for element_id, count in doc.ids.items():
        if count > 1:
            fail(f"{path}: duplicate id '{element_id}' ({count} times)")

    for attrs in doc.images:
        if "alt" not in attrs:
            fail(f"{path}: <img> without alt ({attrs.get('src', '?')})")

    for attr, value in doc.refs:
        if value.startswith(("http://", "https://", "//", "#", "mailto:", "data:", "tel:")):
            continue
        bare = value.split("#")[0].split("?")[0]
        if not bare:
            continue
        target = os.path.normpath(os.path.join(os.path.dirname(full), bare))
        if not os.path.exists(target):
            fail(f"{path}: missing local {attr} -> {value}")

    for block in re.findall(
        r'<script type="application/ld\+json">(.*?)</script>', source, re.S
    ):
        try:
            json.loads(block)
        except json.JSONDecodeError as error:
            fail(f"{path}: invalid JSON-LD ({error})")

    return doc


def check_css(path):
    source = open(os.path.join(ROOT, path), encoding="utf-8").read()
    if source.count("{") != source.count("}"):
        fail(f"{path}: unbalanced CSS braces")
    for marker in ("@media print", "prefers-reduced-motion", "prefers-color-scheme"):
        if marker not in source:
            warn(f"{path}: missing {marker}")


def check_png(path, expected):
    data = open(os.path.join(ROOT, path), "rb").read()
    if data[:8] != b"\x89PNG\r\n\x1a\n":
        fail(f"{path}: not a PNG")
        return
    width, height = int.from_bytes(data[16:20], "big"), int.from_bytes(data[20:24], "big")
    if (width, height) != expected:
        fail(f"{path}: expected {expected}, got {(width, height)}")


def check_ico(path):
    data = open(os.path.join(ROOT, path), "rb").read()
    if len(data) < 6:
        fail(f"{path}: too small")
        return
    reserved, kind, count = (
        int.from_bytes(data[0:2], "little"),
        int.from_bytes(data[2:4], "little"),
        int.from_bytes(data[4:6], "little"),
    )
    if (reserved, kind) != (0, 1) or count < 1:
        fail(f"{path}: invalid ICO header")
        return
    if len(data) < 6 + 16 * count:
        fail(f"{path}: truncated ICO directory")


def check_xml(path):
    try:
        ET.parse(os.path.join(ROOT, path))
    except ET.ParseError as error:
        fail(f"{path}: invalid XML ({error})")


def check_js(path):
    try:
        result = subprocess.run(
            ["node", "--check", os.path.join(ROOT, path)],
            capture_output=True,
            text=True,
        )
    except FileNotFoundError:
        warn("node not found, skipping JS syntax check")
        return
    if result.returncode != 0:
        fail(f"{path}: {result.stderr.strip()}")


def check_manifest():
    path = os.path.join(ROOT, "manifest.webmanifest")
    try:
        data = json.load(open(path, encoding="utf-8"))
    except json.JSONDecodeError as error:
        fail(f"manifest.webmanifest: invalid JSON ({error})")
        return
    for icon in data.get("icons", []):
        src = icon.get("src")
        if src and not os.path.exists(os.path.join(ROOT, src)):
            fail(f"manifest.webmanifest: missing icon -> {src}")


def main():
    required = [
        "index.html", "404.html", "robots.txt", "sitemap.xml",
        "manifest.webmanifest", ".nojekyll",
        "assets/css/style.css", "assets/js/main.js",
        "assets/img/favicon.svg", "assets/img/favicon.ico",
        "assets/img/apple-touch-icon.png", "assets/img/og.png",
        "assets/img/icon-192.png", "assets/img/icon-512.png",
        "projects/kalkulator.py", "projects/cek-bilangan.py",
        "projects/kalkulator.html", "projects/cek-bilangan.html",
        "projects/tabel-gambar.html",
    ]
    for path in required:
        if not os.path.exists(os.path.join(ROOT, path)):
            fail(f"missing required file: {path}")

    for path in (
        "index.html",
        "404.html",
        "projects/kalkulator.html",
        "projects/cek-bilangan.html",
        "projects/tabel-gambar.html",
    ):
        check_html(path)

    check_css("assets/css/style.css")
    check_js("assets/js/main.js")
    check_png("assets/img/og.png", (1200, 630))
    check_png("assets/img/apple-touch-icon.png", (180, 180))
    check_png("assets/img/icon-192.png", (192, 192))
    check_png("assets/img/icon-512.png", (512, 512))
    check_ico("assets/img/favicon.ico")
    check_xml("sitemap.xml")
    check_manifest()

    robots = open(os.path.join(ROOT, "robots.txt"), encoding="utf-8").read()
    if "User-agent:" not in robots:
        fail("robots.txt: missing User-agent")

    print(f"checked {len(required)} required files")
    for message in warnings:
        print(f"[warn] {message}")
    for message in errors:
        print(f"[fail] {message}")

    if errors:
        print(f"\n{len(errors)} error(s), {len(warnings)} warning(s)")
        return 1

    print(f"\nOK — 0 errors, {len(warnings)} warning(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
