const load = (type = []) => {
  chrome.storage.local.get(type, (result) => {
    Object.keys(result).forEach((e) => {
      const field = document.getElementById(e);
      field.value = result[e];
    });
  });
};

const handleCopy = () => {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, async tabs => {
    const url = tabs[0].url;
    const prefix = document.getElementById('prefix')?.value;
    const postfix = document.getElementById('postfix')?.value;
    await navigator.clipboard.writeText(`${prefix} ${url} ${postfix}`);
  });
};

const handleSave = () => {
  const prefix = document.getElementById('prefix')?.value;
  const postfix = document.getElementById('postfix')?.value;
  chrome.storage.local.set({prefix, postfix});
};

const initPopup = () => {
  load(['prefix','postfix']);

  const copyButton = document.getElementById('copyButton');
  copyButton.addEventListener('click', handleCopy, false);

  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', handleSave, false);
};

document.addEventListener('DOMContentLoaded', initPopup, false);
