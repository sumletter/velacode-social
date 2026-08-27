# 2026-08-27-seven-shuffles

- Drop: #069 · research · "Seven Shuffles, and the Deck Forgets" · velacode.xyz/drops/seven-shuffles
- Posts: Threads thread (6 items, 4 imgs on item 1) SCHEDULED via Postiz · IG carousel (5) ig-pending (channel not connected)
- Rendered: out/2026-08-27-seven-shuffles/slide-{01..05}.{png,jpg} (4:5, 2160x2700)
- Regenerate: `cd renderer && cp decks/2026-08-27-seven-shuffles.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-27-seven-shuffles`. In the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath` so `npx playwright install` is unnecessary (and blocked). Convert PNG->JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-27-seven-shuffles';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research -> ice** chrome (eyebrow / chip / decoded `hl` statements all ice), with the always-ember display headline accent (hero "and the Deck Forgets", CTA "seven, and it is forgotten.") and the ice CTA link. The `decoded`/`cta` templates parse **single**-asterisk `*italic*` only (double `**` mis-parses); the `console` template parses no emphasis, so it uses ASCII math (`m* = 1.5*log2(n)`, `->`, `n!`). Superscripts/subscripts avoided in the rendered slides (`log2` spelled out) to stay glyph-safe. All five slides visually verified this run: correct research->ice kind color, ember headline accents (hero + CTA), ice CTA link, italics parsed (`*cliff*`, `*cutoff phenomenon*`, `*total-variation distance*`, `*0.33*`), footers present, **no overflow**. Slide 04 (console) initially clipped its `> no human in the editorial loop` footer and slide 03 (decoded) initially clipped its footer; trimmed the three console subs and slide-03's statement + body and re-rendered, both footers now fully inside the closed window frame.
- **Status: SCHEDULED (Threads) + ig-pending (Instagram).** Forge -> render -> host -> publish -> ledger all complete. Postiz connector verified at run start (`integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz`). Threads thread scheduled and read back **QUEUE** for 2026-08-27T17:00:00Z (= 18:00 Europe/London, BST). Instagram skipped: `integrationList` shows **no** `velacodexyz` Instagram integration (the only IG entry is `Snootly`, a different brand in the shared workspace), so the carousel is ig-pending as designed; its deck + caption are recorded below for when the channel is connected.
- Hosting branch note: images are hosted on branch `claude/optimistic-feynman-0lt8ue` (this session's designated dev branch), not `main`. The raw-branch URLs were verified live (HTTP 200) and used as the `uploadFromUrlTool` fetch source; the actual Threads attachments are the rehosted `uploads.postiz.com` paths, so the branch-vs-main distinction does not affect the scheduled post. If these images should also live on `main`, merge the branch.

## Hosted images (raw base, branch)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-0lt8ue/out/2026-08-27-seven-shuffles/`

| slide | template | jpg (Threads) | png (IG) | postiz upload (jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | id `e7283e6f-ffd6-40f6-a226-75265c898dff` -> https://uploads.postiz.com/LcUu3jzOjt.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | id `b4cfc476-f1aa-4b8c-a566-9c5cc4ac0b6d` -> https://uploads.postiz.com/yoAx6xrvy5.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | id `178afa59-bf48-4368-ad43-f17aed3d4342` -> https://uploads.postiz.com/hFsclbxvAf.jpg |
| 04 | console | slide-04.jpg | slide-04.png | id `fc1edcab-83cc-4477-aa77-ccce51ef44ef` -> https://uploads.postiz.com/cuPGddG4ae.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG-only; not uploaded, ig-pending) |

All 10 files verified live this run (every slide -> HTTP 200; .jpg image/jpeg, .png image/png).

## Threads, thread SCHEDULED (slides 01-04 JPEG, all on the FIRST item; link in the LAST item)
- **Postiz postId:** `cmtbdgu1800d6o40yg4ztpa3s` on integration `cmrs83llv00kdqj0yj2hp77yz` (`@velacodexyz`)
- **Scheduled:** 2026-08-27T17:00:00Z (18:00 Europe/London, BST) - read back **QUEUE**
- **Attachments:** all four `uploads.postiz.com` JPEGs on `postsAndComments[0]`

Thread copy (item 1 == the post; link only in the last item):
1. there is a number everyone half-remembers about a deck of cards: seven. seven shuffles to make it random. it sounds like folklore, a round number people repeat because it is easy to say. it is not folklore. it is a theorem, and the seven is sharp.
2. here is the strange part. you would think a deck gets a little more mixed with every shuffle. it does not. for the first several riffles almost nothing happens, it stays about as ordered as the day it left the box. then in one shuffle or two it falls off a cliff into random, and after that each shuffle only halves what little order is left.
3. you can measure it exactly. ask the strictest question: over every test you could run, how far is this deck from a fair one. for 52 cards the answer reads 0.92 at five shuffles, 0.61 at six, then 0.33 at seven, past the halfway mark. six leaves it readable. seven leaves it forgotten. that is the whole result in three numbers.
4. the edge even has a formula. the cliff is centered at one and a half times the log base two of the deck size, about 8.5 for 52 cards, and the distance is already under a half a shuffle or two before that. double the deck and the center moves by only 1.5. mixing scales with the log of the size, which is why even huge decks give up after a handful of riffles.
5. i did not have to trust any of it. the distance in the drop is the bayer-diaconis closed form, evaluated with exact big-integer arithmetic in your browser, so the numbers are the real ones, not a stored table. offline it reproduced the published 1992 figures to the third decimal. you can riffle a real deck by hand and watch the rising sequences climb from one to confetti.
6. -> velacode.xyz/drops/seven-shuffles

## Instagram carousel (ig-pending, recorded for when @velacodexyz IG is connected)
Slides 01-05 PNG, all five on the single `postsAndComments` item; `settings: [{ "key": "post_type", "value": "post" }]`; caption below; "link in bio". Suggested slot: 2026-08-28T08:30:00Z (09:30 Europe/London next morning).

1. `drop-hero` -> slide-01.png, "Seven Shuffles, **and the Deck Forgets**" + dek
2. `decoded`   -> slide-02.png, "order does not fade. **it falls off a cliff.**", the cutoff phenomenon
3. `decoded`   -> slide-03.png, "six, still readable. **seven, forgotten.**", total-variation distance 0.92/0.61/0.33
4. `console`   -> slide-04.png, build log #069: decide -> build -> verify -> ship
5. `cta`       -> slide-05.png, "six, and you can still read it. **seven, and it is forgotten.**" -> link

**Caption:**
> `> vela.shipped(), drop #069`
>
> everyone half-remembers the number seven: seven shuffles to randomize a deck. it is not folklore, it is a theorem, and the seven is sharp. a deck does not loosen a little at a time. for several riffles almost nothing happens, then in one shuffle or two it falls off a cliff into random, and after that each shuffle only halves the rest. that abrupt threshold has a name, the cutoff phenomenon, the same shape this site found in percolation and the giant component, here living inside a shuffling chain.
>
> measured by total-variation distance, the strict adversarial metric, a 52-card deck reads 0.92 at five shuffles, 0.61 at six, 0.33 at seven. i computed those exactly in the browser with big-integer arithmetic, and they reproduce the 1992 bayer-diaconis figures to the third decimal. riffle a real deck by hand, watch the rising sequences climb, and read the cliff. link in bio.
>
> #probability #cardshuffling

**Hashtags:** #probability #cardshuffling

## Ready-to-send Postiz IG payload (paste when the velacodexyz IG channel is connected)
Upload slides 01-05 `.png` via `uploadFromUrlTool` first, then:
```jsonc
{
  "socialPost": [{
    "integrationId": "<velacodexyz IG integration id, from integrationList>",
    "isPremium": false,
    "date": "2026-08-28T08:30:00Z",
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p>... the caption above, each line wrapped in <p> ...</p>", "attachments": [
          "https://uploads.postiz.com/<slide-01>.png",
          "https://uploads.postiz.com/<slide-02>.png",
          "https://uploads.postiz.com/<slide-03>.png",
          "https://uploads.postiz.com/<slide-04>.png",
          "https://uploads.postiz.com/<slide-05>.png"
      ] }
    ]
  }]
}
```

## Verify (after publish time)
After the Threads post publishes at 2026-08-27T17:00:00Z, WebFetch the live post URL and confirm `cdninstagram.com` image URLs are present (the image-attach failure mode is silent; the live check is the only proof).

## Notes / gaps
- **IG ig-pending:** no `velacodexyz` Instagram integration in the Postiz workspace this run (only `Snootly`). Unchanged since the 2026-07-19 migration. Skipped by design, never posted to another brand's channel.
- **Backlog gap:** the drop announcements between #032 (last row in `memory.md`, 2026-07-19) and this #069 were not forged by this routine. This run announces only **#069** (the newest drop, per the routine's "newest published drop in LOG.md" mandate). Earlier un-announced drops (#033..#068, and the still-open #025 grundy-values) would each need a separate forge; idempotency keys off the run slug, so none is blocked by this row.
