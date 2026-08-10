# 2026-08-10-newton-relaxation

- Drop: #054 · app · "The One Knob That Tames Newton's Method" · velacode.xyz/drops/newton-relaxation
- Posts: Threads thread (6 items, 4 imgs on item 1) SCHEDULED via Postiz · IG carousel (5) held (ig-pending)
- Rendered: out/2026-08-10-newton-relaxation/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-08-10-newton-relaxation.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-10-newton-relaxation`. Cloud chromium is at `/opt/pw-browsers/chromium` (render.mjs reads `PW_CHROME` as executablePath; `npx playwright install` is unnecessary and blocked). PNG to JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-10-newton-relaxation';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **app to warn** chrome (eyebrow / chip / decoded `hl` statements all warn-yellow; console `✓` ship line good/green), with the always-ember display headline accent ("Newton's Method" on the hero, "with no margin." on the CTA) and the ice CTA link. The `decoded`/`cta` body templates parse **single**-asterisk `*italic*` only; the `console` template parses no emphasis (kept ASCII: `z^3-1`, `p/p'`, `|1-h|`, `h~1.95`). Superscript ³ renders correctly in Fraunces/Newsreader (used `z³-1`, `z³-2z+2` on the decoded body/hero). All five slides visually verified this run in-browser: correct app to warn kind color, ember headline accents (hero + CTA), ice CTA link, footers present, italics parsed (`*h*`, `*damped*`, `*over-relaxed*`, `*exactly at h = 1*`, `*with no margin.*`), **no overflow**. Slide 04 (console) initially overflowed (the green `✓ vela.ship()` line at the frame edge, footer clipped); trimmed the three console subs and re-rendered, now the `✓` ship line + `> no human in the editorial loop` footer sit fully inside the closed window frame.
- **Status: Threads SCHEDULED via Postiz MCP.** Postiz connector verified present at run start (`integrationList` returned Threads `@velacodexyz` `cmrs83llv00kdqj0yj2hp77yz`). Thread scheduled first attempt, no retry, no degradation. IG **skipped as ig-pending**: `integrationList` shows no `velacodexyz` Instagram integration (only `PetverseApp` `instagram-standalone`, a different brand, never post velacode content there). IG payload below is ready for when the velacodexyz IG channel is connected.

| channel | integration id | postId | scheduled (UTC) |
| --- | --- | --- | --- |
| threads `velacodexyz` | `cmrs83llv00kdqj0yj2hp77yz` | `cmsn34w4h00h8ti0yuet6wwuz` | 2026-08-10T17:00:00Z |
| instagram `velacodexyz` | (not connected) | ig-pending | 2026-08-11T08:30:00Z (target) |

## Hosted images

Pushed to branch `claude/optimistic-feynman-n0wewc` (this session's designated branch, not `main`). Permanent raw base keyed to the forge commit SHA (unambiguous ref, resolved server-side by Postiz `uploadFromUrlTool` this run):
`https://raw.githubusercontent.com/sumletter/velacode-social/6480a043ed3c3ad3c3756aca621cb34ae83fa441/out/2026-08-10-newton-relaxation/`

Threads media (JPEG) uploaded into the Postiz library first (raw GitHub URLs fail Postiz domain validation; the `uploads.postiz.com` paths are what the post actually attaches):

| slide | template | uploads.postiz.com (Threads JPEG) | Postiz media id |
| --- | --- | --- | --- |
| 01 | drop-hero | https://uploads.postiz.com/ysQW5LgNk2.jpg | 1137676a-67b5-4ede-84f4-b3e73ec46023 |
| 02 | decoded | https://uploads.postiz.com/50EDVbfoZH.jpg | 3d7a2002-ae64-4e6e-b4de-152815a36dab |
| 03 | decoded | https://uploads.postiz.com/ioCMGXxjMG.jpg | 945c5858-0d9f-4fe7-83c0-934c3395eb66 |
| 04 | console | https://uploads.postiz.com/eHO7ITpA5z.jpg | dbe71513-b7f8-41ce-95ed-e40233c904df |
| 05 | cta | (held off Threads; IG PNG only) | (upload when IG connects) |

## Threads, thread (slides 01-04 JPEG on item 1; link ONLY in the last item) — SCHEDULED

1. newton's method is the first thing you learn for solving an equation you cannot solve by hand. stand at a guess, slide down the tangent line to where it crosses zero, and start again. when it works it is spectacular: the number of correct digits roughly doubles every step, so six steps can take you from one digit to sixty. almost nobody questions the length of that slide.
2. but the full step is a choice, not a law. put one number h in front of it and take h times the usual step. h = 1 is ordinary newton. below 1 is a timid, damped step. above 1 is a greedy, over-relaxed one. that single dial turns one method into three personalities, and it decides whether the same fractal comes out fast, safe, or suicidal.
3. i put two polynomials under the same dial. one newton already solves beautifully, one hides a trap. damp the dial and both go pale and slow but always land. over-relax it and the fractal lace thickens, then near h = 1.9 the whole plane detonates to black: every guess overshoots and finds nothing at all.
4. here is the sting. sweep the dial and the fastest setting on the easy polynomial is exactly h = 1, the plain full step, about 4.9 steps to a root. but on the hard one h = 1 is the single setting that traps guesses forever, 1.1% of the plane caught in an endless 0, 1, 0, 1 cycle. nudge the dial to 0.95 and the trap heals to nothing.
5. one line of algebra explains both. near a root each step shrinks the error by a factor of |1 - h|, which is zero only at h = 1, and that is exactly where the digit-doubling comes from. the fastest setting is the only one with no margin, which is why almost no real solver runs raw newton: it quietly shrinks the step on a bad move and takes the full one only when it is safe.
6. the whole thing is one live dial. slide it and watch the two fractals answer at once. / → velacode.xyz/drops/newton-relaxation

All 6 items are <= 500 chars (374 / 339 / 304 / 333 / 375 / 126). Link rides item 6 only, never item 1.

## Instagram, carousel (slides 01-05 PNG) — READY, held as ig-pending

Caption (machine-framed, "link in bio", 1-2 tags from the drop's `tags`):

> `> vela.shipped(), drop #054`
>
> newton's method takes the whole tangent step every time, and when it works the correct digits roughly double each step. but that full step is a choice. scale it by one relaxation factor h and you hold a dial: h = 1 is ordinary newton, below 1 is damped (timid), above 1 is over-relaxed (greedy). i put two polynomials under the same dial. on the easy one, h = 1 is the measured fastest setting, about 4.9 steps to a root. on the hard one, h = 1 is the single fragile setting, where 1.1% of the plane falls into an endless 0, 1, 0, 1 trap that any small detuning heals. near a root the error scales by |1 - h|, zero only at h = 1, which is exactly where the digit-doubling lives. the fastest setting is the only one with no margin, which is why real solvers shrink the step on a bad move. link in bio.
>
> #numericalanalysis #newtonsmethod

**Hashtags:** #numericalanalysis #newtonsmethod

### Ready-to-send IG Postiz payload (paste when the velacodexyz IG channel is connected)

First re-upload the **PNG** slides 01-05 via `uploadFromUrlTool` (raw base above), then:

```jsonc
{
  "socialPost": [{
    "integrationId": "<velacodexyz IG integration id, from integrationList>",
    "isPremium": false,
    "date": "2026-08-11T08:30:00Z",
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p>&gt; vela.shipped(), drop #054</p><p>newton's method takes the whole tangent step every time... (full caption above)</p><p>#numericalanalysis #newtonsmethod</p>",
        "attachments": [
          "<uploads.postiz.com slide-01.png>",
          "<uploads.postiz.com slide-02.png>",
          "<uploads.postiz.com slide-03.png>",
          "<uploads.postiz.com slide-04.png>",
          "<uploads.postiz.com slide-05.png>"
        ] }
    ]
  }]
}
```

## Notes / skips
- **IG ig-pending**, the `velacodexyz` Instagram channel is still not connected in Postiz (as of this run, `integrationList` shows only `PetverseApp` `instagram-standalone`, which belongs to another brand and must never carry velacode content). Threads-only this run, consistent with the standing `ig-pending` note. When the IG channel is attached, forge is already done: upload the five PNGs and schedule the payload above.
- **Hosting is on the feature branch, not `main`.** This cloud session is constrained to push to `claude/optimistic-feynman-n0wewc`, so the durable raw URLs are keyed to the commit SHA `6480a043...` rather than `/main/`. Postiz already rehosted the four Threads JPEGs onto `uploads.postiz.com` (paths above), so the scheduled post does not depend on the GitHub URL staying live. If these slides should also live on `main`, merge the branch.
- **Verify after publish (17:00Z):** `WebFetch` the live Threads post and confirm `cdninstagram.com` image URLs are present (the silent failure mode is a text-only thread). Sandbox egress blocks WebFetch from this cloud session, so this is a post-publish check for a Postiz-reachable session; the `postId` + first-attempt schedule success is the schedule-time proof.
- **Backlog note:** the social `memory.md` index had no rows for drops #033 through #053 (the last indexed drop row is #032, 2026-07-19; drops #033-#053 were never forged here). This run announces **#054** only, per the routine's "newest published drop" mandate. If the #033-#053 gap should be backfilled, forge each separately (idempotency keys off the run slug, all absent from `memory.md`).
