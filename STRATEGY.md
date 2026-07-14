# velacode, social strategy (Threads + Instagram)

Owner-facing strategy for the launch. The day-to-day production runs through the
`/velacode-social-forge` skill; this doc is the *why* and the *cadence*.

## 1. Positioning
velacode isn't a startup with a blog. It's **a website that builds itself**, an AI agent
(**vela**) decides what to publish, builds it, and deploys it, with **no human in the
editorial loop**. That autonomy is the product *and* the story.

**Strategic thesis:** the account should read like the machine is posting it. Build-in-public,
but the builder is an AI. That's the wedge no competitor can copy, only velacode can
credibly post "here's how the agent chose this week's topic and proved it wasn't lying."

**One-liners to test:** "a website that builds itself, you're watching it think." ·
"no human in the editorial loop." · "the machine ships on a schedule. this is the log."

## 2. Voice, two registers (the brand law)
- **Machine (primary):** console voice, `> vela.decide()`, `↳`, `✓`, timestamps, status dots.
- **Human-curious (secondary, sparing):** lowercase, plain, one concrete detail, only on
  the Threads body + the `thread` card.
- **Banned:** "🚀 we just shipped", "drop a comment 👇", "unpopular opinion", "game-changer",
  emoji spam, manufactured hooks. A genuine question is fine.

## 3. Content pillars
| # | Pillar | What it is | Primary format |
|---|---|---|---|
| 1 | **The Drop** | Every ship announced, title, dek, the live thing. The hero. | IG carousel + Threads thread |
| 2 | **The Machine's Notes** | *How vela chose & verified* (e.g. "ran the physics engine offline to prove every Slingshot level is beatable"). Un-copyable. | IG `console` slide + Threads |
| 3 | **Decoded** | One genuinely interesting idea per research drop (light in glass = 200,000 km/s; HSL vs OKLCH). | IG carousel slides |
| 4 | **Play** | Games/apps as interactive bait ("type a word → a palette"). The interactives are motion-forward = free Reels. | IG Reel + Threads |
| 5 | **Meta** | The running scoreboard: "human edits: 0." Milestones (#010, etc.). | `stat` card, both platforms |

## 4. Cadence (tied to the actual ship schedule)
The heartbeat is the drop schedule. **Each drop →** 1 IG carousel + 1 Threads thread, with a
"Decoded" follow-up 1–2 days later and a weekly `stat`/recap.
- **Threads:** 4–6 posts/week (the machine-log voice shines here; cheap, native, conversational).
- **Instagram:** 2–3 posts/week (drop carousel + a decoded single + an occasional Reel of an interactive in motion).
- **Weekly:** one ship-log recap or a Meta scoreboard post.

## 5. Platform playbooks
### Threads (primary, it's where the machine voice lives)
- Lead format: a 4–6 post thread in the human-curious register, one idea per post, ≤500 chars.
- Post 1 = the warm hook (no link). Last post = a genuine question ("what word should i feed it?").
- **Link in the first reply**, never post 1.
- Pair with the `thread` hero card image for the lead post.
- Engagement: vela can reply in-voice to genuine questions; reply to a requested word with its generated palette (turns the Play pillar into a loop).

### Instagram (the editorial archive)
- Lead format: the 5-slide carousel (`drop-hero → decoded → decoded → console → cta`).
- Caption ≈ 80–150 words, machine-framed open, CTA "link in bio".
- **Hashtags: 1–2 max**, pulled from the drop's own `tags` (`#oklch`, `#planetnine`). No hashtag walls, they read as spam against this brand.
- Reels: screen-record the real interactive (orbit herding, slingshot trajectory, palette repaint). Cover = a `drop-hero` or `decoded` frame.
- Bio link → `velacode.xyz` (or the latest drop). Highlights = one per kind (research / game / app).

## 6. Visual system
Reuse the site's exact tokens (see `brand.md`). Hybrid direction: **console chrome on every
post + a subtle pure-CSS cosmic wash on hero/thread slides** (zero AI image spend). The
kind-color system turns the grid into a color-coded archive. Everything is rendered crisp
and editable via the HTML/CSS renderer, never baked into an image.

## 7. The hook that compounds
"**human edits: 0**" is the recurring proof line. Put it on the hero footer, the `stat`
card, and the Threads outro. The longer the streak, the more remarkable the account is, 
the scoreboard *is* the growth story.

## 8. Metrics to watch (lightweight)
- Saves + shares on IG carousels (proxy for "genuinely worth someone's time").
- Threads replies that ask vela to do something (palette requests, topic suggestions), the engagement loop.
- Profile → site clickthrough (bio link / first-reply link).
- Follower growth around milestone drops (#010, first game with a leaderboard, etc.).
Don't over-optimize for vanity; the north star is "did a person find the drop worth their time."

## 9. Operating model
- `/velacode-social-forge` runs **right after each drop ships** (auto mode forges the newest
  drop in `LOG.md`, deduped against `memory.md`). See the skill's "Scheduling" section.
- Output is local PNGs + a ledger per run (`ledger/<run-slug>.md`), the handoff to a human
  (or a future publishing step) who uploads to Threads + IG.
- Publishing is deliberately out of scope for now (no auto-posting): it keeps a human in the
  *distribution* loop even though there's no human in the *editorial* loop, a tidy, honest line.
