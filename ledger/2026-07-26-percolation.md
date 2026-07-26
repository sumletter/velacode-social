# 2026-07-26-percolation

- Drop: #039 · research · "The Width of Nothing, Then Everything" · velacode.xyz/drops/percolation
- Posts: Threads thread (5 items + link, 4 imgs on item 1) scheduled via Postiz MCP · IG carousel staged (ig-pending, channel not connected)
- Rendered: out/2026-07-26-percolation/slide-{01..05}.{png,jpg} (4:5, 2160x2700)
- Regenerate: `cd renderer && cp decks/2026-07-26-percolation.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-26-percolation`. Cloud env: pre-installed chromium at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG to JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-26-percolation';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research -> ice** chrome (eyebrow / chip / `decoded` `hl` statements all ice), with the always-ember display headline accent ("Then Everything" on the hero, "a sharp wall." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis. Glyph-safe register: the body/decoded/CTA use plain ASCII plus the decimals (0.592746, 0.5927, 1/2) and spelled-out math ("p_c approx 0.5927"); the console uses ASCII throughout (`p_c approx 0.5927`, `L = 32 / 64 / 96`) since Space Mono is the safe register. All five slides visually verified this run: correct research->ice kind color, ember headline accents (hero + CTA), ice CTA link, footers present, italics parsed (`*open*`, `*closed*`, `*cluster*`, `*phase transition*`, `*is*`, `*links*`, `*a sharp wall.*`), **no overflow**. Slide 03 (decoded) initially overflowed (body clipped, footer gone); trimmed the statement from 3 wrapped lines to 2 and shortened the body, re-rendered, now the `> decoded · drop #039` footer sits fully inside the closed window frame.
- **Status: PUBLISHED to Threads (scheduled) via Postiz MCP.** Forge -> render -> host -> upload -> schedule -> ledger all complete. Connector verified first (`integrationList`): the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz` is present. All 4 Threads JPEGs pre-uploaded via `uploadFromUrlTool` (raw GitHub URLs -> `uploads.postiz.com` paths), then scheduled with `integrationSchedulePostTool`. **IG = ig-pending:** `integrationList` returned no `velacodexyz` Instagram integration (only the Petverse IG `instagram-standalone`, which is a different brand and must never receive velacode content), so the carousel was not scheduled; its ready-to-post payload is staged below for when the velacode IG channel is connected in Postiz.
- **Branch note:** this cloud run pushes to `claude/optimistic-feynman-yqpgg8` (not `main`), per the session's branch policy. The hosted raw URLs therefore reference that branch. Because `uploadFromUrlTool` copies the bytes into Postiz's own library (`uploads.postiz.com`), the scheduled Threads post is independent of the branch once uploaded. If these images are wanted on `main`, merge the branch; the `uploads.postiz.com` paths already backing the scheduled post do not change.

## Postiz result (Threads)

- **Thread postId:** `cms1n5tlk006rny0yr4iwjyfj` · integration `cmrs83llv00kdqj0yj2hp77yz` (@velacodexyz)
- **Scheduled:** 2026-07-26T17:00:00Z (18:00 Europe/London, BST)
- **Verify after publish:** WebFetch the live post and confirm `cdninstagram.com` image URLs are present (silent text-only is the failure mode).

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-yqpgg8/out/2026-07-26-percolation/`

| slide | template | jpg (Threads) | Postiz upload path | png (IG) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | https://uploads.postiz.com/Bq5hFHBbwz.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | https://uploads.postiz.com/PV0dtj9IVj.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | https://uploads.postiz.com/5DVHs1jJwm.jpg | slide-03.png |
| 04 | console | slide-04.jpg | https://uploads.postiz.com/1av4fnScEp.jpg | slide-04.png |
| 05 | cta | (held off Threads) | (upload at IG post time) | slide-05.png |

## Threads, thread (slides 01-04 JPEG on the FIRST item; link only in the LAST item) — SCHEDULED
1. here is a game with exactly one knob. take a big square grid and, cell by cell, flip a weighted coin: open, or closed. turn the knob to zero and everything is closed. to one, everything is open. the whole story lives in the country in between, and it is stranger than it has any right to be. *(4 JPEGs attached here)*
2. open cells that touch, edge to edge, form a cluster. at low density you get a scatter of tiny islands adrift in the dark. raise the knob and they grow and merge a little, but they stay islands. keep going. then, over a band of density so narrow you can miss it, one cluster suddenly reaches from the top edge clear to the bottom. the islands have become a continent.
3. that sudden crossing is a phase transition, the same abrupt switch as water freezing: a quantity that is exactly zero on one side of a critical point and abruptly nonzero on the other. no cell was special, the rule never changed. yet the grid has two completely different personalities on the two sides of a threshold you cannot see coming from inside the process.
4. for the square grid that threshold sits near 0.592746, and here is the humbling part: nobody knows what that number is. seventy years of effort, better and better decimals, and not one clean closed form. right at the edge, the spanning cluster turns out to be a fractal, full of holes at every scale.
5. and yet change a single word. open the links between cells instead of the cells, and on the very same grid the threshold is exactly one half. conjectured in the 1960s, proved by harry kesten in 1980, because the square bond lattice is its own dual and self-duality forces the balance to sit at 1/2. i never typed 0.5927 in; my browser measures it live from thousands of random worlds.
6. → velacode.xyz/drops/percolation

## Instagram carousel (slides 01-05 PNG) — STAGED, ig-pending (channel not connected)

When a `velacodexyz` Instagram integration appears in `integrationList`, upload the five PNGs via `uploadFromUrlTool` (raw GitHub URLs fail Postiz domain validation) and schedule with `integrationSchedulePostTool`, `settings: [{ "key": "post_type", "value": "post" }]`, next morning 09:30 Europe/London (08:30Z during BST). Never post to the Petverse IG.

**Caption:**
> `> vela.shipped(), drop #039`
>
> fill a big square grid with open cells at random, one dial setting the odds, and for a long stretch you get only islands: tiny clusters of touching cells adrift in the dark. raise the dial and they grow, but stay islands. then, over a band of density so narrow you can miss it, one cluster snaps all the way across, top edge to bottom, and the islands become a continent. that jump is a real phase transition, the same abrupt switch as water freezing.
>
> for the square grid the crossing sits near 0.592746, and nobody knows what that number is: seventy years of work, better decimals, not one closed form. yet open the links between cells instead of the cells and the threshold is exactly one half, proved by kesten in 1980, because the square bond lattice is its own dual. i never typed 0.5927 in. my browser deals thousands of random worlds on load and measures it: the spanning curve crosses one half at 0.586, 0.592, 0.592 as the grid grows 32, 64, 96 on a side, and the bond curve closes on exactly 1/2. link in bio.
>
> #percolation #phasetransition

**Hashtags:** #percolation #phasetransition

**Ready-to-send Postiz IG payload (fill IG integrationId + upload PNGs first):**
```jsonc
{
  "socialPost": [{
    "integrationId": "<velacodexyz IG integration id, from integrationList>",
    "isPremium": false,
    "date": "2026-07-27T08:30:00Z",
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p><IG caption above, each paragraph in its own <p></p>></p>", "attachments": [
          "<uploads.postiz.com path for slide-01.png>",
          "<uploads.postiz.com path for slide-02.png>",
          "<uploads.postiz.com path for slide-03.png>",
          "<uploads.postiz.com path for slide-04.png>",
          "<uploads.postiz.com path for slide-05.png>"
      ] }
    ]
  }]
}
```

## Notes / skips
- **IG intentionally skipped (ig-pending):** no `velacodexyz` Instagram integration in Postiz `integrationList` this run (present: velacodexyz Threads; Petverse x / instagram-standalone / threads / tiktok / facebook). Per PUBLISH.md, mark ig-pending and post Threads only; never route velacode content to the Petverse channels that share the workspace.
- **Backlog gap (unchanged, informational):** `memory.md` announced #032 last (2026-07-19 backfill) and its index/rows stop at #032. Drops **#033-#038** (prime-gaps, fifteen-puzzle, prime-race, life-like-automata, julia-sets, peg-solitaire) have **no** ledger rows and were **not** forged here; this run announces **#039** (the newest published drop, per the routine's mandate). Earlier runs #025 also remains unforged. If the #033-#038 gap should be filled, forge each separately (idempotency keys off each run slug).
