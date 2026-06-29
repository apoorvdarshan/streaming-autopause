const defaults = { enabled: true, autoResume: true };

const enabledEl = document.getElementById("enabled");
const autoResumeEl = document.getElementById("autoResume");

chrome.storage.sync.get(defaults, (s) => {
  enabledEl.checked = s.enabled;
  autoResumeEl.checked = s.autoResume;
});

enabledEl.addEventListener("change", () =>
  chrome.storage.sync.set({ enabled: enabledEl.checked })
);
autoResumeEl.addEventListener("change", () =>
  chrome.storage.sync.set({ autoResume: autoResumeEl.checked })
);
