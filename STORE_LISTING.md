# Chrome Web Store — listing copy

Copy-paste source for the [developer dashboard](https://chrome.google.com/webstore/devconsole).
Every field below maps to a dashboard field, in the order the dashboard shows them.

Item ID: `nafnjeielmlkeinkmbfppfecpfebgcbl`

Live listing: <https://chromewebstore.google.com/detail/streaming-auto-pauseresum/nafnjeielmlkeinkmbfppfecpfebgcbl>

---

## Build → Package

Upload: `dist/streaming-autopause-2.0.1.zip`

The repo root is the extension — rebuild after any change:

```sh
mkdir -p dist && rm -f dist/streaming-autopause-2.0.1.zip && \
zip -qr dist/streaming-autopause-2.0.1.zip \
  manifest.json content.js popup.html popup.js icons -x '.*'
```

For updates: bump `version` in `manifest.json` first (the store rejects
re-uploads of an existing version number), rename the zip to match.

Fields on the Package tab that need no action:

| Field | Meaning |
|---|---|
| Version / Item type / Permissions | derived automatically from the uploaded zip |
| CRX file / Public key | Google signs and packages the zip itself; nothing to provide |
| Verified CRX uploads (Opt in) | optional supply-chain feature — skip; it requires signing every future upload with your own key |

---

## Access → Test instructions (optional, speeds up review)

```
1. Load the extension and open netflix.com or primevideo.com (requires an account with an active subscription).
2. Play any title.
3. Switch to another app, another tab, or another desktop/Space — the video pauses immediately.
4. Come back — it resumes from where it paused.
5. Pause the video yourself, switch away and back — it stays paused (the extension only resumes pauses it made).
6. The toolbar popup has two toggles: a master on/off and "Auto-resume when I return" (off = pause only).
```

---

## Store listing tab

### Title (from package — edit in `manifest.json`, not the dashboard)

```
Streaming Auto Pause/Resume
```

### Summary (from package — edit in `manifest.json`, max 132 chars)

```
Pauses Netflix & Prime Video when you switch away (other app, desktop/Space, tab, or lock) and resumes when you come back.
```

### Description

```
Never miss a scene again. This extension pauses Netflix and Prime Video the moment you switch away — to another app, another tab, another desktop/Space, or when you lock the screen — and resumes playback when you come back.

It only resumes a pause it made itself. If you paused the video on purpose, it stays paused.

HOW IT WORKS
The extension watches the window's focus and the tab's visibility. When the page loses focus, it pauses the video playing on the page; when focus returns, it resumes it. It targets the main player (not the muted autoplay previews on browse pages) and works with the platforms' own HTML5 players — no hacks, no injected players.

PRIVACY
No data is collected. No analytics, no tracking, no external servers. Your two settings stay in your browser (synced with your Chrome profile), and the extension only runs on netflix.com, primevideo.com, and amazon.com video pages.

FEATURES
• Pauses on app switch, tab switch, desktop/Space swipe, window minimize, and screen lock
• Auto-resumes when you return — or turn resume off for pause-only mode
• Never overrides a pause you made yourself
• Master on/off toggle in the popup, changes apply instantly
• Works on Netflix and Prime Video
• Open source: github.com/apoorvdarshan/streaming-autopause
```

### Category

```
Entertainment
```

### Language

```
English
```

### Graphic assets

| Asset | File | Notes |
|---|---|---|
| Store icon | `icons/icon128.png` | 128×128; Google prefers 96×96 artwork + 16px transparent padding — the full-bleed dark square is usually accepted, but keep the padded variant in mind if flagged |
| Screenshot 1 (hero, upload first) | `store-assets/screenshot-1-hero-1280x800.png` | branded card: logo + tagline + the popup |
| Screenshot 2 (in context) | — not made yet (optional) | 1280×800 PNG; popup open over a paused Netflix player |
| Small promo tile (optional) | — not made yet | 440×280 PNG, improves discovery placement |

### Global assets

| Field | Value |
|---|---|
| Global promo video (YouTube URL) | leave empty |
| Marquee promo tile (1400×560) | leave empty (optional; only used if featured) |

### Additional fields

| Field | Value |
|---|---|
| Official URL | `https://apoorvdarshan.com` — use once ownership is verified in Google Search Console. |
| Homepage URL | `https://apoorvdarshan.com` |
| Support URL | `https://github.com/apoorvdarshan/streaming-autopause/issues` |
| Mature content | leave **unchecked** — no sexual content, strong language, violence, or drugs/alcohol focus |
| Item support visibility | either is fine; ON shows a support tab pointing at the URLs above |

---

## Privacy tab

### Single purpose

```
Pauses video playback on Netflix and Prime Video when the tab or window loses focus, and resumes it when focus returns.
```

### Permission justification — `storage`

```
Saves the user's two settings: the on/off state and whether to auto-resume on return. Synced via chrome.storage.sync so settings follow their Chrome profile.
```

### Permission justification — host permission (netflix.com, primevideo.com, amazon.com/gp/video)

```
The extension needs to run on Netflix and Prime Video pages to pause and resume the HTML5 video player already on the page when the window loses or regains focus. It does not run anywhere else, and it does not read or transmit any page content.
```

### Are you using remote code?

Select **"No, I am not using Remote code"** — all JS ships inside the package;
there are no external `<script>` tags, remote modules, or `eval` of fetched code.
Leave the justification box empty.

### Data usage

"What user data do you plan to collect" — leave **all nine checkboxes
unchecked** (PII, health, financial, authentication, personal communications,
location, web history, user activity, website content). The extension collects
none of them; nothing is stored or transmitted beyond the two settings above.

Certify all three disclosures:

- [x] I do not sell or transfer user data to third parties, outside of the approved use cases
- [x] I do not use or transfer user data for purposes that are unrelated to my item's single purpose
- [x] I do not use or transfer user data to determine creditworthiness or for lending purposes

### Privacy policy URL

```
https://github.com/apoorvdarshan/streaming-autopause/blob/master/PRIVACY.md
```

---

## Distribution tab

| Field | Value |
|---|---|
| Payments | **Free of charge** (no in-app purchases) |
| Visibility | **Public** |
| Distribution | **All regions** |

---

## Submission checklist

- [x] `PRIVACY.md` written and pushed
- [x] Hero screenshot made (`store-assets/screenshot-1-hero-1280x800.png`)
- [x] Zip built and uploaded (Package tab shows title + summary from manifest)
- [x] Description, category, language filled
- [x] Store icon uploaded (128×128)
- [x] Screenshots uploaded, hero first
- [x] Privacy tab: purpose, 2 justifications, "no data collected", policy URL
- [x] Distribution: public, all regions
- [x] "Submit for review" (first review typically takes a few days)
- [x] **Approved and live** — <https://chromewebstore.google.com/detail/streaming-auto-pauseresum/nafnjeielmlkeinkmbfppfecpfebgcbl>

### If a reviewer objects to the name

The title contains no brand names, so it's safe. The summary and description
mention Netflix and Prime Video descriptively ("works on X"), which Google's
branding guidelines allow. If flagged anyway, soften the summary to
"streaming sites" and keep the brand names only in the description body.
