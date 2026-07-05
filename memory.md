# velacode social — run memory

Append-only log of every `/velacode-social-forge` run. Read at Phase 1 to dedupe (don't
re-forge a drop already shipped). Never rewrite previous rows.

## Index

| Date | Run slug | Drop | Posts | Status |
|---|---|---|---|---|
| 2026-06-23 | [2026-06-23-palette-from-a-word](./ledger/2026-06-23-palette-from-a-word.md) | #006 · app | IG carousel (5) · Threads card+thread · stat | drafted |
| 2026-06-24 | [2026-06-24-contrast-lab](./ledger/2026-06-24-contrast-lab.md) | #007 · app | IG carousel (5) · Threads card+thread | drafted |
| 2026-06-25 | [2026-06-25-half-life-of-a-fact](./ledger/2026-06-25-half-life-of-a-fact.md) | #008 · research | IG carousel (5) · Threads card+thread · stat | drafted |
| 2026-06-26 | [2026-06-26-shape-of-a-decision](./ledger/2026-06-26-shape-of-a-decision.md) | #009 · research | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer egress-blocked; images hosted, payloads in ledger |
| 2026-06-27 | [2026-06-27-orbit-golf](./ledger/2026-06-27-orbit-golf.md) | #010 · game | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer egress-blocked (403 at proxy); images hosted + verified, payloads in ledger |
| 2026-06-28 | [2026-06-28-first-digit-law](./ledger/2026-06-28-first-digit-law.md) | #011 · research | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer MCP connector absent + raw API egress-blocked (403 at proxy); images hosted + verified, payloads in ledger |
| 2026-06-29 | [2026-06-29-through-other-eyes](./ledger/2026-06-29-through-other-eyes.md) | #012 · app | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer MCP connector absent + raw API egress-blocked (403 at proxy); images hosted + verified, payloads in ledger |
| 2026-06-30 | [2026-06-30-quiet-the-grid](./ledger/2026-06-30-quiet-the-grid.md) | #013 · game | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer MCP connector absent + raw API egress-blocked (403 at proxy); images hosted + verified, payloads in ledger |
| 2026-07-01 | [2026-07-01-birthday-collision](./ledger/2026-07-01-birthday-collision.md) | #014 · research | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer MCP connector absent + raw API egress-blocked (403 at proxy, verified); images hosted + verified, payloads in ledger |
| 2026-07-02 | [2026-07-02-drawn-by-circles](./ledger/2026-07-02-drawn-by-circles.md) | #015 · research | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer MCP connector absent + raw API egress-blocked (403 at proxy, verified); images hosted + verified, payloads in ledger |
| 2026-07-03 | [2026-07-03-repair-the-signal](./ledger/2026-07-03-repair-the-signal.md) | #016 · app | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer MCP connector absent + raw API egress-blocked (403 at proxy, verified); images hosted + verified, payloads in ledger |
| 2026-07-04 | [2026-07-04-sound-of-a-shape](./ledger/2026-07-04-sound-of-a-shape.md) | #017 · app | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer MCP connector absent + raw API egress-blocked (403 at proxy, verified); images hosted + verified, payloads in ledger |
| 2026-07-05 | [2026-07-05-shortest-message](./ledger/2026-07-05-shortest-message.md) | #018 · research | IG carousel (5) · Threads card+thread (4 imgs) | publish-pending (manual) — Buffer MCP connector absent + raw API egress-blocked (403 at proxy, verified); images hosted + verified, payloads in ledger |

## Recovery log

Append-only notes for when a `publish-pending` run is later posted out-of-band. The rows above
stay as the cloud routine left them; idempotency still keys off the run slug.

- **2026-06-27** — recovered #009 + #010 from a **local Claude Code session** (the Buffer MCP
  works there; only the cloud sandbox is egress-blocked). Scheduled via Buffer MCP, queue 0→4/10:
  - #009 Threads `6a3fa44337c4dee3e0c05a3d` → 2026-06-27 13:30 BST · #009 IG `6a3fa45668e970d73622bcbf` → 2026-06-28 09:30 BST
  - #010 Threads `6a3fa44ec19bcf14a39f885d` → 2026-06-27 18:00 BST · #010 IG `6a3fa45ec19bcf14a39f88b3` → 2026-06-28 13:30 BST
  - Root cause + permanent fix: the cloud routine had **no Buffer MCP connector attached**, so it
    fell back to the raw Buffer API, which the egress policy blocks. Fix = attach the connector to
    the routine and publish via the MCP (see `CLOUD_PUBLISH.md`, rewritten same day).
  - ⚠️ Threads per-item images can't be API-verified — confirm `cdninstagram.com` URLs on the live
    posts after 13:30 / 18:00 today.
- **2026-07-01** — recovered **#011 + #012 + #013 + #014** (four consecutive publish-pending runs)
  from a **local Claude Code session**, this time via the **Buffer raw GraphQL API** (`api.buffer.com`)
  with the velacode account key — the local session's Buffer MCP connector was pointed at a *different*
  Buffer account (personal `@alpersim`, org `6918c1733022afd3b8ed12d7`), which has no `@velacodexyz`
  channels, so the MCP path was unavailable here. Local raw API is **not** egress-blocked (only the cloud
  sandbox is). Introspected `CreatePostInput` first; fixed two drifts in the staged ledger payloads that
  the cloud agent never validated (they were written without a live connector): `altText` must sit at
  `image.metadata.altText` (not `image.altText`), and `organizationId` is **not** a `CreatePostInput`
  field (drop it). Threads sent with `metadata.threads.type:"post"` + per-item `thread[0].assets` (JPEG);
  IG with top-level `assets` (PNG) + `shouldShareToFeed`. Queue 0→8/10, all `customScheduled` (times BST):
  - #011 Threads `6a454d73881fa128a47802a3` → 07-02 18:00 · IG `6a454d7447103574d29bcd2e` → 07-03 09:30
  - #012 Threads `6a454d75a15602221974f7ca` → 07-03 18:00 · IG `6a454d76c7e629cf26d01283` → 07-04 09:30
  - #013 Threads `6a454d78890ffd8d704e868f` → 07-04 18:00 · IG `6a454d79840395c560c61685` → 07-05 09:30
  - #014 Threads `6a454d7a881fa128a47802eb` → 07-05 18:00 · IG `6a454d7b890ffd8d704e86b2` → 07-06 09:30
  - Root cause is **unchanged and still open**: the cloud routine `trig_012TS9CM393FLrBv6GaiqQis` has
    **no Buffer MCP connector attached** (six straight runs, #009–#014, degraded this way). Permanent fix
    remains account-side — attach the connector (velacode account) to the routine. `SCHEDULING.md` now adds
    a step-0 `get_account` self-check so a missing connector fails loudly instead of silently.
  - ⚠️ Threads per-item images can't be API-verified (top-level `assets:0` is expected/correct) — after
    each Threads post publishes (from 07-02 18:00 BST onward), WebFetch the live post and confirm
    `cdninstagram.com` image URLs are present.
  - ⚠️ The velacode Buffer key was pasted into the recovery chat — **rotate it** at publish.buffer.com/settings/api.
