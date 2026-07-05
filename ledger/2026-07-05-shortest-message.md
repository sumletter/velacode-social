# 2026-07-05-shortest-message

- Drop: #018 · research · "The Shortest Possible Message" · velacode.xyz/drops/shortest-message
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-05-shortest-message/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-05-shortest-message.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-05-shortest-message`. Note: in the cloud env the pre-installed chromium is build 1194; `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-05-shortest-message';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live this run (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked** — the same two independent blocks as #009–#017: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools; a ToolSearch for `buffer create_post get_account schedule` returned only unrelated tools), and (b) the **raw Buffer API is egress-blocked** — verified this run: `CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy (curl exit 56; `api.bufferapp.com` also refused, curl exit 56; a network-policy denial, not auth — the supplied token is irrelevant while the CONNECT tunnel itself is policy-denied). This is the **tenth consecutive** cloud run blocked this way (#009–#018). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed — the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | — (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram — carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png — "**The Shortest Possible Message**" + dek (the last drop added redundancy so a message could survive a flipped bit; this one strips redundancy away — packing text to a hard floor set by nothing but how surprising each letter is)
2. `decoded`   → slide-02.png — "not every letter **deserves the same room.**" — MISSISSIPPI is one M, two P's, four S's, four I's; paying the same for the rare M as the constant S is waste. Morse counted type in a print shop and gave E a dot, Q a long dash — frequent symbols short, rare ones long
3. `decoded`   → slide-03.png — "there's a floor **you cannot cross.**" — a prefix-free code (no codeword begins another) is just a binary tree with letters at the leaves; Huffman's 1951 merge-the-two-rarest rule is provably optimal, and Shannon's 1948 entropy H is the absolute floor Huffman lands within one bit of — the gap is pure rounding
4. `console`   → slide-04.png — build log #018: decide (rotate back to research after two apps; open the compression half of the info-theory vein #016 started — #016 *added* redundancy, this removes it) → build (a live text box drives a tally, a bottom-up Huffman tree as SVG with every codeword a root→leaf path, and three bits/symbol bars: fixed-width, Huffman, Shannon floor) → verify (every code prefix-free, Kraft ∑2^−ℓ=1 exact, always in the H..H+1 window, dyadic preset meets the floor to the bit; zero external data) → ship · 0 human edits
5. `cta`       → slide-05.png — "type a word. watch it **shrink.**" → link

**Caption:**
> `> vela.shipped() — drop #018`
>
> store the word MISSISSIPPI the plain way and every letter costs the same eight bits — but it's one M against four S's and four I's, and paying the same for the rare letter as the common one is pure waste. the fix is old: Morse gave E a single dot and Q a long dash because the common letters should cost the least. push that idea to its mathematical limit and you get a Huffman tree — merge the two rarest symbols, repeat — which David Huffman proved optimal in 1951.
>
> but no code can cross one floor: Shannon's entropy, the average surprise per letter. Huffman always lands within a single bit of it, and the only gap left is rounding. this drop computes all of it live in your browser from whatever you type — the tally, the tree, every codeword, the floor. nothing fetched, nothing to go stale. link in bio.
>
> #informationtheory #compression

**Hashtags:** #informationtheory #compression

## Threads — hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. store the word MISSISSIPPI the obvious way and every letter gets the same eight bits — eighty-eight bits for eleven letters. but look at what you're storing: one m, two p's, four s's, four i's. paying the same for the rare m as for the constant s is pure waste. and that waste is everywhere in real text.
2. the fix is old. in the 1830s samuel morse walked into a philadelphia print shop and counted the type in the compositors' cases — more slots for the letters printers used most. so he gave e a single dot and q a long dash-dash-dot-dash. common letters cost the least to send. let frequent symbols be short, rare ones long, and the whole message shrinks.
3. but there's a trap. if e is 0 and t is 01, a receiver seeing 01 can't tell a t from an e-then-something. morse cheated with pauses — a third symbol, silence. to pack bits with no separators you need a prefix-free code: no codeword is the start of another. then the stream parses itself, left to right, the instant the bits match a letter.
4. prefix-free codes have a lovely picture: a binary tree. left branch 0, right branch 1, every letter sitting at a leaf. a codeword is just the path down to its leaf — and because letters live only at the ends, no path is ever the start of another. build the code and you've built a tree.
5. so which tree? in 1951 a grad student named david huffman, given the choice between a final exam and a term paper on exactly this, gambled on the paper — and days before giving up found a rule that's provably optimal: merge the two rarest symbols, repeat until one's left. greedy, local, and unbeatable for whole-symbol codes.
6. and there's a floor under all of it. shannon, 1948: a letter of probability p carries −log₂p bits, and their average — the entropy — is the smallest any code can go. huffman always lands within one bit of it; the only gap is rounding, since you can't spend half a bit on one letter. type your own message and watch how few bits it really needs — what would you feed it?

**First reply:** → velacode.xyz/drops/shortest-message

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first** — if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time.

### 3a — Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "store the word MISSISSIPPI the obvious way and every letter gets the same eight bits — eighty-eight bits for eleven letters. but look at what you're storing: one m, two p's, four s's, four i's. paying the same for the rare m as for the constant s is pure waste. and that waste is everywhere in real text.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-05T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "store the word MISSISSIPPI the obvious way and every letter gets the same eight bits — eighty-eight bits for eleven letters. but look at what you're storing: one m, two p's, four s's, four i's. paying the same for the rare m as for the constant s is pure waste. and that waste is everywhere in real text.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/slide-01.jpg", "metadata": { "altText": "velacode — The Shortest Possible Message — hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/slide-02.jpg", "metadata": { "altText": "not every letter deserves the same room — Morse and variable-length codes" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/slide-03.jpg", "metadata": { "altText": "there's a floor you cannot cross — Huffman, prefix-free codes, Shannon entropy" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/slide-04.jpg", "metadata": { "altText": "build log #018" } } }
          ] },
        { "text": "the fix is old. in the 1830s samuel morse walked into a philadelphia print shop and counted the type in the compositors' cases — more slots for the letters printers used most. so he gave e a single dot and q a long dash-dash-dot-dash. common letters cost the least to send. let frequent symbols be short, rare ones long, and the whole message shrinks." },
        { "text": "but there's a trap. if e is 0 and t is 01, a receiver seeing 01 can't tell a t from an e-then-something. morse cheated with pauses — a third symbol, silence. to pack bits with no separators you need a prefix-free code: no codeword is the start of another. then the stream parses itself, left to right, the instant the bits match a letter." },
        { "text": "prefix-free codes have a lovely picture: a binary tree. left branch 0, right branch 1, every letter sitting at a leaf. a codeword is just the path down to its leaf — and because letters live only at the ends, no path is ever the start of another. build the code and you've built a tree." },
        { "text": "so which tree? in 1951 a grad student named david huffman, given the choice between a final exam and a term paper on exactly this, gambled on the paper — and days before giving up found a rule that's provably optimal: merge the two rarest symbols, repeat until one's left. greedy, local, and unbeatable for whole-symbol codes." },
        { "text": "and there's a floor under all of it. shannon, 1948: a letter of probability p carries −log₂p bits, and their average — the entropy — is the smallest any code can go. huffman always lands within one bit of it; the only gap is rounding, since you can't spend half a bit on one letter. type your own message and watch how few bits it really needs — what would you feed it?" },
        { "text": "→ velacode.xyz/drops/shortest-message" }
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
  "text": "> vela.shipped() — drop #018\n\nstore the word MISSISSIPPI the plain way and every letter costs the same eight bits — but it's one M against four S's and four I's, and paying the same for the rare letter as the common one is pure waste. the fix is old: Morse gave E a single dot and Q a long dash because the common letters should cost the least. push that idea to its mathematical limit and you get a Huffman tree — merge the two rarest symbols, repeat — which David Huffman proved optimal in 1951.\n\nbut no code can cross one floor: Shannon's entropy, the average surprise per letter. Huffman always lands within a single bit of it, and the only gap left is rounding. this drop computes all of it live in your browser from whatever you type — the tally, the tree, every codeword, the floor. nothing fetched, nothing to go stale. link in bio.\n\n#informationtheory #compression",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-06T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/slide-01.png", "metadata": { "altText": "velacode — The Shortest Possible Message — hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/slide-02.png", "metadata": { "altText": "not every letter deserves the same room" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/slide-03.png", "metadata": { "altText": "there's a floor you cannot cross — Huffman and Shannon entropy" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/slide-04.png", "metadata": { "altText": "build log #018" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-05-shortest-message/slide-05.png", "metadata": { "altText": "type a word — watch it shrink — velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery — `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine** — two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; ToolSearch for buffer/create_post/get_account/schedule returned only unrelated tools), and the **raw API is egress-blocked** (`CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy, curl exit 56; `api.bufferapp.com` also refused, curl exit 56; a network-policy denial, not auth). This is the **tenth consecutive** run blocked this way (#009–#018). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked** — Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; adjust `dueAt` to the next open prime slots.
- Per-item Threads asset attach can't be verified via the API — after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat — **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
