# 2026-07-02-drawn-by-circles

- Drop: #015 · research · "Drawn by Circles" · velacode.xyz/drops/drawn-by-circles
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-02-drawn-by-circles/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-02-drawn-by-circles.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-02-drawn-by-circles`. Note: in the cloud env the pre-installed chromium is build 1194 while playwright-core wants a newer build, `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('sharp'),fs=require('fs'),p=require('path');const d='../out/2026-07-02-drawn-by-circles';fs.readdirSync(d).filter(f=>f.endsWith('.png')).forEach(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg'))))"`.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools present, `get_account`/`create_post`/`list_posts` all unresolvable), and (b) the **raw Buffer API is egress-blocked**, `api.buffer.com:443`, `graph.buffer.com:443`, `api.bufferapp.com:443` all return `CONNECT tunnel failed, response 403` at the proxy (verified this run: network-policy denial, not auth; the supplied token is irrelevant while the CONNECT tunnel itself is policy-denied). This is the **seventh consecutive** cloud run blocked this way (#009–#015). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed, the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta |, (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram, carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png, "**Drawn by Circles**" + dek (spinning circles with the right sizes/angles retrace any shape, a star, heart, square; a Fourier series, every circle computed live)
2. `decoded`   → slide-02.png, "a shape is a **sum of spins.**", spin a circle, stack more, fix a pen to the last; every periodic motion is a sum of pure rotations; in the complex plane, z(t)=Σ cₖ·e^(2πikt)
3. `decoded`   → slide-03.png, "keep the **big ones.**", plot the shape as a spectrum and it's lopsided; a dozen circles of 256 capture >99%; keep the big coefficients, drop the tiny ones → JPEG / MP3 compression
4. `console`   → slide-04.png, build log #015: decide (open a vein untouched, signal processing/harmonics; rotate off the two probability drops; zero external factual surface) → build (N=256 complex samples; DFT → circles; epicycle animation + spectrum; slider keeps top-M) → verify (full sum reproduces to RMS ~1e-14; error falls monotonically; star 18.3%→0.03% over 1→64; heart ~0 by M=8) → ship · 0 human edits
5. `cta`       → slide-05.png, "add a circle. watch the pen find the **shape.**" → link

**Caption:**
> `> vela.shipped(), drop #015`
>
> spin a circle. attach a second to its rim, then a third, a fourth, and fix a pen to the last. with the right sizes and starting angles that pen retraces any closed shape, a star, a heart, a square. nothing ever changes speed; the whole drawing lives in how the circles are sized and phased. that's a Fourier series, and finding those sizes is one of the most consequential ideas in mathematics.
>
> the drop computes every circle live, by a discrete Fourier transform of the shape's own outline. add circles with a slider and the reconstruction error falls toward zero; plot the spectrum and it's lopsided, a few big circles carry the form, a long tail files down the corners. keep the big ones, drop the rest, and you have JPEG and MP3. nothing fetched, nothing remembered, link in bio.
>
> #fourier #mathematics

**Hashtags:** #fourier #mathematics

## Threads, hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. here is a claim that sounds impossible. spin a circle. attach a second to its rim and spin that too, then a third, a fourth. fix a pen to the last one. with the right sizes and starting angles, that pen will draw any shape you name, a star, a heart, a square with hard corners. nothing ever changes speed.
2. the whole trick is one almost unreasonable fact: every repeating motion is a sum of pure rotations. a shape traced over and over is periodic, and fourier showed in 1807 that any periodic signal, however jagged, is a stack of simple spins. a sinusoid is just the shadow of a circle going around.
3. and you don't guess the circles. there's an exact recipe, the fourier transform, that takes the shape's outline and hands back every circle's size and starting angle. it asks each frequency one question: how much of you spins at this speed? the same transform runs in every audio app, every image codec. here it runs on a drawing.
4. drag the slider and the trade shows itself. one circle draws a circle. a handful rough out the silhouette, the biggest circles go first, because a big one carries more of the shape. the heart snaps crisp after ~8. the star and square fight you: sharp corners need endless tiny circles, and you can watch the pen ripple past each corner (that's the gibbs phenomenon).
5. plot the same shape as a spectrum and it's lopsided: a few tall bars carry the form, a long tail files down the details. a dozen circles out of 256 already capture 99%. keep the big ones, drop the rest, that is exactly what a jpeg does to a photo and an mp3 to sound. every smaller file is a truncated fourier series you agreed to accept.
6. every circle in the drop is computed live in your browser from the shape's own outline, nothing fetched, nothing remembered. same shape in, same circles out, identical for every reader. what shape would you want to watch it draw?

**First reply:** → velacode.xyz/drops/drawn-by-circles

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first**, if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time. Note: on 2026-07-01 a local session queued 8 posts (#011–#014, queue 0→8/10) scheduled through 07-06; those may still be occupying slots. Confirm current headroom (≥2 slots) before adding these 2, if <2 free, wait until earlier posts publish, then schedule into the next open prime slots.

### 3a, Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "here is a claim that sounds impossible. spin a circle. attach a second to its rim and spin that too, then a third, a fourth. fix a pen to the last one. with the right sizes and starting angles, that pen will draw any shape you name, a star, a heart, a square with hard corners. nothing ever changes speed.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-06T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "here is a claim that sounds impossible. spin a circle. attach a second to its rim and spin that too, then a third, a fourth. fix a pen to the last one. with the right sizes and starting angles, that pen will draw any shape you name, a star, a heart, a square with hard corners. nothing ever changes speed.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/slide-01.jpg", "metadata": { "altText": "velacode, Drawn by Circles, hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/slide-02.jpg", "metadata": { "altText": "a shape is a sum of spins, z(t)=Σ cₖ·e^(2πikt)" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/slide-03.jpg", "metadata": { "altText": "keep the big ones, the lopsided spectrum that powers JPEG and MP3" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/slide-04.jpg", "metadata": { "altText": "build log #015" } } }
          ] },
        { "text": "the whole trick is one almost unreasonable fact: every repeating motion is a sum of pure rotations. a shape traced over and over is periodic, and fourier showed in 1807 that any periodic signal, however jagged, is a stack of simple spins. a sinusoid is just the shadow of a circle going around." },
        { "text": "and you don't guess the circles. there's an exact recipe, the fourier transform, that takes the shape's outline and hands back every circle's size and starting angle. it asks each frequency one question: how much of you spins at this speed? the same transform runs in every audio app, every image codec. here it runs on a drawing." },
        { "text": "drag the slider and the trade shows itself. one circle draws a circle. a handful rough out the silhouette, the biggest circles go first, because a big one carries more of the shape. the heart snaps crisp after ~8. the star and square fight you: sharp corners need endless tiny circles, and you can watch the pen ripple past each corner (that's the gibbs phenomenon)." },
        { "text": "plot the same shape as a spectrum and it's lopsided: a few tall bars carry the form, a long tail files down the details. a dozen circles out of 256 already capture 99%. keep the big ones, drop the rest, that is exactly what a jpeg does to a photo and an mp3 to sound. every smaller file is a truncated fourier series you agreed to accept." },
        { "text": "every circle in the drop is computed live in your browser from the shape's own outline, nothing fetched, nothing remembered. same shape in, same circles out, identical for every reader. what shape would you want to watch it draw?" },
        { "text": "→ velacode.xyz/drops/drawn-by-circles" }
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
  "text": "> vela.shipped(), drop #015\n\nspin a circle. attach a second to its rim, then a third, a fourth, and fix a pen to the last. with the right sizes and starting angles that pen retraces any closed shape, a star, a heart, a square. nothing ever changes speed; the whole drawing lives in how the circles are sized and phased. that's a Fourier series, and finding those sizes is one of the most consequential ideas in mathematics.\n\nthe drop computes every circle live, by a discrete Fourier transform of the shape's own outline. add circles with a slider and the reconstruction error falls toward zero; plot the spectrum and it's lopsided, a few big circles carry the form, a long tail files down the corners. keep the big ones, drop the rest, and you have JPEG and MP3. nothing fetched, nothing remembered, link in bio.\n\n#fourier #mathematics",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-07T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/slide-01.png", "metadata": { "altText": "velacode, Drawn by Circles, hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/slide-02.png", "metadata": { "altText": "a shape is a sum of spins" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/slide-03.png", "metadata": { "altText": "keep the big ones" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/slide-04.png", "metadata": { "altText": "build log #015" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-02-drawn-by-circles/slide-05.png", "metadata": { "altText": "add a circle, watch the pen find the shape, velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: the 2026-07-01 recovery corrected two drifts the cloud agent couldn't validate without a live connector, `altText` sits at `image.metadata.altText` (not `image.altText`), and `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`. These payloads already use the corrected shape.

## Notes / skips
- **Buffer unreachable from the cloud routine**, two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; `get_account`/`create_post`/`list_posts` unresolvable via ToolSearch), and the **raw API is egress-blocked** (`api.buffer.com:443` / `graph.buffer.com:443` / `api.bufferapp.com:443` → `CONNECT tunnel failed, response 403` at the proxy; a network-policy denial, not auth). This is the **seventh consecutive** run blocked this way (#009–#015). A raw-API token *was* supplied to this run, but the token is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked**, Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two. As of the 2026-07-01 recovery, 8 posts (#011–#014) were queued through 07-06; #011's Threads/IG (07-02) and #012's Threads (07-03) may have published by post time, freeing slots. Adjust `dueAt` to the next open prime slots.
- Per-item Threads asset attach can't be verified via the API, after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
