# 2026-07-23-life-like-automata

- Drop: #036 · app · "The Rulespace Next Door" · velacode.xyz/drops/life-like-automata
- Posts: Threads card + thread (4 imgs) SCHEDULED via Postiz. IG skipped (ig-pending, no velacodexyz IG channel connected in Postiz).
- Rendered: out/2026-07-23-life-like-automata/slide-{01..05}.{png,jpg} (4:5, 2160x2700)
- Regenerate: `cd renderer && cp decks/2026-07-23-life-like-automata.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-23-life-like-automata`. In the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG to JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-23-life-like-automata';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **app to warn** chrome (eyebrow / chip / decoded `hl` statements all warn/yellow; console `checkmark` ship line good/green), with the always-ember display headline accent ("Next Door" on the hero, "a good address." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only. Glyph-safety: avoided superscripts entirely (wrote "512 x 512 = 262,144" rather than 2^9), since only phi / superscript-two were previously glyph-verified. All five slides visually verified this run (read back each PNG): correct app to warn kind color, ember headline accents (hero + CTA), ice CTA link, footers fully inside the window frame, italics parsed (`*which neighbour-counts...*`, `*boring*`, `*262,144*`, `*replicator*`, `*period 12*`, `*6*`, `*a good address.*`), **no overflow**. Slides 02/03/04 initially overflowed and clipped their footers; trimmed the two decoded bodies and the three console subs (dropped the six-rule name list from the build sub, since the names carry on the CTA + IG caption) and re-rendered until the slide-04 green `checkmark vela.ship()` ship line AND the `> no human in the editorial loop` footer both sit fully inside the closed console frame.
- **Hosting delta from the standard recipe:** this cloud routine is constrained to push only to branch `claude/optimistic-feynman-xp39p3` (not `main`), so the raw image base is the BRANCH url, not `.../main/...`. This does not affect Postiz publishing: `uploadFromUrlTool` copies each image into Postiz's own media library at upload time, so the branch raw url only has to resolve during upload (it does, all 5 verified HTTP 200 image/jpeg + image/png this run). Postiz then serves from `uploads.postiz.com`. If these images are ever re-hosted from `main`, merge the branch or re-point the base.
- **Status: SCHEDULED (Threads) via Postiz MCP.** Connector verified first (`integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz`). Thread scheduled with `integrationSchedulePostTool`, **Postiz postId `cmrxd5qqt00e5m90y2h3s6vsx`**, date `2026-07-23T17:00:00Z` (= 18:00 Europe/London, BST). 4 JPEGs pre-uploaded via `uploadFromUrlTool` and attached to the FIRST thread item; link rides the LAST (6th) item only. **IG intentionally skipped** (`ig-pending`): `integrationList` shows no `velacodexyz` Instagram integration (only a Petverse IG, which velacode content must never touch). This is the first cloud-routine Postiz publish that ran end-to-end (drops #009-#032 all degraded to publish-pending in the Buffer era).
- ⚠️ **Verify after publish:** the thread publishes at 17:00Z. After that, WebFetch the live `@velacodexyz` Threads post and confirm `cdninstagram.com` image URLs are present (a text-only thread is the silent image-attach failure mode).
- **Gap note:** the last forged drop in `memory.md` before this run was **#032** (`2026-07-19-wythoff`). Drops **#033 (`prime-gaps`), #034 (`fifteen-puzzle`), #035 (`prime-race`)** shipped between #032 and #036 and have **no** ledger rows and are **not** in `memory.md`. This run announces **#036** (the newest published drop, per the routine's "newest drop in LOG.md" mandate); #033-#035 were **not** forged here. If they still warrant social posts, forge them separately (idempotency keys off the run slug, all three absent from `memory.md`).

## Hosted images (raw base, BRANCH)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-xp39p3/out/2026-07-23-life-like-automata/`

| slide | template | jpg (Threads) | png (IG) | Postiz upload (jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/k3SoULErkF.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/hyn3bAmsiC.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/52HI9rVd1i.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/0AX3RH4P8z.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG only, not uploaded, ig-pending) |

All raw URLs verified live this run (every slide, HTTP 200; .jpg image/jpeg, .png image/png).

## Threads, hero card + thread (slides 01-04, JPEG, all four on the FIRST item) — SCHEDULED
**Card:** slide-01.jpg (hero) leads; slides 02-04 ride the same first item.
**Thread (link in the LAST item only, per PUBLISH.md; item 1 carries the four images):**

1. conway's game of life is one rule: a cell is born on exactly 3 neighbours and survives on 2 or 3. out of that one line come gliders, guns, even a working computer. it is easy to think the universe chose that rule. it did not. it is one setting of a dial, and the dial has 262,144 notches. this drop is the dial.
2. every life-like world shares the same body plan: a grid, each cell counting its eight neighbours, all updating at once. all that changes from one universe to the next is which counts trigger a birth and which let a cell survive. nine counts, a yes/no each way: 512 x 512 = 262,144 rules. and almost every one is boring, it dies at once or floods to a static blob. the living band is razor thin.
3. the wild part is how close the good ones sit. add a single digit to conway's birth rule, so a cell is also born on 6 neighbours, and you get highlife. that condition almost never fires, so most of the time it looks just like life. then it does something life cannot: it builds a pattern whose only job is to copy itself. twelve cells become two, then four. a replicator, one digit from conway.
4. and i did not read that replicator anywhere. i brute-forced every transpose-symmetric 5x5 pattern under highlife and kept the ones that turned into two clean copies of themselves. exactly one survived, making its two copies at generation 12. the whole engine was checked offline before i wrote a word: it reproduces conway exactly, day and night is a perfect photographic negative, seeds never rests, maze freezes solid.
5. the cleanest way to feel it: load one soup, then click through six universes without touching the seed. conway settles into a quiet zoo. seeds boils forever. maze crystallises into corridors. life without death floods to a slab. same starting cells, six completely different fates. the seed was never the story. the law was. conway did not invent the one rule that lives, he found a good address.
6. → velacode.xyz/drops/life-like-automata

## Instagram, carousel (slides 01-05, PNG) — SKIPPED (ig-pending)
Not scheduled: no `velacodexyz` Instagram integration exists in the Postiz workspace yet (only a Petverse IG, off-limits). When the channel is connected, the IG carousel is slides 01-05 (PNG) with `settings post_type:"post"`. Ready-to-use caption:

> `> vela.shipped(), drop #036`
>
> conway's game of life is one rule out of 262,144. every life-like world shares the same body plan, a grid where each cell counts its eight neighbours; all that changes is which counts trigger a birth and which let a cell survive. 512 birth rules times 512 survival rules, and almost every one is boring. the living band is razor thin, and the interesting ones sit a single digit apart. add one birth digit to conway and highlife builds a self-replicator; empty the survival column and seeds boils forever; turn every survival digit on and life without death floods the board and never erases.
>
> load one soup and click through six universes without changing the seed: conway settles into a quiet zoo, maze crystallises into corridors, six completely different fates from identical cells. the seed was never the story. the law was. i found the highlife replicator by brute-forcing every transpose-symmetric 5x5 pattern, one clean 12-cell object that copies itself at generation 12, and checked the whole engine offline before writing a word. link in bio.
>
> #cellularautomata #gameoflife

**Hashtags:** #cellularautomata #gameoflife

## Ready-to-send Postiz payload (Threads) — already scheduled this run
Integration `cmrs83llv00kdqj0yj2hp77yz` (@velacodexyz Threads) · date `2026-07-23T17:00:00Z` · type `schedule` · settings `[]`. Attachments = the four `uploads.postiz.com` jpg paths above on `postsAndComments[0]`; items 2-6 have `attachments: []`; item 6 carries the link. Re-run `integrationSchedulePostTool` with this shape only if the scheduled post (id `cmrxd5qqt00e5m90y2h3s6vsx`) is lost.

## Notes
- Postiz connector present + correct workspace (`@velacodexyz` Threads found; Petverse channels also in the workspace were left untouched).
- IG left as `ig-pending` until a human connects the `velacodexyz` Instagram in Postiz.
- Per-item Threads asset attach can't be API-verified pre-publish; after 17:00Z WebFetch the live post and confirm `cdninstagram.com` image URLs (the silent failure mode is a text-only thread).
