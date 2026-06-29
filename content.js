// Netflix Auto Pause/Resume
// Pauses the video when the window loses focus / tab is hidden / device locks,
// and resumes ONLY what this extension paused (so it won't override a manual pause).

(() => {
  "use strict";

  // Did *we* pause it? Used so we never resume a pause the user made on purpose.
  let pausedByExt = false;
  // Guard against rapid blur/focus storms (e.g. switching through Spaces).
  let lastAction = 0;

  const settings = { enabled: true, autoResume: true };

  // Load saved settings, then keep them in sync.
  try {
    chrome.storage.sync.get(settings, (saved) => Object.assign(settings, saved));
    chrome.storage.onChanged.addListener((changes) => {
      for (const key in changes) settings[key] = changes[key].newValue;
    });
  } catch (_) {
    // storage may be unavailable in some frames; defaults are fine.
  }

  const getVideo = () => document.querySelector("video");

  const isPlaying = (v) =>
    v && !v.paused && !v.ended && v.readyState > 2 && v.currentTime > 0;

  function pause() {
    const v = getVideo();
    if (v && isPlaying(v)) {
      v.pause();
      pausedByExt = true;
    }
  }

  function resume() {
    const v = getVideo();
    if (v && pausedByExt && v.paused) {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
    pausedByExt = false;
  }

  function onAway() {
    if (!settings.enabled) return;
    lastAction = Date.now();
    pause();
  }

  function onBack() {
    if (!settings.enabled) return;
    lastAction = Date.now();
    if (settings.autoResume) resume();
    else pausedByExt = false; // forget the pause; user resumes manually
  }

  // Tab hidden / shown (covers tab switches and window minimize, and on
  // macOS often fires on lock too).
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) onAway();
    else onBack();
  });

  // Window focus changes — THIS is what catches Cmd+Tab to another app and a
  // macOS desktop/Space swipe, which visibility alone usually misses.
  window.addEventListener("blur", onAway);
  window.addEventListener("focus", onBack);

  // Navigating away within the SPA / closing.
  window.addEventListener("pagehide", () => {
    if (settings.enabled) pause();
  });
})();
