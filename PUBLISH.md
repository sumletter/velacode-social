# PUBLISH.md, the headless publish runbook

This is the recipe the **distribution routine** follows ~1 hour after each velacode drop:
forge the newest drop, render, host the images, then schedule a Threads thread + an Instagram
carousel via the **Postiz MCP**. It is written so a headless agent (the scheduled cloud
routine, see `code-by-itself/SCHEDULING.md`) can run it end-to-end with no human.

> **Migrated from Buffer to Postiz on 2026-07-19.** The Buffer connector kept failing
> account-side and the routine silently degraded for weeks; Postiz is the publisher now.
> Ledger rows before 2026-07-19 reference the old Buffer payload shapes, they are historical.

> **Two registers, one brand law.** Everything visual + the captions are the cold machine
> voice; the Threads body is the warm, lowercase reflection. Never swap them. Full law lives
> in `brand.md`, load it before writing copy.

## Repos & roots

- **Signal (read-only):** `code-by-itself`, the product repo. Read `content/LOG.md` (newest
  drop on top) + `content/drops/<slug>/drop.md`. **Never write to it.**
- **Target (write):** this repo, `velacode-social`: renderer, `out/`, `ledger/`, `memory.md`,
  `brand.md`, `STRATEGY.md`. Commit here as `sumletterai <ai@sumletter.com>`.

## Postiz coordinates (not secret, the API key is)

- **MCP endpoint:** `https://mcp.postiz.com/mcp` (HTTP transport, `Authorization: Bearer <key>`).
  The key is supplied as an MCP credential/secret, it is never in this repo. The workspace is
  the shared Postiz workspace (same subscription that hosts the Petverse channels).
- **Threads** integration: `cmrs83llv00kdqj0yj2hp77yz` (`@velacodexyz`)
- **Instagram:** ⚠️ **not connected yet** (as of 2026-07-19). At run start, call
  `integrationList`; if an `instagram` / `instagram-standalone` integration with profile
  `velacodexyz` has appeared, use it (and record its id here). Until then **skip the IG
  carousel** and mark the run row `ig-pending (channel not connected)`. Never post velacode
  content to the Petverse Instagram.

**Verify the connector FIRST.** Call `integrationList` before anything else. Proceed only if
the `@velacodexyz` Threads integration is in the returned list. If the tools are absent, the
connector is not attached; if the list has no `velacodexyz` entries, the **wrong Postiz
workspace/key** is attached. In both cases: stop at publish, write the publish-pending ledger,
and report loudly (see `CLOUD_PUBLISH.md`).

---

## Step 0, idempotency check (do this FIRST)

Read `memory.md`. If the newest drop's run slug (`YYYY-MM-DD-<slug>`) is already a row there,
**STOP**, it was already announced. Re-running must never double-post. Otherwise continue.

## Step 1, forge the drop

Run the forge for the newest published drop in `code-by-itself/content/LOG.md`:

- **Locally:** the `/velacode-social-forge` skill, auto mode (it resolves "newest not in
  `memory.md`").
- **Headless (no skill installed):** follow the same pipeline by hand: load `brand.md` +
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

Threads media must be **JPEG** (PNG has silently failed on Threads before). Make a `.jpg`
sibling of every slide, then push so the raw URLs go live:

```bash
cd out/<run-slug> && for f in slide-*.png; do sips -s format jpeg "$f" --out "${f%.png}.jpg"; done
cd "$(git rev-parse --show-toplevel)" && git add -A \
  && git commit -m "social: forge <run-slug>" && git push
```

Hosted URL of any slide = `https://raw.githubusercontent.com/sumletter/velacode-social/main/out/<run-slug>/slide-NN.{jpg,png}`.

## Step 3, schedule via Postiz

### 3a, upload the media into Postiz first  ⚠️ REQUIRED

Postiz only attaches media from its own library (`uploads.postiz.com`); a raw GitHub URL
passed straight into a post fails the upload-domain validation. For **each** slide to attach,
call `uploadFromUrlTool` with the raw URL; it returns `{ id, path }`. Collect the `path`
values, those are the attachment strings.

- Threads needs the **`.jpg`** slides 01-04.
- Instagram needs the **`.png`** slides 01-05 (only if the IG channel is connected, see above).

Verified working (2026-07-19): a `raw.githubusercontent.com/...jpg` upload returned
`{"id":"...","path":"https://uploads.postiz.com/....jpg"}`.

### 3b, slot timing

Default cadence: **Threads same day 18:00**, **Instagram next morning 09:30**, both
Europe/London. **Postiz `date` is UTC**: convert (18:00 London = `17:00Z` during BST,
`18:00Z` during GMT). There is no Buffer-style 10-post queue cap on Postiz; still keep the
cadence so posts don't collide.

### 3c, Threads thread

Thread carousel = slides **01-04** (`hero → decoded → decoded → console`), JPEG, **all four
attached to the FIRST `postsAndComments` item** (item 1 is the post, every later item is a
reply). The thread body is the warm lowercase register (pull it from the forge ledger /
`STRATEGY.md`): 4-6 items, **≤500 chars each**, **link only in the LAST item**, never in
item 1. Content is HTML: wrap each line in `<p>`.

`integrationSchedulePostTool` shape (Threads):

```jsonc
{
  "socialPost": [{
    "integrationId": "cmrs83llv00kdqj0yj2hp77yz",
    "isPremium": false,
    "date": "2026-07-19T17:00:00Z",          // UTC, = 18:00 Europe/London in summer
    "shortLink": false,
    "type": "schedule",
    "settings": [],                           // Threads needs none
    "postsAndComments": [
      { "content": "<p><thread item 1></p>", "attachments": [
          "https://uploads.postiz.com/<slide-01>.jpg",
          "https://uploads.postiz.com/<slide-02>.jpg",
          "https://uploads.postiz.com/<slide-03>.jpg",
          "https://uploads.postiz.com/<slide-04>.jpg"
      ] },
      { "content": "<p><item 2></p>", "attachments": [] },
      { "content": "<p><item 3></p>", "attachments": [] },
      { "content": "<p><item 4></p>", "attachments": [] },
      { "content": "<p>→ velacode.xyz/drops/<slug></p>", "attachments": [] }
    ]
  }]
}
```

### 3d, Instagram carousel (only when the channel is connected)

IG carousel = slides **01-05** (`hero → decoded → decoded → console → cta`), PNG, all five in
the single `postsAndComments` item. IG can't post text-only and requires
`settings: [{ "key": "post_type", "value": "post" }]`. Caption = machine-framed, ~80-150
words (**≤2200 chars**), 1-2 hashtags from the drop's `tags`, "link in bio".

```jsonc
{
  "socialPost": [{
    "integrationId": "<velacodexyz IG integration id, from integrationList>",
    "isPremium": false,
    "date": "2026-07-20T08:30:00Z",          // UTC, = 09:30 Europe/London in summer
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p><IG caption></p>", "attachments": [
          "https://uploads.postiz.com/<slide-01>.png",
          "https://uploads.postiz.com/<slide-02>.png",
          "https://uploads.postiz.com/<slide-03>.png",
          "https://uploads.postiz.com/<slide-04>.png",
          "https://uploads.postiz.com/<slide-05>.png"
      ] }
    ]
  }]
}
```

> If Postiz rejects a shape, re-check `integrationSchema` for the platform (it returns the
> live rules + settings schema) and mirror it. `uploadFromUrlTool` before every attach, no
> exceptions.

## Step 4, record

1. Write `ledger/<run-slug>.md`: every slide's copy + hosted path + `uploads.postiz.com`
   path, the IG caption + hashtags, the numbered Threads thread + last-item link, whatever
   ids/confirmation Postiz returned + the scheduled dates (UTC), and whether IG was skipped
   as `ig-pending`.
2. Append **one** row to `memory.md` (append-only, never rewrite past rows): date, run slug,
   drop #/kind, posts scheduled, status. This row is what makes Step 0 idempotent.

## Verify (after publish time)

Threads: after the post publishes, `WebFetch` the live post URL and confirm
`cdninstagram.com` image URLs are present. The image-attach failure mode is silent (a
text-only thread still "succeeds"), the live check is the only proof.

## Never

- Never write to `code-by-itself`. Never put a link in Threads item 1 (last item / bio only).
- Never attach a raw GitHub URL directly to a post, always `uploadFromUrlTool` first.
- Never post velacode content to a non-velacode channel (the workspace also hosts Petverse).
- Never re-forge a drop already in `memory.md`.
- Threads media = JPEG, attached to the FIRST thread item.
