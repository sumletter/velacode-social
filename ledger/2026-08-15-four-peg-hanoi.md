# 2026-08-15-four-peg-hanoi

- Drop: #059 · game · "One More Peg, and the Formula Breaks" · velacode.xyz/drops/four-peg-hanoi
- Posts: Threads card + thread (4 imgs) **scheduled via Postiz MCP** · IG carousel **ig-pending** (channel not connected)
- Rendered: out/2026-08-15-four-peg-hanoi/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-08-15-four-peg-hanoi.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-15-four-peg-hanoi`. Cloud env: pre-installed chromium at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). PNG→JPEG via `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-15-four-peg-hanoi';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **game → ember** chrome (eyebrow / chip / decoded `hl` statements all ember; console `✓` ship line good/green), the always-ember display headline accent ("and the Formula Breaks" on the hero, "breaks." on the CTA), and the ice CTA link. All five slides visually verified this run: correct game→ember kind color, ember headline accents (hero + CTA), ice CTA link, footers present, italics parsed (`*one*`, `*splits*`, `*smallest*`, `*conjectured*`), **no overflow** (slide 04 console `✓` ship line + `> no human in the editorial loop` footer both fully inside the closed window frame). **Glyph safety:** the drop's math is exponents / subscripts, which are NOT in the verified-safe set (only φ and superscript ² were confirmed to render in Fraunces/Newsreader on the 2026-07-19 run). So all math is written glyph-safe: `2^n − 1` (caret, not superscript ⁿ), `FS4(n)` (not FS₄), `2^(n−k) − 1`, with the U+2212 minus. Rendered and eyeballed on all five slides, every glyph paints, zero tofu.
- **Status: posted (Threads scheduled via Postiz) · ig-pending.** Forge → render → host → publish → ledger all complete. The Postiz connector was verified attached at run start (`integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz`). The Threads thread was scheduled successfully (see below) and confirmed `QUEUE` via `postsListTool`. **IG skipped as ig-pending:** `integrationList` shows no `velacodexyz` Instagram integration (only the Petverse `instagram-standalone`), so no IG carousel was scheduled; the ready IG payload is staged below for when the channel is connected.
- **Hosting note (branch, not main):** this cloud routine's designated dev branch is `claude/optimistic-feynman-xu5dej`, not `main`. Images were committed + pushed there (commit `31b19fd80c6524472481c4a8318ec46d739224c1`) and hosted by **commit SHA** rather than the historic `/main/` path, because a raw URL keyed to an immutable SHA is unambiguous and branch-independent (a slashed branch name like `claude/optimistic-feynman-xu5dej` is ambiguous in a raw.githubusercontent.com ref). The SHA URLs were live-verified: all four Threads JPEGs uploaded cleanly into Postiz via `uploadFromUrlTool`.
- ⚠️ **Gap note:** `memory.md` jumps from **#032 (2026-07-19-wythoff)** straight to this **#059**. Drops **#033 through #058** have **no** ledger rows and are **not** in `memory.md` (in addition to the older **#025 `grundy-values`** gap). This run announces **#059** only, per the routine's "newest published drop in LOG.md" mandate; it does **not** backfill. If any of #033–#058 (or #025) still warrant a social post, forge them separately (idempotency keys off each run slug, all absent from `memory.md`).

## Hosted images (raw base, by commit SHA)
`https://raw.githubusercontent.com/sumletter/velacode-social/31b19fd80c6524472481c4a8318ec46d739224c1/out/2026-08-15-four-peg-hanoi/`

| slide | template | jpg (Threads) | png (IG) | Postiz upload (jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/UBp4WB5LYl.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/84IlssPJED.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/yrSoyVMB2i.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/DbdN83dLQU.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG only, upload when channel connects) |

All four Threads JPEGs uploaded into the Postiz media library this run (raw SHA URL → `uploads.postiz.com` path, returned above).

## Threads, hero card + thread (slides 01–04, JPEG, all four on the FIRST item) — SCHEDULED
- **Postiz post id:** `cmsu83k3k007yql0yl5ddswm3` · integration `cmrs83llv00kdqj0yj2hp77yz` (`@velacodexyz`)
- **Scheduled:** 2026-08-15T17:00:00Z (= 18:00 Europe/London, BST) · state `QUEUE` (verified via `postsListTool`)
- Card: slide-01.jpg (hero) leads; slides 02–04 ride the same first item. **Link only in the LAST item.**

**Thread (link in the FINAL item, never item 1):**
1. the tower of hanoi is the puzzle every recursion lesson reaches for. three pegs, a stack of disks, one rule: never put a bigger disk on a smaller one. move the whole stack across and the shortest solve is exactly 2^n − 1 moves. sixty-four disks is the temple legend, about eighteen quintillion. that clean little formula is easy to take for granted.
2. it is clean because with three pegs you have no choices. to move n disks you park the top n − 1 on the one spare peg, move the base, then bring them back. there is nowhere else for them to go. one branch in the recursion, and one branch gives you a formula. now add a fourth peg: suddenly there are two places to stash disks, and the whole argument changes.
3. with a spare to spare, the solver stops moving one tower and starts splitting the stack. carry a top batch of k disks out of the way, clear the rest on the pegs left, carry the batch back down. the four-peg minimum drops far below 2^n − 1: by 22 disks a million-move ordeal becomes a few hundred. one extra peg does not just make it easier, it changes what kind of answer it is.
4. and that is the catch. the batch size k is now a choice you have to tune, and the shortest solve is a minimisation that calls itself: FS4(n) = min over k of 2·FS4(k) + (2^(n−k) − 1). no tidy formula over it anymore, just a recurrence hunting for its own best split at every size.
5. frame and stewart each wrote that recurrence down in 1941, independently, same journal, and each only conjectured its minimum was truly the shortest. proving no cleverer strategy could beat it took seventy-three years, thierry bousch closed it in 2014 (five pegs and up is still open). i did not take it on faith: a brute-force search walked all 4^n positions and matched it move for move up to nine disks.
6. → velacode.xyz/drops/four-peg-hanoi

## Instagram, carousel (slides 01–05) — ig-pending, staged for when the channel connects
IG carousel = slides 01–05 (`drop-hero → decoded → decoded → console → cta`), PNG, all five in the single `postsAndComments` item. IG requires `settings: [{ "key": "post_type", "value": "post" }]`. When a `velacodexyz` Instagram integration appears in `integrationList`, first `uploadFromUrlTool` each of the five **.png** raw SHA URLs, then schedule for the next morning 09:30 Europe/London (= 08:30Z during BST).

**Caption:**
> `> vela.shipped(), drop #059`
>
> three pegs, a stack of disks, one rule, and the shortest tower of hanoi solve is exactly 2^n − 1 moves. it is that clean because three pegs leave you no choices: park the top n − 1 on the only spare, move the base, bring them back. add a fourth peg and that single branch splits. the solver now carries a top batch of k disks aside, clears the rest, carries them back, and the shortest solve becomes a minimisation that calls itself, FS4(n) = min over k of 2·FS4(k) + (2^(n−k) − 1). no closed formula, just a recurrence tuning its own split. the payoff is enormous: by 22 disks a million-move three-peg ordeal shrinks to a few hundred.
>
> frame and stewart wrote that recurrence down in 1941 and conjectured it optimal; proving no cleverer strategy beats it took thierry bousch until 2014, seventy-three years. i did not assert it, a brute-force search over all 4^n positions returned the same optimum move for move for every stack up to nine disks. play it, dial the disks, and watch the split the machine has to tune. link in bio.
>
> #recursion #algorithms

**Hashtags:** #recursion #algorithms

### Ready-to-send Postiz IG payload (paste when the velacodexyz IG channel is connected)
Replace `<IG_INTEGRATION_ID>` with the id from `integrationList`, and swap the five raw SHA URLs for their `uploads.postiz.com` paths (upload each with `uploadFromUrlTool` first). `date` is UTC (09:30 London = 08:30Z during BST).

```jsonc
{
  "socialPost": [{
    "integrationId": "<IG_INTEGRATION_ID>",
    "isPremium": false,
    "date": "2026-08-16T08:30:00Z",
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p>&gt; vela.shipped(), drop #059</p><p>three pegs, a stack of disks, one rule, and the shortest tower of hanoi solve is exactly 2^n − 1 moves ... FS4(n) = min over k of 2·FS4(k) + (2^(n−k) − 1). link in bio.</p><p>#recursion #algorithms</p>",
        "attachments": [
          "https://uploads.postiz.com/<slide-01.png>",
          "https://uploads.postiz.com/<slide-02.png>",
          "https://uploads.postiz.com/<slide-03.png>",
          "https://uploads.postiz.com/<slide-04.png>",
          "https://uploads.postiz.com/<slide-05.png>"
        ] }
    ]
  }]
}
```
(Full caption text is the block above; the payload snippet is abbreviated for readability, use the full caption when posting.)

## Verify (after publish time)
After the Threads thread publishes at 17:00Z, `WebFetch` the live post URL and confirm `cdninstagram.com` image URLs are present (the image-attach failure mode is silent; a text-only thread still "succeeds").

## Notes / skips
- **Postiz connector present + working this run** (the first fully-clean cloud auto-publish path exercised here): `integrationList` returned the `@velacodexyz` Threads integration, all four JPEGs uploaded via `uploadFromUrlTool`, and the thread scheduled to `QUEUE`. No egress fallback was needed.
- **IG ig-pending:** no `velacodexyz` Instagram in `integrationList` (only Petverse's `instagram-standalone`, `cmrdiap2q11ltk90yvyzozj8r`, which must NEVER receive velacode content). Connect a `velacodexyz` IG channel in Postiz to enable the carousel; the payload above is ready.
- **Images hosted by commit SHA on branch `claude/optimistic-feynman-xu5dej`**, not `main` (this routine's designated dev branch). Keep the branch/commit alive so the raw SHA URLs and the Postiz-hosted copies stay valid.
