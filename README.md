# Streaming Auto Pause/Resume

[![Available in the Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Install-e50914?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/streaming-auto-pauseresum/nafnjeielmlkeinkmbfppfecpfebgcbl)

A single Chrome extension that pauses **Netflix** and **Prime Video** when you
switch away (other app, macOS desktop/Space, tab, or screen lock) and resumes
when you come back. It only resumes a video **it** paused, so it won't override a
pause you made on purpose.

## Install

**[Add it from the Chrome Web Store →](https://chromewebstore.google.com/detail/streaming-auto-pauseresum/nafnjeielmlkeinkmbfppfecpfebgcbl)**

Then open Netflix or Prime Video and play something. Switch apps/desktops — it
pauses; come back — it resumes.

## Install (load unpacked, for development)

1. Open Chrome → go to `chrome://extensions`.
2. Turn on **Developer mode** (top-right toggle).
3. Click **Load unpacked**.
4. Select this folder.
5. Open Netflix or Prime Video and play something. Switch apps/desktops — it
   pauses; come back — it resumes.

## Settings

Click the extension icon (puzzle-piece menu → pin it) for two toggles:

- **Enabled** — master on/off.
- **Auto-resume when I return** — turn off if you want it to pause only.

After changing settings, reload the video tab.

## Where it runs

- Netflix — `netflix.com`
- Prime Video — `primevideo.com` and `amazon.com/gp/video/*`

If you watch Prime Video on a regional Amazon domain (e.g. `amazon.in`,
`amazon.co.uk`), add it to both `host_permissions` and
`content_scripts.matches` in `manifest.json`, e.g.:

```json
"*://*.amazon.in/gp/video/*"
```

Adding more services (Disney+, YouTube, etc.) is just two more match patterns —
the pause/resume logic is generic and works on any HTML5 `<video>`.

## Notes

- The macOS *Space swipe* is caught via the window `blur` event, which is more
  reliable than the page-visibility signal most extensions rely on. If a swipe
  ever doesn't pause, `Cmd + M` (minimize) always works.
- It picks the currently-playing (or largest) `<video>`, to avoid grabbing tiny
  autoplay preview clips on browse pages.
- Icons live in `icons/` (16–128px), generated from a single logo image.

## License

[MIT](LICENSE)

## Sponsor

If this is useful to you, you can support development:

- GitHub Sponsors: https://github.com/sponsors/apoorvdarshan
- Ko-fi: https://ko-fi.com/apoorvdarshan
