const LEGACY_STORAGE_KEY = "mt2-completion-v1";
const PROFILE_PREFIX = "mt2-profile-v1:";
const ACTIVE_PROFILE_KEY = "mt2-active-profile-v1";

const PROFILE_WORDS_A = ["amber", "ashen", "blazing", "cinder", "crystal", "ember", "frozen", "golden", "hollow", "iron", "lunar", "misty", "onyx", "pyre", "quiet", "riven", "scarlet", "silver", "storm", "velvet"];
const PROFILE_WORDS_B = ["anvil", "banner", "crown", "drake", "ember", "forge", "garden", "harbor", "lantern", "memory", "needle", "oracle", "petal", "quartz", "river", "signal", "temple", "throne", "vault", "whisper"];
const PROFILE_WORDS_C = ["alpha", "bridge", "cipher", "delta", "echo", "flame", "grove", "horizon", "isle", "jewel", "knight", "lotus", "meteor", "nova", "oath", "prism", "quest", "rift", "spire", "trail"];

const CLANS = [
  { id: "banished", name: "Banished", origin: "mt2", color: "#1cc9ec", champions: ["Fel", "Talos"] },
  { id: "pyreborne", name: "Pyreborne", origin: "mt2", color: "#ff6128", champions: ["Lord Fenix", "Lady Gilda"] },
  { id: "luna_coven", name: "Luna Coven", origin: "mt2", color: "#fdcdfd", champions: ["Ekka", "Arduhn"] },
  { id: "underlegion", name: "Underlegion", origin: "mt2", color: "#ef9a31", champions: ["Bolete the Guillotine", "Madame Lionsmane"] },
  { id: "lazarus_league", name: "Lazarus League", origin: "mt2", color: "#66d47d", champions: ["Orechi", "Baron Grael"] },
  { id: "railforged", name: "Railforged", origin: "mt2", color: "#e2d7cd", champions: ["Herzal", "Heph"] },
  { id: "hellhorned", name: "Hellhorned", origin: "mt1", color: "#ea3441", champions: ["Hornbreaker Prince", "Shardtail Queen"] },
  { id: "awoken", name: "Awoken", origin: "mt1", color: "#99cd38", champions: ["The Sentient", "Wyldenten"] },
  { id: "stygian_guard", name: "Stygian Guard", origin: "mt1", color: "#9f61de", champions: ["Tethys Titansbane", "Solgard the Martyr"] },
  { id: "umbra", name: "Umbra", origin: "mt1", color: "#f3bb3a", champions: ["Penumbra", "Primordium"] },
  { id: "melting_remnant", name: "Melting Remnant", origin: "mt1", color: "#6ca8f4", champions: ["Rector Flicker", "Little Fade"] },
  { id: "wurmkin", name: "Wurmkin", origin: "mt1", color: "#fd80f5", champions: ["Spine Chief", "Echowright"] }
];

// Sourced from the JSON you provided.
const CHAMPION_IMAGE_BY_NAME = {
  Fel: "https://static.wikitide.net/monstertrain2wiki/d/d3/PLR_Fel.png",
  Talos: "https://static.wikitide.net/monstertrain2wiki/7/75/PLR_Talos.png",
  "Lord Fenix": "https://static.wikitide.net/monstertrain2wiki/b/b5/PLR_Fenix.png",
  "Lady Gilda": "https://static.wikitide.net/monstertrain2wiki/5/5a/PLR_LadyGilda.png",
  Ekka: "https://static.wikitide.net/monstertrain2wiki/d/d3/PLR_Ekka.png",
  Arduhn: "https://static.wikitide.net/monstertrain2wiki/f/f8/PLR_Arduhn.png",
  "Bolete the Guillotine": "https://static.wikitide.net/monstertrain2wiki/2/25/PLR_BoletetheGuillotine.png",
  "Madame Lionsmane": "https://static.wikitide.net/monstertrain2wiki/b/b8/PLR_MadameLionsmane.png",
  Orechi: "https://static.wikitide.net/monstertrain2wiki/b/b9/PLR_Orechi.png",
  "Baron Grael": "https://static.wikitide.net/monstertrain2wiki/c/ce/PLR_BaronGrael.png",
  Herzal: "https://static.wikitide.net/monstertrain2wiki/4/49/PLR_Herzal.png",
  Heph: "https://static.wikitide.net/monstertrain2wiki/3/31/PLR_Heph_MT2.png",
  "Hornbreaker Prince": "https://static.wikitide.net/monstertrain2wiki/6/65/PLR_HornbreakerPrince.png",
  "Shardtail Queen": "https://static.wikitide.net/monstertrain2wiki/2/22/PLR_ShardtailQueen.png",
  "The Sentient": "https://static.wikitide.net/monstertrain2wiki/a/ab/PLR_TheSentient.png",
  Wyldenten: "https://static.wikitide.net/monstertrain2wiki/1/17/PLR_Wyldenten.png",
  "Tethys Titansbane": "https://static.wikitide.net/monstertrain2wiki/0/03/Tethys_Titansbane.webp",
  "Solgard the Martyr": "https://static.wikitide.net/monstertrain2wiki/4/46/Solgard_the_Martyr.webp",
  Penumbra: "https://static.wikitide.net/monstertrain2wiki/3/30/PLR_Penumbra.png",
  Primordium: "https://static.wikitide.net/monstertrain2wiki/e/e6/PLR_Primordium.png",
  "Rector Flicker": "https://static.wikitide.net/monstertrain2wiki/c/c0/PLR_RectorFlicker.png",
  "Little Fade": "https://static.wikitide.net/monstertrain2wiki/b/b1/PLR_LittleFade.png",
  "Spine Chief": "https://static.wikitide.net/monstertrain2wiki/1/17/PLR_SpineChief.png",
  Echowright: "https://static.wikitide.net/monstertrain2wiki/5/53/Echowright.webp"
};

// Sourced from the clan logo JSON you provided.
const CLAN_LOGO_BY_NAME = {
  Banished: "https://static.wikitide.net/monstertrain2wiki/e/ea/ClanBanished.png",
  Pyreborne: "https://static.wikitide.net/monstertrain2wiki/d/d5/ClanPyreborne.png",
  "Luna Coven": "https://static.wikitide.net/monstertrain2wiki/d/d1/ClanLunaCoven.png",
  Underlegion: "https://static.wikitide.net/monstertrain2wiki/c/cf/ClanUnderlegion.png",
  "Lazarus League": "https://static.wikitide.net/monstertrain2wiki/d/dc/ClanLazarusLeague.png",
  Railforged: "https://static.wikitide.net/monstertrain2wiki/a/a0/ClanRailforged.png",
  Hellhorned: "https://static.wikitide.net/monstertrain2wiki/a/a8/ClanHellhorned.png",
  Awoken: "https://static.wikitide.net/monstertrain2wiki/5/5e/ClanAwoken.png",
  "Stygian Guard": "https://static.wikitide.net/monstertrain2wiki/9/9b/ClanStygian.png",
  Umbra: "https://static.wikitide.net/monstertrain2wiki/5/53/ClanUmbra.png",
  "Melting Remnant": "https://static.wikitide.net/monstertrain2wiki/0/03/ClanMeltingRemnant.png",
  Wurmkin: "https://static.wikitide.net/monstertrain2wiki/b/b3/ClanWurmkin.png"
};

const trackerEl = document.getElementById("tracker");
const completionCountEl = document.getElementById("completion-count");
const completionPctEl = document.getElementById("completion-pct");
const randomResultEl = document.getElementById("random-result");
const randomizeBtn = document.getElementById("randomize");
const mainOriginSelect = document.getElementById("main-origin");
const allyOriginSelect = document.getElementById("ally-origin");
const profileCodeInput = document.getElementById("profile-code");
const loadProfileBtn = document.getElementById("load-profile");
const newProfileBtn = document.getElementById("new-profile");
const profileStatusEl = document.getElementById("profile-status");
const resetBtn = document.getElementById("reset");
const exportBtn = document.getElementById("export");
const importBtn = document.getElementById("import");
const importFileInput = document.getElementById("import-file");

let currentProfileCode = initializeProfileCode();
/** @type {Record<string, boolean>} */
let state = loadStateForProfile(currentProfileCode);

function championRows() {
  return CLANS.flatMap((clan) =>
    clan.champions.map((champion, championIndex) => ({
      clanId: clan.id,
      clanName: clan.name,
      champion,
      championIndex,
      color: clan.color,
      origin: clan.origin,
      imageUrl: CHAMPION_IMAGE_BY_NAME[champion] ?? ""
    }))
  );
}

function keyFor(row, allyClanId) {
  return `${row.clanId}:${row.championIndex}:${allyClanId}`;
}

function normalizeProfileCode(input) {
  const words = String(input)
    .toLowerCase()
    .trim()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

  if (words.length !== 3) return null;
  return words.join(" ");
}

function randomWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateProfileCode() {
  return `${randomWord(PROFILE_WORDS_A)} ${randomWord(PROFILE_WORDS_B)} ${randomWord(PROFILE_WORDS_C)}`;
}

function initializeProfileCode() {
  const existing = localStorage.getItem(ACTIVE_PROFILE_KEY);
  const normalizedExisting = normalizeProfileCode(existing || "");
  if (normalizedExisting) return normalizedExisting;

  const freshCode = generateProfileCode();
  localStorage.setItem(ACTIVE_PROFILE_KEY, freshCode);

  const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (legacyRaw) {
    localStorage.setItem(`${PROFILE_PREFIX}${freshCode}`, legacyRaw);
  }

  return freshCode;
}

function loadStateForProfile(profileCode) {
  try {
    const raw = localStorage.getItem(`${PROFILE_PREFIX}${profileCode}`);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(`${PROFILE_PREFIX}${currentProfileCode}`, JSON.stringify(state));
}

function setProfileStatus(message, isError = false) {
  profileStatusEl.textContent = message;
  profileStatusEl.style.color = isError ? "#ffc3cf" : "";
}

function switchProfile(profileCode) {
  currentProfileCode = profileCode;
  localStorage.setItem(ACTIVE_PROFILE_KEY, profileCode);
  state = loadStateForProfile(profileCode);
  profileCodeInput.value = profileCode;
  setProfileStatus(`Active code: ${profileCode}`);
  randomResultEl.textContent = "No run selected yet.";
  render();
}

function render() {
  trackerEl.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "grid";
  grid.style.setProperty("--clan-count", String(CLANS.length));

  const topLeft = document.createElement("div");
  topLeft.className = "cell name-cell header-cell";
  topLeft.textContent = "Champion";
  topLeft.style.backgroundColor = "#202a3a";
  grid.appendChild(topLeft);

  for (const clan of CLANS) {
    const header = document.createElement("div");
    header.className = "cell header-cell clan-header";
    header.style.backgroundColor = clan.color;
    header.style.color = "#09101b";

    const logoUrl = CLAN_LOGO_BY_NAME[clan.name];
    if (logoUrl) {
      const logo = document.createElement("img");
      logo.className = "clan-logo";
      logo.src = logoUrl;
      logo.alt = clan.name;
      logo.loading = "lazy";
      logo.referrerPolicy = "no-referrer";
      logo.onerror = () => {
        logo.remove();
        const fallbackName = document.createElement("span");
        fallbackName.textContent = clan.name;
        header.appendChild(fallbackName);
      };
      header.appendChild(logo);
    } else {
      const fallbackName = document.createElement("span");
      fallbackName.textContent = clan.name;
      header.appendChild(fallbackName);
    }

    grid.appendChild(header);
  }

  for (const row of championRows()) {
    const nameCell = document.createElement("div");
    nameCell.className = "cell name-cell";

    const avatar = document.createElement("img");
    avatar.className = "champion-avatar";
    avatar.src = row.imageUrl;
    avatar.alt = row.champion;
    avatar.loading = "lazy";
    avatar.referrerPolicy = "no-referrer";
    avatar.onerror = () => {
      avatar.style.visibility = "hidden";
    };

    const rowMeta = document.createElement("div");
    rowMeta.className = "row-meta";

    const championName = document.createElement("span");
    championName.className = "champion-name";
    championName.textContent = row.champion;

    const clanName = document.createElement("span");
    clanName.className = "clan-name";
    clanName.textContent = row.clanName;

    rowMeta.append(championName, clanName);
    nameCell.append(avatar, rowMeta);
    nameCell.style.backgroundColor = row.color;
    nameCell.style.color = "#09101b";
    grid.appendChild(nameCell);

    for (const allyClan of CLANS) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.style.backgroundColor = row.color;

      const toggle = document.createElement("button");
      toggle.className = "win-toggle";

      if (allyClan.id === row.clanId) {
        toggle.disabled = true;
      } else {
        const key = keyFor(row, allyClan.id);
        if (state[key]) toggle.classList.add("done");
        toggle.addEventListener("click", () => {
          state[key] = !state[key];
          if (!state[key]) delete state[key];
          saveState();
          renderStats();
          toggle.classList.toggle("done", Boolean(state[key]));
        });
      }

      cell.appendChild(toggle);
      grid.appendChild(cell);
    }
  }

  trackerEl.appendChild(grid);
  renderStats();
}

function computeTotals() {
  const rows = championRows();
  const total = rows.length * (CLANS.length - 1);

  let done = 0;
  for (const row of rows) {
    for (const allyClan of CLANS) {
      if (allyClan.id === row.clanId) continue;
      if (state[keyFor(row, allyClan.id)]) done += 1;
    }
  }

  return { done, total };
}

function renderStats() {
  const { done, total } = computeTotals();
  const pct = total === 0 ? 0 : (done / total) * 100;

  completionCountEl.textContent = `${done} / ${total}`;
  completionPctEl.textContent = `${pct.toFixed(2)}%`;
}

function originMatches(filter, origin) {
  return filter === "both" || filter === origin;
}

function randomizeNextRun() {
  const mainFilter = mainOriginSelect.value;
  const allyFilter = allyOriginSelect.value;
  const rows = championRows();
  const incomplete = [];
  const all = [];

  for (const row of rows) {
    if (!originMatches(mainFilter, row.origin)) continue;

    for (const allyClan of CLANS) {
      if (allyClan.id === row.clanId) continue;
      if (!originMatches(allyFilter, allyClan.origin)) continue;

      const entry = { row, allyClan };
      all.push(entry);
      if (!state[keyFor(row, allyClan.id)]) incomplete.push(entry);
    }
  }

  if (!all.length) {
    randomResultEl.textContent = "No matching runs for current MT1/MT2 filters.";
    return;
  }

  const pool = incomplete.length ? incomplete : all;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  const doneMark = state[keyFor(pick.row, pick.allyClan.id)] ? " (already complete)" : "";

  randomResultEl.textContent = `${pick.row.champion} (${pick.row.origin.toUpperCase()}) + ${pick.allyClan.name} (${pick.allyClan.origin.toUpperCase()})${doneMark}`;
}

function download(filename, text) {
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

randomizeBtn.addEventListener("click", randomizeNextRun);

loadProfileBtn.addEventListener("click", () => {
  const normalized = normalizeProfileCode(profileCodeInput.value);
  if (!normalized) {
    setProfileStatus("Use exactly 3 words (letters/numbers).", true);
    return;
  }

  switchProfile(normalized);
});

newProfileBtn.addEventListener("click", () => {
  const code = generateProfileCode();
  switchProfile(code);
});

profileCodeInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  loadProfileBtn.click();
});

resetBtn.addEventListener("click", () => {
  if (!window.confirm(`Clear all tracked wins for code '${currentProfileCode}'?`)) return;
  state = {};
  saveState();
  randomResultEl.textContent = "No run selected yet.";
  render();
});

exportBtn.addEventListener("click", () => {
  const payload = {
    version: 2,
    profileCode: currentProfileCode,
    exportedAt: new Date().toISOString(),
    state
  };
  download(`mt2-completion-${currentProfileCode.replace(/\s+/g, "-")}.json`, JSON.stringify(payload, null, 2));
});

importBtn.addEventListener("click", () => importFileInput.click());

importFileInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    if (typeof parsed !== "object" || !parsed || typeof parsed.state !== "object") {
      throw new Error("Invalid save format.");
    }

    state = parsed.state;
    saveState();
    randomResultEl.textContent = "Save imported into active 3-word code.";
    render();
  } catch (error) {
    randomResultEl.textContent = `Import failed: ${error.message}`;
  } finally {
    importFileInput.value = "";
  }
});

switchProfile(currentProfileCode);
