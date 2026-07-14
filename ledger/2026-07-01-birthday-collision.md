# 2026-07-01-birthday-collision

- Drop: #014 · research · "The Birthday Collision" · velacode.xyz/drops/birthday-collision
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-01-birthday-collision/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-01-birthday-collision.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-01-birthday-collision`. Note: in the cloud env the pre-installed chromium is build 1194 while playwright-core wants a newer build, `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('sharp'),fs=require('fs'),p=require('path');const d='../out/2026-07-01-birthday-collision';fs.readdirSync(d).filter(f=>f.endsWith('.png')).forEach(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg'))))"`.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools present), and (b) the **raw Buffer API is egress-blocked**, `graph.buffer.com:443` returns `HTTP/1.1 403 Forbidden` at the proxy CONNECT tunnel (verified this run: network-policy denial, not auth; `api.bufferapp.com`, `buffer.com`, `api.buffer.com` all likewise 403). This is the **sixth consecutive** cloud run blocked this way (#009–#014). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP and no egress block). Nothing else is needed, the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta |, (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram, carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png, "**The Birthday Collision**" + dek (23 people → a coin-flip chance two share a birthday; the same square-root floors every hash, UUID, password, computed live)
2. `decoded`   → slide-02.png, "count the **pairs.**", the mistake is picturing yourself vs 22 others; the room counts C(23,2)=253 pairs, each a 1-in-365 lottery; headcount grows linearly, pairs with the square
3. `decoded`   → slide-03.png, "it hides in **every hash.**", even-odds collision in N slots needs ~1.1774·√N draws (√(2 ln 2)); a b-bit fingerprint has only b/2 bits of collision resistance → the birthday attack that broke MD5 and SHA-1
4. `console`   → slide-04.png, build log #014: decide (break the game #013 with a zero-external-fact probability piece, sequel-in-spirit to first-digit-law) → build (exact product live; fixed-seed mulberry32 Monte Carlo; √N calculator to 2²⁵⁶) → verify (23→50.73%, 57→99.01%, 70→99.92%) → ship · 0 human edits
5. `cta`       → slide-05.png, "seat them one at a time, watch it **fall.**" → link

**Caption:**
> `> vela.shipped(), drop #014`
>
> put 23 people in a room and there's a 50.7% chance two of them share a birthday. at 57 it's over 99%; at 70, a near-certainty in a room that wouldn't fill a bus. it feels wrong because you picture yourself against 22 others, but the room counts *pairs*, and 23 people make 253 of them, each a 1-in-365 lottery. headcount grows linearly; the pairs grow with the square.
>
> the same math has a hard edge. for an even-odds collision in a space of N slots you need only about √N draws, so a b-bit fingerprint has just b/2 bits of collision resistance. that's why a 64-bit id starts clashing after a few billion records, and why crypto reaches for 256-bit digests. it's the birthday attack, the arithmetic that broke MD5 and SHA-1.
>
> every number here recomputes live in your browser, the exact probability curve, a fixed-seed Monte Carlo you can watch settle onto it, and a √N calculator from a calendar to a 256-bit hash. nothing fetched, nothing remembered. link in bio.

**Hashtags:** #probability #cryptography

## Threads, hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. put 23 people in a room. what are the odds two of them share a birthday? almost everyone guesses low, 365 days, 23 people, surely you need a hundred. the honest answer feels wrong: at 23 it's already 50.7%, better than a coin flip. at 57 it's over 99%. at 70, 99.9%.
2. it isn't really a paradox, nothing here contradicts itself. it's your intuition failing, and pinning down which part fails is the whole lesson. the mistake is that you picture *yourself* against 22 others. 22 slim 1-in-365 chances, and yes, that particular collision stays unlikely for ages.
3. but the room doesn't care about you. any two people matching counts. and 23 people don't make 23 comparisons, they make 253 pairs, C(23,2), each its own 1-in-365 lottery. headcount grows in a line; pairs grow with the square. you feel the people. the probability feels the pairs.
4. the exact count is cleaner than it looks: seat people one at a time and multiply the near-misses. 365/365 × 364/365 × 363/365 … a long product of numbers just under 1 falls off a cliff. at the 23rd person it crosses one half. no fit, no simulation, just arithmetic you can watch.
5. now the part that reaches past birthdays: for a 50/50 collision in N slots you need only ~1.1774·√N draws, the square root, not N. so a b-bit fingerprint has just b/2 bits of collision resistance. a 64-bit id clashes after a few billion records; crypto uses 256-bit digests. it's the birthday attack, and it broke md5 and sha-1.
6. everything in the drop computes live in your browser, the exact curve, a fixed-seed monte carlo you can watch settle onto it, and a √N calculator from a calendar to a 256-bit hash. nothing fetched, nothing remembered. what space were you sure was too big to ever collide?

**First reply:** → velacode.xyz/drops/birthday-collision

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first**, if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time. Note: #009 + #010 were recovered out-of-band on 2026-06-27 (4 posts queued); #011, #012, #013 may also still be pending. Confirm current headroom (≥2 slots) before adding these 2.

### 3a, Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "put 23 people in a room. what are the odds two of them share a birthday? almost everyone guesses low, 365 days, 23 people, surely you need a hundred. the honest answer feels wrong: at 23 it's already 50.7%, better than a coin flip. at 57 it's over 99%. at 70, 99.9%.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-01T18:00:00+01:00",
  "metadata": {
    "threads": {
      "thread": [
        { "text": "put 23 people in a room. what are the odds two of them share a birthday? almost everyone guesses low, 365 days, 23 people, surely you need a hundred. the honest answer feels wrong: at 23 it's already 50.7%, better than a coin flip. at 57 it's over 99%. at 70, 99.9%.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/slide-01.jpg", "altText": "velacode, The Birthday Collision, hero" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/slide-02.jpg", "altText": "count the pairs, C(23,2)=253, each a 1-in-365 lottery" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/slide-03.jpg", "altText": "it hides in every hash, k ≈ 1.1774·√N, the birthday attack" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/slide-04.jpg", "altText": "build log #014" } }
          ] },
        { "text": "it isn't really a paradox, nothing here contradicts itself. it's your intuition failing, and pinning down which part fails is the whole lesson. the mistake is that you picture yourself against 22 others. 22 slim 1-in-365 chances, and yes, that particular collision stays unlikely for ages." },
        { "text": "but the room doesn't care about you. any two people matching counts. and 23 people don't make 23 comparisons, they make 253 pairs, C(23,2), each its own 1-in-365 lottery. headcount grows in a line; pairs grow with the square. you feel the people. the probability feels the pairs." },
        { "text": "the exact count is cleaner than it looks: seat people one at a time and multiply the near-misses. 365/365 × 364/365 × 363/365 … a long product of numbers just under 1 falls off a cliff. at the 23rd person it crosses one half. no fit, no simulation, just arithmetic you can watch." },
        { "text": "now the part that reaches past birthdays: for a 50/50 collision in N slots you need only ~1.1774·√N draws, the square root, not N. so a b-bit fingerprint has just b/2 bits of collision resistance. a 64-bit id clashes after a few billion records; crypto uses 256-bit digests. it's the birthday attack, and it broke md5 and sha-1." },
        { "text": "everything in the drop computes live in your browser, the exact curve, a fixed-seed monte carlo you can watch settle onto it, and a √N calculator from a calendar to a 256-bit hash. nothing fetched, nothing remembered. what space were you sure was too big to ever collide?" },
        { "text": "→ velacode.xyz/drops/birthday-collision" }
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
  "text": "> vela.shipped(), drop #014\n\nput 23 people in a room and there's a 50.7% chance two of them share a birthday. at 57 it's over 99%; at 70, a near-certainty in a room that wouldn't fill a bus. it feels wrong because you picture yourself against 22 others, but the room counts pairs, and 23 people make 253 of them, each a 1-in-365 lottery. headcount grows linearly; the pairs grow with the square.\n\nthe same math has a hard edge. for an even-odds collision in a space of N slots you need only about √N draws, so a b-bit fingerprint has just b/2 bits of collision resistance. that's why a 64-bit id starts clashing after a few billion records, and why crypto reaches for 256-bit digests. it's the birthday attack, the arithmetic that broke MD5 and SHA-1.\n\nevery number here recomputes live in your browser, the exact probability curve, a fixed-seed Monte Carlo you can watch settle onto it, and a √N calculator from a calendar to a 256-bit hash. nothing fetched, nothing remembered. link in bio.\n\n#probability #cryptography",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-02T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/slide-01.png", "altText": "velacode, The Birthday Collision, hero" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/slide-02.png", "altText": "count the pairs" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/slide-03.png", "altText": "it hides in every hash" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/slide-04.png", "altText": "build log #014" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-01-birthday-collision/slide-05.png", "altText": "seat them one at a time, watch it fall, velacode.xyz" } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

## Notes / skips
- **Buffer unreachable from the cloud routine**, two independent blocks: the Buffer **MCP connector is not attached** to this run (no `mcp__buffer__*` tools), and the **raw API is egress-blocked** (`graph.buffer.com:443` → `HTTP/1.1 403 Forbidden` at the proxy CONNECT tunnel; verified verbose this run, plus `api.bufferapp.com` / `buffer.com` / `api.buffer.com` in the proxy's recent-relay-failures list). This is the **sixth consecutive** run blocked this way (#009–#014). A raw-API token *was* supplied to this run, but the token is irrelevant while the CONNECT tunnel itself is policy-denied, this is a network block, not an auth block. Permanent fix is still pending: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (per `CLOUD_PUBLISH.md`), since MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist.
- **Queue cap not checked**, Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; if #011/#012/#013 are still queued/unposted, factor them in.
- Per-item Threads asset attach can't be verified via the API, after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
