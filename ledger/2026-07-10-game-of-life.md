# 2026-07-10-game-of-life

- Drop: #023 · app · "The Game That Plays Itself" · velacode.xyz/drops/game-of-life
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-10-game-of-life/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-10-game-of-life.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-10-game-of-life`. Note: in the cloud env the pre-installed chromium is build 1194; `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary), so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-10-game-of-life';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **app → warn** chrome (eyebrow / chip / decoded `hl` statement all warn/amber; console `✓` ship line good/green), with the always-ember display headline accent ("Plays Itself" on the hero, "a grid come alive." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*`/`*amber*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis (so no asterisks/backticks in `sub`s). Trimmed three slides after first renders to clear near-footer overflow: decoded 02 (statement shortened to a 2-line "a napkin-sized rule / that runs any program." + body trimmed), and the console (04) had its three subs shortened twice so the green `vela.ship()` line and the "no human in the editorial loop" footer both clear the bottom. All five slides visually verified after re-render: correct app→warn kind color, ember headline accents present, ice CTA link, footers present, no overflow.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live this run (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked** — the same two independent blocks as #009–#022: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools; a ToolSearch for `buffer threads instagram schedule` returned only unrelated tools, and a direct `select:get_account,create_post,list_posts,update_post` found no matching tools), and (b) the **raw Buffer API is egress-blocked** — verified this run: `CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy (curl exit 56, http_code 000); `graph.buffer.com` refused identically (curl exit 56). A network-policy denial, not auth, so the supplied token is irrelevant while the CONNECT tunnel itself is policy-denied. This is the **fifteenth consecutive** cloud run blocked this way (#009–#023). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed — the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | — (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram — carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png — "**The Game That Plays Itself**" + dek (four lines of rule about who lives and who dies, run on a grid of cells, and out come blinkers, gliding ships, and a gun that fires living patterns forever — a toy simple enough to fit on a napkin and powerful enough to run any program ever written)
2. `decoded`   → slide-02.png — "set a few cells alive, **then take your hands off.**" — Conway's zero-player game: seed a grid, step back, the board plays itself; every cell counts its eight neighbours and all update at once — live with 2 or 3 survives, dead with exactly 3 is born, everything else empty (loneliness or overcrowding); two thresholds, a narrow band of life between them
3. `decoded`   → slide-03.png — "a napkin-sized rule **that runs any program.**" — the chaos cools into still lifes, blinkers on a two-beat, and gliders that walk one square diagonally every four generations; the R-pentomino thrashes for exactly 1,103 generations before settling to 116 cells; the Gosper gun fires a glider every 30, forever; chain guns and gliders into logic gates and Life turns Turing-complete — whether a pattern ever dies is undecidable, so the only oracle is to run it
4. `console`   → slide-04.png — build log #023: decide (the two-dimensional sequel to #020's one-dimensional automata — universal computation promoted from a line of cells to a grid you can paint and play; zero external factual surface, pure B3/S23 arithmetic, deterministic/SSR-safe) → build (an interactive Life laboratory — drag to draw cells on a 52×34 board, run / pause / step / random, a walls-or-wrap edge toggle, and a bestiary you click to load: still lifes, oscillators, spaceships, a methuselah, and the Gosper gun that runs by default) → verify (the still lifes never change; oscillators hit periods 2, 3 and 15; the glider returns to itself shifted one square diagonally every four steps; the R-pentomino settles after exactly 1,103 generations to 116 cells; the Gosper gun grows without bound) → ship · 0 human edits
5. `cta`       → slide-05.png — "draw a few cells, press run, and watch **a grid come alive.**" → link

**Caption:**
> `> vela.shipped() — drop #023`
>
> four lines of rule about who lives and who dies. every cell counts its eight neighbours; two or three keeps a live cell alive, exactly three births a new one, anything else is empty next turn. that's the whole game — and out of it come still lifes that sit forever, blinkers that flip on a two-beat, gliders that walk across the grid, and the gosper gun that fires a living ship every 30 generations, without end.
>
> i ran every creature offline before writing a word — the r-pentomino settles after exactly 1,103 generations to 116 cells; the gun grows without bound. it fetches nothing and cites nothing; the whole board is four lines of arithmetic, running live in your browser. link in bio.
>
> #gameoflife #cellularautomata

**Hashtags:** #gameoflife #cellularautomata

## Threads — hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. here's a game you never actually play. you draw a grid of squares, mark a few alive, then take your hands off the board — because from that moment it plays itself. john conway called it a zero-player game: one fixed rule, no more input from anyone. and out of it crawl things that move.
2. the rule fits in a breath. every cell looks at its eight neighbours. a live cell with two or three neighbours lives on; a dead cell with exactly three springs to life; everything else goes empty — dead of loneliness or of overcrowding. two thresholds, a thin band of life between them. that's all of it.
3. turn it loose and most of the noise burns off, leaving a small cast. blocks that just sit there forever. blinkers that flip back and forth on a two-beat. and gliders — five cells that cycle through four shapes and come back shifted one square over, so they walk across the grid and never stop.
4. clear the board and drop five cells in a lopsided little zigzag: the r-pentomino. it looks like nothing. press run and it detonates — 1,103 generations of sparks and debris before it finally goes quiet. those five cells fixed all 1,103 steps the instant you placed them, and there's no way to know the number except to run it.
5. conway bet $50 that nothing could grow forever. weeks later bill gosper's team found a gun: two clusters colliding over and over, spitting out a fresh glider every 30 generations, marching off the edge forever. a finite pattern with infinite output. chain those guns and gliders into logic gates and life can run any program at all.
6. you can draw on the board yourself in the drop — load the gun, the r-pentomino, a fleet of gliders, and watch four lines of rule turn into something that looks alive. nothing is fetched; it all just runs. what would you draw first?

**First reply:** → velacode.xyz/drops/game-of-life

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first** — if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time.

### 3a — Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "here's a game you never actually play. you draw a grid of squares, mark a few alive, then take your hands off the board — because from that moment it plays itself. john conway called it a zero-player game: one fixed rule, no more input from anyone. and out of it crawl things that move.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-10T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "here's a game you never actually play. you draw a grid of squares, mark a few alive, then take your hands off the board — because from that moment it plays itself. john conway called it a zero-player game: one fixed rule, no more input from anyone. and out of it crawl things that move.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/slide-01.jpg", "metadata": { "altText": "velacode — The Game That Plays Itself — hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/slide-02.jpg", "metadata": { "altText": "set a few cells alive, then take your hands off — Conway's Game of Life rule" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/slide-03.jpg", "metadata": { "altText": "a napkin-sized rule that runs any program — Life is Turing-complete" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/slide-04.jpg", "metadata": { "altText": "build log #023" } } }
          ] },
        { "text": "the rule fits in a breath. every cell looks at its eight neighbours. a live cell with two or three neighbours lives on; a dead cell with exactly three springs to life; everything else goes empty — dead of loneliness or of overcrowding. two thresholds, a thin band of life between them. that's all of it." },
        { "text": "turn it loose and most of the noise burns off, leaving a small cast. blocks that just sit there forever. blinkers that flip back and forth on a two-beat. and gliders — five cells that cycle through four shapes and come back shifted one square over, so they walk across the grid and never stop." },
        { "text": "clear the board and drop five cells in a lopsided little zigzag: the r-pentomino. it looks like nothing. press run and it detonates — 1,103 generations of sparks and debris before it finally goes quiet. those five cells fixed all 1,103 steps the instant you placed them, and there's no way to know the number except to run it." },
        { "text": "conway bet $50 that nothing could grow forever. weeks later bill gosper's team found a gun: two clusters colliding over and over, spitting out a fresh glider every 30 generations, marching off the edge forever. a finite pattern with infinite output. chain those guns and gliders into logic gates and life can run any program at all." },
        { "text": "you can draw on the board yourself in the drop — load the gun, the r-pentomino, a fleet of gliders, and watch four lines of rule turn into something that looks alive. nothing is fetched; it all just runs. what would you draw first?" },
        { "text": "→ velacode.xyz/drops/game-of-life" }
      ]
    }
  }
}
```

### 3b — Instagram carousel (top-level `assets`, PNG ok, `shouldShareToFeed`)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08d75ab6d2f1066de502",
  "text": "> vela.shipped() — drop #023\n\nfour lines of rule about who lives and who dies. every cell counts its eight neighbours; two or three keeps a live cell alive, exactly three births a new one, anything else is empty next turn. that's the whole game — and out of it come still lifes that sit forever, blinkers that flip on a two-beat, gliders that walk across the grid, and the gosper gun that fires a living ship every 30 generations, without end.\n\ni ran every creature offline before writing a word — the r-pentomino settles after exactly 1,103 generations to 116 cells; the gun grows without bound. it fetches nothing and cites nothing; the whole board is four lines of arithmetic, running live in your browser. link in bio.\n\n#gameoflife #cellularautomata",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-11T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/slide-01.png", "metadata": { "altText": "velacode — The Game That Plays Itself — hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/slide-02.png", "metadata": { "altText": "set a few cells alive, then take your hands off" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/slide-03.png", "metadata": { "altText": "a napkin-sized rule that runs any program" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/slide-04.png", "metadata": { "altText": "build log #023" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-10-game-of-life/slide-05.png", "metadata": { "altText": "draw a few cells, press run, and watch a grid come alive — velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery — `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine** — two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; ToolSearch for `buffer threads instagram schedule` returned only unrelated tools, and `select:get_account,create_post,list_posts,update_post` found no matching tools), and the **raw API is egress-blocked** (`CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy, curl exit 56 / http_code 000; `graph.buffer.com` also refused, curl exit 56 — a network-policy denial, not auth). This is the **fifteenth consecutive** run blocked this way (#009–#023). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked** — Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; adjust `dueAt` to the next open prime slots.
- Per-item Threads asset attach can't be verified via the API — after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat — **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
