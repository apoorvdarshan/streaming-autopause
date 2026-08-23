# Privacy Policy — Streaming Auto Pause/Resume

**Effective date: July 4, 2026**

## The short version

This extension collects **no data**. Nothing you do is recorded, stored, or
sent anywhere. There are no analytics, no tracking, no ads, and no external
servers.

## What the extension does

It pauses the video playing on Netflix or Prime Video when the tab or window
loses focus, and resumes it when focus returns. All of this happens locally in
your browser, on the page itself.

## What is stored

Exactly two settings, saved with `chrome.storage.sync`:

| Key | What it means |
|---|---|
| `enabled` | master on/off switch |
| `autoResume` | whether to resume playback when you return |

These live in your browser profile (and sync across your devices if you're
signed into Chrome — that syncing is handled by Google, not by this
extension). They never leave your browser otherwise, and the developer has no
access to them.

## What is NOT collected

- No personal information
- No browsing or watch history
- No page content — the extension never reads titles, subtitles, or anything
  else on the page; it only calls play/pause on the video player
- No analytics, telemetry, or crash reports
- No cookies

## Where it runs

Only on `netflix.com`, `primevideo.com`, and `amazon.com/gp/video/*` pages,
as declared in the extension's manifest. It does not run on any other site.

## Third parties

None. The extension makes no network requests and includes no third-party
code or services.

## Changes

Any change to this policy will be committed to this repository, where the
full history is public.

## Contact

Questions or concerns: open an issue at
<https://github.com/aopv/streaming-autopause/issues>
