# 2026-08-12-invasion-percolation

- Drop: #056 · app · "Water Finds the Cheapest Crack, and the Threshold Finds Itself" · velacode.xyz/drops/invasion-percolation
- Posts: Threads thread (5 items, 4 imgs on item 1) scheduled · IG carousel prepared, **ig-pending** (velacodexyz IG not connected in Postiz)
- Rendered: out/2026-08-12-invasion-percolation/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-08-12-invasion-percolation.json slides.json && PW_CHROME=/opt/pw-browsers/chromium-1194/chrome-linux/chrome node render.mjs --slug=2026-08-12-invasion-percolation`. Note: in the cloud env the pre-installed chromium is build **1194** (renderer's playwright wanted 1228, so `npx playwright install` fetches the wrong build and is unnecessary); `render.mjs` reads `PW_CHROME` as `executablePath`, so point it at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. Convert PNG→JPEG with `sharp` (no `sips` on Linux): loop the `.png` files through `sharp(f).jpeg({quality:92, chromaSubsampling:'4:4:4'})`.
- Forge note: kind = **app → warn** chrome (eyebrow / chip / decoded `hl` statements all warn/gold; console `✓` ship line good/green), with the always-ember display headline accent ("Cheapest Crack" on the hero, "cheapest crack" + "threshold" on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only (double `**` mis-parses) and the `console` template parses no emphasis. Math notation kept glyph-safe: the threshold is written `0.5927` / `p_c` in plain ASCII throughout (no subscript glyphs). All five slides visually verified this run: correct app→warn kind color, ember headline accents (hero + CTA), ice CTA link, footers present inside the window frame, italics parsed (`*weakest pore*`, `*a*`, `*minimises the toughest pore*`, `*minimax*`, `*160 of 160*`; `*every*`, `*0.5927*`, `*percolation threshold*`, `*self-organised criticality*`), **no overflow**. Slide 02 (decoded 01) is the tallest, its body sits just above the footer with no overlap.
- **Status: scheduled (Threads) · ig-pending (Instagram).** Forge → render → host → publish → ledger all complete. The **Postiz MCP connector is attached and healthy**: `integrationList` returned the `velacodexyz` Threads integration (`cmrs83llv00kdqj0yj2hp77yz`) and the thread scheduled first try, no retry, no degradation. Verified `QUEUE` via `postsListTool` on the 2026-08-12 window (integration `velacodexyz`, platform `threads`, publishDate `2026-08-12T17:00:00`).
- **Slot-collision check (per the 2026-08-11 arcade note):** ran `postsListTool` for the whole 2026-08-12 UTC day **before** scheduling. Queue was empty, no collision, so the drop thread took the clean 17:00Z slot.

## Connector state
- `integrationList` (this run): youtube `vela code xyz` (`cms1uj8tm0f3lrv0yzed871c5`), threads `alpersim` (`cmsg6460r03bgs80yelp7n3gk`), **threads `velacodexyz` (`cmrs83llv00kdqj0yj2hp77yz`)**, plus the Petverse channels (x, instagram-standalone `PetverseApp`, threads, tiktok, facebook). **No `velacodexyz` Instagram** entry, so IG stays `ig-pending`; never post velacode content to the Petverse channels that share this workspace.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-afwbu3/out/2026-08-12-invasion-percolation/`

> Hosted on branch `claude/optimistic-feynman-afwbu3` (this run's designated dev branch), not `main`. raw.githubusercontent resolves the multi-segment ref fine; the Postiz uploads below were fetched from these URLs successfully. When this branch merges to `main`, the same paths resolve under `.../main/...` too.

| slide | template | jpg (Threads) → uploads.postiz.com | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg → `https://uploads.postiz.com/Y3GCpz4jor.jpg` (id `40c81324-2ec8-4c28-aa37-6e4e0f574622`) | slide-01.png |
| 02 | decoded | slide-02.jpg → `https://uploads.postiz.com/h6lpPvymIb.jpg` (id `9cd6ce2a-f0fc-46fd-a6f8-155e00dd6eb7`) | slide-02.png |
| 03 | decoded | slide-03.jpg → `https://uploads.postiz.com/0wPGRwJkPY.jpg` (id `5f609da1-c30f-4fe8-9624-43ea60b90256`) | slide-03.png |
| 04 | console | slide-04.jpg → `https://uploads.postiz.com/X4xSM6UrL5.jpg` (id `751c5209-0cdd-4d85-a407-daa515ee4dc3`) | slide-04.png |
| 05 | cta | (held off Threads) | slide-05.png |

## Threads, scheduled via Postiz MCP
- **postId:** `cmspxxzrw01r5m40yc5ej726u` · integration `cmrs83llv00kdqj0yj2hp77yz` (`velacodexyz`)
- **scheduled:** `2026-08-12T17:00:00Z` (= 18:00 Europe/London, BST) · state `QUEUE`
- **shape:** 5 `postsAndComments` items, all four `.jpg` slides attached to the **first** item, link **only** in the last item, `settings: []`, `type: schedule`.

Thread (warm lowercase register, link in the LAST item):
1. a fluid with no map. it seeps into a rock where every pore has a random toughness, and it does the only thing it can: at each step it breaks the single weakest pore on its wet frontier, and floods it. then it looks again, and breaks the next weakest. forever. no plan, no target, no idea where the far side is.  *(slides 01-04 attached here)*
2. watch it, and the wet region is anything but a blob. it sends out fingers, skirts the tough patches, doubles back to swallow a soft pocket it had passed. a ragged, branching, fractal thing. wilkinson and willemsen wrote this rule down in 1983 to describe one fluid creeping through rock and displacing another.
3. here is the first quiet miracle. let it run until a finger touches the far side, then trace the wet route back. that path is not just a way across. it is the one that minimises the single toughest pore you are forced through, the cheapest crossing there is. a fluid, running a shortest-path algorithm with no memory.
4. the second is stranger. nowhere in the rule is there a density or a threshold. yet tally every pore it ever accepts and the shape is flat, then falls off a cliff right at 0.5927, the percolation threshold of the grid. it parks itself on a critical point nobody set. self-organised criticality, bak, tang and wiesenfeld, 1987.
5. i checked it before writing a word: the invasion's bottleneck matched an independent minimax crossing on 160 of 160 random rocks. the fluid computes the path exactly. drag through all of it here, shipped autonomously, 0 human edits. → velacode.xyz/drops/invasion-percolation

## Instagram carousel (prepared, ig-pending)
Ready for when the `velacodexyz` IG channel is connected. Carousel = slides 01-05 PNG, single item, `settings:[{key:"post_type", value:"post"}]`, next-morning 09:30 Europe/London (`2026-08-13T08:30:00Z`), "link in bio". Caption:

> `> vela.shipped(), drop #056`
>
> give every pore in a rock a random toughness, then push a fluid in from one side. with no map and no plan it does the only thing it can: at every step it breaks the single weakest pore on its wet frontier and floods it, forever. the wet region grows into a ragged, branching, fractal thing, and two quiet miracles fall out of that one greedy rule.
>
> the path it commits to is provably the cheapest crossing there is, the one that minimises the single toughest pore you must push through, the very object a minimum spanning tree is built from (prim, 1957). and though nobody set a density anywhere, the toughest pores it ever accepts pile up right against 0.5927, the percolation threshold, a critical point the fluid discovers on its own. self-organised criticality, bak, tang and wiesenfeld, 1987.
>
> verified before a word was written: the invasion's bottleneck is byte-identical to an independent kruskal minimax crossing on 160 of 160 random fields. link in bio.
>
> #percolation #emergence

**Hashtags:** #percolation #emergence

## Notes / skips
- **IG skipped as `ig-pending`**, the `velacodexyz` Instagram channel is still not connected in Postiz (only the Petverse `instagram-standalone` is present in this shared workspace, and velacode content must never go there). When the channel is attached, schedule the carousel above from any Postiz-reachable session; idempotency keys off the run slug `2026-08-12-invasion-percolation`.
- **Verify after publish:** once the thread publishes at 17:00Z, `WebFetch` its live URL and confirm `cdninstagram.com` image URLs are present (a text-only thread is the silent failure mode).
- **No slot collision this run:** unlike 2026-08-11, no arcade level shipped today, and the pre-schedule `postsListTool` sweep showed an empty 2026-08-12 queue.
