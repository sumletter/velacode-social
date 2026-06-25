# CLOUD_PUBLISH.md — headless publish from the scheduled cloud routine

This is the variant of `PUBLISH.md` used by the **cloud** distribution routine, which has **no
Buffer MCP connector** — it publishes by calling the Buffer API directly with an embedded
access token. Everything except the publish mechanism is identical to `PUBLISH.md`.

> **Prime directive: never leave a broken state.** The forge → render → host → ledger steps
> have no external dependency and must always complete. The Buffer publish is **best-effort**:
> if it fails for any reason, finish the ledger with the exact ready-to-post payloads + hosted
> image URLs, mark the run `publish-pending (manual)` in `memory.md`, and exit 0. A human (or a
> local MCP session) then posts from the ledger. A failed auto-publish is a *delay*, never a loss.

## Steps 0–2 + 4 — same as PUBLISH.md

Follow **`PUBLISH.md`** exactly for:
- **Step 0** idempotency (stop if the newest drop's run slug is already in `memory.md`),
- **Step 1** forge (no `/velacode-social-forge` skill exists in the cloud — follow the
  by-hand pipeline in PUBLISH.md §"Step 1 → Headless": load `brand.md` + `STRATEGY.md` +
  the drop's `drop.md`, write `renderer/slides.json`, render with `node render.mjs`),
- **Step 2** JPEG + `git push` to host the images (raw URLs go live),
- **Step 4** ledger + `memory.md` row.

Only **Step 3 (schedule)** changes — use the Buffer API below instead of the MCP.

## Step 3 (cloud) — publish via the Buffer API with the embedded token

The routine prompt provides a Buffer access token. Use it as the auth for the calls below.
Schedule **Threads same day 18:00** + **Instagram next morning 09:30** (Europe/London), or the
next open slots; respect the **10-post free-plan cap** (skip + log if full).

Buffer's API is **GraphQL**. Discover the exact endpoint + the post-create mutation the same way
the MCP does, in this order (stop at the first that authenticates):

1. **Preferred — reuse Buffer's own MCP code.** If a Buffer MCP package is installable
   (`npm view @buffer/mcp-server` or search npm for "buffer mcp"), run it as a stdio subprocess
   with the token in its env and drive it with a tiny Node JSON-RPC client: send
   `{"method":"tools/call","params":{"name":"create_post","arguments":{…}}}` with the **same
   argument shapes proven in `PUBLISH.md` §3a/§3b** (Threads per-item `thread[0].assets` JPEG;
   IG top-level `assets` + `shouldShareToFeed`). This reuses Buffer's tested mutations — most reliable.
2. **Fallback — raw GraphQL.** POST to Buffer's GraphQL endpoint (try `https://graph.buffer.com`,
   header `Authorization: Bearer <token>`). If the endpoint/mutation is unknown, `WebFetch`
   Buffer's developer docs / the MCP source to learn the `postCreate` mutation + input type,
   then send it. The **post payloads are identical** to `PUBLISH.md` §3a (Threads) and §3b (IG) —
   only the transport differs.

**Org + channels** (not secret): org `6a3d08690686a320f317ac37`, Threads channel
`6a3d08f75ab6d2f1066de55d`, Instagram channel `6a3d08d75ab6d2f1066de502`.

**Verify** each scheduled/sent post. For Threads especially, the per-item image attach can't be
confirmed from the API (Buffer doesn't echo `thread[].assets`) — if the post publishes
immediately, `WebFetch` its live URL and confirm `cdninstagram.com` image URLs are present
(this is the exact failure mode that cost a relaunch on 2026-06-25; see `HOSTING.md`).

## On failure (any publish call errors, auth fails, or the API shape can't be resolved)

1. Still write `ledger/<run-slug>.md` with: every slide's hosted URL, the full IG caption, the
   numbered Threads thread, and the **two ready-to-send Buffer payloads** (the JSON from
   PUBLISH.md §3a/§3b, with the real image URLs filled in) so a human can paste-and-post.
2. Mark the `memory.md` row `publish-pending (manual)`.
3. Print a one-line summary of what's hosted + what still needs posting, and **exit cleanly.**

## Token hygiene

The token sits in the routine config — treat it as exposed to anyone who can read the routine.
Use a dedicated Buffer key that can be rotated independently, and rotate it if it ever leaks.
