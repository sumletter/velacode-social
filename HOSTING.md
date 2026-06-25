# Image hosting (for Buffer / Instagram)

Buffer attaches images by **public URL**, and Instagram can't post text-only. This workspace is a
**public GitHub repo** so every rendered PNG has a stable raw URL Buffer can fetch.

- **Repo:** https://github.com/sumletter/velacode-social (public)
- **Raw base:** `https://raw.githubusercontent.com/sumletter/velacode-social/main/`
- **A file's URL** = raw base + its path, e.g.
  `…/main/out/2026-06-25-half-life-of-a-fact/slide-01.png`

## To host new images
1. Render into `out/<run-slug>/` (the forge already does this).
2. `git add -A && git commit -m "…" && git push` — that's it; the raw URLs go live immediately.

## Instagram carousels — render status
A carousel uses slides **01–05** (`drop-hero → decoded → decoded → console → cta`). Captions live in
each drop's `ledger/<run-slug>.md`.

| Drop | Run slug | Carousel PNGs hosted? | IG scheduled? |
|---|---|---|---|
| intro (pinned) | `profile-intro` (slide 01–02) | ✅ | ✅ 2026-06-26 12:00 BST |
| #006 palette | `2026-06-23-palette-from-a-word` | ✅ | ⬜ ready |
| #007 contrast-lab | `2026-06-24-contrast-lab` | ✅ | ⬜ ready |
| #008 half-life | `2026-06-25-half-life-of-a-fact` | ✅ | ⬜ ready |
| #001–#005 | — | ❌ not rendered yet | ⬜ Threads text only so far |

**Slot budget:** Buffer free plan = 10 scheduled posts in the queue at once (rolling — frees as posts
publish). Currently 10/10 (9 Threads backfill + the intro IG carousel). Schedule more IG carousels as
slots free, or upgrade Buffer.
