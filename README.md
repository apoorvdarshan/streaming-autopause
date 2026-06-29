# Netflix Auto Pause/Resume

Pauses Netflix when you switch away (other app, macOS desktop/Space, tab, or
screen lock) and resumes when you come back. It only resumes a video **it**
paused, so it won't override a pause you made on purpose.

## Install (load unpacked)

1. Open Chrome → go to `chrome://extensions`.
2. Turn on **Developer mode** (top-right toggle).
3. Click **Load unpacked**.
4. Select this folder: `netflix-autopause`.
5. Open Netflix and play something. Switch apps/desktops — it pauses; come
   back — it resumes.

## Settings

Click the extension icon (puzzle-piece menu → pin it) for two toggles:

- **Enabled** — master on/off.
- **Auto-resume when I return** — turn off if you want it to pause only.

After changing settings, reload the Netflix tab.

## Notes

- The macOS *Space swipe* is caught via the window `blur` event, which is more
  reliable than the page-visibility signal most extensions rely on. If a swipe
  ever doesn't pause, `Cmd + M` (minimize) always works.
- No icons are bundled; Chrome shows a default icon. That's fine for personal
  load-unpacked use.
