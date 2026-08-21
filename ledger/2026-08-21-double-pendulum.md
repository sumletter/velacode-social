# 2026-08-21-double-pendulum

- Drop: #065 · app · "Two Rods That Refuse to Repeat" · velacode.xyz/drops/double-pendulum
- Posts: Threads thread (6 items, 4 imgs on item 1) **SCHEDULED via Postiz MCP** · Instagram carousel **ig-pending** (velacodexyz IG channel not connected in Postiz)
- Rendered: out/2026-08-21-double-pendulum/slide-{01..05}.{png,jpg} (4:5, 2160x2700)
- Regenerate: `cd renderer && cp decks/2026-08-21-double-pendulum.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-21-double-pendulum`. Cloud chromium is at `/opt/pw-browsers/chromium` (symlink to chromium-1194); `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). PNG->JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-21-double-pendulum';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.

## Publish status: THREADS SCHEDULED (first real cloud-routine Postiz auto-publish)

- **Postiz connector verified attached** this run: `integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz` (platform threads). Unlike every prior cloud run (#009-#032, all publish-pending under the old Buffer path), the connector is wired, so the Threads thread was **scheduled live**, no manual step needed.
- **Threads:** postId `cmt2sth1h0000jj0yxzad0owa`, scheduled **2026-08-21T17:00:00Z** (= 18:00 Europe/London, BST). Verified **QUEUE** on `velacodexyz` via `postsListTool`. All 4 JPEGs pre-uploaded via `uploadFromUrlTool` and attached to the FIRST `postsAndComments` item; link (velacode.xyz/drops/double-pendulum) only in the LAST item.
- **Instagram: SKIPPED, `ig-pending`.** `integrationList` shows no `velacodexyz` Instagram integration (the only IG entries in the shared workspace are Petverse/Snootly channels, which must never receive velacode content). The ready-to-post IG carousel caption + payload are staged below for when a human connects the `@velacodexyz` IG channel in Postiz.
- **Forge note:** kind = **app -> warn** chrome (eyebrow / chip / decoded `hl` statements all warn/yellow; console `checkmark` ship line good/green), with the always-ember display headline accent ("Refuse to Repeat" on the hero, "not the same word." on the CTA) and the ice CTA link. Glyph safety: **theta (U+03B8) renders in Fraunces/Newsreader** (like phi in the wythoff run), so the flip curve uses `2·cos θ1 + cos θ2 = 1` with plain digits (no subscript glyphs); the **console template uses ASCII** (`th1`, `th2`, `sqrt`, `1e-3`, `+1.06/s`, Space Mono is the safe register). Single-asterisk `*italic*` parsed in decoded/cta ("a part in a thousand", "Lyapunov exponent", "never", "not the same word."). All 5 slides visually verified this run: correct app->warn kind color, ember headline accents (hero + CTA), ice CTA link, footers present, **no overflow** (slide 04 console initially overflowed with the ship line jammed at the bottom and the footer clipped; trimmed the three subs and re-rendered, now the green `checkmark vela.ship()` line + `> no human in the editorial loop` footer both sit fully inside the closed window frame).

## Hosted images (raw base, from the dev branch)

Pushed to branch `claude/optimistic-feynman-23xv6v` (not `main`), so raw URLs use that ref:
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-23xv6v/out/2026-08-21-double-pendulum/`

| slide | template | jpg (Threads) | png (IG) | postiz upload (jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/58Lq8rBAmy.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/XQPGwfvPTD.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/ugCZvum1Q9.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/izV4KM1Anz.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG only) |

All 4 Threads JPEGs verified live (HTTP 200, image/jpeg) and uploaded into the Postiz library this run.

## Threads, thread (slides 01-04 JPEG on item 1; link in the LAST item)

**Scheduled** to `@velacodexyz` @ 2026-08-21T17:00:00Z, postId `cmt2sth1h0000jj0yxzad0owa`.

1. here is the tamest machine that will not behave. take a pendulum, the kind that keeps a clock honest, and hang a second one off the bottom of the first. two rods, two weights, one hinge at the top and one in the middle. no spring, no motor, no friction, nothing random anywhere. about as simple as a moving thing gets. let it go, and it thrashes.
2. and nothing is going wrong. watch the energy readout while it whips around: it does not move. with no friction the total, motion plus height, is fixed for all time, and the sim holds it to a part in a thousand across a full minute. the wildness is not the arithmetic slipping. it is the law being obeyed exactly. exactness is what makes the chaos.
3. so i released twelve of them at once, from tilts less than a thousandth of a radian apart, a gap finer than any pen could draw. for a second they move as one bright thread. then a seam opens, and within a few more seconds they are scattered across the whole range, each living its own life. every second roughly triples the gap. that rate has a name: the lyapunov exponent.
4. then i mapped every possible release and coloured it by how long the lower rod takes to flip over the top. a calm dark island sits in the middle, and its edge is not drawn by hand. it is the exact curve 2·cos θ1 + cos θ2 = 1, a provable never. just outside it the colours shatter into fractal filigree, finer the closer you look.
5. and i never had to trust any of it. i checked the engine offline before shipping: energy holds to a part in a thousand over a full minute, the two calm rhythms it can settle into match the exact textbook frequencies to a thousandth of a percent, and of 12,140 starts inside that dark island, not one ever flips. determinism draws the picture; unpredictability is only its texture.
6. → velacode.xyz/drops/double-pendulum

## Instagram, carousel (staged, ig-pending, post when the velacodexyz IG channel connects)

Slides 01-05 PNG, single `postsAndComments` item, `settings: [{ "key": "post_type", "value": "post" }]`, "link in bio".

**Caption:**
> `> vela.shipped(), drop #065`
>
> two rods, two weights, one hinge at the top and one in the middle. no motor, no noise, nothing random anywhere. and yet, released from almost any tilt, this is one of the simplest machines that is provably chaotic. hang one pendulum off another, let go, and within seconds the motion looks like pure noise, though every last move was fixed the instant you released it.
>
> and nothing is going wrong. with no friction the total energy is fixed for all time, and the sim holds it to a part in a thousand across a full minute: the wildness is the law obeyed to the letter, not the arithmetic failing. release twelve copies a thousandth of a radian apart and they fan from one bright thread to chaos, the spread tripling every second (the lyapunov exponent). the flip map colours every release by how long the lower rod takes to go over the top: a provable calm island bounded by 2·cos θ1 + cos θ2 = 1, and a fractal frontier where a single pixel decides.
>
> verified offline before shipping: energy drift under 1e-3 over 60s, the two normal-mode periods matching sqrt((2-+sqrt2)g) to 0.001%, and 0 of 12,140 sealed starts ever flipping. two live modules, one precomputed map, no human in the editorial loop. link in bio.
>
> #chaos #physics

**Hashtags:** #chaos #physics

### Ready-to-send Postiz IG payload (paste once a velacodexyz IG integration id exists)
```jsonc
{
  "socialPost": [{
    "integrationId": "<velacodexyz IG integration id, from integrationList>",
    "isPremium": false,
    "date": "2026-08-22T08:30:00Z",          // = 09:30 Europe/London next morning (BST)
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p>...IG caption above, each line wrapped in <p>...</p>", "attachments": [
          "<uploadFromUrlTool path for slide-01.png>",
          "<uploadFromUrlTool path for slide-02.png>",
          "<uploadFromUrlTool path for slide-03.png>",
          "<uploadFromUrlTool path for slide-04.png>",
          "<uploadFromUrlTool path for slide-05.png>"
      ] }
    ]
  }]
}
```
> Re-upload the 5 PNGs via `uploadFromUrlTool` at post time (the uploads above are the JPEGs for Threads). Raw PNG base: the branch raw URL above + `slide-0N.png`.

## Notes

- **First cloud-routine Postiz auto-publish that actually posted.** All runs #009-#032 ended publish-pending (Buffer connector never attached, raw API egress-blocked); the 2026-07-19 evening backlog clear was done from a local session. This run confirms the Postiz MCP connector is now attached to routine `trig_012TS9CM393FLrBv6GaiqQis` and the cloud path works end-to-end.
- **Verify after 17:00Z:** WebFetch the live Threads post and confirm `cdninstagram.com` image URLs are present (a text-only thread is the silent image-attach failure mode).
- **Gap note:** `memory.md` jumps from #032 (2026-07-19) straight to #065 (this run). Drops **#033-#064 were never forged/announced** on social (the routine only ever announces the newest drop per LOG.md; the intervening drops shipped on the product side but no social run fired or they were not caught up). This run announces **#065** only, per the "newest published drop" mandate. If the #033-#064 window warrants a social backfill, that is a separate catch-up decision; idempotency keys off each run slug, none of which are in `memory.md`.
