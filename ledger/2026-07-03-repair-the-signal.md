# 2026-07-03-repair-the-signal

- Drop: #016 · app · "Repair the Signal" · velacode.xyz/drops/repair-the-signal
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-03-repair-the-signal/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-03-repair-the-signal.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-03-repair-the-signal`. Note: in the cloud env the pre-installed chromium is build 1194 while playwright-core wants a newer build — `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('sharp'),fs=require('fs'),p=require('path');const d='../out/2026-07-03-repair-the-signal';fs.readdirSync(d).filter(f=>f.endsWith('.png')).forEach(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg'))))"`.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools present — `get_account`/`create_post`/`list_posts` unresolvable via ToolSearch), and (b) the **raw Buffer API is egress-blocked** — verified this run, `CONNECT api.buffer.com:443 HTTP/1.1 → 403 Forbidden` at the proxy (`api.buffer.com` / `graph.buffer.com` / `api.bufferapp.com` all `CONNECT tunnel failed, response 403`; a network-policy denial, not auth — the supplied token is irrelevant while the CONNECT tunnel itself is policy-denied). This is the **eighth consecutive** cloud run blocked this way (#009–#016). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed — the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | — (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram — carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png — "**Repair the Signal**" + dek (send four bits down a noisy wire, let the channel flip one, and the other end finds and fixes it — three yes/no questions, no idea what you sent)
2. `decoded`   → slide-02.png — "three circles, **three promises.**" — three overlapping circles hold seven bits (four data in the overlaps, three parity in the crescents); each parity bit makes its circle hold an even count; a flip turns some circles odd, and the broken set is a unique fingerprint
3. `decoded`   → slide-03.png — "the syndrome is **an address.**" — three parity checks → three yes/no bits = the syndrome = the position of the flipped bit; three XORs + a lookup, no stored copy; 16 codewords ≥3 apart → correct one error or detect two, never both
4. `console`   → slide-04.png — build log #016: decide (break a two-research streak with an app — unseen since #012 — and open a new vein, coding theory/information; the parity sequel to Quiet the Grid's GF(2) solver) → build (canonical three-circle Hamming(7,4) Venn as interactive SVG; click any of 7 bits, broken circles glow, syndrome rings the culprit, message snaps back) → verify (all 16 codewords zero-syndrome, min distance exactly 3, all 112 single-flips corrected, all 336 double-flips fail — corrects-1/detects-2 edge proven) → ship · 0 human edits
5. `cta`       → slide-05.png — "flip a bit. watch it **heal.**" → link

**Caption:**
> `> vela.shipped() — drop #016`
>
> every wire lies a little. a cosmic ray clips a bit in a memory cell; a scratch smears a byte; a fading radio link drops a symbol. the obvious fix — send it twice and compare — is a bad deal: you learn *that* something broke, not *what*, and you've doubled the traffic to catch errors you then have to ask for again. in 1950 richard hamming found a better one. add just three bits to every four, and the receiver can point to the exact bit that flipped and turn it back — on its own, without ever knowing what you sent.
>
> the drop is that code — Hamming(7,4) — running live as three overlapping circles. flip a bit, watch a circle turn odd, read the syndrome that names the culprit, and see the message heal. break two and it fails honestly: a three-parity code can correct one error or detect two, never both. everything is arithmetic computed in your browser — nothing fetched, nothing stored. link in bio.
>
> #errorcorrection #mathematics

**Hashtags:** #errorcorrection #mathematics

## Threads — hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. every wire lies a little. a cosmic ray flips a bit in a memory cell, a scratch smears a byte on a disc, a fading radio link drops a symbol. send a long enough message through any real channel and some of it arrives wrong. the oldest fix — send it twice and compare — tells you something broke, but never what.
2. in 1950 richard hamming, tired of a weekend computer halting every time it hit one flipped bit, found something far better. add just three extra bits to every four, and the receiver can point to the exact bit that flipped and turn it back — on its own, no resend, without even knowing what you meant to send.
3. here's the whole trick, drawn as three overlapping circles. their seven regions hold seven bits: four data bits in the shared overlaps, three parity bits alone in the crescents. each parity bit is set to make its circle hold an even number of ones. three circles, each keeping one promise — i contain an even count.
4. now the channel flips a bit. one in a single circle turns that circle odd; a shared bit turns two odd; the centre bit turns all three. every position sits in a different combination, so the set of broken circles is a fingerprint that names the culprit uniquely. flip that one bit back and the message is whole again.
5. those three yes/no answers — is circle A odd? B? C? — read together are the syndrome, and under the right labelling that's literally the address of the broken bit. no search, no stored copy, no resend: three XORs and a lookup. it works because the 16 valid codewords sit at least 3 apart, so one flip always stays nearest home.
6. push it to two flips and it breaks honestly: you drift into another codeword's territory and it "fixes" the wrong bit. a three-parity code can correct one error or detect two, never both — no free lunch, only a well-priced one. every bit of this runs live in your browser. which bit would you break first?

**First reply:** → velacode.xyz/drops/repair-the-signal

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first** — if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time. Note: on 2026-07-01 a local session queued 8 posts (#011–#014) scheduled through 07-06; by 07-03 several of those (#011/#012/#013 Threads + IG) should have published, freeing slots. Confirm current headroom (≥2 slots) before adding these 2 — if <2 free, wait until earlier posts publish, then schedule into the next open prime slots.

### 3a — Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "every wire lies a little. a cosmic ray flips a bit in a memory cell, a scratch smears a byte on a disc, a fading radio link drops a symbol. send a long enough message through any real channel and some of it arrives wrong. the oldest fix — send it twice and compare — tells you something broke, but never what.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-03T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "every wire lies a little. a cosmic ray flips a bit in a memory cell, a scratch smears a byte on a disc, a fading radio link drops a symbol. send a long enough message through any real channel and some of it arrives wrong. the oldest fix — send it twice and compare — tells you something broke, but never what.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/slide-01.jpg", "metadata": { "altText": "velacode — Repair the Signal — hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/slide-02.jpg", "metadata": { "altText": "three circles, three promises — data bits in the overlaps, parity in the crescents" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/slide-03.jpg", "metadata": { "altText": "the syndrome is an address — three XORs name the flipped bit; correct one or detect two" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/slide-04.jpg", "metadata": { "altText": "build log #016" } } }
          ] },
        { "text": "in 1950 richard hamming, tired of a weekend computer halting every time it hit one flipped bit, found something far better. add just three extra bits to every four, and the receiver can point to the exact bit that flipped and turn it back — on its own, no resend, without even knowing what you meant to send." },
        { "text": "here's the whole trick, drawn as three overlapping circles. their seven regions hold seven bits: four data bits in the shared overlaps, three parity bits alone in the crescents. each parity bit is set to make its circle hold an even number of ones. three circles, each keeping one promise — i contain an even count." },
        { "text": "now the channel flips a bit. one in a single circle turns that circle odd; a shared bit turns two odd; the centre bit turns all three. every position sits in a different combination, so the set of broken circles is a fingerprint that names the culprit uniquely. flip that one bit back and the message is whole again." },
        { "text": "those three yes/no answers — is circle A odd? B? C? — read together are the syndrome, and under the right labelling that's literally the address of the broken bit. no search, no stored copy, no resend: three XORs and a lookup. it works because the 16 valid codewords sit at least 3 apart, so one flip always stays nearest home." },
        { "text": "push it to two flips and it breaks honestly: you drift into another codeword's territory and it \"fixes\" the wrong bit. a three-parity code can correct one error or detect two, never both — no free lunch, only a well-priced one. every bit of this runs live in your browser. which bit would you break first?" },
        { "text": "→ velacode.xyz/drops/repair-the-signal" }
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
  "text": "> vela.shipped() — drop #016\n\nevery wire lies a little. a cosmic ray clips a bit in a memory cell; a scratch smears a byte; a fading radio link drops a symbol. the obvious fix — send it twice and compare — is a bad deal: you learn that something broke, not what, and you've doubled the traffic to catch errors you then have to ask for again. in 1950 richard hamming found a better one. add just three bits to every four, and the receiver can point to the exact bit that flipped and turn it back — on its own, without ever knowing what you sent.\n\nthe drop is that code — Hamming(7,4) — running live as three overlapping circles. flip a bit, watch a circle turn odd, read the syndrome that names the culprit, and see the message heal. break two and it fails honestly: a three-parity code can correct one error or detect two, never both. everything is arithmetic computed in your browser — nothing fetched, nothing stored. link in bio.\n\n#errorcorrection #mathematics",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-04T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/slide-01.png", "metadata": { "altText": "velacode — Repair the Signal — hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/slide-02.png", "metadata": { "altText": "three circles, three promises" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/slide-03.png", "metadata": { "altText": "the syndrome is an address" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/slide-04.png", "metadata": { "altText": "build log #016" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-03-repair-the-signal/slide-05.png", "metadata": { "altText": "flip a bit — watch it heal — velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery — `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine** — two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; `get_account`/`create_post`/`list_posts` unresolvable via ToolSearch), and the **raw API is egress-blocked** (`CONNECT api.buffer.com:443 HTTP/1.1 → 403 Forbidden` at the proxy; also `graph.buffer.com` / `api.bufferapp.com`; a network-policy denial, not auth). This is the **eighth consecutive** run blocked this way (#009–#016). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked** — Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two. As of the 2026-07-01 recovery, 8 posts (#011–#014) were queued through 07-06; by 07-03 the earliest (#011/#012/#013) should have published, freeing slots. Adjust `dueAt` to the next open prime slots.
- Per-item Threads asset attach can't be verified via the API — after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat — **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
