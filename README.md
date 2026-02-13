# Monster Train 2 Completion Tracker

Static web app for tracking Covenant 10 Titan wins by champion + allied clan combination.

## Run

Open `index.html` directly in your browser.

## What it tracks

- Rows: champions (2 per clan)
- Columns: allied clans
- Own-clan pairing is disabled
- Completion uses only valid pairings

Formula:

`total = (champions) * (clans - 1)`

With 12 clans and 2 champions each, total is `24 * 11 = 264`.

## Champion portraits

Champion portrait URLs from your JSON are wired in via `CHAMPION_IMAGE_BY_NAME` in `app.js`.

Clan header logos are wired in via `CLAN_LOGO_BY_NAME` in `app.js`.

## Customize roster

Edit `CLANS` in `app.js`.

Each clan entry shape:

```js
{
  id: "unique-id",
  name: "Display Name",
  color: "#RRGGBB",
  champions: ["Champion A", "Champion B"]
}
```

## Save data

Progress is tied to immutable 3-word snapshot codes (for example `BlazingCrownSpire`) and stored globally in Supabase.

- Enter a code and click `Load Code` to fetch that exact snapshot
- Every tracker change creates a brand-new code automatically
- Older codes still load their older state; they are not overwritten
- `Copy Current Code` helps you save/share the active snapshot code
- Last active code is remembered in your browser for convenience

Local storage key:

- Active code pointer: `mt2-active-code-v1`

Supabase table:

- `public.snapshots` with columns `code`, `state_json`, `created_at`

### Supabase config in app

`app.js` contains:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`

Use the UI buttons to:

- Export save to JSON
- Import save from JSON
- Reset all progress

## Randomizer filters

You can filter random runs by origin for:

- Main champion pool: `Both`, `Only MT2`, `Only MT1`
- Allied clan pool: `Both`, `Only MT2`, `Only MT1`
