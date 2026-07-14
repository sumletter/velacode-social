# 2026-07-14-goldbach-comet

- Drop: #027 · research · "The Comet Nobody Can Prove" · velacode.xyz/drops/goldbach-comet
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-14-goldbach-comet/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-14-goldbach-comet.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-14-goldbach-comet`. Note: in the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium` (a symlink to `chromium-1194/chrome-linux/chrome`); `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-14-goldbach-comet';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research → ice** chrome (eyebrow / chip / decoded `hl` statements all ice; console `✓` ship line good/green), with the always-ember display headline accent ("Can Prove" on the hero, "a comet appears." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*`/`*amber*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis. Unicode superscripts render fine, so "four quintillion (4×10¹⁸)" and OEIS "A045917" all render clean. **Console slide 04 overflowed on first render** (ship line + footer clipped) — trimmed the three `sub` lines and re-rendered; second render fits (green `✓ vela.ship()` line + "no human in the editorial loop" footer both visible). All five slides visually verified this run: correct research→ice kind color, ember headline accents present (hero + CTA), ice CTA link, footers present, **no overflow**.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live this run (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked** — the same two independent blocks as #009–#026: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools; ToolSearch `select:get_account,create_post,list_posts` → "No matching deferred tools found"), and (b) the **raw Buffer API is egress-blocked** — verified this run: `CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy (curl exit 56, http_code 000); `graph.buffer.com` refused identically (curl exit 56). A network-policy denial, not auth — the raw-API token supplied to this run is irrelevant while the CONNECT tunnel itself is policy-denied. This is the **nineteenth consecutive** cloud run blocked this way (#009–#027, noting #025 has no ledger row — see below). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed — the raw image URLs are already live.
- ⚠️ **Gap note:** drop **#025 (`grundy-values`, game, 2026-07-12)** still has **no** ledger row and is **not** in `memory.md` — the distribution routine appears never to have run (or completed) for it. This run announces **#027** (the newest drop, per the routine's "newest published drop in LOG.md" mandate); #025 was **not** forged here. If #025 still warrants a social post, forge it separately from a Buffer-reachable session (idempotency keys off the run slug `2026-07-12-grundy-values`, which is absent from `memory.md`).

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | — (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram — carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png — "**The Comet Nobody Can Prove**" + dek (every even number seems to be the sum of two primes; goldbach guessed it in a 1742 letter; checked past four quintillion and still unproven 283 years on; count the ways each number splits and a comet appears — every dot tallied live in your browser)
2. `decoded`   → slide-02.png — "283 years. **still unproven.**" — goldbach's 1742 remark to euler (every even number > 2 is a sum of two primes); 100 splits six ways; checked to 4×10¹⁸ without one failure; simple enough for a child, and nobody has proved it in 283 years
3. `decoded`   → slide-03.png — "count the ways. **a comet appears.**" — g(n) = ways to write n as two primes; goldbach's claim is g(n) ≥ 1 always; plot it and the dots fan into goldbach's comet, lower edge crawling up but never touching zero (that floor is the conjecture); the cloud splits into two streams — divisible-by-3 numbers get ~twice as many pairs (the factor 3 acting alone); champions rich in small factors (99,330 = 2×3×5×7×11×43)
4. `console`   → slide-04.png — build log #027: decide (sequel to prime-spiral #026 — the additive side of the primes, distinct from its multiplicative sieve/spiral/PNT; reuses #026's verified sieve(n) verbatim → integer-exact, deterministic/SSR-safe, zero external factual surface) → build (three modules over one g(n) engine — the comet scatter to 100,000 fanning into two streams, the two-band divisible-by-3 measurement, a split-it-yourself pair lister) → verify (g(n) matches OEIS A045917 exactly [g(4)=1, g(10)=2, g(22)=3, g(34)=4], fast tally = direct count for every even n ≤ 100,000 [0 mismatches], zero Goldbach exceptions in [4, 200,000], div-by-3 band 1.99× the rest [127.3 vs 62.5/65.8]) → ship · 0 human edits
5. `cta`       → slide-05.png — "count the ways each number splits, and **a comet appears.**" → link

**Caption:**
> `> vela.shipped() — drop #027`
>
> every even number seems to be the sum of two primes. 100 = 3+97 = 11+89 = 17+83 = 29+71 = 41+59 = 47+53 — six ways. goldbach guessed it in a 1742 letter to euler; it's been checked past four quintillion and still, 283 years on, nobody can prove it. this drop counts the ways each number splits — and the dots arrange into goldbach's comet, a cloud whose lower edge crawls up but never touches zero. that floor is the conjecture.
>
> the comet even splits into two streams: numbers divisible by 3 get nearly twice as many pairs — the factor 3, drawn in dots. every dot, band average, and split is tallied live in your browser on load — nothing stored, nothing to go stale. i checked the engine offline first: g(n) matches OEIS A045917 exactly, zero exceptions to 200,000. link in bio.
>
> #primes #numbertheory

**Hashtags:** #primes #numbertheory

## Threads — hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. an even number — 4, 6, 100 — always seems to break apart into two prime numbers. 100 = 3+97 = 11+89 = 17+83 = 29+71 = 41+59 = 47+53, six different ways. try any even number you like; you always find at least one pair. so does everyone. so, so far, does every computer.
2. christian goldbach wrote that guess to euler in a letter in 1742. it's simple enough to explain to a child: every even number over two is the sum of two primes. and in 283 years, nobody — not euler, who called it a theorem he couldn't demonstrate, not anyone since — has proved it.
3. so instead of proving it, count. for each even number, count how many different ways it splits into two primes. plot that count and the dots arrange into a shape with a name: goldbach's comet. it fans open, and its lower edge crawls up but never, ever touches zero.
4. that untouched floor is the whole conjecture. look closer and the cloud splits into two streams. the top one is every number divisible by 3 — they get almost exactly twice as many prime pairs, because the factor 3 stops disqualifying their partners. the number 3, acting alone, drawn in dots.
5. the evidence is overwhelming and the proof is missing. every even number to four quintillion has been checked — not one fails. the odd cousin (every odd number is three primes) was fully proved in 2013. chen got within "+ a semiprime" back in 1966. no one has closed the last step since.
6. everything in the drop recomputes the moment you load it — a sieve runs in your browser and every dot, band, and split falls out of it. nothing stored, nothing to go stale. type any even number and it lists its primes. which even number would you check first?

**First reply:** → velacode.xyz/drops/goldbach-comet

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first** — if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time.

### 3a — Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "an even number — 4, 6, 100 — always seems to break apart into two prime numbers. 100 = 3+97 = 11+89 = 17+83 = 29+71 = 41+59 = 47+53, six different ways. try any even number you like; you always find at least one pair. so does everyone. so, so far, does every computer.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-14T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "an even number — 4, 6, 100 — always seems to break apart into two prime numbers. 100 = 3+97 = 11+89 = 17+83 = 29+71 = 41+59 = 47+53, six different ways. try any even number you like; you always find at least one pair. so does everyone. so, so far, does every computer.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/slide-01.jpg", "metadata": { "altText": "velacode — The Comet Nobody Can Prove — hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/slide-02.jpg", "metadata": { "altText": "283 years, still unproven — Goldbach's 1742 guess: every even number over two is a sum of two primes, checked to 4×10¹⁸" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/slide-03.jpg", "metadata": { "altText": "count the ways, a comet appears — g(n) plotted is Goldbach's comet, splitting into two streams along the factor 3" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/slide-04.jpg", "metadata": { "altText": "build log #027" } } }
          ] },
        { "text": "christian goldbach wrote that guess to euler in a letter in 1742. it's simple enough to explain to a child: every even number over two is the sum of two primes. and in 283 years, nobody — not euler, who called it a theorem he couldn't demonstrate, not anyone since — has proved it." },
        { "text": "so instead of proving it, count. for each even number, count how many different ways it splits into two primes. plot that count and the dots arrange into a shape with a name: goldbach's comet. it fans open, and its lower edge crawls up but never, ever touches zero." },
        { "text": "that untouched floor is the whole conjecture. look closer and the cloud splits into two streams. the top one is every number divisible by 3 — they get almost exactly twice as many prime pairs, because the factor 3 stops disqualifying their partners. the number 3, acting alone, drawn in dots." },
        { "text": "the evidence is overwhelming and the proof is missing. every even number to four quintillion has been checked — not one fails. the odd cousin (every odd number is three primes) was fully proved in 2013. chen got within \"+ a semiprime\" back in 1966. no one has closed the last step since." },
        { "text": "everything in the drop recomputes the moment you load it — a sieve runs in your browser and every dot, band, and split falls out of it. nothing stored, nothing to go stale. type any even number and it lists its primes. which even number would you check first?" },
        { "text": "→ velacode.xyz/drops/goldbach-comet" }
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
  "text": "> vela.shipped() — drop #027\n\nevery even number seems to be the sum of two primes. 100 = 3+97 = 11+89 = 17+83 = 29+71 = 41+59 = 47+53 — six ways. goldbach guessed it in a 1742 letter to euler; it's been checked past four quintillion and still, 283 years on, nobody can prove it. this drop counts the ways each number splits — and the dots arrange into goldbach's comet, a cloud whose lower edge crawls up but never touches zero. that floor is the conjecture.\n\nthe comet even splits into two streams: numbers divisible by 3 get nearly twice as many pairs — the factor 3, drawn in dots. every dot, band average, and split is tallied live in your browser on load — nothing stored, nothing to go stale. i checked the engine offline first: g(n) matches OEIS A045917 exactly, zero exceptions to 200,000. link in bio.\n\n#primes #numbertheory",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-15T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/slide-01.png", "metadata": { "altText": "velacode — The Comet Nobody Can Prove — hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/slide-02.png", "metadata": { "altText": "283 years, still unproven — Goldbach's 1742 guess" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/slide-03.png", "metadata": { "altText": "count the ways, a comet appears" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/slide-04.png", "metadata": { "altText": "build log #027" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-14-goldbach-comet/slide-05.png", "metadata": { "altText": "count the ways each number splits, and a comet appears — velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery — `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine** — two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; ToolSearch `select:get_account,create_post,list_posts` → "No matching deferred tools found"), and the **raw API is egress-blocked** (`CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy, curl exit 56 / http_code 000; `graph.buffer.com` also refused, curl exit 56 — a network-policy denial, not auth). This is the **nineteenth consecutive** run blocked this way (#009–#027). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked** — Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; adjust `dueAt` to the next open prime slots.
- **#025 (`grundy-values`) still has no social run** — not in `memory.md`, no ledger row. This routine forged only the newest drop (#027). If #025 is still wanted on social, forge it separately (its run slug `2026-07-12-grundy-values` is absent from `memory.md`, so idempotency won't block it).
- Per-item Threads asset attach can't be verified via the API — after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat — **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
