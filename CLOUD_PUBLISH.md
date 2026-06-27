# CLOUD_PUBLISH.md — headless publish from the scheduled cloud routine

This is the **cloud delta** to `PUBLISH.md`. Everything (forge → render → host → ledger) is
identical; the only cloud-specific concern is *how the Buffer publish reaches Buffer*.

> **Prime directive: never leave a broken state.** The forge → render → host → ledger steps
> have no external dependency and must always complete. The Buffer publish is **best-effort**:
> if it fails for any reason, finish the ledger with the exact ready-to-post payloads + hosted
> image URLs, mark the run `publish-pending (manual)` in `memory.md`, and exit 0. A human (or a
> local MCP session) then posts from the ledger. A failed auto-publish is a *delay*, never a loss.

## What changed (2026-06-27) — use the Buffer **MCP**, not the raw API

The earlier version of this file told the routine to publish by calling the **Buffer GraphQL API
directly with an embedded token**. **That path is dead in the cloud:** the sandbox's org egress
policy blocks every Buffer host — `graph.buffer.com`, `api.bufferapp.com`, `buffer.com` all
return `403 Forbidden` at the proxy CONNECT tunnel (a network-policy denial, not auth). Drops
**#009 and #010 were both lost to this** before it was diagnosed. **Do not route around the
policy** (the egress README forbids it) and **do not rely on the raw API** — it cannot work from
the cloud sandbox as configured.

Instead the routine publishes through the **Buffer MCP connector**, exactly like a local run.
MCP tool calls are brokered Anthropic-side and are **not** subject to the sandbox's HTTP egress
allowlist, so they reach Buffer where raw `CONNECT` cannot.

### Prerequisite (one-time, account-side — a human does this once)

The Buffer **MCP connector must be attached to the cloud routine**
(`trig_012TS9CM393FLrBv6GaiqQis`, "velacode — social"), with the Buffer **API key as a secret**
in the routine's connector config. Manage it at claude.ai/code/routines. Verify it's wired by
calling `get_account` at the start of the run — if that returns the `velacodexyz` org, the MCP is
live; if the `mcp__buffer__*` tools are absent, the connector isn't attached → **stop at publish,
write the publish-pending ledger, and report** (per the prime directive). This absent-connector
state is the exact thing that sent #009/#010 to the raw-API fallback and lost them.

## Steps 0–4 — follow PUBLISH.md verbatim

Run **`PUBLISH.md`** end-to-end with no deviation, including **Step 3 (schedule via the Buffer
MCP)** — the `create_post` shapes there are the proven ones (Threads per-item
`metadata.threads.thread[0].assets`, JPEG; IG top-level `assets`, `shouldShareToFeed`). The only
headless notes that differ from a local run:

- **No `/velacode-social-forge` skill** in the cloud → do Step 1 by hand (load `brand.md` +
  `STRATEGY.md` + the drop's `drop.md`, write `renderer/slides.json`, `node render.mjs`).
- **No `sips`** on Linux → convert PNG→JPEG with `sharp` (`npm i sharp` in `renderer/`, or a tiny
  node script). All slides need a `.jpg` sibling before hosting (Threads media must be JPEG).
- **Chromium build mismatch** has bitten past runs — point Playwright at the pre-installed binary
  via `executablePath` if `npx playwright install` is blocked. (See the #010 ledger note.)

## On failure (publish call errors, or the Buffer MCP connector is absent)

1. Still write `ledger/<run-slug>.md` with: every slide's hosted URL, the full IG caption, the
   numbered Threads thread, and the **two ready-to-send Buffer payloads** (the JSON from
   PUBLISH.md §3a/§3b, with the real image URLs filled in) so a human can paste-and-post from a
   Buffer-reachable session (a local Claude Code REPL has the MCP and no egress block).
2. Mark the `memory.md` row `publish-pending (manual)`.
3. Print a one-line summary of what's hosted + what still needs posting, and **exit cleanly.**

## Verify (same as local)

For Threads especially, the per-item image attach can't be confirmed from the API (Buffer doesn't
echo `thread[].assets`) — after a post publishes, `WebFetch` its live URL and confirm
`cdninstagram.com` image URLs are present (the failure mode that cost a relaunch on 2026-06-25).

## Token hygiene (only relevant if the raw API is ever revived)

If Buffer egress is ever allowlisted and the raw-API path is restored as a fallback, the token
sits in the routine config — treat it as exposed to anyone who can read the routine; use a
dedicated, independently-rotatable Buffer key. As of 2026-06-27 the raw-API path is **not** in use.
