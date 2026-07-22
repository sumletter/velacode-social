# 2026-07-22-prime-race

- Drop: #035 · research · "The Race the Primes Rig" · velacode.xyz/drops/prime-race
- Posts: Threads thread (6 items, 4 imgs on item 1) · IG carousel **ig-pending** (channel not connected)
- Rendered: out/2026-07-22-prime-race/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-22-prime-race.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-22-prime-race`. Cloud chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). PNG→JPEG via `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-22-prime-race';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research → ice** chrome (eyebrow / chip / decoded `hl` statements / CTA link all ice; console `✓` ship line good/green), with the always-ember display headline accent ("the Primes Rig" on the hero, "finite mile." on the CTA). The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only; the `console` template parses no emphasis. Glyph note: the superscript **² renders correctly in Newsreader** (used in slide 03: 3², 5², 7², 11²); the **console template uses ASCII** (`p^2`, `10^6`, `mod 4`) since Space Mono is the safe register. All five slides visually verified this run: correct research→ice kind color, ember headline accents (hero + CTA), ice CTA link, footers present and inside the window frame, italics parsed (`*4k+1*`, `*4k+3*`, `*fair*`, `*99.84%*`, `*one more than a multiple of four*`, `*primes*`), **no overflow**. Slides 02 (decoded) initially overflowed (footer clipped); trimmed the body (dropped the 26,861 sentence, tightened the Dirichlet clause) and slide 03 preemptively, re-rendered, both now sit above their footers with margin.

## Status: **PUBLISHED (scheduled) via Postiz MCP** — Threads. IG ig-pending.

**First successful Postiz-era cloud publish for the drop routine.** The `@velacodexyz` Threads
connector (`cmrs83llv00kdqj0yj2hp77yz`) was present in `integrationList` this run, so the auto-publish
path worked (no Buffer-era egress block). This ends the #009–#032 publish-pending streak for the drop
routine.

- **Threads thread scheduled:** postId `cmrvxhbbj009smr0yknii9gpi`, integration `cmrs83llv00kdqj0yj2hp77yz` (@velacodexyz), 6 items (4 JPEGs on item 1), **date `2026-07-22T17:00:00Z` = 18:00 Europe/London (BST)**. Link rides the LAST item only.
- **Instagram: ig-pending (channel not connected).** `integrationList` returned no `velacodexyz` Instagram integration (the only IG in the shared workspace is `PetverseApp` / `cmrdiap2q11ltk90yvyzozj8r`, a different brand, **never post velacode content there**). The IG carousel payload below is staged for when the `@velacodexyz` IG channel is connected.
- **Verify after 18:00 London:** `WebFetch` the live Threads post and confirm `cdninstagram.com` image URLs are present on item 1 (the image-attach silent-failure check).

## Hosted images (raw base, feature branch)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-kgbokw/out/2026-07-22-prime-race/`

| slide | template | jpg (Threads) | png (IG) | postiz upload (jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/ZpMqeZMwDh.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/kScOnnmGWv.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/oUiEvtgRLM.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/ZvxNMvJqHF.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG only, upload PNGs when IG connects) |

All five JPEGs verified live this run (HTTP 200, image/jpeg). Note: hosted on the routine's designated
branch `claude/optimistic-feynman-kgbokw` (raw.githubusercontent serves branch names with slashes fine;
Postiz copies each image into its own library at upload time, so the GitHub URL only needs to resolve
at upload, which it did).

## Threads, thread (slides 01–04 JPEG on item 1; link in the LAST item only) — SCHEDULED
1. here is a race that is fixed and fair at the same time. take the odd primes and split them into two teams by dividing by four: the ones that leave remainder 1 (5, 13, 17, 29) and the ones that leave remainder 3 (3, 7, 11, 19). count upward, each prime scores for its team, and watch the tally.  *(+ slides 01–04)*
2. in 1837 dirichlet proved the teams tie at infinity. the ratio of their counts marches to exactly 1, no favourite, a dead heat. so the race is fair. then you actually run it, and the 4k+3 team grabs the lead almost immediately and will not give it back. across the first three million integers it is in front 99.84% of the time.
3. the underdog, 4k+1, does not pull ahead until you reach 26,861, and even then it holds the lead for just eighteen numbers before losing it again. littlewood proved in 1914 that the lead does flip infinitely often, so 4k+1 leads over and over, forever. it is just spectacularly rare. the bias is real; the exceptions are freak weather.
4. why would an honest race lean? square the small odd primes: 9, 25, 49, 121, 169. every one is one more than a multiple of four. the squares all pile into the 4k+1 lane, and the smoothed count number theory controls quietly hands that lane extra credit. the primes themselves have to run behind to pay it back. the lead is a debt the squares ran up.
5. chebyshev spotted the lean in a letter in 1853 and could not explain it. the full accounting waited until rubinstein and sarnak in 1994. i checked the whole thing offline against a sieve to three million before writing a word: 4k+3 in front 99.84% of the time, first crossing at exactly 26,861. it all recomputes live in your browser.
6. the whole race is a sieve running as you scroll, no stored numbers, nothing to go stale. → velacode.xyz/drops/prime-race

## Instagram, carousel (slides 01–05 PNG) — STAGED, ig-pending
Caption (machine-framed, ~150 words, ≤2200 chars, "link in bio"):
> `> vela.shipped(), drop #035`
>
> sort the odd primes into two teams by their remainder mod 4: the 4k+1 side (5, 13, 17, 29) and the 4k+3 side (3, 7, 11, 19). dirichlet proved in 1837 that the two teams tie at infinity, the ratio of their counts goes to exactly 1, no favourite. then you run the race and the 4k+3 team leads 99.84% of the first three million integers, and the underdog 4k+1 does not pull ahead until x = 26,861. a fair race, led essentially the whole way. that is chebyshev's bias.
>
> the reason is the squares: every odd prime squared is one more than a multiple of four, so they all pile into the 4k+1 lane, and the honest count of primes there has to run behind to repay the credit. i verified all of it offline against a sieve to three million before writing a word, then let it recompute live in your browser. link in bio.
>
> #primes #numbertheory

**Hashtags:** #primes #numbertheory

### IG payload (send when the @velacodexyz IG channel is connected)
Upload slides 01–05 **.png** via `uploadFromUrlTool` first, then:
```jsonc
{
  "socialPost": [{
    "integrationId": "<velacodexyz IG integration id, from integrationList>",
    "isPremium": false,
    "date": "2026-07-23T08:30:00Z",          // 09:30 Europe/London (BST)
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p>...IG caption above, each line in <p>...</p>...</p>", "attachments": [
        "<uploads.postiz.com/slide-01.png>",
        "<uploads.postiz.com/slide-02.png>",
        "<uploads.postiz.com/slide-03.png>",
        "<uploads.postiz.com/slide-04.png>",
        "<uploads.postiz.com/slide-05.png>"
      ] }
    ]
  }]
}
```

## Notes
- **Idempotency key:** run slug `2026-07-22-prime-race` (this ledger + the memory.md row). A re-run must STOP.
- Threads per-item image attach can't be API-verified; after 18:00 London, WebFetch the live post and confirm `cdninstagram.com` URLs on item 1.
- Gap note: drops **#033 (`prime-gaps`)** and **#034 (`fifteen-puzzle`)** have no ledger rows and are not in `memory.md`; this run announces **#035** only (the newest drop, per the routine's mandate). #025 `grundy-values` also still has no row. Forge any of those separately if wanted (idempotency keys off their run slugs, all absent from `memory.md`).
