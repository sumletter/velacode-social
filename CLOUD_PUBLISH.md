# CLOUD_PUBLISH.md, headless publish from the scheduled cloud routine

This is the **cloud delta** to `PUBLISH.md`. Everything (forge → render → host → ledger) is
identical; the only cloud-specific concern is *how the Postiz publish reaches Postiz*.

> **Prime directive: never leave a broken state.** The forge → render → host → ledger steps
> have no external dependency and must always complete. The Postiz publish is **best-effort**:
> if it fails for any reason, finish the ledger with the exact ready-to-post payloads + hosted
> image URLs, mark the run `publish-pending (manual)` in `memory.md`, and exit 0. A human (or a
> local MCP session) then posts from the ledger. A failed auto-publish is a *delay*, never a loss.

## Publisher history (why MCP, not raw API)

- **2026-06-27:** diagnosed that the cloud sandbox's org egress policy blocks direct HTTP to
  social-tool APIs (every Buffer host returned `403` at the proxy CONNECT). Drops #009-#014
  were lost to a silent raw-API fallback. Lesson: **only the MCP connector path works from the
  cloud**, its traffic is brokered Anthropic-side and is not subject to the sandbox egress
  allowlist. Do not route around the policy, and do not assume `api.postiz.com` is reachable
  by curl from the sandbox.
- **2026-07-19:** publisher migrated **Buffer → Postiz** (the Buffer connector never got
  attached account-side and the routine degraded for weeks). Same rule applies unchanged: the
  **Postiz MCP connector** must be attached to the routine; raw-API fallback is forbidden.

### Prerequisite (one-time, account-side, a human does this once)

The **Postiz MCP connector must be attached to the cloud routine**
(`trig_012TS9CM393FLrBv6GaiqQis`, "velacode — social"): endpoint `https://mcp.postiz.com/mcp`,
HTTP transport, header `Authorization: Bearer <Postiz API key>` stored as a secret in the
routine's connector config. Manage it at claude.ai/code/routines. The key must be the one for
the workspace that owns the `@velacodexyz` Threads channel (the shared workspace that also
hosts Petverse), **not** any other Postiz account.

**Verify it's wired at the start of every run:** call `integrationList` first.

- Tools absent or the call errors → connector not attached. Stop at publish, write the
  publish-pending ledger, end the run with a loud
  `❌ SOCIAL BLOCKED, Postiz connector not attached to trig_012TS9CM393FLrBv6GaiqQis` line.
- List returns but has **no `velacodexyz` entry** → the wrong Postiz workspace/key is
  attached. Stop and alert; never post velacode content through another brand's channels.
- List contains Threads `@velacodexyz` (`cmrs83llv00kdqj0yj2hp77yz`) → proceed. If an
  Instagram integration with profile `velacodexyz` is ALSO present, schedule IG too;
  otherwise mark `ig-pending` (see PUBLISH.md).

## Steps 0-4, follow PUBLISH.md verbatim

Run **`PUBLISH.md`** end-to-end with no deviation, including Step 3a (upload every attachment
through `uploadFromUrlTool` first) and the `integrationSchedulePostTool` shapes. Headless
notes that differ from a local run:

- **No `/velacode-social-forge` skill** in the cloud → do Step 1 by hand (load `brand.md` +
  `STRATEGY.md` + the drop's `drop.md`, write `renderer/slides.json`, `node render.mjs`).
- **No `sips`** on Linux → convert PNG→JPEG with `sharp` (`npm i sharp` in `renderer/`, or a
  tiny node script). All slides need a `.jpg` sibling before hosting (Threads media = JPEG).
- **Chromium build mismatch** has bitten past runs → point Playwright at the pre-installed
  binary via `executablePath` if `npx playwright install` is blocked. (See the #010 ledger note.)

## On failure (publish call errors, or the Postiz MCP connector is absent)

1. Still write `ledger/<run-slug>.md` with: every slide's hosted URL, the full IG caption, the
   numbered Threads thread, and the **ready-to-send Postiz payloads** (the JSON from
   PUBLISH.md §3c/§3d with the real image URLs filled in) so a human can paste-and-post from a
   Postiz-reachable session (a local Claude Code REPL in either repo has the MCP wired).
2. Mark the `memory.md` row `publish-pending (manual)`.
3. Print a one-line summary of what's hosted + what still needs posting, and **exit cleanly.**

## Verify (same as local)

After a Threads post publishes, `WebFetch` its live URL and confirm `cdninstagram.com` image
URLs are present. A text-only thread is the silent failure mode; the live check is the proof.
