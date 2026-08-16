# 2026-08-16-prime-power-race

- Drop: #060 · research · "The Ledger Where the Prime Race Runs Even" · velacode.xyz/drops/prime-power-race
- Posts: Threads thread (5 items + link, 4 imgs on item 1) · IG carousel (5) **skipped, ig-pending**
- Rendered: out/2026-08-16-prime-power-race/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Deck: renderer/decks/2026-08-16-prime-power-race.json
- Regenerate: `cd renderer && cp decks/2026-08-16-prime-power-race.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-16-prime-power-race`. In the cloud env the pre-installed chromium is `/opt/pw-browsers/chromium`; render.mjs reads `PW_CHROME` as executablePath, so `npx playwright install` is unnecessary. Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-16-prime-power-race';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research → ice** chrome (eyebrow / chip / decoded `hl` statements all ice; console `✓` ship line good/green), with the always-ember display headline accent ("Prime Race Runs Even" on the hero, "the race runs even." on the CTA) and the ice CTA link. Unicode ψ / θ / √ / ≡ all render clean in both the console and decoded templates. **Slide 02 (decoded 01) overflowed on the first render** (body's last line clipped the footer); trimmed the body ~150 chars and re-rendered, second render fits (footer `> decoded · drop #060` visible, no clip). All five slides visually verified this run: correct research→ice kind color, ember headline accents (hero + CTA), ice CTA link, footers present, no overflow.

## Status: PUBLISHED to Threads (scheduled via Postiz MCP)

- **Connector verified:** `integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz` (correct workspace, the shared one that also hosts Petverse). No fallback to a raw API.
- **Threads thread SCHEDULED**, confirmed `state: QUEUE`:
  - postId `cmsvno71d028kql0yq4wvpod4` · integration `cmrs83llv00kdqj0yj2hp77yz` (`@velacodexyz`)
  - group `889e503f-2a4a-4996-8a73-74a77b356820`
  - publishDate `2026-08-16T17:00:00Z` (= 18:00 Europe/London, BST)
  - 4 JPEGs attached to the FIRST `postsAndComments` item; link only in the LAST item.
- **Instagram: SKIPPED, `ig-pending`.** `integrationList` shows no `velacodexyz` Instagram integration (only a Petverse `instagram-standalone`, which must never receive velacode content). When a `velacodexyz` IG channel is connected in Postiz, post the ready IG payload below (upload the 5 PNGs via `uploadFromUrlTool` first).

## Hosting note (branch, not main)

This run committed to branch `claude/optimistic-feynman-prufyk` (not `main`), per the session's branch constraint. Raw images are live on that branch and were verified HTTP 200 before upload:

`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-prufyk/out/2026-08-16-prime-power-race/slide-NN.{jpg,png}`

Once this branch merges to `main`, the canonical URL becomes
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-08-16-prime-power-race/slide-NN.{jpg,png}`.
The scheduled Threads post does **not** depend on either GitHub URL, its images were copied into Postiz's own library (`uploads.postiz.com`, paths below) at schedule time.

## Postiz-hosted media (uploaded via uploadFromUrlTool)

| slide | template | GitHub raw (branch) | Postiz upload path (used on the post) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | https://uploads.postiz.com/77oPvoXjvP.jpg |
| 02 | decoded   | slide-02.jpg | https://uploads.postiz.com/fhx4tRmKS3.jpg |
| 03 | decoded   | slide-03.jpg | https://uploads.postiz.com/8kmtEoAHwI.jpg |
| 04 | console   | slide-04.jpg | https://uploads.postiz.com/hdXn9pVAtf.jpg |
| 05 | cta       | slide-05.png | (IG only, not yet uploaded, ig-pending) |

## Threads thread (as scheduled)

**Item 1** (attachments: slides 01-04 JPEG)
> split the odd primes into two teams by their remainder mod 4: the 4k+1 team (5, 13, 17...) against 4k+3 (3, 7, 11...). dirichlet proved in 1837 they are equally common in the long run. but run the race and watch the lead: 4k+3 is in front almost the entire way. push the line out to three million and it has led 99% of the road.

**Item 2**
> that lean has a name, chebyshev bias, noticed in 1853. and here is the strange part: it is not unfairness, it is an accounting artifact. we have been counting the wrong thing. there is a different ledger, the one the deep theory is actually written in, and on that one the very same race comes out a dead tie.

**Item 3**
> the fix is one rule. weight each prime by ln p (its natural log), then do not stop at the primes, count every prime power too: 9, 27, 81, 25, 125, each carrying the ln p of its base. that larger tally is chebyshev psi. draw it beside the raw race and it settles onto the tie line and crosses it thousands of times.

**Item 4**
> subtract one race from the other and the gap is not noise, it tracks a plain √x. why? square any odd prime and you land one more than a multiple of four (9, 25, 49, 121), so every prime square falls into the 4k+1 lane, the underdog lane. there are about √x of them, exactly the weight 4k+1 was running behind. psi collects both halves and comes out even. the whole story is the squares: 1,683 of the 1,713 gap at three million.

**Item 5**
> divide by three instead and it all repeats: the raw race leans even harder, but the squares crowd into the 3k+1 lane just the same, and psi is just as level. the race was never unfair. we only saw a lean because one line item was missing from the ledger. which is the more honest number, the one you see, or the one that comes out even?

**Item 6 (link, last item only)**
> → velacode.xyz/drops/prime-power-race

## Instagram carousel (READY, ig-pending, post when the velacodexyz IG channel is connected)

Slides 01-05 PNG, all five on the single `postsAndComments` item, `settings: [{ "key": "post_type", "value": "post" }]`, cadence next morning 09:30 Europe/London = `2026-08-17T08:30:00Z` (BST). Upload the 5 PNGs via `uploadFromUrlTool` first (raw GitHub URLs fail Postiz domain validation), then use the returned `uploads.postiz.com` paths as attachments.

PNG raw URLs (branch; use the `main` equivalents after merge):
- slide-01.png .. slide-05.png under `https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-prufyk/out/2026-08-16-prime-power-race/`

**IG caption:**
> `> vela.shipped(), drop #060`
>
> the prime race leans hard toward one team, 4k+3 ahead 99% of the way to three million, and stays there. that is chebyshev's bias, noticed in 1853. but the lean is an accounting artifact. weight each prime by ln p, then count every prime power too (9, 27, 81, 25, 125), the tally analytic number theory actually controls, chebyshev's psi, and the very same race comes out a dead tie. the gap between the two races is a smooth √x, cast by the prime squares, which all land in the underdog's lane. this drop draws both races on one axis so the bias appears and vanishes with nothing but the choice of ledger. i checked it offline first: to three million the squares alone supply 1,683 of the 1,713 correction, exactly. every ledger recomputes from a sieve in your browser on load, nothing stored, nothing to go stale. link in bio.
>
> #primes #numbertheory

**Hashtags:** #primes #numbertheory

### Ready-to-send Postiz IG payload (paste when the velacodexyz IG integration exists)

```jsonc
{
  "socialPost": [{
    "integrationId": "<velacodexyz IG integration id, from integrationList>",
    "isPremium": false,
    "date": "2026-08-17T08:30:00Z",
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p>> vela.shipped(), drop #060</p><p>the prime race leans hard toward one team, 4k+3 ahead 99% of the way to three million, and stays there. that is chebyshev's bias, noticed in 1853. but the lean is an accounting artifact. weight each prime by ln p, then count every prime power too (9, 27, 81, 25, 125), the tally analytic number theory actually controls, chebyshev's psi, and the very same race comes out a dead tie. the gap between the two races is a smooth √x, cast by the prime squares, which all land in the underdog's lane. this drop draws both races on one axis so the bias appears and vanishes with nothing but the choice of ledger. i checked it offline first: to three million the squares alone supply 1,683 of the 1,713 correction, exactly. every ledger recomputes from a sieve in your browser on load, nothing stored, nothing to go stale. link in bio.</p><p>#primes #numbertheory</p>",
        "attachments": [ "<uploads.postiz.com path for slide-01.png>", "<slide-02.png>", "<slide-03.png>", "<slide-04.png>", "<slide-05.png>" ] }
    ]
  }]
}
```

## Verify (after publish time)

After 2026-08-16 18:00 Europe/London, `WebFetch` the live `@velacodexyz` Threads post and confirm `cdninstagram.com` image URLs are present on item 1 (the image-attach failure mode is silent, the live check is the proof). postId `cmsvno71d028kql0yq4wvpod4`.

## Notes

- **Idempotency:** run slug `2026-08-16-prime-power-race` was absent from `memory.md` at run start (last row #032). This row makes the run idempotent.
- **Prior gap:** this checkout's `memory.md` / `ledger/` reflect main only through drop #032 (2026-07-19). Drops #033-#059 have no social rows here and were not forged this run (the routine's mandate is the newest drop only, #060). If any of those still warrant a post, forge them separately, idempotency keys off each run slug.
- **Threads only** this run (IG `ig-pending`), per the connector state, no velacodexyz IG channel in Postiz.
