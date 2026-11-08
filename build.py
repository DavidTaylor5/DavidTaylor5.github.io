#!/usr/bin/env python3
"""Builds data/topics.json and one data/<topic>.json per folder in content/."""
import json
from pathlib import Path

CONTENT_DIR = Path("content")
OUT_DIR = Path("data")
SITE_URL = "https://davidtaylor5.github.io/"
DEFAULT_AUTHOR = "David Taylor"  # used when a post has no 'author' line

# Optional display-name overrides. Otherwise the folder name is title-cased.
TITLES = {"understanding_xml": "Understanding XML"}


def absolute_url(value: str) -> str:
    """Turn 'images/blog/x.png' into a full URL so web and Android both resolve it."""
    if not value or value.startswith(("http://", "https://")):
        return value
    return SITE_URL + value.lstrip("/")


def parse_post(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    meta, body = {}, text

    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) == 3:
            _, header, body = parts
            for line in header.strip().splitlines():
                if ":" in line:
                    key, value = line.split(":", 1)
                    meta[key.strip()] = value.strip()

    if "title" not in meta or "date" not in meta:
        raise SystemExit(f"{path}: front matter needs at least 'title' and 'date'")
    if "summary" not in meta:
        print(f"warning: {path} has no 'summary' (the menu card will be empty)")

    return {
        "id": path.stem,
        "title": meta["title"],
        "date": meta["date"],  # keep YYYY-MM-DD so sorting works
        "author": meta.get("author", DEFAULT_AUTHOR),
        "image": absolute_url(meta.get("image", "")),
        "summary": meta.get("summary", ""),
        "tags": [t.strip() for t in meta.get("tags", "").split(",") if t.strip()],
        "body": body.strip(),
    }


def write_json(path: Path, data) -> None:
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")


def main() -> None:
    OUT_DIR.mkdir(exist_ok=True)
    topics = []

    for folder in sorted(p for p in CONTENT_DIR.iterdir() if p.is_dir()):
        posts = [parse_post(f) for f in sorted(folder.glob("*.md"))]
        if not posts:
            continue
        posts.sort(key=lambda p: p["date"], reverse=True)

        topic_id = folder.name
        title = TITLES.get(topic_id, topic_id.replace("_", " ").replace("-", " ").title())

        write_json(OUT_DIR / f"{topic_id}.json", {"posts": posts})
        topics.append({"id": topic_id, "title": title, "file": f"{topic_id}.json"})
        print(f"{topic_id}: {len(posts)} post(s)")

    write_json(OUT_DIR / "topics.json", topics)


if __name__ == "__main__":
    main()