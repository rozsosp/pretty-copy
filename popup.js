document.addEventListener('DOMContentLoaded', () => {
  const checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', () => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, async tabs => {
      const url = tabs[0].url;
      const prefix = document.getElementById('prefix')?.value;
      const postfix = document.getElementById('postfix')?.value;
      await navigator.clipboard.writeText(`${prefix} ${url} ${postfix}`);
    });
  }, false);
}, false);
