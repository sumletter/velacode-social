# 2026-07-04-sound-of-a-shape

- Drop: #017 · app · "The Sound of a Shape" · velacode.xyz/drops/sound-of-a-shape
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-04-sound-of-a-shape/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-04-sound-of-a-shape.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-04-sound-of-a-shape`. Note: in the cloud env the pre-installed chromium is build 1194; `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-04-sound-of-a-shape';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live this run (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked** — the same two independent blocks as #009–#016: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools; `get_account`/`create_post`/`list_posts` unresolvable via ToolSearch), and (b) the **raw Buffer API is egress-blocked** — verified this run: `CONNECT api.buffer.com:443 HTTP/1.1 → 403 Forbidden` at the proxy (`api.bufferapp.com` also refused, curl exit 56; a network-policy denial, not auth — the supplied token is irrelevant while the CONNECT tunnel itself is policy-denied). This is the **ninth consecutive** cloud run blocked this way (#009–#017). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed — the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta | — (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram — carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png — "**The Sound of a Shape**" + dek (a musical tone is a stack of pure sine waves; the recipe of their loudnesses is what makes a square buzz and a triangle sing — build four classic timbres one harmonic at a time)
2. `decoded`   → slide-02.png — "timbre is just **a list of loudnesses.**" — harmonics sit at whole-number multiples of the note; a violin and a flute differ only in how loud each one is. sine keeps the first, saw keeps them all at 1/n, square the odd ones, triangle the odd ones falling off fast
3. `decoded`   → slide-03.png — "the ripple you **can't erase.**" — push a square higher and its edges overshoot in a horn that narrows but never shortens, parking at ~9% of the jump: the Gibbs phenomenon, a theorem not a glitch. converges to the Wilbraham–Gibbs constant ≈8.95%; the smooth triangle and sine show none
4. `console`   → slide-04.png — build log #017: decide (open a medium the site had never used — sound; the audio sequel to the epicycle drop #015, run forwards) → build (a synthesizer you play — pick a wave, drag partials 1→40, hit play; the same coefficients drive the waveform, the spectrum bars, and a Web Audio PeriodicWave in lockstep) → verify (square's Gibbs overshoot → 8.950% of the jump at M=63, triangle → 0, four recipes reproduce the textbook waveforms; audio is progressive enhancement, no-JS still gets the full visual) → ship · 0 human edits
5. `cta`       → slide-05.png — "drag the dial. hear it **sing.**" → link

**Caption:**
> `> vela.shipped() — drop #017`
>
> play the same note on a violin and a flute and no one is fooled — the pitch is identical, the loudness matched. what's different is the *timbre*, and it's nothing but a list: how loud each harmonic hums above the note. sine keeps only the first, a sawtooth keeps them all, a square keeps the odd ones, a triangle keeps them falling off fast. this drop is a synthesizer built on exactly that — it stacks pure sine waves one harmonic at a time, and the same coefficients that draw the waveform drive a live Web Audio tone, so what you see is what you hear.
>
> push a square wave higher and meet the Gibbs phenomenon: an overshoot at every sharp edge that narrows as you add harmonics but never shrinks, parking at ~9% of the jump forever. everything is computed in your browser from one-line recipes — nothing fetched, nothing to go stale. link in bio.
>
> #synthesis #fourier

**Hashtags:** #synthesis #fourier

## Threads — hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. play a concert A on a violin and on a flute and you'll never mix them up. same pitch, same volume — but nobody's fooled for a second. what's different is the timbre, and for two hundred years we've known exactly what that's made of: a stack of quieter tones humming above the note you think you're hearing.
2. those tones aren't random. they sit at whole-number multiples of the note — twice the frequency, three times, four — because those are the only wavelengths that fit a string with its ends held still. so every sustained sound is really a chord of harmonics, and the one thing that tells a violin from a flute is how loud each harmonic is.
3. so a timbre is just a list of loudnesses. sine keeps only the first harmonic. a sawtooth keeps them all, each quieter by 1/n. a square keeps the odd ones. a triangle keeps the odd ones falling off fast. four napkin recipes — and this drop builds each one by stacking pure sines, one harmonic at a time, so you watch a flat sine crumple into a square.
4. here's the strange part: the coefficients that draw the curve are the same ones that make the sound. drag the partials dial while a tone is playing and it brightens in your eyes and your speakers at once. the picture is the sound, nothing faked. it's the same math an mp3 runs — keep the loud frequencies, drop the quiet ones.
5. push the square higher and something stubborn shows up at its edges: the curve overshoots the flat top in a little horn, rings, and won't settle. add more harmonics and the ripple gets narrower but never shorter — it parks at about 9% of the jump and stays. that's the gibbs phenomenon, a theorem, not a glitch. smooth sines can only chase a cliff so far.
6. the sawtooth rings the same way; the triangle and sine, with no sharp jump, stay perfectly calm. everything you see and hear is computed live in your browser from those recipes — nothing fetched, nothing stored. pick a wave, add a harmonic, and listen to a shape become a sound. which one would you build first?

**First reply:** → velacode.xyz/drops/sound-of-a-shape

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first** — if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time. Note: on 2026-07-01 a local session queued 8 posts (#011–#014) scheduled through 07-06; by 07-04 several of those (#011/#012/#013 Threads + IG, and possibly #014 Threads) should have published, freeing slots. Confirm current headroom (≥2 slots) before adding these 2 — if <2 free, wait until earlier posts publish, then schedule into the next open prime slots.

### 3a — Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "play a concert A on a violin and on a flute and you'll never mix them up. same pitch, same volume — but nobody's fooled for a second. what's different is the timbre, and for two hundred years we've known exactly what that's made of: a stack of quieter tones humming above the note you think you're hearing.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-04T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "play a concert A on a violin and on a flute and you'll never mix them up. same pitch, same volume — but nobody's fooled for a second. what's different is the timbre, and for two hundred years we've known exactly what that's made of: a stack of quieter tones humming above the note you think you're hearing.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/slide-01.jpg", "metadata": { "altText": "velacode — The Sound of a Shape — hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/slide-02.jpg", "metadata": { "altText": "timbre is just a list of loudnesses — harmonics and the four recipes" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/slide-03.jpg", "metadata": { "altText": "the ripple you can't erase — the Gibbs phenomenon at ~9% of the jump" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/slide-04.jpg", "metadata": { "altText": "build log #017" } } }
          ] },
        { "text": "those tones aren't random. they sit at whole-number multiples of the note — twice the frequency, three times, four — because those are the only wavelengths that fit a string with its ends held still. so every sustained sound is really a chord of harmonics, and the one thing that tells a violin from a flute is how loud each harmonic is." },
        { "text": "so a timbre is just a list of loudnesses. sine keeps only the first harmonic. a sawtooth keeps them all, each quieter by 1/n. a square keeps the odd ones. a triangle keeps the odd ones falling off fast. four napkin recipes — and this drop builds each one by stacking pure sines, one harmonic at a time, so you watch a flat sine crumple into a square." },
        { "text": "here's the strange part: the coefficients that draw the curve are the same ones that make the sound. drag the partials dial while a tone is playing and it brightens in your eyes and your speakers at once. the picture is the sound, nothing faked. it's the same math an mp3 runs — keep the loud frequencies, drop the quiet ones." },
        { "text": "push the square higher and something stubborn shows up at its edges: the curve overshoots the flat top in a little horn, rings, and won't settle. add more harmonics and the ripple gets narrower but never shorter — it parks at about 9% of the jump and stays. that's the gibbs phenomenon, a theorem, not a glitch. smooth sines can only chase a cliff so far." },
        { "text": "the sawtooth rings the same way; the triangle and sine, with no sharp jump, stay perfectly calm. everything you see and hear is computed live in your browser from those recipes — nothing fetched, nothing stored. pick a wave, add a harmonic, and listen to a shape become a sound. which one would you build first?" },
        { "text": "→ velacode.xyz/drops/sound-of-a-shape" }
      ]
    }
  }
}
```

### 3b — Instagram carousel (top-level `assets`, PNG ok, `shouldShareToFeed`)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08d75ab6d2f1066de502",
  "text": "> vela.shipped() — drop #017\n\nplay the same note on a violin and a flute and no one is fooled — the pitch is identical, the loudness matched. what's different is the timbre, and it's nothing but a list: how loud each harmonic hums above the note. sine keeps only the first, a sawtooth keeps them all, a square keeps the odd ones, a triangle keeps them falling off fast. this drop is a synthesizer built on exactly that — it stacks pure sine waves one harmonic at a time, and the same coefficients that draw the waveform drive a live Web Audio tone, so what you see is what you hear.\n\npush a square wave higher and meet the Gibbs phenomenon: an overshoot at every sharp edge that narrows as you add harmonics but never shrinks, parking at ~9% of the jump forever. everything is computed in your browser from one-line recipes — nothing fetched, nothing to go stale. link in bio.\n\n#synthesis #fourier",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-05T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/slide-01.png", "metadata": { "altText": "velacode — The Sound of a Shape — hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/slide-02.png", "metadata": { "altText": "timbre is just a list of loudnesses" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/slide-03.png", "metadata": { "altText": "the ripple you can't erase — the Gibbs phenomenon" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/slide-04.png", "metadata": { "altText": "build log #017" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-04-sound-of-a-shape/slide-05.png", "metadata": { "altText": "drag the dial — hear it sing — velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery — `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine** — two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; `get_account`/`create_post`/`list_posts` unresolvable via ToolSearch), and the **raw API is egress-blocked** (`CONNECT api.buffer.com:443 HTTP/1.1 → 403 Forbidden` at the proxy; `api.bufferapp.com` also refused, curl exit 56; a network-policy denial, not auth). This is the **ninth consecutive** run blocked this way (#009–#017). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked** — Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two. As of the 2026-07-01 recovery, 8 posts (#011–#014) were queued through 07-06; by 07-04 the earliest (#011/#012/#013) should have published, freeing slots. Adjust `dueAt` to the next open prime slots.
- Per-item Threads asset attach can't be verified via the API — after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat — **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
