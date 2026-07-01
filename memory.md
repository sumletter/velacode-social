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
