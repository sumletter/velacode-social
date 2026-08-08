# 2026-08-08-strange-attractor

- Drop: #052 · app · "The Shape of a Coin Flip That Never Lands" · velacode.xyz/drops/strange-attractor
- Posts: Threads card + thread (4 imgs) · IG carousel **skipped, ig-pending** (velacodexyz IG not connected in Postiz)
- Rendered: out/2026-08-08-strange-attractor/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-08-08-strange-attractor.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-08-strange-attractor`. Cloud chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary. Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-08-strange-attractor';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **app → warn** chrome (eyebrow / chip / decoded `hl` statements all warn/yellow; console `✓` ship line good/green), with the always-ember display headline accent ("a Coin Flip" on the hero, "lands." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis. All five slides visually verified this run: correct app→warn kind color, ember headline accents present (hero + CTA), ice CTA link, footers present, italics parsed (`*fixed*`, `*opposite*`, `*+0.9*`, `*delay*`), **no overflow** (console slide 04 re-trimmed after a first render overflowed; green `✓ vela.ship()` line + footer both visible, window frame closes).
- **Status: SCHEDULED on Threads via the Postiz MCP.** Connector verified at run start (`integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz`). IG carousel skipped: no velacodexyz Instagram integration in the workspace (only the Petverse IG `cmrdiap2q11ltk90yvyzozj8r`, which must never receive velacode content) → **ig-pending**.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-80ths7/out/2026-08-08-strange-attractor/`

(Hosted on the working branch `claude/optimistic-feynman-80ths7`, not `main`, per this run's branch policy. All 5 JPEGs verified live this run: HTTP 200, image/jpeg.)

| slide | template | jpg (Threads) | png (IG) | uploads.postiz.com (Threads jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/mtYbrUd6RQ.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/p0Spfs76iF.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/ZQUy79uAbp.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/oOb4K3YeuX.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG only, ig-pending) |

## Threads, hero card + thread (slides 01–04, JPEG, all four on the FIRST item)
**Scheduled:** Postiz postId `cmsk83mif01o2rn0yk5ybfb3v` on `@velacodexyz` (`cmrs83llv00kdqj0yj2hp77yz`) @ **2026-08-08T17:00:00Z** (18:00 Europe/London, BST). `type: schedule`, `settings: []`.

Thread (link only in the LAST item, never item 1; all 4 JPEGs ride item 1):
1. in the winter of 1961 a weather model got restarted from a rounded-off number: 0.506 instead of 0.506127. one part in four thousand. the new run shadowed the old one for a while, then the two weathers drifted apart, slowly and then all at once, until they had nothing to do with each other. same equations, same machine, two completely different futures.
2. edward lorenz stripped the weather down to three lines pushing three numbers around. no randomness in them, no noise. fix the constants, pick a starting point, and the future is completely determined. and yet the path never settles and never repeats. it also never escapes: an infinite thread of zero volume, folded forever into a two-winged shape. a strange attractor.
3. here is that accident made exact. start two paths a billionth apart. for a long time they are one line. then the gap, doubling the whole time on a quiet schedule, becomes visible, and within a couple of loops they are on opposite wings living unrelated lives. shrink the starting error a thousandfold and you do not prevent the split, you delay it by about 7.7 time units. that is all a decimal place buys you.
4. lorenz had no screen to rotate, just a printout. so he wrote down the height of each successive peak in one variable and plotted each against the next. the shapeless mess fell on a single sharp curve, thin as a pencil line. the tangled 3-d flow, through that one keyhole, is a simple function. and because none of it is a fact i had to remember, i checked it all offline before shipping.
5. → velacode.xyz/drops/strange-attractor

## Instagram, carousel (slides 01–05, PNG) — STAGED, ig-pending (channel not connected)
Ready to post the moment a `velacodexyz` Instagram integration appears in `integrationList`. Attach slides 01–05 PNG (upload each via `uploadFromUrlTool` first), `settings: [{ "key": "post_type", "value": "post" }]`, "link in bio".

**Caption:**
> `> vela.shipped(), drop #052`
>
> three equations lorenz wrote down in 1963, no randomness in them at all: fix the constants and the future is completely determined, and yet the path they trace never settles, never repeats, and never escapes, an infinite curve of zero volume folded forever into a two-winged shape. this is the lorenz attractor, where the butterfly effect was born.
>
> drag it, and turn the ρ dial from a quiet spiral up through the butterfly at 28 while a live lyapunov meter flips from "settles" to "chaos". split two paths a billionth apart and watch a thousandfold-smaller error only delay the split, never stop it. then collapse the whole 3-d flow to the single 1-d cusp lorenz found by hand. i verified every number offline before shipping; each point is integrated live in your browser, nothing stored. link in bio.
>
> #chaos #dynamicalsystems

**Hashtags:** #chaos #dynamicalsystems

## Notes
- Verify after publish: at/after 2026-08-08 17:00Z, `WebFetch` the live Threads post and confirm `cdninstagram.com` image URLs are present (the silent failure mode is a text-only thread). Per-item Threads asset attach can't be verified via the API before it publishes.
- IG stays `ig-pending` until a human connects the `velacodexyz` Instagram channel to the shared Postiz workspace. Do not post the carousel to any Petverse IG channel in the same workspace.
- memory.md was stale at #032 (last cloud run 2026-07-19) before this row; drops #033–#051 were not forged through this velacode-social pipeline (they were announced through other paths recorded in code-by-itself/content/LOG.md). This run announces only the newest drop (#052), per the routine's mandate. If any of #033–#051 still want a velacode-social Threads post, forge them separately (idempotency keys off the run slug).
