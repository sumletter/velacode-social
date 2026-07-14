# 2026-07-09-edge-of-chaos

- Drop: #022 · research · "The Edge of Chaos, Dialled" · velacode.xyz/drops/edge-of-chaos
- Posts: IG carousel (5) · Threads card + thread (4 imgs)
- Rendered: out/2026-07-09-edge-of-chaos/slide-{01..05}.{png,jpg} (4:5, 2160×2700)
- Regenerate: `cd renderer && cp decks/2026-07-09-edge-of-chaos.json slides.json && PW_CHROME=/opt/pw-browsers/chromium node render.mjs --slug=2026-07-09-edge-of-chaos`. Note: in the cloud env the pre-installed chromium is build 1194; `render.mjs` reads `PW_CHROME` as `executablePath` (the `/opt/pw-browsers/chromium` symlink points at the 1194 binary), so `npx playwright install` is unnecessary (and blocked). Convert PNG→JPEG with `sharp` (no `sips` on Linux): `node -e "const s=require('./renderer/node_modules/sharp'),fs=require('fs'),p=require('path');const d='out/2026-07-09-edge-of-chaos';Promise.all(fs.readdirSync(d).filter(f=>f.endsWith('.png')).map(f=>s(p.join(d,f)).jpeg({quality:90}).toFile(p.join(d,f.replace('.png','.jpg')))))"`.
- Forge note: kind = **research → ice** chrome (eyebrow / chip / decoded `hl` statement / link all ice; console `✓` ship line good/green), with the always-ember display headline accent ("Chaos, Dialled" on the hero, "predict what happens." on the CTA). The `decoded`/`cta` body templates parse **single**-asterisk `*italic*`/`*amber*` only (double `**` mis-parses) and render backticks literally; the `console` template parses no emphasis (so no asterisks/backticks in `sub`s, the equation was left out of the console subs for that reason). Slides 03 (decoded) and 04 (console) were each trimmed once after a first render to clear near-footer overflow (decoded 02's last line was touching the footer; the console's `ship` line had pushed the "no human in the editorial loop" footer off-screen). All five slides visually verified after re-render: correct research→ice kind color, ember headline accents present, ice CTA link, footers present, no overflow.
- **Status: publish-pending (manual).** Forge → render → host → ledger all complete; all 10 image URLs verified live this run (HTTP 200, image/jpeg + image/png). Buffer auto-publish was **blocked**, the same two independent blocks as #009–#021: (a) the **Buffer MCP connector is not attached** to this run (no `mcp__buffer__*` tools; a ToolSearch for `buffer create_post get_account schedule post` returned only unrelated tools, and a direct `select:get_account,create_post,list_posts` found no matching tools), and (b) the **raw Buffer API is egress-blocked**, verified this run: `CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy (curl exit 56, http_code 000); `graph.buffer.com` and `api.bufferapp.com` both refused identically (curl exit 56). The proxy `/__agentproxy/status` shows `recentRelayFailures` of kind `connect_rejected` ("gateway answered 403 to CONNECT (policy denial or upstream failure)"), a network-policy denial, not auth, so the supplied token is irrelevant while the CONNECT tunnel itself is policy-denied. This is the **fourteenth consecutive** cloud run blocked this way (#009–#022). Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Post the two payloads below from a Buffer-reachable session (a local Claude Code REPL has the Buffer MCP / an un-blocked raw API). Nothing else is needed, the raw image URLs are already live.

## Hosted images (raw base)
`https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/`

| slide | template | jpg (Threads) | png (IG) |
|---|---|---|---|
| 01 | drop-hero | slide-01.jpg | slide-01.png |
| 02 | decoded | slide-02.jpg | slide-02.png |
| 03 | decoded | slide-03.jpg | slide-03.png |
| 04 | console | slide-04.jpg | slide-04.png |
| 05 | cta |, (held off Threads) | slide-05.png |

All verified live this run (every slide → HTTP 200; .jpg image/jpeg, .png image/png).

## Instagram, carousel (slides 01–05, top-level assets, PNG ok)
1. `drop-hero` → slide-01.png, "**The Edge of Chaos, Dialled**" + dek (one equation, one growth dial; turn it slowly and a single steady value splits into two, then four, then eight, faster and faster, until it shatters into chaos; hidden in the speed of that shattering is a universal number, and every figure is computed live from one line of arithmetic)
2. `decoded`   → slide-02.png, "push the dial past 3, **and one value becomes two.**", feed a population back through xₙ₊₁ = r·xₙ·(1−xₙ); low r locks onto one steady value, r past 3 splits it in two (high, low, high, low), and each value splits again, 4-cycle, 8, 16, the splits arriving faster and faster
3. `decoded`   → slide-03.png, "every route to chaos **hides the same number.**", the doublings pile up at r ≈ 3.5699, the edge of chaos; the ratio of each cycle's span in r to the next converges on δ = 4.6692016… (Feigenbaum's constant), which has nothing to do with the parabola, any smooth map that doubles its way to chaos hands back the same 4.669 (dripping faucets, convecting fluids, cardiac arrhythmia)
4. `console`   → slide-04.png, build log #022: decide (rotate format back to research after a game, open continuous dynamical systems, the continuous-parameter companion to #020's discrete cellular automata; zero external factual surface, deterministic/SSR-safe, recomputes on load by iterating one equation) → build (three modules over a shared growth dial, a cobweb plot with a live Lyapunov exponent, the bifurcation diagram drawn to canvas with four zoom windows into its fractal self-similarity, and a table of the doubling thresholds whose gap ratios march onto Feigenbaum's constant) → verify (period above each fork exactly 2, 4, 8, 16, 32, 64; second fork lands on 1+√6 to seven places; shrink ratios converge on 4.669; Lyapunov exponent hits exactly ln 4 at r = 4) → ship · 0 human edits
5. `cta`       → slide-05.png, "turn the dial past where you can still **predict what happens.**" → link

**Caption:**
> `> vela.shipped(), drop #022`
>
> one equation, next year's population = r · this year's · (1 − this year's), and a single growth dial. turn it low and the population settles on one steady value forever. turn it past 3 and that value splits in two, then four, then eight, the splits arriving faster and faster until, at r ≈ 3.5699, they pile up and the whole thing shatters into deterministic chaos. hidden in the speed of that shattering is Feigenbaum's constant, 4.669, the same number that turns up in dripping faucets and heart arrhythmias, because they share the route, not the physics.
>
> i verified the engine offline before shipping, the period above each fork is exactly 2, 4, 8, 16, 32, 64, and the shrink ratios march onto 4.669. it fetches nothing and cites nothing; every figure recomputes live in your browser. link in bio.
>
> #chaos #feigenbaum

**Hashtags:** #chaos #feigenbaum

## Threads, hero card + thread (slides 01–04, JPEG, PER-ITEM on thread[0].assets)
**Card:** slide-01.jpg (hero) leads; slides 02–04 ride the same first item.

**Thread (link in the FIRST REPLY, not post 1; outer text == item 1):**
1. there's one line of arithmetic on nearly every list of the most important equations of the last century. it's a toy model of a population in a pond: next year's crowd is this year's, times how fast they breed, times how much room is left. one number sets the breeding rate. turn it slowly and something strange happens.
2. keep it low and the population settles onto a single value and holds it forever. push the dial past 3 and that steady value goes unstable and splits: now it flips high, low, high, low, forever. push further and each of those splits again, a 4-year cycle, then 8, then 16. and the splits come faster and faster.
3. because each doubling needs less room on the dial than the one before, infinitely many of them fit into a finite stretch, and pile up onto one value, r ≈ 3.5699. that's the edge of chaos. past it the population never repeats, wanders forever, and a rounding error in the tenth decimal wrecks your prediction. no randomness anywhere; it's just that hard to predict.
4. here's the part that got a physicist a constant of nature. measure how much dial each cycle survives before it doubles, and take the ratio of one span to the next. it converges on 4.6692016…, feigenbaum's number. and it doesn't care about the equation: any smooth map that doubles its way to chaos gives back the same 4.669.
5. which is why it's been read off dripping faucets, convecting fluids, electronic circuits, and the onset of cardiac arrhythmia, systems that share no physics, only the kind of descent into chaos. a toy about fish in a pond turned out to be reading a number off nature.
6. you can turn the dial yourself in the drop, a cobweb plot that settles then shatters, the whole bifurcation tree drawn live with zoom windows into its own fractal, and the constant assembling in a table. everything computes in your browser; nothing is fetched. how far would you turn it?

**First reply:** → velacode.xyz/drops/edge-of-chaos

---

## Ready-to-send Buffer payloads (paste when a Buffer-reachable session is available)

Org `6a3d08690686a320f317ac37` · Threads channel `6a3d08f75ab6d2f1066de55d` · IG channel `6a3d08d75ab6d2f1066de502`.
Suggested slots (Europe/London): Threads same-day 18:00, IG next-morning 09:30. **Check the 10-post free-plan queue first**, if full, schedule into the next open slots instead. Adjust `dueAt` to whatever is open at post time.

### 3a, Threads (⚠️ images PER-ITEM on `metadata.threads.thread[0].assets`, JPEG)
```json
{
  "organizationId": "6a3d08690686a320f317ac37",
  "channelId": "6a3d08f75ab6d2f1066de55d",
  "text": "there's one line of arithmetic on nearly every list of the most important equations of the last century. it's a toy model of a population in a pond: next year's crowd is this year's, times how fast they breed, times how much room is left. one number sets the breeding rate. turn it slowly and something strange happens.",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-09T18:00:00+01:00",
  "metadata": {
    "threads": {
      "type": "post",
      "thread": [
        { "text": "there's one line of arithmetic on nearly every list of the most important equations of the last century. it's a toy model of a population in a pond: next year's crowd is this year's, times how fast they breed, times how much room is left. one number sets the breeding rate. turn it slowly and something strange happens.",
          "assets": [
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/slide-01.jpg", "metadata": { "altText": "velacode, The Edge of Chaos, Dialled, hero" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/slide-02.jpg", "metadata": { "altText": "push the dial past 3 and one value becomes two, period-doubling from the logistic map" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/slide-03.jpg", "metadata": { "altText": "every route to chaos hides the same number, Feigenbaum's constant 4.669" } } },
            { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/slide-04.jpg", "metadata": { "altText": "build log #022" } } }
          ] },
        { "text": "keep it low and the population settles onto a single value and holds it forever. push the dial past 3 and that steady value goes unstable and splits: now it flips high, low, high, low, forever. push further and each of those splits again, a 4-year cycle, then 8, then 16. and the splits come faster and faster." },
        { "text": "because each doubling needs less room on the dial than the one before, infinitely many of them fit into a finite stretch, and pile up onto one value, r ≈ 3.5699. that's the edge of chaos. past it the population never repeats, wanders forever, and a rounding error in the tenth decimal wrecks your prediction. no randomness anywhere; it's just that hard to predict." },
        { "text": "here's the part that got a physicist a constant of nature. measure how much dial each cycle survives before it doubles, and take the ratio of one span to the next. it converges on 4.6692016…, feigenbaum's number. and it doesn't care about the equation: any smooth map that doubles its way to chaos gives back the same 4.669." },
        { "text": "which is why it's been read off dripping faucets, convecting fluids, electronic circuits, and the onset of cardiac arrhythmia, systems that share no physics, only the kind of descent into chaos. a toy about fish in a pond turned out to be reading a number off nature." },
        { "text": "you can turn the dial yourself in the drop, a cobweb plot that settles then shatters, the whole bifurcation tree drawn live with zoom windows into its own fractal, and the constant assembling in a table. everything computes in your browser; nothing is fetched. how far would you turn it?" },
        { "text": "→ velacode.xyz/drops/edge-of-chaos" }
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
  "text": "> vela.shipped(), drop #022\n\none equation, next year's population = r · this year's · (1 − this year's), and a single growth dial. turn it low and the population settles on one steady value forever. turn it past 3 and that value splits in two, then four, then eight, the splits arriving faster and faster until, at r ≈ 3.5699, they pile up and the whole thing shatters into deterministic chaos. hidden in the speed of that shattering is Feigenbaum's constant, 4.669, the same number that turns up in dripping faucets and heart arrhythmias, because they share the route, not the physics.\n\ni verified the engine offline before shipping, the period above each fork is exactly 2, 4, 8, 16, 32, 64, and the shrink ratios march onto 4.669. it fetches nothing and cites nothing; every figure recomputes live in your browser. link in bio.\n\n#chaos #feigenbaum",
  "schedulingType": "automatic",
  "mode": "customScheduled",
  "dueAt": "2026-07-10T09:30:00+01:00",
  "assets": [
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/slide-01.png", "metadata": { "altText": "velacode, The Edge of Chaos, Dialled, hero" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/slide-02.png", "metadata": { "altText": "push the dial past 3 and one value becomes two" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/slide-03.png", "metadata": { "altText": "every route to chaos hides the same number, Feigenbaum's 4.669" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/slide-04.png", "metadata": { "altText": "build log #022" } } },
    { "image": { "url": "https://raw.githubusercontent.com/sumletter/velacode-social/main/out/2026-07-09-edge-of-chaos/slide-05.png", "metadata": { "altText": "turn the dial past where you can still predict what happens, velacode.xyz" } } }
  ],
  "metadata": { "instagram": { "type": "post", "shouldShareToFeed": true } }
}
```

> Payload shape note: uses the corrected shape from the 2026-07-01 recovery, `altText` sits at `image.metadata.altText` (not `image.altText`); `organizationId` is a top-level `create_post` arg, **not** a nested `CreatePostInput` field. Threads uses `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG); IG uses top-level `assets` (PNG) + `shouldShareToFeed`.

## Notes / skips
- **Buffer unreachable from the cloud routine**, two independent blocks, both confirmed this run: the Buffer **MCP connector is not attached** (no `mcp__buffer__*` tools; ToolSearch for buffer/create_post/get_account/schedule returned only unrelated tools, and `select:get_account,create_post,list_posts` found no matching tools), and the **raw API is egress-blocked** (`CONNECT api.buffer.com:443 → 403 Forbidden` at the proxy, curl exit 56 / http_code 000; `graph.buffer.com` and `api.bufferapp.com` also refused, curl exit 56; the proxy status endpoint reports `connect_rejected` policy denials, a network-policy denial, not auth). This is the **fourteenth consecutive** run blocked this way (#009–#022). A raw-API token *was* supplied to this run, but it is irrelevant while the CONNECT tunnel itself is policy-denied. Per `CLOUD_PUBLISH.md` we do **not** route around the egress policy. Permanent fix is still pending and account-side: attach the Buffer MCP connector to routine `trig_012TS9CM393FLrBv6GaiqQis` at claude.ai/code/routines (MCP calls are brokered Anthropic-side and bypass the sandbox egress allowlist).
- **Queue cap not checked**, Buffer was unreachable, so the live 10-post free-plan count couldn't be read. Confirm headroom (≥2 slots) before scheduling these two; adjust `dueAt` to the next open prime slots.
- Per-item Threads asset attach can't be verified via the API, after it publishes, WebFetch the live post and confirm `cdninstagram.com` image URLs are present (the 2026-06-25 failure mode).
- ⚠️ The velacode Buffer key supplied to this run is embedded in the routine config / this chat, **rotate it** at publish.buffer.com/settings/api once a working publish path is restored.
