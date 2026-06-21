# 🌊 Ocean Voyage

A kid-friendly browser game inspired by Polynesian seafaring. Sail your outrigger canoe across a bright, painted ocean — collect treasures, befriend sea animals, complete Grandma Moana's quests, paint your boat, defeat a giant crab, and watch the world cycle from sunny day to starry night.

Built for a 4-year-old who's still learning to read, with on-screen joystick, voice narration, magnet pickup, and a story that pulls her through every system.

---

## ▶️ How to play

No install, no build step. Just open `index.html` in any modern desktop or mobile browser.

```
open index.html
```

Tap **Play!** on the start screen. Audio will start on the first tap (required by browser autoplay policies).

> Tested on Chrome, Safari, Firefox, and Edge — desktop and mobile.

---

## 🕹️ Controls

Three control schemes work simultaneously — pick whichever is easiest:

| Input | Action |
|---|---|
| **🕹️ On-screen joystick** (bottom-left) | Drag to sail. Always visible. Proportional throttle. |
| **Tap / click the water** | Sail to that spot. Boat auto-paths there. |
| **Arrow keys / WASD** | Sail (desktop). |
| **Press F (or tap a creature)** | Befriend nearby dolphin or turtle |
| **Tap an island icon** (right side) | Auto-sail to that island with land-avoidance |
| **Tap Grandma Moana** | Replay the current quest prompt |
| **Tap the 📔 button** (top-right) | Open the Treasure Book |
| **Tap the 🔊 button** (top-right) | Mute / unmute music + voice |

---

## 🌟 Features

### 🌊 World

- **2.5D oblique projection** — water foreshortens into the distance like a diorama
- **3600 × 2800 world** with smooth camera follow and ahead-of-boat framing
- **Four islands** to explore — Home, Reef Atoll, Volcano, Pearl Atoll
- **Polynesian NPC ships** sail trade routes between islands and greet you with voiced Aloha, Talofa, Mālō, Kia Ora, Bula, and Iorana
- **Wild dolphins and sea turtles** wander the ocean

### ☀️ Atmosphere

- **3-minute day / night cycle** with sun, moon, stars, and dusk/dawn warm-tone blends
- **Gentle weather** — clear → cloudy → rain → 🌈 rainbow → repeat (no scary storms)
- **Rainbow encounters** — sail through one for +20g + voiced celebration
- **Floating driftwood** drifts in the open ocean with small gold bonuses
- **Warm lantern aura** around islands at night

### 👵 Quests (Grandma Moana)

A friendly grandma stands on Home Island, waving with a hibiscus in her hair. She speaks all 13 quests aloud in a slightly different voice. Tap her any time to repeat the current prompt.

The chain gently introduces every system:

```
🐚 Find 3 shells              💰 Sell at home          ⭐ Buy an upgrade
🌟 Find 4 starfish            🐬 Befriend a friend     🐠 Visit Reef Atoll
🪸 Find 4 corals              🎮 Play a game           🦪 Find 3 pearls
✨ Find rare treasure         🐢 Both pets             🌋 Visit Volcano
                              💎 Visit Pearl Atoll
```

Each completion = confetti from the boat, coin shower to the HUD, voiced "Mahalo!" or similar, +5 to +40 gold, and the next quest announces itself.

### 🐚 Collectibles

| Item | Value | Notes |
|---|---|---|
| 🐚 Shell | 3g | Common |
| 🌟 Starfish | 6g | Common |
| 🪸 Coral | 8g | Uncommon |
| 🦪 Pearl | 12g | Uncommon |
| ✨ Golden Conch | **50g** | Rare — glows |
| 💎 Treasure Chest | **200g** | Rare — pulsing aura |

**Magnet pickup**: items get sucked toward the boat from ~130px away. No precise driving required.

### 🐬 Sea-creature friends

Get close to a wild dolphin or turtle and tap them (or press F) to befriend. They follow your boat forever with cute animations:

- 🐬 **Dolphin** — +20% boat speed
- 🐢 **Sea Turtle** — +2 cargo slots

### ⭐ Boat upgrades

Bought at any island shop:

- **Cargo Hold** — +2 slots per level
- **Faster Sail** — +25% speed per level (unlocks 🌋 Volcano at Lv 2)
- **Stronger Hull** — bigger, sturdier boat
- **Lucky Net** — wider pickup range (unlocks 💎 Pearl Atoll at Lv 2)

Prices scale 1.65× per level. First upgrades cost just 10–20g so early dopamine arrives quickly.

### 🎮 Mini-games

- **🥥 Coconut Catch** (Home Island) — basket catches falling coconuts. Avoid bombs, snag golden ones for big gold. 30 seconds.
- **🎣 Fishing** (Reef Atoll) — click when the marker hits the green zone. 6 rounds with a shrinking target.

### 🦀 Crusher the Crab (boss)

Every ~70 seconds, Crusher appears at a random ocean spot. He's a goofy giant crab holding a treasure chest, with eyes that track your boat.

- Sail **3 full circles** around him inside the dashed yellow ring
- Each lap lights up a gold star above his head
- After 3 laps he gets dizzy, spins, and sinks
- Rewards: **+80 gold**, coin shower, confetti, a real rare item drops where he was
- Off-screen 🦀 arrow at the screen edge always points to him

### 🎨 Boat customization

From the Home Island shop, tap **🎨 Paint Boat**:

- **6 hull colors** — Red, Blue, Green, Purple, Yellow, Pink
- **6 sail colors** — Cream, Sunshine, Peach, Lavender, Mint, Sky
- **5 sail patterns** — ☀️ Sun · ⭐ Star · 🌺 Flower · 🐠 Fish · 🐢 Turtle
- **4 captains** — 👧 Pua · 👦 Kai · 🧭 Captain Lani · 🧜 Mira (mermaid)

Live preview, saves instantly, captain names voiced on tap.

### 📔 Treasure Book

Tap the 📔 button (top-right) any time. Four tabs:

- 🐚 **Items** — every collectible (with lifetime count or "???" silhouette)
- 🐬 **Friends** — befriended creatures
- 🗺️ **Islands** — passport stamps for visits
- 🏆 **Badges** — **31 achievements** across first-collects, milestones, friends, exploration, gold, upgrades, mini-games, boss, weather, and night

Tap any cell to hear its name spoken aloud — perfect for non-readers.

### 🎉 Juice (feedback polish)

Every action feels chunky:

- **Floating "+N" popups** at the pickup point (big yellow for rare/quest, white for normal)
- **Coin shower** flying from the boat to the HUD on every sale
- **Item leap** — picked-up sprites jump and scale before fading
- **Screen shake** scaled by importance (small tap on pickup, big thump on quest complete)
- **Camera punch** scale-pulse on upgrades, befriends, rare items, quests
- **Streak system** — 3/5/8/12 pickups in a row pay 3/8/15/30g bonuses with "STREAK!" banners
- **Confetti** on quest complete and achievement unlocks
- **Pulsing waypoint ring** marks the next sensible target (quest objective by default)

### 🔊 Audio

Everything procedural — no audio files needed:

- **Background music** — ukulele + bass + soft drum in a tropical I–vi–IV–V loop
- **SFX** — pickup bell, sell cha-ching, upgrade fanfare, rare-item chime, bonk, splash, dolphin/turtle squeak, cargo-full warning, unlock fanfare, button tap
- **Voice greetings** via Web Speech API — Grandma speaks quest prompts, NPC ships say their language's greeting, pickups react with "Yay!" / "Treasure!", and rainbow says "Rainbow!"
- **🔊 mute button** silences everything

### 💾 Save / load

Progress auto-saves to `localStorage` (debounced 200 ms). Persists:

- Gold, upgrade levels, befriended pets
- Unlocked + visited islands
- Lifetime item totals, debris collected, rainbow count, bosses defeated
- Quest index and progress, all 31 achievement unlocks
- Tutorial seen flag, mute preference
- Custom boat hull / sail / pattern / captain

**Start over**: tap the small "start over" link on the start screen to clear the save and reload fresh.

---

## 🚀 First play (recommended sit-with-her flow)

1. Tap **Play!** — music starts, tutorial fires
2. A yellow arrow floats above the boat pointing at the nearest shell. Voice says **"Find a shell!"**
3. Pick it up — arrow swings to point at Home Island. Voice: **"Now sail home!"**
4. Arrive at home — shop opens with a 🎨 Paint Boat option and the upgrade list. Voice: **"Buy something new!"**
5. Buy any upgrade for 10g (after a couple of sells you'll have enough) — tutorial finishes
6. **Grandma Moana** starts giving quests. Just follow the floating prompts.
7. After a few sessions, Crusher the Crab will appear — sail circles around him.
8. Tap **📔** anytime to admire her collection growing.

---

## 🛠️ Technical

- Single `index.html` — zero dependencies, zero build step
- Pure vanilla JavaScript + Canvas 2D
- Procedural audio via Web Audio API
- Voice via Web Speech API (graceful fallback if unsupported)
- Save via `localStorage`
- Touch-first with full keyboard/mouse parity
- ~3400 lines, well-commented

Tested on iPad, iPhone, Android phones, and desktop browsers.

---

## 📜 License

Free for personal and educational use. Share with your kids and grandkids. 🌺
