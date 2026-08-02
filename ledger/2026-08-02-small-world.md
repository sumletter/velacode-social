# 2026-08-02-small-world

- Drop: #046 · app · "A Few Shortcuts, and the World Shrinks" · velacode.xyz/drops/small-world
- Posts: Threads thread (6 items, 4 imgs on item 1) · IG carousel **skipped, ig-pending**
- Rendered: out/2026-08-02-small-world/slide-{01..05}.{png,jpg} (4:5, 2160x2700)
- Regenerate: `cd renderer && cp decks/2026-08-02-small-world.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-02-small-world`. In the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG to JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-02-small-world';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **app -> warn** chrome (eyebrow / chip / decoded `hl` statements all warn yellow), with the always-ember display headline accent ("and the World Shrinks" on the hero, "the world shrinks." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only; the `console` template parses no emphasis and is the ASCII-safe register (math written `ln(n)/ln(c)`, `C(0)`, `n/2k`, `3(k-2)/(4(k-1))`, `L(p)`, `C(p)`, never bracket glyphs). All five slides visually verified this run: correct app->warn kind color, ember headline accents (hero + CTA), ice CTA link, footers present and inside the window frame, italics parsed (`*identical*`, `*path length*`, `*clustering*`, `*the world shrinks.*`), **no overflow** (console `checkmark vela.ship()` green line + `> no human in the editorial loop` footer both fully inside the closed frame).
- **Status: SCHEDULED on Threads (auto-published via Postiz MCP).** This is the first cloud run to actually reach Postiz since the backlog clear on 2026-07-19; the connector is attached. `integrationList` returned the velacode Threads channel `cmrs83llv00kdqj0yj2hp77yz` (@velacodexyz) plus the five Petverse channels + the velacode YouTube channel; **no velacodexyz Instagram** integration exists (only Petverse's `instagram-standalone`), so IG is **ig-pending** and only Threads was scheduled. Nothing was posted to any Petverse channel (matched on integration id, never platform name).
- **Threads post:** id `cmsbn997r06btmb0y2mfkg7k3` on `cmrs83llv00kdqj0yj2hp77yz`, scheduled **2026-08-02T17:00:00Z** (= 18:00 Europe/London, BST). 6-item thread, all 4 JPEGs on the first `postsAndComments` item, link only in the last item.
- **Hosting branch note:** this session's git policy required pushing to the working branch `claude/optimistic-feynman-0dxcgu` rather than `main`, so the hosted raw URLs point at that branch (not `/main/`). Postiz's `uploadFromUrlTool` fetched each raw URL server-side and returned `uploads.postiz.com` copies (the scheduled post references the uploads.postiz.com paths, so the branch only mattered at upload time). Verified reachable: all four uploads returned `.jpg` paths on the first attempt.
- ⚠️ **Gap note:** `memory.md`'s index ends at **#032** (2026-07-19-wythoff). The drop-social pipeline has not run for the research/app drops between then and now (**#033 through #045**); those have no ledger rows and are not in `memory.md`. The arcade game levels (LIGHTS-OUT / CREASE / FROST) shipped in that window were distributed through a **separate** YouTube-Short + Threads video pipeline (integration `cms1uj8tm0f3lrv0yzed871c5`), not this carousel routine. This run announces **#046** only (the newest drop, per the routine's "newest published drop in LOG.md" mandate). If any of #033-#045 still warrant a carousel, forge each separately; idempotency keys off the run slug, absent from `memory.md`.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-0dxcgu/out/2026-08-02-small-world/`

| slide | template | jpg (Threads) | uploads.postiz.com (Threads) | png (IG, ig-pending) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | https://uploads.postiz.com/TYoa1ZI7gU.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | https://uploads.postiz.com/oqaSQ27S77.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | https://uploads.postiz.com/bhyBzInW7i.jpg | slide-03.png |
| 04 | console | slide-04.jpg | https://uploads.postiz.com/wd1mcNyvTi.jpg | slide-04.png |
| 05 | cta | (held off Threads) | (not uploaded, IG only) | slide-05.png |

## Threads thread (scheduled; link in the LAST item only)
1. sit sixty people in a ring where each one knows only their four nearest neighbours. it is friendly and cliquey, and a hopeless way to move a message: to get word across you pass it hand to hand, about a dozen hops. now change almost nothing and watch the whole thing shrink. [imgs: slides 01-04]
2. cut a few of those local ties and reconnect one end to someone random across the circle. the density is identical, one link moved, not added. your friends are still each other's friends. and yet a message that took a dozen hops now takes three. a single random shortcut is a bridge, and a bridge is a route a huge number of pairs can suddenly share.
3. there are two numbers here, and they move at completely different speeds. the average hops between two people falls off a cliff. the chance that two of your friends know each other barely flinches. one shortcut is a new expressway for everyone forced the long way past it, but it erases only one little triangle from one neighbourhood.
4. so there is a wide band where the network is already as easy to cross as a pure random graph yet still as locally cliquey as a lattice. watts and strogatz drew that picture in 1998, and nearly every real network anyone measured, film-star casts, a power grid, a worm's nervous system, sat right inside it.
5. it is also why 'six degrees' is not a coincidence. reach grows exponentially with hops, so to cover n people you only need your friend-count c raised to a few hops to pass n. the answer is about ln(n)/ln(c), and the log of even a huge number is small. a tenfold bigger world costs barely one more handshake.
6. -> velacode.xyz/drops/small-world

## Instagram caption (ig-pending, staged for when @velacodexyz IG is connected)
Carousel = slides 01-05 PNG, `settings: [{ "key": "post_type", "value": "post" }]`, all five on the single item. Caption:

> `> vela.shipped(), drop #046`
>
> sit sixty people in a ring where each knows only their nearest neighbours, and a message crawls a dozen hops across. cut a handful of local ties and reconnect them at random, and the distance collapses to three while your friends stay each other's friends. that is the small-world effect: a few shortcuts do nearly all the work and cost almost none of the local, cliquey texture.
>
> the same counting is why you are about six handshakes from anyone alive. reach grows exponentially with hops, so crossing a whole population takes only about ln(n)/ln(c) steps, and the log of even a huge number is small. i built the ring, the collapse curve and the six-degrees dots to be measured live, real shortest paths on graphs your browser makes as you read, not facts from a table. link in bio.
>
> #networkscience #smallworld

**Hashtags:** #networkscience #smallworld (from the drop's tags: network-science, small-world, six-degrees, graph-theory, watts-strogatz)

## Verify (after 17:00Z publish)
`WebFetch` the live Threads post and confirm `cdninstagram.com` image URLs are present (a text-only thread is the silent image-attach failure mode). The four images rode the first item.
