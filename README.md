# Iron & Icebox — offline PWA

Your 4-day upper/lower log and two-cook meal plan, as a real installable app.
Works with no signal once installed. All data stays on the phone.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The app shell, rendering and rest timer |
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

- **Train** — tap a day, enter kg and reps per set, Save. Last session's numbers sit
  on the right of each row so you know what to beat. Each exercise has a **rest timer
  button** preset to its prescribed rest; it beeps and vibrates when time is up, and
  `+30s` extends it.

  Entries are **kept as you type**, so leaving the session, switching tabs or closing
  the app does not lose them — the day shows an "unsaved" flag until you save, and
  reopening it picks up where you left off. Saving is what adds the session to your
  history. Unsaved drafts are dropped after three days.
- **History** — every logged session, newest first, plus Export and Import.
- **Meals** — switch between Week 1 and Week 2. Each cook day has a minute-by-minute
  timeline and full recipes with per-portion calories, protein and cooked weight, plus
  reheating notes, swaps and troubleshooting.
- **Shop** — the Waitrose list for whichever week is selected, remembering what you've
  ticked. The two weeks' lists are tracked separately.

## Backups, and updating the plan

Data lives in this browser's storage on this device. It survives app updates and
restarts, but it is **gone if you clear site data, delete the app, or switch phone**.

So: **History → Export JSON** every few weeks. Send me that file and I can read your
actual numbers and adjust the programme against them. Import puts a backup back.

## When the plan changes

Almost every change is to `app-data.js` alone — the exercises, recipes and shopping
list all live there, separate from the app code. On GitHub: open `app-data.js` →
pencil icon → edit → commit. Then bump `VERSION` in `sw.js` (`ii-v2` to `ii-v3`) the
same way, or the old cached copy keeps serving. Your logged data is untouched by this.

Easier still: ask me, and I'll push it.
