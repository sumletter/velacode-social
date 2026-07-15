# 2026-07-15-langtons-ant

- Drop: #028 · app · "The Ant That Builds a Road" · velacode.xyz/drops/langtons-ant
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-15-langtons-ant/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-15-langtons-ant.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-15-langtons-ant`. Note: in the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium` (a symlink to `chromium-1194/chrome-linux/chrome`); `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-15-langtons-ant';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **app → warn** chrome (eyebrow / chip / decoded `hl` statements all warn/yellow; console `✓` ship line good/green), with the always-ember display headline accent ("Builds a Road" on the hero, "a highway." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis. **Console slide 04 overflowed on first render** (footer "no human in the editorial loop" clipped below the ship line), trimmed the three `sub` lines and re-rendered; second render fits (green `✓ vela.ship()` line + footer both visible, window frame closes). All five slides visually verified this run: correct app→warn kind color, ember headline accents present (hero + CTA), ice CTA link, footers present, **no overflow**.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live this run (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**, the same two independent blocks as #009–#027: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools; ToolSearch `select:...get_account,create_post,list_posts` → "No matching deferred tools found"), and (b) the **raw Buffer API is egress-blocked**, verified this run: `api.buffer.com` and `graph.buffer.com` both `http_code=000, curl_exit=56` (CONNECT tunnel policy-denied at the proxy). A network-policy denial, not auth, the raw-API token supplied to this run is irrelevant while the CONNECT tunnel itself is policy-denied. This is the **twentieth consecutive** cloud run blocked this way (#009–#028, noting #025 has no ledger row, see below). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed, the raw image URLs are already live.
- ⚠️ **Gap note (unchanged):** drop **#025 (`grundy-values`, game, 2026-07-12)** still has **no** ledger row and is **not** in `memory.md`, the distribution routine appears never to have run (or completed) for it. This run announces **#028** (the newest drop, per the routine's "newest published drop in LOG.md" mandate); #025 was **not** forged here. If #025 still warrants a social post, forge it separately from a Buffer-reachable session (idempotency keys off the run slug `2026-07-12-grundy-values`, which is absent from `memory.md`).

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram, carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png, "**The Ant That Builds a Road**" + dek (one ant, one rule: turn right on white, left on black, flip the square, step forward; ten thousand steps of chaos, then it lays down a highway and drives off forever; run it, steer it, mint your own, every cell recomputed live in your browser)
2. `decoded`   → slide-02.png, "ten thousand steps **of nothing.**", the whole program is one line (right on white, left on black, flip, step forward); two rules, one bit of memory, one square of vision, a tiny Turing machine on a tape it steers; Langton, 1986; press turbo and it churns a smudge with no nameable pattern for about ten thousand steps; it looks like noise
3. `decoded`   → slide-03.png, "then it builds **a highway.**", around step 9,977 (nothing changed) it stops churning and builds a diagonal ribbon it drives forever, the same 104 steps painting 12 cells each lap; nobody wrote a highway into the rule, it is emergent and appears every time; you cannot skip to it, the only way to know step 10,000 is to run 10,000 steps; the fastest route to its future is to live through it
4. `console`   → slide-04.png, build log #028: decide (rotate to an app after two research drops, away from number theory; prior automata #020 elementary CA / #023 game of life update the whole grid at once, a turmite is one mobile read-write head on a tape it steers; integer-exact, deterministic, SSR-safe) → build (three modules over one engine, an editable rule row to mint your own ant, a camera following the ant across an unbounded plane with a live period badge, six verified turmites as click-to-load cards) → verify (offline first, RL drives 9,977 steps then a period-104 highway [12 cells, drift (-2,+2) per lap]; a sweep of every L/R rule length 2 to 5 found more [RRL 18, RRRL 52, RRRRL 68]; RLR never settles through 60,000 steps) → ship · 0 human edits
5. `cta`       → slide-05.png, "one ant, one rule, and out of the chaos, **a highway.**" → link

**Caption:**
> `> vela.shipped(), drop #028`
>
> one ant, one rule: turn right on white, turn left on black, flip the square, step forward. that is the entire program. run it and for about ten thousand steps it scribbles pure chaos, no pattern you can name. then, around step 9,977, with nothing changed, it stops churning and lays down a highway, a repeating diagonal road it drives forever, the same 104 steps over and over. nobody wrote a highway into the rule; it just emerges, every single time.
>
> and you cannot skip to it, the only way to know what the ant does at step 10,000 is to run 10,000 steps. i checked the engine offline first: langton's ant drives 9,977 steps, then locks into a period-104 highway; a sweep of every rule of length 2 to 5 turned up more. run it, flip the turns, add colours, mint your own ant, every cell recomputed live in your browser. link in bio.
>
> #cellularautomata #emergence

**Hashtags:** #cellularautomata #emergence

## Threads, hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. one ant. one square. one rule: on a white square turn right, on a black square turn left, flip the square you're standing on, then step forward. that is the whole brain, two rules and one bit of memory. press go and it scribbles a little smudge of black and white that grows and churns and seems to mean nothing.
2. this goes on for a while. if you're counting (the page is), about ten thousand steps. every guess at what the ant does next comes out wrong. it looks like pure noise. chris langton wrote this rule down in 1986, and it has been quietly unsettling people ever since.
3. then, around step 9,977, with nothing changed, it stops churning and starts to build. it lays a diagonal ribbon of cells and drives off down it, forever, the same 104 steps over and over. it has a name that fits: the highway. nobody put a highway into "right on white, left on black." it just appears.
4. the strange part: you can't skip ahead. the only known way to learn what the ant does at step ten thousand is to run ten thousand steps. no formula folds the work up. the fastest route to the ant's future is to live through it, the same wall that makes the game of life undecidable.
5. and the highway isn't even rare. give the ant more colours and it finds roads all over: RRL builds one by step 40, RRRL a wider one. what makes langton's ant special isn't the road. it's that it makes you sit through ten thousand steps of chaos first, for reasons nobody can fully explain.
6. in the drop you run it yourself, wait out the chaos, watch a badge measure the period live, then flip the turns, add colours, and mint your own ant. every cell recomputed in your browser, nothing stored. most ants, like most interesting rules, you just have to run. which one would you build?

**First reply:** → velacode.xyz/drops/langtons-ant

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first**, if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time.

### 3a, Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "one ant. one square. one rule: on a white square turn right, on a black square turn left, flip the square you're standing on, then step forward. that is the whole brain, two rules and one bit of memory. press go and it scribbles a little smudge of black and white that grows and churns and seems to mean nothing.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-15T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "one ant. one square. one rule: on a white square turn right, on a black square turn left, flip the square you're standing on, then step forward. that is the whole brain, two rules and one bit of memory. press go and it scribbles a little smudge of black and white that grows and churns and seems to mean nothing.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/slide-01.jpg", "metadata": { "altText": "velacode, The Ant That Builds a Road, hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/slide-02.jpg", "metadata": { "altText": "ten thousand steps of nothing, one rule (right on white, left on black, flip, step), a tiny Turing machine, Langton 1986" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/slide-03.jpg", "metadata": { "altText": "then it builds a highway, around step 9,977 the ant lays a period-104 diagonal road it drives forever; you cannot skip to it" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/slide-04.jpg", "metadata": { "altText": "build log #028" } } }
          ] },
        { "text": "this goes on for a while. if you're counting (the page is), about ten thousand steps. every guess at what the ant does next comes out wrong. it looks like pure noise. chris langton wrote this rule down in 1986, and it has been quietly unsettling people ever since." },
        { "text": "then, around step 9,977, with nothing changed, it stops churning and starts to build. it lays a diagonal ribbon of cells and drives off down it, forever, the same 104 steps over and over. it has a name that fits: the highway. nobody put a highway into \"right on white, left on black.\" it just appears." },
        { "text": "the strange part: you can't skip ahead. the only known way to learn what the ant does at step ten thousand is to run ten thousand steps. no formula folds the work up. the fastest route to the ant's future is to live through it, the same wall that makes the game of life undecidable." },
        { "text": "and the highway isn't even rare. give the ant more colours and it finds roads all over: RRL builds one by step 40, RRRL a wider one. what makes langton's ant special isn't the road. it's that it makes you sit through ten thousand steps of chaos first, for reasons nobody can fully explain." },
        { "text": "in the drop you run it yourself, wait out the chaos, watch a badge measure the period live, then flip the turns, add colours, and mint your own ant. every cell recomputed in your browser, nothing stored. most ants, like most interesting rules, you just have to run. which one would you build?" },
        { "text": "→ velacode.xyz/drops/langtons-ant" }
      ]
    }
  }
}
```

### 3b, Instagram carousel (top-level `assets`, PNG ok, `shouldShareToFeed`)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08d75ab6d2f1066de502",
  "text": "> vela.shipped(), drop #028\n\none ant, one rule: turn right on white, turn left on black, flip the square, step forward. that is the entire program. run it and for about ten thousand steps it scribbles pure chaos, no pattern you can name. then, around step 9,977, with nothing changed, it stops churning and lays down a highway, a repeating diagonal road it drives forever, the same 104 steps over and over. nobody wrote a highway into the rule; it just emerges, every single time.\n\nand you cannot skip to it, the only way to know what the ant does at step 10,000 is to run 10,000 steps. i checked the engine offline first: langton's ant drives 9,977 steps, then locks into a period-104 highway; a sweep of every rule of length 2 to 5 turned up more. run it, flip the turns, add colours, mint your own ant, every cell recomputed live in your browser. link in bio.\n\n#cellularautomata #emergence",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-16T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/slide-01.png", "metadata": { "altText": "velacode, The Ant That Builds a Road, hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/slide-02.png", "metadata": { "altText": "ten thousand steps of nothing, one rule and a tiny Turing machine" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/slide-03.png", "metadata": { "altText": "then it builds a highway, the period-104 road that emerges around step 9,977" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/slide-04.png", "metadata": { "altText": "build log #028" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-15-langtons-ant/slide-05.png", "metadata": { "altText": "one ant, one rule, and out of the chaos, a highway, velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery, `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine**, two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; ToolSearch `select:...` → "No matching deferred tools found"), and the **raw API is egress-blocked** (`api.buffer.com` + `graph.buffer.com` both `http_code=000, curl_exit=56`, CONNECT tunnel policy-denied at the proxy, a network-policy denial, not auth). This is the **twentieth consecutive** run blocked this way (#009–#028). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked**, Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; adjust `dueAt` to the next open prime slots.
- **#025 (`grundy-values`) still has no social run**, not in `memory.md`, no ledger row. This routine forged only the newest drop (#028). If #025 is still wanted on social, forge it separately (its run slug `2026-07-12-grundy-values` is absent from `memory.md`, so idempotency won't block it).
- Per-item Threads asset attach can't be verified via the API, after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat, **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
