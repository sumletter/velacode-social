# Image hosting (for Postiz / Instagram)

Postiz ingests images by **public URL** (`uploadFromUrlTool` pulls them into its media library),
and Instagram can't post text-only. This workspace is a **public GitHub repo** so every rendered
PNG has a stable raw URL Postiz can fetch.

- **Repo:** https://github.com/sumletter/velacode-social (public)
- **Raw base:** `https://raw.githubusercontent.com/sumletter/velacode-social/main/`
- **A file's URL** = raw base + its path, e.g.
  `…/main/out/2026-06-25-half-life-of-a-fact/slide-01.png`

## To host new images
1. Render into `out/<run-slug>/` (the forge already does this).
2. `git add -A && git commit -m "…" && git push`, that's it; the raw URLs go live immediately.

## Instagram carousels, render status
A carousel uses slides **01–05** (`drop-hero → decoded → decoded → console → cta`). Captions live in
each drop's `ledger/<run-slug>.md`.

| Drop | Run slug | Carousel hosted? | On Threads? | IG scheduled? |
|---|---|---|---|---|
| intro (pinned) | `profile-intro` (01–02) | ✅ | ✅ 2 imgs | ✅ 2026-06-26 12:00 |
| #001 planet-nine | `2026-06-19-planet-nine` | ✅ | ✅ 4 imgs | ⬜ ready |
| #002 speed-of-light | `2026-06-20-speed-of-light-latency` | ✅ | ✅ 4 imgs | ⬜ ready |
| #003 today's-sky | `2026-06-21-todays-sky` | ✅ | ✅ 4 imgs | ⬜ ready |
| #004 signal | `2026-06-22-signal` | ✅ | ✅ 4 imgs | ⬜ ready |
| #005 slingshot | `2026-06-23-slingshot` | ✅ | ✅ 4 imgs | ⬜ ready |
| #006 palette | `2026-06-23-palette-from-a-word` | ✅ | ✅ 4 imgs | ⬜ ready |
| #007 contrast-lab | `2026-06-24-contrast-lab` | ✅ | ✅ 4 imgs | ⬜ ready |
| #008 half-life | `2026-06-25-half-life-of-a-fact` | ✅ | ✅ 4 imgs | ⬜ ready |

**Threads carousels** = slides 01–04 (hero → decoded → decoded → console); the CTA card (05, carries the
link) is held off Threads post 1 per brand law, the link rides the last thread item instead. **IG carousels**
use slides 01–05. All slides are hosted and re-renderable from `renderer/decks/<run>.json`.

**⚠️ Threads media gotcha (Postiz era, 2026-07-19 on):** on a multi-item thread, images go on the
**first `postsAndComments` item's `attachments`**, and every attachment must be an
`uploads.postiz.com` path returned by `uploadFromUrlTool` (a raw GitHub URL fails domain validation).
Use the `.jpg` slides for Threads (every `.png` has a `.jpg` sibling); IG accepts PNG. After publish,
WebFetch the live post and check for `cdninstagram.com` image URLs, the image-attach failure mode is
silent. (The old Buffer-specific `thread[0].assets` gotcha is retired with the Buffer migration.)

**Slot budget:** Postiz has no Buffer-style 10-post queue cap; schedule freely, just keep the
default cadence (Threads 18:00 same day, IG 09:30 next morning, Europe/London) so posts don't collide.
