# velacode social, brand reference (locked)

The visual + voice source of truth for `/velacode-social-forge`. Tokens are lifted
verbatim from the site (`code-by-itself/app/globals.css`) so the feed matches the product.
Don't loosen these without the owner's say-so.

## The one-line idea
velacode is **a website that builds itself**, an AI agent (**vela**) picks each drop,
builds it, and ships it with no human in the editorial loop. The social account's whole
job is to make that legible and eerie: **it should read like the machine is posting it.**

## BRAND LAW, bold machine voice in the chrome, warm words in the body
- **Machine register (primary):** terminal/console voice, `> vela.decide()`, `↳`, `✓`,
  timestamps, status dots, build-log lines. Cold, precise, software-authored.
- **Human-curious register (secondary, sparing):** lowercase, short lines, one idea, one
  concrete detail, present tense. Only on the Threads body + the `thread` card. Warm, plain.
- They never swap. Bold visuals ≠ bold words.

## Color (from globals.css `@theme`)
| token | hex | role on social |
|---|---|---|
| bg | `#05060a` | the canvas (every slide) |
| surface | `#0c1018` | console panel fill |
| panel | `#141a26` | raised blocks |
| edge | `#212a3b` | hairline borders + the inner "window" chrome |
| fg | `#eceff6` | display + body ink |
| muted | `#8a93a6` | dek / secondary |
| faint | `#6f7a90` | mono micro-type, timestamps |
| **ember** | `#ff8a3d` | **headline accent word (always)**, `>` prompts, game kind |
| **ice** | `#5be0d4` | links, research kind |
| **warn** | `#f2c14e` | app kind |
| good | `#7ce38b` | success / status dot / `✓` ship line / a "0" that should pop |

### Kind-color system (the feed becomes a color-coded archive)
Every slide for a drop carries that drop's `kind` color in its chrome (eyebrow, chip,
footer accent, `decoded` highlight): **research → ice · game → ember · app → warn.**
The big display headline accent word is **always ember**, regardless of kind (matches the
site hero). Scrolling the grid, a viewer can read the mix of research/game/app at a glance.

## Type (Google Fonts; same families as the site)
- **Fraunces** (display), headlines, statements, big numbers. weight 500, tracking −0.02em.
- **Newsreader** (body), deks, `decoded` bodies, the warm `thread`/`quote` text. true italic for emphasis.
- **Space Mono** (machine voice), eyebrows, status bar, chips, console lines, footers, links. uppercase + 0.18em tracking for labels.

## The console chrome (on every slide)
- **Status bar (top):** `● velacode` (good dot) ......... `vela · autonomous` (mono).
- **Inner window border:** a 1px `edge` rounded frame inset 40px, the post reads as a console window.
- **Starfield:** procedurally placed, seeded from the run slug (stable across re-renders); denser/brighter near the top on `wash` slides.
- **Cosmic wash (hero/thread only, `wash:true`):** pure-CSS radial glow tinted with the kind color, top-right. **No AI image spend**, this is the Hybrid direction's "subtle cosmic hero," done in CSS.
- **Footer (bottom):** a mono `> …` line, the quiet sign-off (`shipped · autonomous · 0 human edits`, `velacode.xyz`, etc.).

## Templates (live in `renderer/`, see SKILL.md for fields)
`drop-hero` · `decoded` · `console` · `stat` · `cta` · `thread`.

## Sizes
4:5 = 1080×1350 (IG feed default, rendered at 2× = 2160×2700) · 1:1 = 1080×1080 · 9:16 = 1080×1920 (stories/reel covers).

## Wordmark + handles
Brand: **velacode** / `velacode.xyz`. Agent (the "author"): **vela**. Suggested handle: **@velacode** on Threads + Instagram.

## Never
- No emoji in the chrome or on the posters (a single one in an IG caption is the ceiling, and only if tonal).
- No second accent beyond the kind color + the one ember headline accent.
- No baked-in text on any AI image (default flow spends zero credits anyway).
- No link on the poster or in Threads post 1, bio / first reply only.
