const defaults = { enabled: true, autoResume: true };

const enabledEl = document.getElementById("enabled");
const autoResumeEl = document.getElementById("autoResume");
const statusText = document.getElementById("statusText");

const storage =
  typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync;

function render() {
  const on = enabledEl.checked;
  document.body.classList.toggle("off", !on);
  statusText.textContent = !on
    ? "standby · not watching"
    : autoResumeEl.checked
      ? "armed · pause + resume"
      : "armed · pause only";
}

function save() {
  if (storage)
    storage.set({ enabled: enabledEl.checked, autoResume: autoResumeEl.checked });
  render();
}

if (storage) {
  storage.get(defaults, (s) => {
    enabledEl.checked = s.enabled;
    autoResumeEl.checked = s.autoResume;
    render();
  });
} else {
  // Previewing popup.html outside the extension; show defaults.
  enabledEl.checked = defaults.enabled;
  autoResumeEl.checked = defaults.autoResume;
  render();
}

enabledEl.addEventListener("change", save);
autoResumeEl.addEventListener("change", save);
