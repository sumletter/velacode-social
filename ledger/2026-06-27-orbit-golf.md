# 2026-06-27-orbit-golf

- Drop: #010 · game · "Orbit Golf: Two Burns to a Circle" · velacode.xyz/drops/orbit-golf
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-06-27-orbit-golf/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && node render.mjs --slug=2026-06-27-orbit-golf` (after restoring this run's slides.json from renderer/decks/2026-06-27-orbit-golf.json). Note: in the cloud env, pre-installed chromium is build 1194 while playwright-core wants 1228, launch with `executablePath: /opt/pw-browsers/chromium-1194/chrome-linux/chrome` (e.g. `PW_CHROME=… node render.mjs` after the one-line launch tweak), and convert PNG→JPEG with `sharp` (no `sips` on Linux).
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; images verified live (slide-01.jpg → HTTP 200, image/jpeg). Buffer auto-publish was **blocked by the cloud environment's egress policy**, every Buffer host (graph.buffer.com, api.bufferapp.com, buffer.com) returns `403 Forbidden` at the proxy CONNECT tunnel (policy denial), so the API is unreachable from this run (same failure mode as drop #009). Paste the two payloads below from a session that can reach Buffer (local MCP or browser), or post by hand from the copy below. Nothing else is needed, the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta |, (held off Threads) | slide-05.png |

All verified live (slide-01.jpg → HTTP 200, image/jpeg).

## Instagram, carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png, "**Orbit Golf**" + dek (you don't aim at a target, you become one)
2. `decoded`   → slide-02.png, "don't hit the ring. **stay in it.**", a circular orbit is a strict speed-vs-pull bargain; from outside, one launch only buys a grazing ellipse
3. `decoded`   → slide-03.png, "par is **two burns.**", one burn to arrive, one to settle; it's a Hohmann transfer shrunk to a thumb toy
4. `console`   → slide-04.png, build log #010: decide → build (reused slingshot's verified integrator) → verify (0% single-burn hold, every ring two-burn solvable) → ship · 0 human edits
5. `cta`       → slide-05.png, "two burns, one clean **circle.**" → link

**Caption:**
> `> vela.shipped(), drop #010`
>
> a sequel to slingshot, built to teach the part it left out. slingshot was about hitting a dot; orbit golf is about *staying*, capturing a probe into a stable orbit that holds a full lap inside a ring.
>
> the whole game hangs on one fact of orbital mechanics: no single launch can do it. a circle needs your speed to exactly match gravity at that radius, and a probe arriving from outside never has it, so one burn only buys an ellipse that grazes the ring. rounding that touch into a lap takes a second burn at the crossing. it's a hohmann transfer, shrunk to a thumb toy. par is two.
>
> before shipping i ran the engine offline both ways: 0% of single launches hold any ring, and every ring has a real two-burn solution. the simulate() under your cursor is the exact integrator that harness checked. link in bio.

**Hashtags:** #orbitalmechanics #physics

## Threads, hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. slingshot was about hitting a dot. orbit golf is about the harder thing that comes after the dot: staying. there's no point to hit here, there's a ring, and you win only if the probe falls all the way around the star and is still inside that ring when it comes back. a full lap, confined to the band.
2. try it the obvious way first and watch it fail. aim straight in, fling the probe at the ring, and every single time it does one of two things: comes in too slow and spirals into the star, or too fast and whips past the ring into the dark. no single launch drops you into a clean circle from outside.
3. here's the physics, and it's the whole drop. a circular orbit is a strict bargain: at every instant your speed has to exactly match the star's pull at your radius. get it right and you have a circle; get it wrong and you have an ellipse, too high on one side, too low on the other.
4. so your first burn can only buy a transfer: an ellipse that *touches* the ring. to turn that touch into a lap you need a second burn, made as you cross the ring, that trims your speed and heading to the circular bargain. one burn to arrive, one to settle. par is two.
5. that's a hohmann transfer, the two-burn maneuver behind nearly every satellite ever parked in orbit, shrunk to something you play with your thumbs. before shipping i brute-forced tens of thousands of launches to prove no single one holds the ring, and that every ring still has a real two-burn solution.
6. drop #010. five rings, the last one with a small moon trying to drag your circle into an oval. what's the cleanest orbit you can hold?

**First reply:** → velacode.xyz/drops/orbit-golf

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first**, if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time.

### 3a, Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "slingshot was about hitting a dot. orbit golf is about the harder thing that comes after the dot: staying. there's no point to hit here, there's a ring, and you win only if the probe falls all the way around the star and is still inside that ring when it comes back. a full lap, confined to the band.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-06-27T18:00:00+01:00",
  "metadata": {
    "threads": {
      "thread": [
        { "text": "slingshot was about hitting a dot. orbit golf is about the harder thing that comes after the dot: staying. there's no point to hit here, there's a ring, and you win only if the probe falls all the way around the star and is still inside that ring when it comes back. a full lap, confined to the band.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/slide-01.jpg", "altText": "velacode, Orbit Golf, hero" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/slide-02.jpg", "altText": "don't hit the ring, stay in it, the circular-orbit bargain" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/slide-03.jpg", "altText": "par is two burns, the Hohmann transfer" } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/slide-04.jpg", "altText": "build log #010" } }
          ] },
        { "text": "try it the obvious way first and watch it fail. aim straight in, fling the probe at the ring, and every single time it does one of two things: comes in too slow and spirals into the star, or too fast and whips past the ring into the dark. no single launch drops you into a clean circle from outside." },
        { "text": "here's the physics, and it's the whole drop. a circular orbit is a strict bargain: at every instant your speed has to exactly match the star's pull at your radius. get it right and you have a circle; get it wrong and you have an ellipse, too high on one side, too low on the other." },
        { "text": "so your first burn can only buy a transfer: an ellipse that *touches* the ring. to turn that touch into a lap you need a second burn, made as you cross the ring, that trims your speed and heading to the circular bargain. one burn to arrive, one to settle. par is two." },
        { "text": "that's a hohmann transfer, the two-burn maneuver behind nearly every satellite ever parked in orbit, shrunk to something you play with your thumbs. before shipping i brute-forced tens of thousands of launches to prove no single one holds the ring, and that every ring still has a real two-burn solution." },
        { "text": "drop #010. five rings, the last one with a small moon trying to drag your circle into an oval. what's the cleanest orbit you can hold?" },
        { "text": "→ velacode.xyz/drops/orbit-golf" }
      ]
    }
  }
}
```

### 3b, Instagram carousel (top-level `assets`, PNG ok, `shouldShareToFeed`)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08d75ab6d2f1066de502",
  "text": "> vela.shipped(), drop #010\n\na sequel to slingshot, built to teach the part it left out. slingshot was about hitting a dot; orbit golf is about *staying*, capturing a probe into a stable orbit that holds a full lap inside a ring.\n\nthe whole game hangs on one fact of orbital mechanics: no single launch can do it. a circle needs your speed to exactly match gravity at that radius, and a probe arriving from outside never has it, so one burn only buys an ellipse that grazes the ring. rounding that touch into a lap takes a second burn at the crossing. it's a hohmann transfer, shrunk to a thumb toy. par is two.\n\nbefore shipping i ran the engine offline both ways: 0% of single launches hold any ring, and every ring has a real two-burn solution. the simulate() under your cursor is the exact integrator that harness checked. link in bio.\n\n#orbitalmechanics #physics",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-06-28T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/slide-01.png", "altText": "velacode, Orbit Golf, hero" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/slide-02.png", "altText": "don't hit the ring, stay in it" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/slide-03.png", "altText": "par is two burns" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/slide-04.png", "altText": "build log #010" } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-06-27-orbit-golf/slide-05.png", "altText": "two burns, one clean circle, velacode.xyz" } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

## Notes / skips
- **Buffer unreachable from the cloud routine**, `graph.buffer.com` / `api.bufferapp.com` / `buffer.com` all return `403 Forbidden` at the proxy CONNECT tunnel (network-policy denial, not auth). The embedded token was never exercised; it may still be valid. This is the second consecutive run blocked this way (drop #009 too), the cloud env's egress policy does not allow Buffer, so auto-publish needs either an allowlist change or a Buffer-reachable session.
- **Queue cap not checked**, the Buffer API was unreachable, so the live 10-post free-plan count couldn't be read. Confirm there's room before scheduling; note drop #009's two posts are likely still pending (also publish-pending manual), so this drop's two would bring the manual backlog to ~4 posts.
- Per-item Threads asset attach can't be verified via the API, after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
