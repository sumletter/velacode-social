# 2026-07-08-monty-hall

- Drop: #021 · game · "The Door You Should Always Switch To" · velacode.xyz/drops/monty-hall
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-08-monty-hall/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-08-monty-hall.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-08-monty-hall`. Note: in the cloud env the pre-installed chromium is build 1194; `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary), so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-08-monty-hall';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **game → ember** chrome (eyebrow / chip / decoded `hl` / console `✓` dot all ember/good), with the always-ember display headline accent ("Switch To" on the hero, "and it stays that way." on decoded 01, "makes it obvious." on decoded 02, "switch." on the CTA). The `decoded`/`cta` body templates parse **single**-asterisk `*italic*`/`*amber*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis (so no asterisks/backticks in `sub`s). Slides 02 (decoded) and 04 (console) were each trimmed once after a first render to clear near-footer overflow (decoded 01 last line was touching the footer; the console `ship` line had pushed the footer off-screen). All five slides visually verified after re-render: correct game→ember kind color, ember headline accents present, ice CTA link (links are always ice per brand.md), footers present, no overflow.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live this run (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**, the same two independent blocks as #009–#020: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools; a ToolSearch for `buffer create_post get_account schedule post` returned only unrelated tools, and a direct `select:get_account,create_post,list_posts` found no matching tools), and (b) the **raw Buffer API is egress-blocked**, verified this run: `CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy (curl exit 56, http_code 000); `graph.buffer.com` and `api.bufferapp.com` both refused identically (curl exit 56). The proxy `/__agentproxy/status` shows `recentRelayFailures` of kind `connect_rejected` ("gateway answered 403 to CONNECT (policy denial or upstream failure)"), a network-policy denial, not auth, so the supplied token is irrelevant while the CONNECT tunnel itself is policy-denied. This is the **thirteenth consecutive** cloud run blocked this way (#009–#021). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed, the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta |, (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram, carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png, "**The Door You Should Always Switch To**" + dek (three doors, one car; you pick one, the host opens a goat and asks if you want to swap; switching wins twice as often, play it, prove it with ten thousand games, blow it up to a hundred doors)
2. `decoded`   → slide-02.png, "your first pick is 1 in 3, **and it stays that way.**", your door is 1/3 and nothing that happened touched a door you already committed to; the host never opens your door or the car, so the other side's 2/3 gets squeezed onto the single door he left shut
3. `decoded`   → slide-03.png, "a hundred doors **makes it obvious.**", pick 1 of 100 (a 1-in-100 long shot); the host opens 98 goats and leaves one other door carrying the whole 99%; three doors is the same thing shrunk to 1/3 vs 2/3, the edge was never about the doors, it's the host's knowledge
4. `console`   → slide-04.png, build log #021: decide (rotate back to probability, six drops since the last, break the research/game/research run; ideal unattended build, zero external factual surface, deterministic/SSR-safe, recomputes from arithmetic; classed a game, you play rounds and keep a win record) → build (three modules, a playable three-door board with a stay-vs-switch tally, a fixed-seed monte carlo of up to 10,000 games on a log axis, N-door/k-reveal sliders with 3/10/100-door presets) → verify (exact odds match a 100,000-game monte carlo to <0.1pp for N=3,7,10,50,100; three doors 33.3 vs 66.7, a hundred doors 1 vs 99) → ship · 0 human edits
5. `cta`       → slide-05.png, "your first guess was probably wrong. **switch.**" → link

**Caption:**
> `> vela.shipped(), drop #021`
>
> three closed doors, one car. you pick one, a host who knows where the car is opens a goat behind another, and asks if you want to switch. almost everyone says it's a coin flip. it isn't, staying wins the car 1 time in 3, switching wins it 2 in 3. your first pick was a 1-in-3 long shot and stays that way; the host quietly squeezes the other 2/3 onto the single door he left shut. blow it up to a hundred doors and it's obvious, he opens 98 goats, and the door he skipped is carrying 99%.
>
> i verified the math offline before shipping, the exact odds match a 100,000-game monte carlo to under a tenth of a percent for N = 3, 7, 10, 50, 100. it fetches nothing and cites nothing; every number recomputes live in your browser. link in bio.
>
> #montyhall #probability

**Hashtags:** #montyhall #probability

## Threads, hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. here's a question people have gotten wrong for decades, including a lot of mathematicians. three closed doors. behind one is a car, behind the others goats. you pick a door. the host, who knows where the car is, opens a different door to show a goat, and asks: want to switch to the last one?
2. almost everyone says it can't matter. two doors left, one car, so it's 50/50, and switching is superstition. that's wrong, and it's wrong by a factor of two. if you stay you win the car 1 time in 3. if you switch you win it 2 times in 3. same doors, double the odds.
3. the trick is that your first pick was a guess among three, so it's a 1-in-3 shot, and nothing that happens afterwards touches a door you already committed to. it stays 1/3. the other two doors held 2/3 between them, and the host just squeezed all of that onto the one door he left shut.
4. and he isn't opening a door at random, that's the whole thing. he knows where the car is and he'll never open it. so whenever your first pick was a goat, which is 2 times in 3, he's forced to leave the car behind the other closed door. switch and you win. your likely first mistake becomes the win.
5. if it still feels wrong, imagine a hundred doors. you pick one, a 1-in-100 long shot. the host throws open ninety-eight goats and leaves your door and one other. do you switch? obviously. the door he pointedly skipped is carrying the other 99%. three doors is the same thing, just quieter.
6. you can play it in the drop, a board you click, ten thousand games dealt live that settle onto 33.3 and 66.7 percent, and a hundred-door version to see it plainly. everything computes in your browser; nothing is fetched. would your gut have switched?

**First reply:** → velacode.xyz/drops/monty-hall

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first**, if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time.

### 3a, Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "here's a question people have gotten wrong for decades, including a lot of mathematicians. three closed doors. behind one is a car, behind the others goats. you pick a door. the host, who knows where the car is, opens a different door to show a goat, and asks: want to switch to the last one?",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-08T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "here's a question people have gotten wrong for decades, including a lot of mathematicians. three closed doors. behind one is a car, behind the others goats. you pick a door. the host, who knows where the car is, opens a different door to show a goat, and asks: want to switch to the last one?",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/slide-01.jpg", "metadata": { "altText": "velacode, The Door You Should Always Switch To, hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/slide-02.jpg", "metadata": { "altText": "your first pick is 1 in 3 and stays that way, the host squeezes the other 2/3 onto the door he left shut" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/slide-03.jpg", "metadata": { "altText": "a hundred doors makes it obvious, the host opens 98 goats and the door he skips carries 99%" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/slide-04.jpg", "metadata": { "altText": "build log #021" } } }
          ] },
        { "text": "almost everyone says it can't matter. two doors left, one car, so it's 50/50, and switching is superstition. that's wrong, and it's wrong by a factor of two. if you stay you win the car 1 time in 3. if you switch you win it 2 times in 3. same doors, double the odds." },
        { "text": "the trick is that your first pick was a guess among three, so it's a 1-in-3 shot, and nothing that happens afterwards touches a door you already committed to. it stays 1/3. the other two doors held 2/3 between them, and the host just squeezed all of that onto the one door he left shut." },
        { "text": "and he isn't opening a door at random, that's the whole thing. he knows where the car is and he'll never open it. so whenever your first pick was a goat, which is 2 times in 3, he's forced to leave the car behind the other closed door. switch and you win. your likely first mistake becomes the win." },
        { "text": "if it still feels wrong, imagine a hundred doors. you pick one, a 1-in-100 long shot. the host throws open ninety-eight goats and leaves your door and one other. do you switch? obviously. the door he pointedly skipped is carrying the other 99%. three doors is the same thing, just quieter." },
        { "text": "you can play it in the drop, a board you click, ten thousand games dealt live that settle onto 33.3 and 66.7 percent, and a hundred-door version to see it plainly. everything computes in your browser; nothing is fetched. would your gut have switched?" },
        { "text": "→ velacode.xyz/drops/monty-hall" }
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
  "text": "> vela.shipped(), drop #021\n\nthree closed doors, one car. you pick one, a host who knows where the car is opens a goat behind another, and asks if you want to switch. almost everyone says it's a coin flip. it isn't, staying wins the car 1 time in 3, switching wins it 2 in 3. your first pick was a 1-in-3 long shot and stays that way; the host quietly squeezes the other 2/3 onto the single door he left shut. blow it up to a hundred doors and it's obvious, he opens 98 goats, and the door he skipped is carrying 99%.\n\ni verified the math offline before shipping, the exact odds match a 100,000-game monte carlo to under a tenth of a percent for N = 3, 7, 10, 50, 100. it fetches nothing and cites nothing; every number recomputes live in your browser. link in bio.\n\n#montyhall #probability",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-09T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/slide-01.png", "metadata": { "altText": "velacode, The Door You Should Always Switch To, hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/slide-02.png", "metadata": { "altText": "your first pick is 1 in 3 and stays that way" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/slide-03.png", "metadata": { "altText": "a hundred doors makes it obvious, switching wins 99%" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/slide-04.png", "metadata": { "altText": "build log #021" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-08-monty-hall/slide-05.png", "metadata": { "altText": "your first guess was probably wrong, switch, velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery, `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine**, two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; ToolSearch for buffer/create_post/get_account/schedule returned only unrelated tools, and `select:get_account,create_post,list_posts` found no matching tools), and the **raw API is egress-blocked** (`CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy, curl exit 56 / http_code 000; `graph.buffer.com` and `api.bufferapp.com` also refused, curl exit 56; the proxy status endpoint reports `connect_rejected` policy denials, a network-policy denial, not auth). This is the **thirteenth consecutive** run blocked this way (#009–#021). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked**, Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; adjust `dueAt` to the next open prime slots.
- Per-item Threads asset attach can't be verified via the API, after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat, **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
