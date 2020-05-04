const load = (type = []) => {
  chrome.storage.local.get(type, (result) => {
    Object.keys(result).forEach((e) => {
      const field = document.getElementById(e);
      field.value = result[e];
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  load(['prefix','postfix']);

  const checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', () => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, async tabs => {
      const url = tabs[0].url;
      const prefix = document.getElementById('prefix')?.value;
      const postfix = document.getElementById('postfix')?.value;
      await navigator.clipboard.writeText(`${prefix} ${url} ${postfix}`);
    });
  }, false);

  const saveButton = document.getElementById('save');
  saveButton.addEventListener('click', () => {
    const prefix = document.getElementById('prefix')?.value;
    const postfix = document.getElementById('postfix')?.value;
    chrome.storage.local.set({prefix, postfix});
  }, false);
}, false);
