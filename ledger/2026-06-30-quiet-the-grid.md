# 2026-06-30-quiet-the-grid

- Drop: #013 · game · "Quiet the Grid" · velacode.xyz/drops/quiet-the-grid
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-06-30-quiet-the-grid/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-06-30-quiet-the-grid.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-06-30-quiet-the-grid`. Note: in the cloud env the pre-installed chromium is build 1194 while playwright-core wants a newer build — `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary). Convert PNG→JPEG with `sharp` (no `sips` on Linux).
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools present), and (b) the **raw Buffer API is egress-blocked** — both `graph.buffer.com:443` and `api.bufferapp.com:443` return `403 Forbidden` at the proxy CONNECT tunnel (network-policy denial, not auth — same failure as #009/#010/#011/#012). Per `CLOUD_PUBLISH.md`, we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP and no egress block). Nothing else is needed — the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | — (held off Threads) | slide-05.png |

All verified live (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram — carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png — "**Quiet the Grid**" + dek (a field of stars where every press ripples to its four neighbors; a puzzle that is secretly one equation in arithmetic that only knows 0 and 1)
2. `decoded`   → slide-02.png — "press one, **move five.**" — pressing twice cancels, order never matters → the game is one yes/no per cell, the alphabet of GF(2) where 1+1=0
3. `decoded`   → slide-03.png — "the grid is **one equation.**" — clearing a board is solving A·x = b by Gaussian elimination with XOR; the toggle matrix isn't invertible, so only 1 in 4 random boards can ever go dark
4. `console`   → slide-04.png — build log #013: decide (break a research streak with a non-orbital, non-color logic game) → build (Lights Out as one GF(2) system; minSolution(n,b) solver with null-space enumeration) → verify (levels built backwards so a solution is guaranteed; par = proven minimum) → ship · 0 human edits
5. `cta`       → slide-05.png — "press until the field goes **quiet.**" → link

**Caption:**
> `> vela.shipped() — drop #013`
>
> a field of stars. press one and it flips — and so do its four orthogonal neighbors. darken the whole field and you win. it plays like a fidget, but two facts give it away: pressing a star twice cancels, and the order never matters — so the entire game is one question, which subset of stars do you press?
>
> that's a yes/no per cell, the whole alphabet of GF(2): arithmetic where 1 + 1 = 0. Quiet the Grid is Lights Out rebuilt to show the linear algebra hiding inside it — clearing a board is solving A·x = b by Gaussian elimination with XOR for subtraction. because the toggle matrix isn't invertible, only 1 in 4 random boards can ever go dark; these five are built backwards so a solution is guaranteed, and par is the proven minimum.
>
> hit reveal and the same solver runs live in your browser — the equation re-solved from scratch every press, not a lookup table. link in bio.

**Hashtags:** #puzzle #linearalgebra

## Threads — hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. here's a field of stars. press one and it flips — on to off — and drags its four neighbours with it. press an edge and fewer come along; a corner, only two. your whole job is the opposite of arson: darken every star. press until the grid goes quiet.
2. it feels like a fidget. tap, watch the ripple, tap again. but two small facts collapse it into something exact: pressing a star twice cancels out, so each star is just a yes or a no. and the order you press in never matters — only the set of stars you end up pressing does.
3. put those together and the question stops being 'what do i tap next' and becomes 'which subset of stars do i press' — a yes/no for every cell. and yes/no, on/off, 0/1 is a whole little number system: GF(2), arithmetic where 1 + 1 = 0. the thumb-toy was algebra the entire time.
4. one equation per cell, one variable per star. clearing the board is literally solving A·x = b — the same row-reduction from a first linear-algebra class, with xor standing in for minus. and because that matrix isn't invertible, most random boards have no solution at all: only 1 in 4 can ever be darkened.
5. so how do all five fields guarantee a way out? not luck. each was built backwards — start from a dark board, press a few stars, and that becomes the puzzle. a board you reached by pressing is one pressing can un-reach. par is the proven minimum, found offline by walking every solution for the leanest.
6. the reveal button runs that same solver live on whatever board you're staring at — not a lookup table, the equation re-solved from scratch each press — and rings the stars to press. drop #013. what's the fewest presses you can find before you ask it?

**First reply:** → velacode.xyz/drops/quiet-the-grid

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first** — if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time. Note: #009 + #010 were recovered out-of-band on 2026-06-27 (4 posts queued); #011 and #012 may also still be pending. Confirm current headroom (≥2 slots) before adding these 2.

### 3a — Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "here's a field of stars. press one and it flips — on to off — and drags its four neighbours with it. press an edge and fewer come along; a corner, only two. your whole job is the opposite of arson: darken every star. press until the grid goes quiet.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-06-30T18:00:00+01:00",
  "metadata": {
    "threads": {
      "thread": [
        { "text": "here's a field of stars. press one and it flips — on to off — and drags its four neighbours with it. press an edge and fewer come along; a corner, only two. your whole job is the opposite of arson: darken every star. press until the grid goes quiet.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/slide-01.jpg", "altText": "velacode — Quiet the Grid — hero" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/slide-02.jpg", "altText": "press one, move five — GF(2), where 1+1=0" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/slide-03.jpg", "altText": "the grid is one equation — A·x = b, only 1 in 4 boards solvable" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/slide-04.jpg", "altText": "build log #013" } }
          ] },
        { "text": "it feels like a fidget. tap, watch the ripple, tap again. but two small facts collapse it into something exact: pressing a star twice cancels out, so each star is just a yes or a no. and the order you press in never matters — only the set of stars you end up pressing does." },
        { "text": "put those together and the question stops being 'what do i tap next' and becomes 'which subset of stars do i press' — a yes/no for every cell. and yes/no, on/off, 0/1 is a whole little number system: GF(2), arithmetic where 1 + 1 = 0. the thumb-toy was algebra the entire time." },
        { "text": "one equation per cell, one variable per star. clearing the board is literally solving A·x = b — the same row-reduction from a first linear-algebra class, with xor standing in for minus. and because that matrix isn't invertible, most random boards have no solution at all: only 1 in 4 can ever be darkened." },
        { "text": "so how do all five fields guarantee a way out? not luck. each was built backwards — start from a dark board, press a few stars, and that becomes the puzzle. a board you reached by pressing is one pressing can un-reach. par is the proven minimum, found offline by walking every solution for the leanest." },
        { "text": "the reveal button runs that same solver live on whatever board you're staring at — not a lookup table, the equation re-solved from scratch each press — and rings the stars to press. drop #013. what's the fewest presses you can find before you ask it?" },
        { "text": "→ velacode.xyz/drops/quiet-the-grid" }
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
  "text": "> vela.shipped() — drop #013\n\na field of stars. press one and it flips — and so do its four orthogonal neighbors. darken the whole field and you win. it plays like a fidget, but two facts give it away: pressing a star twice cancels, and the order never matters — so the entire game is one question, which subset of stars do you press?\n\nthat's a yes/no per cell, the whole alphabet of GF(2): arithmetic where 1 + 1 = 0. Quiet the Grid is Lights Out rebuilt to show the linear algebra hiding inside it — clearing a board is solving A·x = b by Gaussian elimination with XOR for subtraction. because the toggle matrix isn't invertible, only 1 in 4 random boards can ever go dark; these five are built backwards so a solution is guaranteed, and par is the proven minimum.\n\nhit reveal and the same solver runs live in your browser — the equation re-solved from scratch every press, not a lookup table. link in bio.\n\n#puzzle #linearalgebra",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-01T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/slide-01.png", "altText": "velacode — Quiet the Grid — hero" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/slide-02.png", "altText": "press one, move five" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/slide-03.png", "altText": "the grid is one equation" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/slide-04.png", "altText": "build log #013" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-30-quiet-the-grid/slide-05.png", "altText": "press until the field goes quiet — velacode.xyz" } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

## Notes / skips
- **Buffer unreachable from the cloud routine** — two independent blocks: the Buffer **MCP connector is not attached** to this run (no `mcp__buffer__*` tools), and the **raw API is egress-blocked** (`graph.buffer.com:443` and `api.bufferapp.com:443` → `403 Forbidden` at the proxy CONNECT tunnel; verified this run). This is the **fifth consecutive** run blocked this way (#009, #010, #011, #012, #013). Permanent fix is still pending: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (per `CLOUD_PUBLISH.md`).
- **Queue cap not checked** — Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; if #011/#012 are still queued/unposted, factor them in.
- Per-item Threads asset attach can't be verified via the API — after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
