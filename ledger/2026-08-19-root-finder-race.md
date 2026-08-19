# 2026-08-19-root-finder-race

- Drop: #063 · research · "Three Ways to Corner a Root, and the Speed They Cost" · velacode.xyz/drops/root-finder-race
- Posts: Threads thread (6 items, 4 imgs on item 1) scheduled · IG carousel (5) held (ig-pending, channel not connected)
- Rendered: out/2026-08-19-root-finder-race/slide-{01..05}.{png,jpg} (4:5, 2160x2700)
- Regenerate: `cd renderer && cp decks/2026-08-19-root-finder-race.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-19-root-finder-race`. In the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). Convert PNG to JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-19-root-finder-race';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research -> ice** chrome (eyebrow / chip / decoded `hl` statements all ice), with the always-ember display headline accent ("Corner a Root" on the hero, "and the speed it costs." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only and render backticks literally; the `console` template parses no emphasis. Glyph note: **phi (U+03C6) and the superscript 2 render correctly in Fraunces/Newsreader**, so the decoded body / CTA use phi, p^2, and 1.618 spelled out; the **console template uses ASCII `phi`** (Space Mono is the safe register). All five slides visually verified this run: correct research->ice kind color, ember headline accents (hero + CTA), ice CTA link, footers present, italics parsed (*Bisection*, *The secant*, *Newton*, *order*, *slope is the order*, *1.618*), phi and p^2 render, **no overflow** (decoded slide 03 last line `p^2 = p + 1` and the console slide 04 green `vela.ship()` line + footer all sit inside the closed window frame).
- **Status: scheduled (Threads) · ig-pending.** Forge -> render -> host -> Postiz publish -> ledger all complete this run. Postiz connector verified present at run start (`integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz`). No `velacodexyz` Instagram integration in the workspace (only the Petverse IG `cmrdiap2q11ltk90yvyzozj8r`, which must never receive velacode content), so the IG carousel was **held** and the run is marked `ig-pending`, consistent with every run since the 2026-07-19 Postiz migration.
- **Threads scheduled:** post id `cmszxqlz3006gla0y6pp5gm1h` on `@velacodexyz` (`cmrs83llv00kdqj0yj2hp77yz`), `type:schedule`, date `2026-08-19T17:00:00Z` (= 18:00 Europe/London, BST). Six `postsAndComments` items; the four Threads JPEGs (slides 01-04) ride the FIRST item; the link rides the LAST item only.
- **Branch note:** images are hosted on the routine's designated dev branch `claude/optimistic-feynman-8vx36m` (raw base below), not `main`, per this run's branch mandate. Postiz ingested each JPEG via `uploadFromUrlTool` at run time, so the scheduled post references `uploads.postiz.com` paths and does not depend on the branch staying live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-8vx36m/out/2026-08-19-root-finder-race/`

| slide | template | jpg (Threads) | png (IG) | uploads.postiz.com (Threads jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/VWC62xCR9B.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/mcXrrJQVxf.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/x3FQM00f5i.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/tpOXJSzQ0p.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG only, ig-pending) |

All raw URLs verified live this run (slide-01.jpg -> HTTP 200 image/jpeg; slide-05.png -> HTTP 200 image/png).

## Threads, thread (as scheduled; 4 JPEGs on item 1, link in the LAST item)
1. here is a function and you want to know where it crosses zero. for most equations worth asking there is no formula, so you do the only thing left: guess, measure how wrong you are, and guess better. every root-finder ever written is just a rule for that second step. i raced three of the classic ones on one equation, and the gap between them is not subtle. [imgs: slides 01-04]
2. bisection keeps two points with the root trapped between them and halves the gap, one bit at a time. it cannot fail. the secant forgets the bracket, draws a line through your last two guesses and jumps to where it hits zero, faster, but free to wander off. newton slides down the tangent and doubles its correct digits each step. on newton's own cubic, to twelve digits: bisection 37 steps, the secant 6, newton 5.
3. counting steps is crude. the honest number is the order: how the error at one step feeds the next. bisection just halves the error forever, a straight line of digits. the secant and newton curve upward, each good guess making the next one disproportionately better. to see the difference you have to measure the curve itself.
4. so plot each method's errors, log against log, and the points fall on a line whose slope is the order. bisection lands on slope 1. newton on slope 2. the secant on about 1.618, the golden ratio, because each of its guesses leans on the previous two errors and the exponent that balances that is the root of p squared = p + 1. same number as the sunflower spirals.
5. speed has a bill. switch to arctan from a wide start and newton's flat tangent flings it from 8 to -86 to 11,500 and clean out of the number system, the secant right behind it, while dull unbreakable bisection just keeps closing. no free lunch, only a spectrum: reckless and fast at one end, safe and slow at the other. brent's method, the thing inside scipy's brentq, quietly holds both.
6. the whole thing is recomputed live in your browser against a root found to machine precision, no external fact, nothing stored. -> velacode.xyz/drops/root-finder-race

## Instagram, carousel (HELD, ig-pending; slides 01-05 PNG, ready for when the velacodexyz IG channel is connected)
Post shape when connected (per PUBLISH.md 3d): single `postsAndComments` item, all five PNGs, `settings: [{ "key": "post_type", "value": "post" }]`, date next morning 09:30 Europe/London (08:30Z during BST). Upload each PNG via `uploadFromUrlTool` first.

1. `drop-hero` -> slide-01.png, "Three Ways to **Corner a Root**" + dek
2. `decoded`   -> slide-02.png, "three hunters, **three bets on risk.**"
3. `decoded`   -> slide-03.png, "the order is **the slope.**"
4. `console`   -> slide-04.png, build log #063
5. `cta`       -> slide-05.png, "three ways to corner a root, **and the speed it costs.**" -> link

**Caption:**
> `> vela.shipped(), drop #063`
>
> three classic root-finders, one equation. bisection traps the root between two points and halves the gap, one bit a step, and cannot fail. the secant draws a line through your last two guesses and jumps, faster but free to wander. newton rides the tangent and doubles its digits each step. to twelve digits on newton's own cubic: 37 steps, 6, and 5.
>
> the honest way to compare them is the convergence order, and you can read it straight off a graph: plot each method's errors log against log and the slope is the order. bisection slope 1, newton slope 2, the secant about 1.618, the golden ratio, because each guess leans on the previous two errors. switch to arctan from a wide start and newton flings itself out of the number system while bisection keeps closing. no free lunch, only a spectrum, with brent's method (scipy's brentq) holding both ends. every trace and slope is recomputed live in your browser. link in bio.
>
> #numericalanalysis #goldenratio

**Hashtags:** #numericalanalysis #goldenratio

## Verify (after publish time)
After the Threads post publishes (2026-08-19 18:00 BST / 17:00Z), `WebFetch` the live post URL and confirm `cdninstagram.com` image URLs are present. A text-only thread is the silent failure mode; the live check is the only proof the four JPEGs attached.

## Notes / skips
- **IG skipped as ig-pending**, the `@velacodexyz` Instagram channel is still not connected in Postiz (unchanged since the 2026-07-19 migration). The workspace's only IG integration is Petverse's (`cmrdiap2q11ltk90yvyzozj8r`), which must never receive velacode content. When a `velacodexyz` IG integration appears in `integrationList`, post the carousel above and record its id here.
- **First cloud-routine Postiz publish** (all prior cloud runs #009-#032 degraded to publish-pending under Buffer; the 2026-07-19 backlog clear happened from a local session). This run confirms the Postiz MCP connector is attached to the routine and the forge -> host -> upload -> schedule path works end-to-end headless.
- **Backlog gap unchanged:** the drops between #032 (last in `memory.md`) and #063 were never forged by the cloud routine. This run announces only #063, the newest published drop, per the routine's "newest published drop in LOG.md" mandate. If the intervening drops warrant social posts, forge them separately (idempotency keys off each run slug).
