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

Progress is now tied to a 3-word save code.

- Each code maps to its own profile in browser `localStorage`
- Use `Load / Switch Code` to open a profile
- Use `Generate New Code` to create a fresh profile
- Your last active code is remembered automatically

Storage keys:

- Active code pointer: `mt2-active-profile-v1`
- Profile data prefix: `mt2-profile-v1:`

Use the UI buttons to:

- Export save to JSON
- Import save from JSON
- Reset all progress

## Randomizer filters

You can filter random runs by origin for:

- Main champion pool: `Both`, `Only MT2`, `Only MT1`
- Allied clan pool: `Both`, `Only MT2`, `Only MT1`
