# Logged — offline PWA

A lab-notebook for your 4-day upper/lower split and two-cook meal plan, as a real
installable app.
Works with no signal once installed. All data stays on the phone.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The app shell, styling, rendering, rest timer |
| `app-data.js` | The plan itself — exercises, recipes, shopping list |
| `sw.js` | Service worker — the thing that makes it work offline |
| `manifest.webmanifest` | Name, icons, standalone display |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | Home-screen icons |

## Publish it on GitHub Pages

1. On github.com, create a new **public** repository. Call it `iron` (any name works).
2. On the repo page: **Add file → Upload files**. Drag in all seven files above, at the top level — not inside a folder. Commit.
3. **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait a minute or two, then reload the Pages settings page. It shows your URL:
   `https://<your-username>.github.io/iron/`

HTTPS matters here — service workers only run on HTTPS, which GitHub Pages gives you.

The repo must be public for Pages on a free account. Nothing personal is in these
files: your logs never leave your phone, so a public repo only exposes the plan itself.

## Install it on your phone

**iPhone (Safari — it has to be Safari):** open the URL → Share → Add to Home Screen.

**Android (Chrome):** open the URL → ⋮ menu → Add to Home screen, or tap the install
prompt if one appears.

Open it from the home-screen icon once while you still have signal. That first run
caches everything. After that it opens and logs with the phone in airplane mode.

## Using it

- **Train** — tap a day and the warm-up is at the top: the general bit, the mobility
  drills for that day, and ramp-up sets worked out from the heaviest weight you logged
  on that lift last time (bar, 50%, 70%, 85%). Below it, enter kg and reps per set, Save. Last session's numbers sit
  on the right of each row so you know what to beat. Each exercise has a **rest timer
  button** preset to its prescribed rest; it beeps and vibrates when time is up, and
  `+30s` extends it.

  Entries are **kept as you type**, so leaving the session, switching tabs or closing
  the app does not lose them — the day shows an "unsaved" flag until you save, and
  reopening it picks up where you left off. Saving is what adds the session to your
  history. Unsaved drafts are dropped after three days.
- **History** — every logged session, newest first, each showing its exercise and set
  count and total load. The top of the tab tracks your last export: a quiet line when
  it is recent, a warning when it has been two weeks or eight sessions, with an export
  button in it. Tap one to open it in full: every exercise, every set's weight
  and reps against its target, and the session's total kg lifted. A session can be
  deleted from there (two taps). Export and Import live at the bottom of the tab.
- **Meals** — ten meals, five portions each, protein-heavy and light on carbs. Each
  one carries its macros, its ingredients as tickable checkboxes, and concise steps.
  Tap **pick** on the ones you are cooking and they gather on the Shop tab.
- **Shop** — the ingredients of whatever you have picked, grouped by meal, plus the
  staples you need whatever you cook. Ticks are shared with the Meals tab, so ticking
  in either place shows in both.

## Backups, and updating the plan

Data lives in this browser's storage on this device. It survives app updates and
restarts, but it is **gone if you clear site data, delete the app, or switch phone**.

So: **History → Export JSON** every few weeks. Send me that file and I can read your
actual numbers and adjust the programme against them. Import puts a backup back.

## When the plan changes

Almost every change is to `app-data.js` alone — the exercises, recipes and shopping
list all live there, separate from the app code. On GitHub: open `app-data.js` →
pencil icon → edit → commit. Then bump `VERSION` in `sw.js` (e.g. `logged-v8` to `logged-v9`) the
same way, or the old cached copy keeps serving. Your logged data is untouched by this.

Easier still: ask me, and I'll push it.
