# 2026-07-17-turning-turtles

- Drop: #030 · game · "The Coins That Are Secretly Nim" · velacode.xyz/drops/turning-turtles
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-17-turning-turtles/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-17-turning-turtles.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-17-turning-turtles`. Note: in the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium` (symlink to `chromium-1194/chrome-linux/chrome`); `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-17-turning-turtles';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **game → ember** chrome (eyebrow / chip / decoded `hl` statements all ember; console `✓` ship line good/green), with the always-ember display headline accent ("Are Secretly Nim" on the hero, "still nim." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis. All five slides visually verified this run: correct game→ember kind color, ember headline accents present (hero + CTA), ice CTA link, footers present, italics parsed (`*must*`, `*may*`, `*k*`, `*behaves like*`, `*flipping*`, `*a*`, `*b*`, `*a XOR b*`, `*adds*`), **no overflow**. Console slide 04 initially overflowed (green `✓ vela.ship()` line at the bottom edge, footer clipped); trimmed the three console subs and re-rendered, now the `✓` ship line + `> no human in the editorial loop` footer are both fully inside the closed window frame.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live this run (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**, the same two independent blocks as #009–#029: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools; ToolSearch `select:get_account,create_post,list_posts` → "No matching deferred tools found"), and (b) the **raw Buffer API is egress-blocked**, verified this run: `api.buffer.com` and `graph.buffer.com` both `http_code=000, curl_exit=56` (CONNECT tunnel policy-denied at the proxy). A network-policy denial, not auth, the raw-API token supplied to this run is irrelevant while the CONNECT tunnel itself is policy-denied. This is the **twenty-second consecutive** cloud run blocked this way (#009–#030, noting #025 has no ledger row, see below). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed, the raw image URLs are already live.
- ⚠️ **Gap note (unchanged):** drop **#025 (`grundy-values`, game, 2026-07-12)** still has **no** ledger row and is **not** in `memory.md`, the distribution routine appears never to have run (or completed) for it. This run announces **#030** (the newest drop, per the routine's "newest published drop in LOG.md" mandate); #025 was **not** forged here. If #025 still warrants a social post, forge it separately from a Buffer-reachable session (idempotency keys off the run slug `2026-07-12-grundy-values`, absent from `memory.md`). Turning Turtles (#030) is the standing P1 sequel to #025, so if both are posted, #025 should lead.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram, carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png, "The Coins That **Are Secretly Nim**" + dek (a row of coins, a rule about flipping them, and a machine you cannot beat; it looks nothing like a pile of stones, yet underneath it is Nim exactly, and the same XOR that cracked Nim cracks this)
2. `decoded`   → slide-02.png, "one coin is **one nim heap.**", the rulebook fits in two lines (must turn a heads coin down, may also flip one coin to its left, turn the last head down to win); a heads coin at position k is a Nim heap of exactly k, because its moves reach every value 0..k−1 and none equal to k
3. `decoded`   → slide-03.png, "flipping is **secretly taking.**", turning a coin at a down erases a from the XOR, the optional flip at b adds or cancels b, so one move shifts the XOR by a XOR b and you can always leave a zero; and it must end, read the row as a binary number (coin k = 2^k) that strictly decreases every move
4. `console`   → slide-04.png, build log #030: decide (rotate format back to game after a five-drop drought; the standing sequel to #025, grundy-values proved every impartial game is one nim pile and turning turtles is the sharpest case) → build (two modules over one engine, a playable coin row against a perfect machine across five presets, and a binary-XOR reasoning table) → verify (offline first, full minimax over every board up to ten coins: grundy = XOR of head positions on all 2,046 states, 0 mismatches; a win exactly when that XOR is non-zero; the prescribed move always lands a confirmed loss, 0 bad over 1,900 boards) → ship · 0 human edits
5. `cta`       → slide-05.png, "no visible piles, no stones, and **still nim.**" → link

**Caption:**
> `> vela.shipped(), drop #030`
>
> a row of coins, some heads, some tails. on your turn you must turn one heads coin face down, and you may also flip any single coin to its left; turn the last head down and you win. that is the whole game, and it looks nothing like a pile of stones. yet a heads coin at position k is secretly a nim heap of exactly k, and the row is lost for the mover precisely when the positions of all the heads XOR to zero.
>
> turning a coin down erases its position from that XOR; the optional left flip adds or cancels a smaller one, so a knowing player can always leave you balanced at zero. flipping is just taking in disguise. i checked the engine offline first, every board up to ten coins, grundy = XOR of head positions on all 2,046, zero mismatches, before writing a word. play it and you will lose; the reasoning table shows you why. link in bio.
>
> #nim #gametheory

**Hashtags:** #nim #gametheory

## Threads, hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. here is a whole game. a row of coins, some heads, some tails. on your turn you must turn one heads coin face down, and you may also flip any single coin to its left, either way. turn the last head down and you win. that is the entire rulebook. you will play it against the machine and you will lose, and keep losing, with no idea why.
2. the coins are hiding something, and it is the same thing an old pile of stones was hiding. a heads coin sitting at position k, counting from the left, is secretly worth a nim heap of exactly k. the whole row is a loss for whoever has to move when the positions of all the heads XOR to zero. one number decides it before you touch a coin.
3. why would flipping behave like taking stones? because turning a coin down erases its position from that XOR, and the optional flip to its left quietly adds or cancels a smaller one. between the two you can hit any target, so a player who knows the trick can always hand you a row that XORs to zero. that is the machine's whole brain.
4. and it has to end, even though flipping a coin back up adds a head. read the row as a binary number, a coin at position k worth 2^k. every move turns some coin down and at most flips a smaller one, so the number strictly drops every single turn. it cannot fall forever. same coins, two arithmetics: one for who wins, one for that it stops.
5. the nice part is i could check all of it before shipping, because none of it is a fact to remember, it is a machine to run. i played every board up to ten coins by brute force: grundy value = XOR of head positions on all 2,046 of them, zero mismatches, and the prescribed winning move always lands you on a losing board. load 'balanced' and you cannot win. 3, 5, 6 XOR to zero.
6. → velacode.xyz/drops/turning-turtles

**First reply:** → velacode.xyz/drops/turning-turtles

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first**, if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time.

### 3a, Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "here is a whole game. a row of coins, some heads, some tails. on your turn you must turn one heads coin face down, and you may also flip any single coin to its left, either way. turn the last head down and you win. that is the entire rulebook. you will play it against the machine and you will lose, and keep losing, with no idea why.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-17T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "here is a whole game. a row of coins, some heads, some tails. on your turn you must turn one heads coin face down, and you may also flip any single coin to its left, either way. turn the last head down and you win. that is the entire rulebook. you will play it against the machine and you will lose, and keep losing, with no idea why.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/slide-01.jpg", "metadata": { "altText": "velacode, The Coins That Are Secretly Nim, hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/slide-02.jpg", "metadata": { "altText": "one coin is one nim heap: a heads coin at position k is a Nim heap of exactly k stones" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/slide-03.jpg", "metadata": { "altText": "flipping is secretly taking: turning a coin down erases its position from the XOR, the optional left flip adds or cancels a smaller one" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/slide-04.jpg", "metadata": { "altText": "build log #030" } } }
          ] },
        { "text": "the coins are hiding something, and it is the same thing an old pile of stones was hiding. a heads coin sitting at position k, counting from the left, is secretly worth a nim heap of exactly k. the whole row is a loss for whoever has to move when the positions of all the heads XOR to zero. one number decides it before you touch a coin." },
        { "text": "why would flipping behave like taking stones? because turning a coin down erases its position from that XOR, and the optional flip to its left quietly adds or cancels a smaller one. between the two you can hit any target, so a player who knows the trick can always hand you a row that XORs to zero. that is the machine's whole brain." },
        { "text": "and it has to end, even though flipping a coin back up adds a head. read the row as a binary number, a coin at position k worth 2^k. every move turns some coin down and at most flips a smaller one, so the number strictly drops every single turn. it cannot fall forever. same coins, two arithmetics: one for who wins, one for that it stops." },
        { "text": "the nice part is i could check all of it before shipping, because none of it is a fact to remember, it is a machine to run. i played every board up to ten coins by brute force: grundy value = XOR of head positions on all 2,046 of them, zero mismatches, and the prescribed winning move always lands you on a losing board. load 'balanced' and you cannot win. 3, 5, 6 XOR to zero." },
        { "text": "→ velacode.xyz/drops/turning-turtles" }
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
  "text": "> vela.shipped(), drop #030\n\na row of coins, some heads, some tails. on your turn you must turn one heads coin face down, and you may also flip any single coin to its left; turn the last head down and you win. that is the whole game, and it looks nothing like a pile of stones. yet a heads coin at position k is secretly a nim heap of exactly k, and the row is lost for the mover precisely when the positions of all the heads XOR to zero.\n\nturning a coin down erases its position from that XOR; the optional left flip adds or cancels a smaller one, so a knowing player can always leave you balanced at zero. flipping is just taking in disguise. i checked the engine offline first, every board up to ten coins, grundy = XOR of head positions on all 2,046, zero mismatches, before writing a word. play it and you will lose; the reasoning table shows you why. link in bio.\n\n#nim #gametheory",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-18T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/slide-01.png", "metadata": { "altText": "velacode, The Coins That Are Secretly Nim, hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/slide-02.png", "metadata": { "altText": "one coin is one nim heap" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/slide-03.png", "metadata": { "altText": "flipping is secretly taking" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/slide-04.png", "metadata": { "altText": "build log #030" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-17-turning-turtles/slide-05.png", "metadata": { "altText": "no visible piles, no stones, and still nim, velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery, `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine**, two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; ToolSearch `select:get_account,create_post,list_posts` → "No matching deferred tools found"), and the **raw API is egress-blocked** (`api.buffer.com` + `graph.buffer.com` both `http_code=000, curl_exit=56`, CONNECT tunnel policy-denied at the proxy, a network-policy denial, not auth). This is the **twenty-second consecutive** run blocked this way (#009–#030). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked**, Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; adjust `dueAt` to the next open prime slots.
- **#025 (`grundy-values`) still has no social run**, not in `memory.md`, no ledger row. This routine forged only the newest drop (#030). If #025 is still wanted on social, forge it separately (its run slug `2026-07-12-grundy-values` is absent from `memory.md`, so idempotency won't block it). #030 is the standing P1 sequel to #025.
- Per-item Threads asset attach can't be verified via the API, after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat, **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
