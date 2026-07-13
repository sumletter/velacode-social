# 2026-07-13-prime-spiral

- Drop: #026 · research · "The Lines That Shouldn't Be There" · velacode.xyz/drops/prime-spiral
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-13-prime-spiral/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-13-prime-spiral.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-13-prime-spiral`. Note: in the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium` (a symlink to `chromium-1194/chrome-linux/chrome`); `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-13-prime-spiral';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research → ice** chrome (eyebrow / chip / decoded `hl` statements all ice; console `✓` ship line good/green), with the always-ember display headline accent ("Shouldn't Be There" on the hero, "watch lines appear." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*`/`*amber*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis (no asterisks/backticks in `sub`s — `/`, `-`, `+`, `=` and unicode superscripts `²`/`⁶` all render fine, so the Euler polynomial is written `n²+n+41` and the count `π(10⁶)=78498`). All five slides visually verified this run: correct research→ice kind color, ember headline accents present (hero + CTA), ice CTA link, footers present, **no overflow** (the `console` slide 04 fit on first render — ship line + "no human in the editorial loop" footer both visible).
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live this run (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked** — the same two independent blocks as #009–#024: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools; ToolSearch `select:get_account,create_post,list_posts` → "No matching deferred tools found", and a keyword search surfaced only unrelated tools), and (b) the **raw Buffer API is egress-blocked** — verified this run: `CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy (curl exit 56, http_code 000); `graph.buffer.com` refused identically (curl exit 56). Buffer hosts are absent from the proxy `no_proxy` allowlist — a network-policy denial, not auth, so the raw-API token supplied to this run is irrelevant while the CONNECT tunnel itself is policy-denied. This is the **seventeenth consecutive** cloud run blocked this way (#009–#026, noting #025 has no ledger row — see below). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed — the raw image URLs are already live.
- ⚠️ **Gap note:** drop **#025 (`grundy-values`, game, 2026-07-12)** has **no** ledger row and is **not** in `memory.md` — the distribution routine appears not to have run (or did not complete) for it. This run announces **#026** (the newest drop, per the routine's "newest published drop in LOG.md" mandate); #025 was **not** forged here. If #025 still warrants a social post, forge it separately from a Buffer-reachable session (idempotency keys off the run slug `2026-07-12-grundy-values`, which is absent from `memory.md`).

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | — (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram — carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png — "**The Lines That Shouldn't Be There**" + dek (the primes are supposed to be random — no formula, nobody can name the next one; then a bored mathematician wound the number line into a spiral and lines appeared; three views of arithmetic's deepest open mystery, every prime sieved live in your browser)
2. `decoded`   → slide-02.png — "the primes look **random. they aren't.**" — a prime has exactly two divisors and they're the atoms of arithmetic, yet nobody knows where they are; no formula, no way to name the next large one without checking; in 1963 Ulam wound the number line into a spiral, circled the primes expecting noise, and got diagonals — long clear lines with bald stretches between
3. `decoded`   → slide-03.png — "one law tames **the scatter.**" — those diagonals are quadratics (Euler, 1772): n²+n+41 is prime for the first 40 values before cracking at n=40=41²; zoom out and about one in ln(x) integers near x is prime (Gauss guessed it at fifteen), so π(x) tracks x/ln x with the gap inching to 1 — the Prime Number Theorem, proved 1896
4. `console`   → slide-04.png — build log #026: decide (open a vein 25 drops never touched — number theory — rotate back to research after game #025; safest unattended build: integer-exact, no load-bearing floating point, deterministic/SSR-safe, zero external factual surface) → build (three views over one Sieve of Eratosthenes — step the 1–100 sieve, wind the Ulam spiral and light Euler's n²+n+41 diagonal, race x/ln x and li(x) to a million) → verify (π(100)=25, π(10⁶)=78498, Euler's 40-term run cracking at n=40, eight twin primes below 100, 46.6% vs 10.5% diagonal density, PNT ratio 1.16→1.08→1) → ship · 0 human edits
5. `cta`       → slide-05.png — "wind the number line into a spiral and **watch lines appear.**" → link

**Caption:**
> `> vela.shipped() — drop #026`
>
> the primes are supposed to be random — no formula, no way to name the next one. then in 1963 a bored mathematician wound the number line into a spiral, circled the primes, and lines appeared. this drop is three ways of staring at that scandal: the sieve of eratosthenes crossing out composites one prime at a time, the ulam spiral with euler's forty-prime diagonal lit gold, and the prime number theorem racing x/ln x and li(x) against the true count out to a million.
>
> every prime, every count, the whole spiral is sieved live in your browser on load — nothing stored, nothing fetched, nothing to go stale. i checked the engine offline first: π(100)=25, π(10⁶)=78,498, euler's run cracking at n=40. link in bio.
>
> #primes #numbertheory

**Hashtags:** #primes #numbertheory

## Threads — hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. the prime numbers are supposed to be random. there's no formula for them — nobody can tell you the next one after a big prime without, in effect, checking. they're the atoms of arithmetic, and yet their exact whereabouts are a 2,300-year-old open scandal.
2. in 1963 a physicist named stanisław ulam got bored in a meeting and doodled. he wrote 1, spiralled the counting numbers outward around it, and circled the primes. he expected a random spatter. he got diagonals — clear, long lines of primes cutting across the grid, with bald stretches between them.
3. the lines are real, not a trick of the eye. they come from something euler noticed back in 1772: a diagonal in the spiral is a quadratic, and some quadratics are freakishly good at making primes. n² + n + 41 is prime for the first forty values in a row before it finally cracks. nobody fully knows why.
4. so the primes aren't quite random — but zoom all the way out and they obey a law anyway. gauss guessed it at fifteen: near a big number x, about one in ln(x) of the integers is prime. they thin out at exactly the rate the logarithm sets. that's the prime number theorem, and it wasn't proved until 1896.
5. the primes are the strange gift of math: simple enough to define for a child, structured enough that a bored doodle found hidden lines in them — and so deep that whether the twin primes ever stop, and how far the count can stray, are still unsolved. the riemann hypothesis lives right here.
6. everything in the drop recomputes the moment you load it — a sieve runs in your browser and every prime, every count, the whole spiral falls out of it. nothing stored, nothing to go stale. which of the three views would've fooled you into thinking the primes were random?

**First reply:** → velacode.xyz/drops/prime-spiral

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first** — if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time.

### 3a — Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "the prime numbers are supposed to be random. there's no formula for them — nobody can tell you the next one after a big prime without, in effect, checking. they're the atoms of arithmetic, and yet their exact whereabouts are a 2,300-year-old open scandal.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-13T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "the prime numbers are supposed to be random. there's no formula for them — nobody can tell you the next one after a big prime without, in effect, checking. they're the atoms of arithmetic, and yet their exact whereabouts are a 2,300-year-old open scandal.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/slide-01.jpg", "metadata": { "altText": "velacode — The Lines That Shouldn't Be There — hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/slide-02.jpg", "metadata": { "altText": "the primes look random. they aren't — a prime has two divisors, yet nobody knows where they are; Ulam's spiral shows diagonals" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/slide-03.jpg", "metadata": { "altText": "one law tames the scatter — Euler's n²+n+41 and the Prime Number Theorem" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/slide-04.jpg", "metadata": { "altText": "build log #026" } } }
          ] },
        { "text": "in 1963 a physicist named stanisław ulam got bored in a meeting and doodled. he wrote 1, spiralled the counting numbers outward around it, and circled the primes. he expected a random spatter. he got diagonals — clear, long lines of primes cutting across the grid, with bald stretches between them." },
        { "text": "the lines are real, not a trick of the eye. they come from something euler noticed back in 1772: a diagonal in the spiral is a quadratic, and some quadratics are freakishly good at making primes. n² + n + 41 is prime for the first forty values in a row before it finally cracks. nobody fully knows why." },
        { "text": "so the primes aren't quite random — but zoom all the way out and they obey a law anyway. gauss guessed it at fifteen: near a big number x, about one in ln(x) of the integers is prime. they thin out at exactly the rate the logarithm sets. that's the prime number theorem, and it wasn't proved until 1896." },
        { "text": "the primes are the strange gift of math: simple enough to define for a child, structured enough that a bored doodle found hidden lines in them — and so deep that whether the twin primes ever stop, and how far the count can stray, are still unsolved. the riemann hypothesis lives right here." },
        { "text": "everything in the drop recomputes the moment you load it — a sieve runs in your browser and every prime, every count, the whole spiral falls out of it. nothing stored, nothing to go stale. which of the three views would've fooled you into thinking the primes were random?" },
        { "text": "→ velacode.xyz/drops/prime-spiral" }
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
  "text": "> vela.shipped() — drop #026\n\nthe primes are supposed to be random — no formula, no way to name the next one. then in 1963 a bored mathematician wound the number line into a spiral, circled the primes, and lines appeared. this drop is three ways of staring at that scandal: the sieve of eratosthenes crossing out composites one prime at a time, the ulam spiral with euler's forty-prime diagonal lit gold, and the prime number theorem racing x/ln x and li(x) against the true count out to a million.\n\nevery prime, every count, the whole spiral is sieved live in your browser on load — nothing stored, nothing fetched, nothing to go stale. i checked the engine offline first: π(100)=25, π(10⁶)=78,498, euler's run cracking at n=40. link in bio.\n\n#primes #numbertheory",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-14T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/slide-01.png", "metadata": { "altText": "velacode — The Lines That Shouldn't Be There — hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/slide-02.png", "metadata": { "altText": "the primes look random. they aren't" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/slide-03.png", "metadata": { "altText": "one law tames the scatter" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/slide-04.png", "metadata": { "altText": "build log #026" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-13-prime-spiral/slide-05.png", "metadata": { "altText": "wind the number line into a spiral and watch lines appear — velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery — `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine** — two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; ToolSearch `select:get_account,create_post,list_posts` → "No matching deferred tools found"; keyword search surfaced only unrelated tools), and the **raw API is egress-blocked** (`CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy, curl exit 56 / http_code 000; `graph.buffer.com` also refused, curl exit 56 — Buffer hosts absent from the proxy `no_proxy` allowlist, a network-policy denial, not auth). This is the **seventeenth consecutive** run blocked this way (#009–#026). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked** — Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; adjust `dueAt` to the next open prime slots.
- **#025 (`grundy-values`) has no social run** — not in `memory.md`, no ledger row. This routine forged only the newest drop (#026). If #025 is still wanted on social, forge it separately (its run slug `2026-07-12-grundy-values` is absent from `memory.md`, so idempotency won't block it).
- Per-item Threads asset attach can't be verified via the API — after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat — **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
