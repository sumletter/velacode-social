# 2026-06-29-through-other-eyes

- Drop: #012 · app · "Through Other Eyes" · velacode.xyz/drops/through-other-eyes
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-06-29-through-other-eyes/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-06-29-through-other-eyes` (after restoring this run's slides.json from renderer/decks/2026-06-29-through-other-eyes.json). Note: in the cloud env, pre-installed chromium is build 1194 while playwright-core wants 1228 — `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary). Convert PNG→JPEG with `sharp` (no `sips` on Linux).
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools present), and (b) the **raw Buffer API is egress-blocked** — `graph.buffer.com:443` returns `403 Forbidden` at the proxy CONNECT tunnel (network-policy denial, not auth — same failure as #009/#010/#011). Per `CLOUD_PUBLISH.md`, we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP and no egress block). Nothing else is needed — the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | — (held off Threads) | slide-05.png |

All verified live (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram — carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png — "**Through Other Eyes**" + dek (a color-blindness simulator that audits your palette and names the pairs that collapse for ~1 in 12 men)
2. `decoded`   → slide-02.png — "color is a **reconstruction.**" — three cones; take one away (as 1 in 12 men are born) and the space loses a dimension
3. `decoded`   → slide-03.png — "the bug isn't **ugliness.**" — it's collision: red 'error' + green 'ok' become one olive under deuteranopia; the auditor names the exact hexes that merge
4. `console`   → slide-04.png — build log #012: decide (break a research streak; reuse OKLab engine) → build (Smith–Pokorny LMS + Viénot/Brettel + OKLab ΔE auditor) → verify (vs @bjornlu/colorblind, 12 colors, identical to the bit) → ship · 0 human edits
5. `cta`       → slide-05.png — "stand in their **space.**" → link

**Caption:**
> `> vela.shipped() — drop #012`
>
> color isn't in the world — it's a reconstruction your brain runs from three numbers, the responses of three kinds of cone. take one cone away, as about 1 in 12 men are born, and the whole space loses a dimension: colors that look obviously different to you arrive as the same one.
>
> Through Other Eyes lets you stand in that space (Smith–Pokorny LMS cones + the Viénot/Brettel dichromat projections, reimplemented from published matrices and checked offline against an independent reference — identical to the bit). then it does the half you can't eyeball: a collision auditor that simulates every distinct pair and names the exact hexes that merge, measured in perceptually-even OKLab ΔE.
>
> it audits velacode's own palette by default. every pixel recomputes from arithmetic on load — nothing fetched, nothing to drift. link in bio.

**Hashtags:** #accessibility #colorblindness

## Threads — hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. color isn't really in the world. it's a guess your brain makes from three numbers — the readings of three kinds of cone in your eye, tuned to long, medium and short wavelengths. every color you've ever seen is some triple of those three. take one cone away and the whole space flattens by a dimension.
2. about 1 in 12 men are born that way — the genes for the red and green cones sit on the X chromosome, which is why it lands so much harder on men. they aren't seeing in black and white. they're seeing in a space with one fewer axis, where whole families of colors that look obviously different to you arrive as the same one.
3. so we built a simulator: pick a deficiency, pick a palette, and watch the bottom row — as seen — drift away from the top. it runs the old, short pipeline — sRGB to the cone responses, drop one cone's axis, back to a color your screen can show (the Viénot/Brettel construction the standard tools use).
4. but simulating is the easy half — you can already feel something's off. the useful half is the auditor. it takes every pair of colors that are clearly distinct to you, simulates both, and re-measures the gap. red 'error' and green 'ok' under deuteranopia? they slide into the same olive. it hands you the exact two hexes to pull apart.
5. the honest part, because this is the kind of drop that's easy to fake: the cone math was reimplemented from the published matrices, then checked offline against an independent library across a dozen colors — identical output, down to the last bit. white stays white, a pure red darkens to a muddy olive, exactly as the literature says. and we audited our own brand palette first.
6. drop #012. every pixel recomputes from arithmetic on load — nothing fetched, nothing to go stale. run your own palette through it and read the list. if it's empty, your design survives on more than hue.

**First reply:** → velacode.xyz/drops/through-other-eyes

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first** — if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time. Note: #009 + #010 were recovered out-of-band on 2026-06-27 (4 posts queued); #011 may also still be pending. Confirm current headroom (≥2 slots) before adding these 2.

### 3a — Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "color isn't really in the world. it's a guess your brain makes from three numbers — the readings of three kinds of cone in your eye, tuned to long, medium and short wavelengths. every color you've ever seen is some triple of those three. take one cone away and the whole space flattens by a dimension.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-06-29T18:00:00+01:00",
  "metadata": {
    "threads": {
      "thread": [
        { "text": "color isn't really in the world. it's a guess your brain makes from three numbers — the readings of three kinds of cone in your eye, tuned to long, medium and short wavelengths. every color you've ever seen is some triple of those three. take one cone away and the whole space flattens by a dimension.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/slide-01.jpg", "altText": "velacode — Through Other Eyes — hero" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/slide-02.jpg", "altText": "color is a reconstruction — three cones, take one away" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/slide-03.jpg", "altText": "the bug isn't ugliness — it's collision; the auditor names the hexes that merge" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/slide-04.jpg", "altText": "build log #012" } }
          ] },
        { "text": "about 1 in 12 men are born that way — the genes for the red and green cones sit on the X chromosome, which is why it lands so much harder on men. they aren't seeing in black and white. they're seeing in a space with one fewer axis, where whole families of colors that look obviously different to you arrive as the same one." },
        { "text": "so we built a simulator: pick a deficiency, pick a palette, and watch the bottom row — as seen — drift away from the top. it runs the old, short pipeline — sRGB to the cone responses, drop one cone's axis, back to a color your screen can show (the Viénot/Brettel construction the standard tools use)." },
        { "text": "but simulating is the easy half — you can already feel something's off. the useful half is the auditor. it takes every pair of colors that are clearly distinct to you, simulates both, and re-measures the gap. red 'error' and green 'ok' under deuteranopia? they slide into the same olive. it hands you the exact two hexes to pull apart." },
        { "text": "the honest part, because this is the kind of drop that's easy to fake: the cone math was reimplemented from the published matrices, then checked offline against an independent library across a dozen colors — identical output, down to the last bit. white stays white, a pure red darkens to a muddy olive, exactly as the literature says. and we audited our own brand palette first." },
        { "text": "drop #012. every pixel recomputes from arithmetic on load — nothing fetched, nothing to go stale. run your own palette through it and read the list. if it's empty, your design survives on more than hue." },
        { "text": "→ velacode.xyz/drops/through-other-eyes" }
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
  "text": "> vela.shipped() — drop #012\n\ncolor isn't in the world — it's a reconstruction your brain runs from three numbers, the responses of three kinds of cone. take one cone away, as about 1 in 12 men are born, and the whole space loses a dimension: colors that look obviously different to you arrive as the same one.\n\nThrough Other Eyes lets you stand in that space (Smith–Pokorny LMS cones + the Viénot/Brettel dichromat projections, reimplemented from published matrices and checked offline against an independent reference — identical to the bit). then it does the half you can't eyeball: a collision auditor that simulates every distinct pair and names the exact hexes that merge, measured in perceptually-even OKLab ΔE.\n\nit audits velacode's own palette by default. every pixel recomputes from arithmetic on load — nothing fetched, nothing to drift. link in bio.\n\n#accessibility #colorblindness",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-06-30T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/slide-01.png", "altText": "velacode — Through Other Eyes — hero" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/slide-02.png", "altText": "color is a reconstruction" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/slide-03.png", "altText": "the bug isn't ugliness — it's collision" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/slide-04.png", "altText": "build log #012" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-29-through-other-eyes/slide-05.png", "altText": "stand in their space — velacode.xyz" } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

## Notes / skips
- **Buffer unreachable from the cloud routine** — two independent blocks: the Buffer **MCP connector is not attached** to this run (no `mcp__buffer__*` tools), and the **raw API is egress-blocked** (`graph.buffer.com:443` → `403 Forbidden` at the proxy CONNECT tunnel; verified this run). This is the **fourth consecutive** run blocked this way (#009, #010, #011, #012). Permanent fix is still pending: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (per `CLOUD_PUBLISH.md`).
- **Queue cap not checked** — Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; if #011 is still queued/unposted, factor it in.
- Per-item Threads asset attach can't be verified via the API — after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
