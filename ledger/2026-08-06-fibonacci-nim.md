# 2026-08-06-fibonacci-nim

- Drop: #050 · game · "Take What You Want, Never Twice as Much" · velacode.xyz/drops/fibonacci-nim
- Posts: Threads thread (6 items, 4 imgs on item 1) · IG **skipped, ig-pending** (velacodexyz IG channel still not connected in Postiz)
- Rendered: out/2026-08-06-fibonacci-nim/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-08-06-fibonacci-nim.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-06-fibonacci-nim`. Cloud chromium lives at `/opt/pw-browsers/chromium` (symlink to `chromium-1194/chrome-linux/chrome`); `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-06-fibonacci-nim';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **game → ember** chrome (eyebrow / chip / decoded `hl` statements all ember; console `✓` ship line green), with the always-ember display headline accent ("Never Twice as Much" on the hero, "and the fibonacci numbers." and "sum of fibonaccis." on the decoded statements, "surrender the lead." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis. Unicode note: **φ (U+03C6) and ≈ render correctly in Newsreader** (slide 03 body ends "golden ratio, φ ≈ 1.618"); the console template stays ASCII (`n=2000`, `1..89`). All five slides visually verified this run: correct game→ember kind color, ember headline accents (hero + both decoded statements + CTA), ice CTA link, footers present, italics parsed (`*except*`, `*twice*`, `*lose*`, `*Fibonacci numbers*`, `*every*`, `*is*`, `*smallest*`, `*more than twice apart*`), **no overflow**. Slide 02 (decoded 01) initially crowded its footer; trimmed the body (dropped the closing "not a pattern you would guess" sentence) and re-rendered, now the last body line "exactly, and nothing else." sits well above the `> decoded · drop #050` footer with a clear gap.

## Publish status: Threads SCHEDULED via Postiz MCP · IG ig-pending

- **Connector verified first** (per CLOUD_PUBLISH.md Step 0): `integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz` (correct workspace, the shared one that also hosts Petverse). **No** `velacodexyz` Instagram integration present (only `PetverseApp` instagram-standalone, which is a different brand and must never receive velacode content) → IG carousel **skipped, ig-pending**, Threads only.
- **Threads thread SCHEDULED.** Postiz `postId` **`cmshdg0na004wqk0ylpfa10mg`** on integration `cmrs83llv00kdqj0yj2hp77yz`, `type:"schedule"`, `date` **2026-08-06T17:00:00Z** (= 18:00 Europe/London, BST). All 4 JPEGs (slides 01-04) pre-uploaded via `uploadFromUrlTool` and attached to the FIRST `postsAndComments` item; link (`→ velacode.xyz/drops/fibonacci-nim`) rides the LAST (6th) item only, never item 1. `settings: []` (Threads needs none), `isPremium:false`, `shortLink:false`.
- **Hosting from the branch ref, not `main`.** This cloud run is constrained to push only to its designated branch `claude/optimistic-feynman-kqpyea`, so the raw URLs are hosted from that ref (`raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-kqpyea/out/...`), all verified HTTP 200 (jpg image/jpeg, png image/png) before upload. Postiz's `uploadFromUrlTool` copies each image server-side into its own `uploads.postiz.com` library, so the scheduled post no longer depends on the GitHub ref staying live.

## Postiz upload paths (uploads.postiz.com, used as the Threads attachments)
| slide | template | source raw jpg | uploads.postiz.com path |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | https://uploads.postiz.com/2PG7L4moSA.jpg |
| 02 | decoded   | slide-02.jpg | https://uploads.postiz.com/hFsMIq6aZ8.jpg |
| 03 | decoded   | slide-03.jpg | https://uploads.postiz.com/dgfHJqO0CC.jpg |
| 04 | console   | slide-04.jpg | https://uploads.postiz.com/NlOuGztoYe.jpg |

## Hosted images (raw base, branch ref)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-kqpyea/out/2026-08-06-fibonacci-nim/`
All slides verified live this run (HTTP 200; .jpg image/jpeg, .png image/png).

## Threads, hero card + thread (slides 01-04 JPEG on item 1; link in the LAST item)
1. here is a whole game. one pile of stones, two players, last stone wins. so far the first player just grabs everything and wins. so we add one rule: on the opening move you may take anything except the whole pile, and after that you may never take more than twice what your opponent just took. that one clause about not being greedy turns a boring sweep into something deep.
2. solve it and a strange thing shows up. the piles you lose from, moving first, the ones a perfect opponent always walks home, are exactly 1, 2, 3, 5, 8, 13, 21, 34, 55, 89. the fibonacci numbers, and nothing else. not the even numbers, not multiples of anything. why would a rule about doubling single out the oldest sequence in the book?
3. the answer is a lovely theorem most people never meet. every number is a sum of fibonacci numbers in exactly one way, if you never use two that sit next to each other. seventeen is 13 + 3 + 1. twenty is 13 + 5 + 2. dial any pile and its pieces fall out. a fibonacci number is the boring case, one piece, nothing to give away. every other pile has a smallest piece.
4. that smallest piece is the winning move. take it, and your opponent is capped at twice what you took, which is never quite enough to reach the next piece up, because non-adjacent fibonaccis always sit more than twice apart. they shave a little, you shave the new smallest piece, and the pile only ends one place: a single fibonacci with a cap big enough to take it whole.
5. the whole thing turns on one sliver: the rule caps them at twice, the fibonacci spacing puts the escape at more than twice, and the two meet at the golden ratio. i checked every claim against a full minimax before writing a word: 0 mismatches to n=2000, 0 failures over 2983 winning piles. play it, take the smallest piece, then never surrender the lead.
6. → velacode.xyz/drops/fibonacci-nim

## Instagram, carousel (slides 01-05 PNG) — HELD, ig-pending
Ready if/when the `@velacodexyz` IG channel is connected in Postiz. Caption below.

**Caption:**
> `> vela.shipped(), drop #050`
>
> one pile of stones, two players, last stone wins. add a single rule about restraint, on the opening move take anything but the whole pile, and after that never more than twice what your opponent just took, and a trivial sweep becomes a deep game. solve it and the piles you lose from, moving first, are exactly the fibonacci numbers: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89. the way out is zeckendorf's theorem, every number is a unique sum of non-adjacent fibonaccis, and the smallest piece is always the winning move, because the next piece up sits more than twice away while your opponent is capped at twice. the rule and the spacing meet at the golden ratio.
>
> i verified every claim against a full minimax before writing a word: 0 mismatches to n=2000, 0 failures over 2983 winning piles. link in bio.
>
> #gametheory #fibonacci

**Hashtags:** #gametheory #fibonacci

## Ready-to-send Postiz IG payload (paste when the velacodexyz IG channel is connected)
Upload the 5 PNGs via `uploadFromUrlTool` first (raw GitHub URLs fail Postiz domain validation), then:
```jsonc
{
  "socialPost": [{
    "integrationId": "<velacodexyz IG integration id, from integrationList>",
    "isPremium": false,
    "date": "2026-08-07T08:30:00Z",          // = 09:30 Europe/London (BST), next morning
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p>...IG caption above...</p>", "attachments": [
          "<uploads.postiz.com path for slide-01.png>",
          "<uploads.postiz.com path for slide-02.png>",
          "<uploads.postiz.com path for slide-03.png>",
          "<uploads.postiz.com path for slide-04.png>",
          "<uploads.postiz.com path for slide-05.png>"
      ] }
    ]
  }]
}
```

## Verify (after 2026-08-06T17:00:00Z publish time)
`WebFetch` the live Threads post URL once it publishes and confirm `cdninstagram.com` image URLs are present (the image-attach failure mode is a silent text-only thread; the live check is the only proof).

## Notes / gaps
- This routine last forged **#032 wythoff** (2026-07-19); drops **#033-#049** were shipped by the product but never announced here (no ledger rows, absent from `memory.md`). This run announces **#050** only, per the routine's "newest published drop in LOG.md" mandate. If a backlog catch-up for #033-#049 is wanted, forge them separately (idempotency keys off each run slug).
- IG remains `ig-pending`: connect `@velacodexyz` Instagram in the shared Postiz workspace, then post the held carousel from the payload above.
