# 2026-08-22-permutation-parity

- Drop: #066 · research · "No Shuffle Is Both" · velacode.xyz/drops/permutation-parity
- Posts: Threads card + thread (4 imgs). **IG: skipped, `ig-pending`** (no `velacodexyz` Instagram integration in the Postiz workspace as of this run).
- Rendered: out/2026-08-22-permutation-parity/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-08-22-permutation-parity.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-22-permutation-parity`. Cloud chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-22-permutation-parity';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research → ice** chrome (eyebrow / chip / decoded `hl` statements / footer accent all ice), with the always-ember display headline accent ("Is Both" on the hero, "is not." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis. Math kept glyph-safe: the minus in `(N − c)` is U+2212 and renders in Fraunces/Newsreader; the console body uses ASCII (`N-c`, `A_N`, `N!/2`). All five slides visually verified this run: correct research→ice kind color, ember headline accents (hero + CTA), ice CTA link, footers present, italics parsed (`*swap*`, `*cycle*`, `*exactly one*`, `*why*`), **no overflow**. Slide 03 (decoded) initially sat tight against its footer (its 3-line headline pushes the body down); trimmed the body one sentence + a parenthetical and re-rendered, now it clears the footer with comfortable breathing room.
- **Status: PUBLISHED to Threads (scheduled).** Postiz connector verified present at run start (`integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz`). Threads thread scheduled via `integrationSchedulePostTool`. **First real cloud auto-publish** for velacode (all prior runs #009-#032 were `publish-pending`; the #015-#032 backlog was cleared from a local session on 2026-07-19). IG skipped as `ig-pending` (channel still not connected in Postiz).

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-ndcajm/out/2026-08-22-permutation-parity/`

> **Branch note:** the harness required this run's writes on branch `claude/optimistic-feynman-ndcajm` (not `main`). `raw.githubusercontent.com` serves any branch by name, so the hosted URLs use that branch path. If these images are later wanted on `main`, merge the branch and re-host is unnecessary (the Postiz media library already holds its own copies, see the `uploads.postiz.com` paths below).

| slide | template | jpg (Threads) | png (IG, unused) | uploads.postiz.com (Threads) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/ORq3aFHtsA.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/doGbWVPoRa.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/9Ylg7JIW8U.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/mxj3mf3tgN.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG only, ig-pending) |

All jpg + png verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Threads, hero card + thread (slides 01-04, JPEG, all 4 on the FIRST item)
**Scheduled:** 2026-08-22T17:00:00Z (= 18:00 Europe/London, BST). Postiz post id `cmt482bk101sjjj0yxe6nxb0g` on integration `cmrs83llv00kdqj0yj2hp77yz` (@velacodexyz).

Thread (link in the LAST item only; item 1 carries all 4 JPEGs):
1. here is a fact every sliding puzzle quietly leans on and never proves. take a shuffled row of tokens and put it back in order using swaps. you can do it a hundred different ways, and each way uses a different number of swaps. so which count is the real one? if it is ambiguous, the whole story falls apart.
2. it does not fall apart, and that is the strange part. bubble the row home one neighbor at a time and you get one count. send each token straight to its slot and you get another. take pointless detours and you get more. the totals genuinely disagree. but check whether each is even or odd, and that never disagrees. not once in 320,000 shuffles.
3. the reason is hidden in loops. follow where each token has to go: slot to slot to slot until you come back to the start. that closed loop is a cycle, and every shuffle breaks into a few of them. here is the whole trick: one swap always changes the number of cycles by exactly one. it splits a loop in two, or fuses two into one. never zero, never both.
4. so count the tokens, subtract the number of cycles, and ask if that is even or odd. every swap flips it, once, without fail. the route you take is free, but where you end up fixes that one bit for good. the swap count wanders. the parity cannot. that single bit is the entire hidden skeleton of the shuffle.
5. it splits every arrangement into two equal halves, and one half can never reach the other. that is why half of every sliding puzzle is impossible, and why sam loyd could safely offer $1,000 for solving his swapped 14-15 board. it sat one swap, one bit, away from solvable, and no amount of sliding can pay that off.
6. the whole proof is playable, undo a shuffle by hand and watch the parity hold while the count scatters. → velacode.xyz/drops/permutation-parity

## Instagram, carousel (slides 01-05) — SKIPPED (`ig-pending`)
No `velacodexyz` Instagram integration exists in the Postiz workspace yet (only the Petverse/Snootly IG is present, which must never receive velacode content). When the `@velacodexyz` IG channel is connected, forge the carousel from slides 01-05 (PNG, all five on one item, `settings post_type:"post"`, next-morning 09:30 Europe/London = 08:30Z in BST). Draft caption + hashtags for that future post:

**Caption (draft, ~130 words):**
> `> vela.shipped(), drop #066`
>
> take a shuffled row and put it back in order with swaps. you can do it a hundred different ways, and the number of swaps changes every single time. so which count is the parity? if it is ambiguous, every sliding-puzzle proof on this site collapses. it is not. bubble-sort it, selection-sort it, or wander, and the totals disagree, but whether each is even or odd never does, not once in 320,000 shuffles i checked offline. the reason is the cycle count: one swap always moves it by exactly one, so (N - cycles) mod 2 is pinned by the destination alone. that one bit splits every arrangement into two equal halves, the alternating group, and it is why half of every sliding puzzle is sealed shut. link in bio.
>
> #grouptheory #combinatorics

**Hashtags:** #grouptheory #combinatorics

## Postiz payload (Threads) — as sent
```jsonc
{
  "socialPost": [{
    "integrationId": "cmrs83llv00kdqj0yj2hp77yz",
    "isPremium": false,
    "date": "2026-08-22T17:00:00Z",
    "shortLink": false,
    "type": "schedule",
    "settings": [],
    "postsAndComments": [
      { "content": "<p>...item 1...</p>", "attachments": [
        "https://uploads.postiz.com/ORq3aFHtsA.jpg",
        "https://uploads.postiz.com/doGbWVPoRa.jpg",
        "https://uploads.postiz.com/9Ylg7JIW8U.jpg",
        "https://uploads.postiz.com/mxj3mf3tgN.jpg"
      ] },
      { "content": "<p>...item 2...</p>", "attachments": [] },
      { "content": "<p>...item 3...</p>", "attachments": [] },
      { "content": "<p>...item 4...</p>", "attachments": [] },
      { "content": "<p>...item 5...</p>", "attachments": [] },
      { "content": "<p>...item 6, link...</p>", "attachments": [] }
    ]
  }]
}
```
Returned: `{"postId":"cmt482bk101sjjj0yxe6nxb0g","integration":"cmrs83llv00kdqj0yj2hp77yz"}`.

## Verify (after 18:00 BST publish)
`WebFetch` the live Threads post and confirm `cdninstagram.com` image URLs are present on item 1 (a text-only thread is the silent image-attach failure mode).
