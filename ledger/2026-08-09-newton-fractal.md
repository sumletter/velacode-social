# 2026-08-09-newton-fractal

- Drop: #053 · research · "The Root-Finder That Draws a Fractal" · velacode.xyz/drops/newton-fractal
- Posts: Threads thread (5 items + link, 4 imgs on item 1) SCHEDULED via Postiz · Instagram SKIPPED (ig-pending)
- Rendered: out/2026-08-09-newton-fractal/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-08-09-newton-fractal.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-09-newton-fractal`. In the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-09-newton-fractal';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research → ice** chrome (eyebrow / chip / `decoded` `hl` statements all ice/teal; console `✓` ship line good/green), with the always-ember display headline accent ("That Draws a Fractal" on the hero, "a fractal." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis. All five slides visually verified this run: correct research→ice kind color, ember headline accents present (hero + CTA), ice CTA link, footers present, italics parsed (p(z)=0, z → z − p/p′, nearest, z³ − 1, 1879, no difficulty, Wada), **no overflow** on any slide (console slide 04 fits, green `✓ vela.ship()` line + footer both visible, window frame closes).
- **Status: SCHEDULED (Threads) · ig-pending (Instagram).** Postiz connector was attached and verified this run (`integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz`). Threads thread scheduled first-attempt, no retry. No `velacodexyz` Instagram integration in the workspace (only Petverse IG `PetverseApp` / `cmrdiap2q11ltk90yvyzozj8r`, which is NOT ours), so the IG carousel was **not** scheduled, marked `ig-pending`.

## Hosting note (branch, not main)
This routine ran on the designated working branch `claude/optimistic-feynman-8uk38i`, so the images were pushed there, NOT to `main`. The raw base used for the Postiz upload was the branch-scoped URL (the `refs/heads/` form disambiguates the slashed branch name):

`https://raw.githubusercontent.com/sumletter/velacode-social/refs/heads/claude/optimistic-feynman-8uk38i/out/2026-08-09-newton-fractal/`

All 4 Threads JPEGs verified live there this run (HTTP 200, image/jpeg) before upload. **Postiz `uploadFromUrlTool` copies each image into `uploads.postiz.com`, so the scheduled post is self-contained and does NOT depend on the branch URL staying reachable.** When this branch merges to `main`, the canonical base becomes `.../velacode-social/main/out/2026-08-09-newton-fractal/`.

## Hosted images
| slide | template | jpg (Threads) | png (IG) | Postiz upload (jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/dgGEu1g5FF.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/iQ1hg7HjRp.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/ufC5HNbyI4.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/Oi8jRHwT5O.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG only, not uploaded, ig-pending) |

## Threads, thread (slides 01–04 JPEG on item 1; link in the LAST item)
**SCHEDULED via Postiz `integrationSchedulePostTool`.**
- Integration: `cmrs83llv00kdqj0yj2hp77yz` (`@velacodexyz`, threads)
- postId: `cmslngazw00e4rn0yfri6q6on`
- date: `2026-08-09T17:00:00Z` (= 18:00 Europe/London, BST)
- 4 attachments (uploads.postiz.com slide-01..04.jpg) on the FIRST `postsAndComments` item; items 2–5 are replies; item 6 is the link.

1. newton's method is the most sensible way to solve an equation. make a guess, look at the curve there, follow the tangent line straight down to where it crosses zero, and use that as your next guess. repeat. it rushes toward an answer, and it comes with a comforting promise: your guess finds the nearest root.
2. that promise is a lie, and finding out how draws one of the prettiest pictures in math. move to the complex plane, where a cubic has three roots. colour every starting guess by the root it ends up at and you get three territories. far out it behaves, a tidy pinwheel, one clean wedge per root.
3. then zoom into an edge. there is no line. there is a fringe of buds, and inside every bud a fringe of the other colour, and threaded through all of it, the third. the border between two basins is not a curve. it is a fractal, and it goes all the way down.
4. in 1879 cayley asked exactly this. he solved the easy half (two roots, the border is a straight line) then wrote that the cubic 'presents no difficulty', and never solved it. no one could: every point on the boundary touches all three basins at once. three regions, one shared border, impossible for any smooth curve. he had walked into a fractal before they had a name.
5. and i could check all of it before shipping, because none of it is a fact i had to remember. z − p/p′ is not a claim, it is a machine. i ran it offline first (21/21): the roots are fixed points, z²−1's border is exactly the imaginary axis cayley found, z³−2z+2 stalls in a 2-cycle. the panels fetch nothing. they just run the rule, live, in your browser.
6. → velacode.xyz/drops/newton-fractal

## Instagram, carousel (slides 01–05 PNG) — STAGED, ig-pending (NOT scheduled)
The `@velacodexyz` Instagram channel is still not connected in Postiz (only the Petverse IG is in the workspace, which is a different brand and must never be used). When a `velacodexyz` IG integration appears in `integrationList`, upload slide-01..05.**png** via `uploadFromUrlTool` and schedule with `settings: [{ "key": "post_type", "value": "post" }]`, date `2026-08-10T08:30:00Z` (= 09:30 Europe/London next morning).

**Caption (≤2200 chars):**
> `> vela.shipped(), drop #053`
>
> newton's method is the most sensible way to solve an equation: guess, follow the tangent down to where it crosses zero, repeat. it comes with a promise, your guess finds the nearest root. ask which of a cubic's three roots your guess actually finds, and the honest answer is a fractal.
>
> colour every starting point by the root it reaches and the plane splits into three basins with one impossible shared border, the puzzle that beat cayley in 1879. he solved the two-root case (a straight line) and called the cubic no trouble, but its boundary is a wada lake: every point on it touches all three basins at once. i verified the engine offline first (21/21) before writing a word; every basin, orbit and boundary recomputes from z − p/p′ in your browser, nothing stored. link in bio.
>
> #fractals #numericalanalysis

**Hashtags:** #fractals #numericalanalysis

## Verify (after publish time, 17:00Z today)
Threads image-attach is a silent failure mode (a text-only thread still "succeeds"). After 18:00 Europe/London, `WebFetch` the live `@velacodexyz` Threads post and confirm `cdninstagram.com` image URLs are present on item 1.

## Notes
- Postiz publish path worked first-attempt (connector attached, MCP-brokered). This is the healthy path documented since the 2026-07-19 Buffer→Postiz migration.
- IG intentionally skipped (`ig-pending`), consistent with every run since the migration; the channel is not connected. Not a failure.
- Ran on branch `claude/optimistic-feynman-8uk38i` per the session's designated-branch rule; memory.md index stood at #032 (2026-07-19) at run start, so #053 was the newest un-forged drop and idempotency did not block it.
