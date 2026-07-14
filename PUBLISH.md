# PUBLISH.md, the headless publish runbook

This is the recipe the **distribution routine** follows ~1 hour after each velacode drop:
forge the newest drop → render → host the images → schedule a Threads thread + an Instagram
carousel via the **Buffer MCP**. It is written so a headless agent (the scheduled cloud
routine, see `code-by-itself/SCHEDULING.md`) can run it end-to-end with no human.

> **Two registers, one brand law.** Everything visual + the captions are the cold machine
> voice; the Threads body is the warm, lowercase reflection. Never swap them. Full law lives
> in `brand.md`, load it before writing copy.

## Repos & roots

- **Signal (read-only):** `code-by-itself`, the product repo. Read `content/LOG.md` (newest
  drop on top) + `content/drops/<slug>/drop.md`. **Never write to it.**
- **Target (write):** this repo, `velacode-social`, renderer, `out/`, `ledger/`, `memory.md`,
  `brand.md`, `STRATEGY.md`. Commit here as `sumletterai <ai@sumletter.com>`.

## Buffer coordinates (not secret, the API key is)

- **Org:** `6a3d08690686a320f317ac37` (tz Europe/London) · **free plan = 10 scheduled posts in
  the queue at once** (rolling, slots free as posts publish).
- **Threads** channel: `6a3d08f75ab6d2f1066de55d` (`@velacodexyz`)
- **Instagram** channel: `6a3d08d75ab6d2f1066de502` (`@velacodexyz`)

The **Buffer API key** is supplied to the routine as a secret/MCP credential, it is never in
this repo. If `get_account` fails, the key isn't wired; stop and report.

---

## Step 0, Idempotency check (do this FIRST)

Read `memory.md`. If the newest drop's run slug (`YYYY-MM-DD-<slug>`) is already a row there,
**STOP**, it was already announced. Re-running must never double-post. Otherwise continue.

## Step 1, Forge the drop

Run the forge for the newest published drop in `code-by-itself/content/LOG.md`:

- **Locally:** the `/velacode-social-forge` skill, auto mode (it resolves "newest not in
  `memory.md`").
- **Headless (no skill installed):** follow the same pipeline by hand, load `brand.md` +
  `STRATEGY.md` + the drop's `drop.md`, then write `renderer/slides.json` for the run. The
  slide templates + fields are documented in `renderer/index.html`; copy an existing
  `renderer/decks/<run>.json` as the shape reference. Default deck = 5 slides:
  `drop-hero → decoded → decoded → console → cta`, every slide carrying the drop's **kind
  color** (research→ice, game→ember, app→warn) and an **ember** headline accent.

Then render:

```bash
cd renderer && (test -d node_modules || npm install) && (npx playwright install chromium)
node render.mjs --slug=<run-slug>          # → ../out/<run-slug>/slide-NN.png  (4:5, 2160×2700)
```

**Verify** the hero + console + thread PNGs (type fits, ember accent on the headline, correct
kind color, no overflow). Fix copy in `slides.json` and re-render if needed.

## Step 2, JPEG + host

Threads media must be **JPEG** (PNG silently fails on Threads). Make a `.jpg` sibling of every
slide, then push so the raw URLs go live:

```bash
cd out/<run-slug> && for f in slide-*.png; do sips -s format jpeg "$f" --out "${f%.png}.jpg"; done
cd "$(git rev-parse --show-toplevel)" && git add -A \
  && git commit -m "social: forge <run-slug>" && git push
```

Hosted URL of any slide = `https://raw.githubusercontent.com/sumletter/velacode-social/main/out/<run-slug>/slide-NN.{jpg,png}`.

## Step 3, Schedule via Buffer

Check the queue first: `list_posts` for the org. **If 10 are already scheduled, skip
scheduling, log it in the ledger, and report** (don't fail). Each drop adds **2** posts.

**Slot timing.** Schedule into the next 1–2 open prime slots. Default cadence: **Threads same
day 18:00**, **Instagram next morning 09:30** (Europe/London). Adjust to avoid colliding with
posts already in the queue. (Or use `mode:"addToQueue"` to let Buffer pick the next schedule
slot, but explicit `dueAt` is easier to reason about against the 10-cap.)

### 3a, Threads thread  ⚠️ images go PER-ITEM

A Threads carousel = slides **01–04** (`hero → decoded → decoded → console`), **JPEG**. The
thread body is the warm lowercase register (pull it from the forge ledger / `STRATEGY.md`):
4–6 posts, ≤500 chars each, **link only in the last item**, and the post's outer `text` MUST
equal thread item 1.

> **The gotcha that cost us a relaunch (2026-06-25):** attach the images to
> **`metadata.threads.thread[0].assets`** (per-item). Top-level `assets` *stores* (shows in
> `get_post`) but Buffer's Threads publisher **drops it → the thread goes out text-only.**
> `get_post`/`list_posts` do **not** echo per-item assets, so you can't verify via the API, 
> confirm by WebFetching the live post and looking for `cdninstagram.com` image URLs.

`create_post` shape (Threads):

```jsonc
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "<thread item 1, verbatim>",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-01T18:00:00+01:00",
  "metadata": {
    "threads": {
      "thread": [
        { "text": "<item 1>", "assets": [
            { "image": { "url": ".../out/<run>/slide-01.jpg", "altText": "velacode <title>, hero" } },
            { "image": { "url": ".../out/<run>/slide-02.jpg", "altText": "the idea, 1" } },
            { "image": { "url": ".../out/<run>/slide-03.jpg", "altText": "the idea, 2" } },
            { "image": { "url": ".../out/<run>/slide-04.jpg", "altText": "the build log" } }
        ] },
        { "text": "<item 2>" },
        { "text": "<item 3>" },
        { "text": "<item 4>" },
        { "text": "→ velacode.xyz/drops/<slug>" }
      ]
    }
  }
}
```

### 3b, Instagram carousel

IG carousel = slides **01–05** (`hero → decoded → decoded → console → cta`). IG **can't** post
text-only, attaches by **top-level `assets`** (PNG is fine), and needs `shouldShareToFeed`.
Caption = machine-framed, ~80–150 words, 1–2 hashtags from the drop's `tags`, "link in bio".

```jsonc
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08d75ab6d2f1066de502",
  "text": "<IG caption>",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-02T09:30:00+01:00",
  "assets": [
    { "image": { "url": ".../out/<run>/slide-01.png", "altText": "velacode <title>, hero" } },
    { "image": { "url": ".../out/<run>/slide-02.png", "altText": "the idea, 1" } },
    { "image": { "url": ".../out/<run>/slide-03.png", "altText": "the idea, 2" } },
    { "image": { "url": ".../out/<run>/slide-04.png", "altText": "the build log" } },
    { "image": { "url": ".../out/<run>/slide-05.png", "altText": "open it, velacode.xyz" } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> If Buffer rejects an `assets`/`metadata` shape, call `introspect_schema` on the post-create
> input (or `get_post` an existing scheduled post) and mirror the working shape, the proven
> ones are whatever the current live/queued posts use.

## Step 4, Record

1. Write `ledger/<run-slug>.md`: every slide's copy + path, the IG caption + hashtags, the
   numbered Threads thread + first-reply link, the two Buffer post IDs + their `dueAt`, and
   whether anything was skipped for the 10-cap.
2. Append **one** row to `memory.md` (append-only, never rewrite past rows): date, run slug,
   drop #/kind, posts scheduled, status. This row is what makes Step 0 idempotent.

## Never

- Never write to `code-by-itself`. Never put a link in Threads post 1 (first reply / bio only).
- Never attach Threads images at top level, per-item `thread[0].assets`, JPEG, every time.
- Never exceed the 10-post Buffer queue, skip + log instead.
- Never re-forge a drop already in `memory.md`.
