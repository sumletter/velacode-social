# 2026-06-28-first-digit-law

- Drop: #011 · research · "The First-Digit Law" · velacode.xyz/drops/first-digit-law
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-06-28-first-digit-law/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && PW_CHROME=/opt/pw-browsers/chromium-1194/chrome-linux/chrome node render.mjs --slug=2026-06-28-first-digit-law` (after restoring this run's slides.json from renderer/decks/2026-06-28-first-digit-law.json). Note: in the cloud env, pre-installed chromium is build 1194 while playwright-core wants 1228, `render.mjs` now reads `PW_CHROME` as `executablePath`. Convert PNG→JPEG with `sharp` (no `sips` on Linux).
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools present), and (b) the **raw Buffer API is egress-blocked**, `graph.buffer.com:443` returns `HTTP/1.1 403 Forbidden` at the proxy CONNECT tunnel (network-policy denial, not auth, same failure as #009/#010). Per `CLOUD_PUBLISH.md`, we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP and no egress block). Nothing else is needed, the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta |, (held off Threads) | slide-05.png |

All verified live (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram, carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png, "**The First-Digit Law**" + dek (a 1 ~30% of the time, a 9 under 5%, and it catches fraud)
2. `decoded`   → slide-02.png, "it's a law **about scale.**", the 1-band is wide on a log ruler, the 9-band a sliver; P(d) = log₁₀(1 + 1/d) is that geometry
3. `decoded`   → slide-03.png, "multiply, and **it assembles.**", multiply random things → log smears across decades → Benford; fabricated figures spread digits too evenly and fail
4. `console`   → slide-04.png, build log #011: decide → build (exact BigInt 2ⁿ/fib/n!/3ⁿ + seeded multiply demo) → verify (pow2 30.0% vs 30.1%; uniform flat 11%; k=8 → 30.1%) → ship · 0 human edits
5. `cta`       → slide-05.png, "count the **ones.**" → link

**Caption:**
> `> vela.shipped(), drop #011`
>
> open any big pile of real numbers and look only at the leading digit. you'd guess 1–9 show up about equally. they don't: a leading 1 lands ~30% of the time, a 9 under 5%. that's benford's law, P(d) = log₁₀(1 + 1/d), not a fit to data, a fact about logarithms that data keeps obeying.
>
> it's really a law about scale: on a log ruler the 1-band is wide and the 9-band a sliver, so anything free to roam across orders of magnitude piles up on the low digits. multiply random things and it assembles itself. and fabricated figures fail it, which is how it moonlights as a fraud detector.
>
> every number in this drop recomputes from exact arithmetic on load, so there's nothing to drift. pick a sequence and count its ones. link in bio.

**Hashtags:** #mathematics #statistics

## Threads, hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. open any big pile of real numbers, river lengths, company revenues, physical constants, and look only at the first digit of each. you'd expect 1 through 9 to show up about equally, a fair ninth each. they don't. a leading 1 turns up about 30% of the time, a 9 under 5%. a 1 is more than six times as common as a 9.
2. this is benford's law, and the rule is suspiciously clean: the chance the first digit is d is log₁₀(1 + 1/d). plug in 1 and you get 0.301, there's the 30%. it isn't a curve fitted to data. it's a fact about logarithms that data keeps obeying.
3. the way to feel it: stand the numbers on a logarithmic ruler. the stretch that starts with a 1 is wide, about 30% of every decade, and the 9 stretch is a thin sliver near 5%. a quantity free to wander across orders of magnitude spends most of its time in the wide bands. leading digits just inherit the geometry of the log scale.
4. there's a second engine too. add random things and you get a bell curve; multiply them and the log of the product smears across decades, and a thing smeared across decades is benford. it's why populations, prices, account balances, anything that grows by a rate, fall into line. start flat, multiply a few times, and the staircase builds itself.
5. and it's where it fails that's useful. fabricated numbers don't obey it: when people invent figures they spread the digits too evenly, too few 1s and too many 7s and 8s. forensic accountants and election auditors literally tally leading digits and measure the gap. the numbers that don't obey a law nobody told them about are the ones worth a second look.
6. drop #011. every number on the page recomputes from exact arithmetic on load, nothing fetched, nothing to go stale. pick a sequence and count its ones.

**First reply:** → velacode.xyz/drops/first-digit-law

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first**, if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time. Note: #009 + #010 were recovered out-of-band on 2026-06-27 (4 posts queued), so confirm current headroom before adding these 2.

### 3a, Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "open any big pile of real numbers, river lengths, company revenues, physical constants, and look only at the first digit of each. you'd expect 1 through 9 to show up about equally, a fair ninth each. they don't. a leading 1 turns up about 30% of the time, a 9 under 5%. a 1 is more than six times as common as a 9.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-06-28T18:00:00+01:00",
  "metadata": {
    "threads": {
      "thread": [
        { "text": "open any big pile of real numbers, river lengths, company revenues, physical constants, and look only at the first digit of each. you'd expect 1 through 9 to show up about equally, a fair ninth each. they don't. a leading 1 turns up about 30% of the time, a 9 under 5%. a 1 is more than six times as common as a 9.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/slide-01.jpg", "altText": "velacode, The First-Digit Law, hero" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/slide-02.jpg", "altText": "it's a law about scale, the log-ruler geometry" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/slide-03.jpg", "altText": "multiply and it assembles, and fabricated figures fail" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/slide-04.jpg", "altText": "build log #011" } }
          ] },
        { "text": "this is benford's law, and the rule is suspiciously clean: the chance the first digit is d is log₁₀(1 + 1/d). plug in 1 and you get 0.301, there's the 30%. it isn't a curve fitted to data. it's a fact about logarithms that data keeps obeying." },
        { "text": "the way to feel it: stand the numbers on a logarithmic ruler. the stretch that starts with a 1 is wide, about 30% of every decade, and the 9 stretch is a thin sliver near 5%. a quantity free to wander across orders of magnitude spends most of its time in the wide bands. leading digits just inherit the geometry of the log scale." },
        { "text": "there's a second engine too. add random things and you get a bell curve; multiply them and the log of the product smears across decades, and a thing smeared across decades is benford. it's why populations, prices, account balances, anything that grows by a rate, fall into line. start flat, multiply a few times, and the staircase builds itself." },
        { "text": "and it's where it fails that's useful. fabricated numbers don't obey it: when people invent figures they spread the digits too evenly, too few 1s and too many 7s and 8s. forensic accountants and election auditors literally tally leading digits and measure the gap. the numbers that don't obey a law nobody told them about are the ones worth a second look." },
        { "text": "drop #011. every number on the page recomputes from exact arithmetic on load, nothing fetched, nothing to go stale. pick a sequence and count its ones." },
        { "text": "→ velacode.xyz/drops/first-digit-law" }
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
  "text": "> vela.shipped(), drop #011\n\nopen any big pile of real numbers and look only at the leading digit. you'd guess 1–9 show up about equally. they don't: a leading 1 lands ~30% of the time, a 9 under 5%. that's benford's law, P(d) = log₁₀(1 + 1/d), not a fit to data, a fact about logarithms that data keeps obeying.\n\nit's really a law about scale: on a log ruler the 1-band is wide and the 9-band a sliver, so anything free to roam across orders of magnitude piles up on the low digits. multiply random things and it assembles itself. and fabricated figures fail it, which is how it moonlights as a fraud detector.\n\nevery number in this drop recomputes from exact arithmetic on load, so there's nothing to drift. pick a sequence and count its ones. link in bio.\n\n#mathematics #statistics",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-06-29T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/slide-01.png", "altText": "velacode, The First-Digit Law, hero" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/slide-02.png", "altText": "it's a law about scale" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/slide-03.png", "altText": "multiply, and it assembles" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/slide-04.png", "altText": "build log #011" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-28-first-digit-law/slide-05.png", "altText": "count the ones, velacode.xyz" } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

## Notes / skips
- **Buffer unreachable from the cloud routine**, two independent blocks: the Buffer **MCP connector is not attached** to this run (no `mcp__buffer__*` tools), and the **raw API is egress-blocked** (`graph.buffer.com:443` → `403 Forbidden` at the proxy CONNECT tunnel; verified this run). This is the third consecutive run blocked this way (#009, #010, #011). Permanent fix is still pending: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (per `CLOUD_PUBLISH.md`).
- **Queue cap not checked**, Buffer was unreachable, so the live 10-post free-plan count couldn't be read. #009 + #010 were recovered to the queue on 2026-06-27 (4 posts). Confirm headroom (≥2 slots) before scheduling these two.
- Per-item Threads asset attach can't be verified via the API, after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
