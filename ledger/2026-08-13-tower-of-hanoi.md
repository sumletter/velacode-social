# 2026-08-13-tower-of-hanoi

- Drop: #057 · game · "The Puzzle That Counts in Binary and Draws a Fractal" · velacode.xyz/drops/tower-of-hanoi
- Posts: Threads thread (6 items, 4 imgs on item 1) **SCHEDULED via Postiz MCP** · IG carousel **skipped (ig-pending)**
- Rendered: out/2026-08-13-tower-of-hanoi/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-08-13-tower-of-hanoi.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-13-tower-of-hanoi`. In the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-13-tower-of-hanoi';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **game → ember** chrome (eyebrow / chip / decoded `hl` statements all ember; console `✓` ship line good/green), the always-ember display headline accent ("Draws a Fractal" on the hero, "is just counting." + "is one big fractal." on the two decoded statements, "binary and a fractal." on the CTA), and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis. Math kept glyph-safe as plain prose ("2 to the n, minus 1", "3 to the n") in the display/body templates and ASCII caret ("2^n-1", "3^n", "(3^(n+1)-3)/2") in the console. All five slides visually verified this run in-browser (rendered PNGs read back): correct game→ember kind color, ember headline accents on all five, ice CTA link, footers present on every slide, italics parsed (`*t*`, `*ruler sequence*`, `*is*`, `*every*`, `*Sierpinski triangle*`, `*distance across a fractal*`), **no overflow**. First pass overflowed on slide 04 (console `✓` ship line clipped, footer gone) and slide 03 (decoded body ran past the frame, no footer); trimmed the three console subs and the slide-03 statement (to two lines) + body, re-rendered, both now sit fully inside the closed window frame with footers visible.
- **Status: SCHEDULED (Threads) · ig-pending.** Forge → render → host → upload → schedule → ledger all complete. Postiz connector verified present at run start (`integrationList` returned Threads `@velacodexyz` = `cmrs83llv00kdqj0yj2hp77yz`). Threads thread scheduled and confirmed `QUEUE` (see below). **Instagram skipped**: `integrationList` shows no `velacodexyz` Instagram integration (only a `PetverseApp` instagram-standalone, a different brand, which must never receive velacode content), so per PUBLISH.md the IG carousel is deferred and this run is marked `ig-pending`. The IG payload is staged below for when the velacodexyz IG channel is connected.

## Hosting
Images hosted on branch `claude/optimistic-feynman-esiucr` (this session's designated branch), not `main`, so the raw base is:
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-esiucr/out/2026-08-13-tower-of-hanoi/`

All 10 verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

| slide | template | jpg (Threads) | png (IG) | Postiz upload path (jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/Gebq9T6jsr.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/0dg4ub91JO.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/HvGKkJ91yX.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/sIP5jubSZx.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG-only, upload when IG connects) |

## Threads, SCHEDULED (Postiz MCP)
- **Post id:** `cmsrdfjus007upa0ykxepi8jb` · integration `cmrs83llv00kdqj0yj2hp77yz` (@velacodexyz)
- **State:** `QUEUE` · **scheduled:** `2026-08-13T17:00:00Z` (= 18:00 Europe/London, BST)
- **Shape:** all 4 JPEG slides attached to the FIRST `postsAndComments` item (`uploads.postiz.com` paths above); items 2-5 are the thread replies (text only); the link rides the LAST item only, never item 1. Each item wrapped in `<p>`, all ≤500 chars.

Thread copy (item 1 carries the 4 images):
1. here is a toy a five-year-old can play. three pegs, a stack of disks, move the whole stack over one disk at a time and never set a big disk on a smaller one. that is the entire rulebook. with three disks it takes 7 moves, four takes 15, five takes 31. every disk you add doubles the work. and hidden inside those three plain rules are two things nobody put there.
2. the first is binary. number the moves of the perfect solve 1, 2, 3, and on, and ask which disk moves on step t. you do not need to trace the puzzle. write t in binary, count the zeros trailing off its right end, add one. that is the disk. the smallest one moves on every odd step, half the time; the next a quarter; the next an eighth. the solve is just counting, in binary.
3. the second is a fractal. forget the single game and picture every position the disks can be in at once, 3-to-the-n of them, one dot each, joined whenever a single legal move links them. you would expect a tangle. what you get, with no hand guiding it, is the sierpinski triangle. the three corners are the three tidy stacks. the shape repeats inside itself all the way down.
4. and here is the number that ties it together. the fewest moves to solve is 2-to-the-n minus one. that is also the exact distance, corner to corner, across that fractal. the minimum is not a fact about disks at all. it is a distance across a triangle. and the shortest road does not run along the outer edge, it dives straight through the middle.
5. none of it was designed in. lucas wrote down three rules about disks and pegs in 1883, and the binary counting and the sierpinski triangle were already inside them, waiting, the way the digits of pi are already inside a circle. i checked every number offline before writing a word: min moves against the recursion up to 64 disks, the corner-to-corner distance against a direct search.
6. → velacode.xyz/drops/tower-of-hanoi

## Instagram, STAGED (ig-pending, channel not connected)
When a `velacodexyz` Instagram integration appears in `integrationList`, upload slides 01-05 **.png** via `uploadFromUrlTool` (raw base above), then schedule with `integrationSchedulePostTool` using `settings: [{ "key": "post_type", "value": "post" }]`, all 5 PNGs on the single item, dated next morning 09:30 Europe/London (= `2026-08-14T08:30:00Z` during BST).

**Caption:**
> `> vela.shipped(), drop #057`
>
> the tower of hanoi is a toy a child can play: three pegs, move a stack of disks one at a time, never a big disk on a smaller one. that is the whole rulebook. inside those three rules are two things nobody put there. the perfect solution is the whole numbers written in binary, the disk that moves on step t is 1 plus the trailing zeros of t, so the smallest disk moves half the time, the next a quarter, the next an eighth. and the map of every position the disks can reach, all 3-to-the-n of them, is the sierpinski triangle, drawn with no hand guiding it.
>
> the fewest moves to solve, 2-to-the-n minus 1, is exactly the distance from one corner of that fractal to another. i verified every number offline before writing a word: min moves against the recursion to 64 disks, the ruler rule to n=12, the corner-to-corner distance by direct search. play it, watch the machine solve it, and see the fractal draw itself. link in bio.
>
> #recursion #fractal

**Hashtags:** #recursion #fractal

## Verify (after publish time)
After 2026-08-13 18:00 Europe/London, `WebFetch` the live Threads post and confirm `cdninstagram.com` image URLs are present (the image-attach failure mode is silent, a text-only thread still "succeeds").

## Notes
- **First fully-auto Threads publish of a fresh daily drop via Postiz** (the 2026-07-19 evening backlog clear was a manual local session). Connector was attached and verified this run.
- **Gap note:** memory.md's newest prior row is #032 (2026-07-19-wythoff). Drops **#033 through #056** (and #025 `grundy-values`) have **no** ledger rows and are **not** in memory.md, they were never forged (the cloud routine was quiet between 2026-07-19 and today). This run announces only **#057**, the newest published drop, per the routine's "newest published drop in LOG.md" mandate. If the backlog warrants social posts, forge each separately from a Postiz-reachable session (idempotency keys off each run slug, all absent from memory.md).
