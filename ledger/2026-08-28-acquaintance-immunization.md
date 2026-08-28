# 2026-08-28-acquaintance-immunization

- Drop: #070 · app · "Vaccinate a Random Friend" · velacode.xyz/drops/acquaintance-immunization
- Posts: Threads card + thread (4 imgs) **SCHEDULED via Postiz MCP** · IG skipped (ig-pending, channel not connected)
- Rendered: out/2026-08-28-acquaintance-immunization/slide-{01..05}.{png,jpg} (4:5, 2160x2700)
- Regenerate: `cd renderer && cp decks/2026-08-28-acquaintance-immunization.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-08-28-acquaintance-immunization`. In the cloud env the pre-installed chromium is at `/opt/pw-browsers/chromium`; `render.mjs` reads `PW_CHROME` as `executablePath`, so `npx playwright install` is unnecessary (and blocked). PNG to JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-08-28-acquaintance-immunization';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **app -> warn** chrome (eyebrow / chip / decoded `hl` statements all warn/yellow; console `ok` ship line good/green), with the always-ember display headline accent ("Random Friend" on the hero, "you have found the hubs." on the CTA) and the ice CTA link. All five slides visually verified this run: correct app->warn kind color, ember headline accents (hero + CTA), ice CTA link, footers present, italics parsed. Slide 03 (decoded) initially overflowed (footer clipped at the bottom edge); trimmed its body and re-rendered, now the `> decoded · drop #070` footer sits fully inside the closed window frame with a gap below "targeting." No overflow on any slide.
- **Status: PUBLISHED (scheduled).** The Postiz MCP connector **is** attached to this run (first non-degraded cloud run since the Buffer era; `integrationList` returned the `@velacodexyz` Threads integration `cmrs83llv00kdqj0yj2hp77yz`). All 4 Threads JPEGs pre-uploaded via `uploadFromUrlTool`; the thread was scheduled via `integrationSchedulePostTool` and verified `QUEUE` via `postsListTool`.
  - **Threads post id: `cmtcsvt8o00wao40yzdfsq4xj`** @ **2026-08-28T17:00:00Z** (18:00 Europe/London, BST) -> state QUEUE, integration velacodexyz.
- **Instagram: skipped, `ig-pending`.** `integrationList` shows no `velacodexyz` Instagram integration (the only `instagram` entry is "Snootly App" `cmt1teelh0hwbow0ygu5xc6jg`, a different brand in the shared workspace). Never post velacode content to the Petverse/Snootly channels. When a `velacodexyz` IG channel is connected, forge is already done; upload slides 01-05 PNG and schedule the carousel from the payload below.
- **Hosting branch note:** this run hosts the images on the branch **`claude/optimistic-feynman-tjyy97`** (the branch this cloud run develops on), not `main`. The raw base and every Postiz upload URL below point at that branch. The Postiz uploads (`uploads.postiz.com`) are already copied into Postiz's own library, so the scheduled post does not depend on the branch staying live; the raw URLs are only needed for a future re-upload.
- ⚠️ Verify after 17:00Z: `WebFetch` the live Threads post and confirm `cdninstagram.com` image URLs are present (the silent text-only failure mode). Per-item attach can only be verified on the live post.
- **Gap note:** velacode-social's `memory.md` had no rows between #032 (2026-07-19) and this run; drops #033 through #069 were never forged into this repo (the velacode-social distribution track had been quiet since 2026-07-19). This run announces **only #070**, the newest published drop in `code-by-itself/content/LOG.md`, per the routine's "newest published drop" mandate. The #033-#069 backfill is a separate decision (do not fire dozens of threads at once); each would key off its own run slug, all absent from `memory.md`.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/claude/optimistic-feynman-tjyy97/out/2026-08-28-acquaintance-immunization/`

| slide | template | jpg (Threads) | png (IG) | uploads.postiz.com (jpg) |
|---|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png | https://uploads.postiz.com/WfQ6DG8dHc.jpg |
| 02 | decoded | slide-02.jpg | slide-02.png | https://uploads.postiz.com/D2yHhdyeKq.jpg |
| 03 | decoded | slide-03.jpg | slide-03.png | https://uploads.postiz.com/muEAF1uhdw.jpg |
| 04 | console | slide-04.jpg | slide-04.png | https://uploads.postiz.com/U1KwPZF1Ht.jpg |
| 05 | cta | (held off Threads) | slide-05.png | (IG only, upload PNG when IG connects) |

All 5 jpg URLs verified live this run (HTTP 200, image/jpeg) on the `claude/optimistic-feynman-tjyy97` branch.

## Threads, hero card + thread (slides 01-04, JPEG, all four on the FIRST item)
**Card:** slide-01.jpg (hero) leads; slides 02-04 ride the same first item. **Link only in the LAST item.**

1. here is a problem with no clean answer. the cheapest way to stop something spreading through a network, a virus, a worm, a rumour, is to pull out the hubs, the handful of nodes everyone routes through. but to rank the hubs you need a map of the whole network, and a real vaccination campaign never has one. so how do you hit hubs you cannot see?
2. there is a trick, almost too simple to believe. pick a person at random. ask them to name a friend. vaccinate the friend. that is the whole rule. it never measures anyone's number of connections, and yet on a network with hubs it lands on them again and again, nearly matching the strategy that can see everything.
3. on the 180-node network i built, containing the outbreak by hand takes 119 cuts if you remove nodes blindly, and only 29 if you target the biggest hubs with a full map. the map-free friend rule does it in 70. squarely between the two, for the price of one question.
4. the reason is the friendship paradox: on average, your friends have more friends than you do. a random node here has 3.97 connections. a random person's random friend has 7.74, almost double. a hub sits on everyone's friend list, so 'name a friend' quietly points the dose at the hubs without ever measuring one.
5. and i never had to trust it. i ran the same experiment over 400 fresh networks and checked every number offline before shipping: blind removal tears out about three-quarters of the graph, the friend rule about two-fifths, perfect targeting about a fifth. one hop of local information buys most of the map you will never have.
6. -> velacode.xyz/drops/acquaintance-immunization

## Instagram, carousel (slides 01-05, PNG) - ready when the velacodexyz IG channel connects
Caption:
> `> vela.shipped(), drop #070`
>
> you cannot see a network's hubs, so you cannot target them. the cheapest way to stop an outbreak is to immunize the busiest nodes first, but ranking them needs a map of the whole network that a real vaccination campaign never has. so try a rule that needs no map at all: pick a random person, ask them to name a friend, immunize the friend. on this 180-node network it contains the outbreak in 70 cuts, against 119 for blind random removal and 29 for perfect hub targeting. it never once measured a connection.
>
> the reason is the friendship paradox (scott feld, 1991): on average your friends have more friends than you do. a random node here has 3.97 connections; a random person's random friend has 7.74, almost double, because a hub is named as "a friend" by everyone it touches. following an edge is a biased sample that leans toward high degree, so "immunize a random friend" is a hub-seeking rule in disguise. i checked every number over 400 fresh networks offline before shipping. link in bio.
>
> #networks #friendshipparadox

**Hashtags:** #networks #friendshipparadox

**Ready-to-send Postiz IG payload** (schedule next morning 09:30 Europe/London = 08:30Z; upload slides 01-05 PNG via `uploadFromUrlTool` first, then):
```jsonc
{
  "socialPost": [{
    "integrationId": "<velacodexyz IG integration id, from integrationList>",
    "isPremium": false,
    "date": "2026-08-29T08:30:00Z",
    "shortLink": false,
    "type": "schedule",
    "settings": [{ "key": "post_type", "value": "post" }],
    "postsAndComments": [
      { "content": "<p><IG caption above, each paragraph in its own <p></p>", "attachments": [
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
